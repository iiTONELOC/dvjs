import { useState, useEffect } from 'react';
import Head from 'next/head';
import { LineGraph } from '../components';
import { genFibTimeComplexityData } from '../../utils/API/fibonacci/helpers/genFibTimeComplexityData';


export default function Home(props) {
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
    <div className="w-full h-screen">
      <Head>
        <title>Hairy Turtle</title>
        <meta name="description" content="Created by Anthony Tropeano / iiTONELOC" />
        <link rel="icon" type="image/png" href="icon.png" />
      </Head>

      <main className='h-full'>
        <header className='h-1/3 flex flex-col justify-center items-center gap-y-8'>
          <h1 className={'text-7xl'}>
            Welcome to the <span className='text-blue-500 font-semibold'>Hairy Turtle!</span>
          </h1>
          <p className={'text-3xl font-medium text-pink-600'}>
            A JavaScript and Python Speed Comparison App
          </p>
          <p className={"text-3xl"}>
            Which one do <em>you</em> think is faster?
          </p>
        </header>

        <section className='flex flex-col h-2/3 justify-center items-center p-3 text-red-600 bg-black'>
          {props?.error && <p>{error.message}</p>}
          {isMounted && dataSet.length > 0 ? <LineGraph dataSet={dataSet} /> : <p>Loading...</p>}
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const { FetchFromAPI } = await import('../../utils/API/FetchFromAPI');
  const { data, error } = await FetchFromAPI('algos/fibonacci/full-comparison');

  return {
    props: { error, data: data.data }
  };
}

