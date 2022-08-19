import { useState, useEffect } from 'react';
import { Layout, LineGraph, Head, LoadingSpinner } from '../components';
import { genFibTimeComplexityData } from '../../utils/API/fibonacci/helpers/genFibTimeComplexityData';


export default function Fibonacci(props) {
    const [isMounted, setIsMounted] = useState(false);
    const [dataSet, setDataSet] = useState([]);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isMounted && dataSet.length === 0) {
            const { dataSets } = genFibTimeComplexityData(props.data);
            setDataSet(dataSets);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted]);


    return (
        <main className='w-full h-screen overflow-y-auto overflow-x-hidden'>
            <Head
                title={'Fibonacci Evaluation JavaScript Vs. Python'}
                description={'Which language is faster for finding the nth number? Python or JavaScript?'}
            />

            <Layout>
                <section className='flex flex-col min-h-[83%] 2xl:min-h-[89%] justify-center items-center p-3  bg-black'>
                    {props?.error && <p>{error.message}</p>}

                    {isMounted && dataSet.length > 0 ? <LineGraph dataSet={dataSet} /> : <LoadingSpinner />}
                </section>
            </Layout>
        </main>
    );
}

export async function getServerSideProps() {
    const { FetchFromAPI } = await import('../../utils/API/FetchFromAPI');
    const { data, error } = await FetchFromAPI('algos/fibonacci/full-comparison');

    return {
        props: { error, data: data.data }
    };
}
