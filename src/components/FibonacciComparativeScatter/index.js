import { useState, useEffect } from 'react';
import Graph from '../Graph';
import { PlotViewButtons } from './buttons';
import { defaultDataSets } from './defaults';
import { dataFetchController } from './dataController';
import { genFibTimeComplexityData } from '../../../utils/API/fibonacci/helpers/genFibTimeComplexityData';

export default function FibonacciComparativeScatter({ dataSet }) {
    // update the default dataSet with the dataSet provided from getServerSideProps
    defaultDataSets.recursive.data = dataSet;
    /*
        STATE
    */
    const [isMounted, setIsMounted] = useState(null);
    // set the default dataSet into state
    const [data, setData] = useState(defaultDataSets);
    // passed to the Graph component to determine when it has finished loading
    const [plotLoaded, setPlotLoaded] = useState(false);
    // tracks the current view of the plot, defaults to the recursive view
    const [currentDataSet, setCurrentDataSet] = useState(defaultDataSets.recursive);


    /*
        HANDLERS
    */

    // updates the plot's state so we know when the data has been loaded
    const handlePlotLoaded = stateToSet => setPlotLoaded(stateToSet);

    // updates the state data object with the dataSet provided
    const handleSetData = (requestedDataSet, dataToSet) => {
        setData({
            ...data, [requestedDataSet]: {
                ...data[requestedDataSet],
                data: dataToSet
            }
        });
        const dataCopy = { ...data };
        dataCopy[requestedDataSet].data = dataToSet;
        setCurrentDataSet(dataCopy[requestedDataSet]);
    };

    const handleDataSetChange = async _dataSet => {
        const dataToSet = data[_dataSet];
        if (dataToSet.data.length === 0) {
            const update = await dataFetchController(_dataSet);
            // update the data object with the new data
            update?.data && !update?.error && handleSetData(_dataSet,
                genFibTimeComplexityData(update.data).dataSets);
        } else {
            setCurrentDataSet(dataToSet);
        }
    };

    /*
        EFFECTS
    */

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        if (isMounted && plotLoaded) {
            document
                .getElementById('fib-plotter')
                .scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
        }
    }, [isMounted, plotLoaded]);

    if (!isMounted) return null;

    /*
        RENDER
    */

    return (
        <section className='w-full lg:w-5/6 xl:w-4/6 2xl:w-3/6 h-full p-1  rounded-lg tracking-wide'>
            {isMounted && plotLoaded && (
                <>
                    <header className='w-full bg-[#0d0d0d] rounded-t-lg p-2 mb-[5px]'>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-zinc-300/95'>Fibonacci Evaluation </h1>
                    </header>
                </>
            )
            }
            <span id='fib-plotter' className='w-full h-auto'>
                <Graph
                    {...currentDataSet}
                    plotLoaded={handlePlotLoaded}
                />
            </span>
            {isMounted && plotLoaded && (
                <PlotViewButtons
                    callback={handleDataSetChange}
                    activeView={currentDataSet.title}
                />
            )
            }
        </section>
    );
}
