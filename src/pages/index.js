import { useState, useEffect } from 'react';
import Head from 'next/head';
import { LineGraph } from '../components';
import { FetchFibEval } from '../hooks';
import { fibData } from '../helpers';

export default function Home() {
  const { data, error } = FetchFibEval();
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    if (data && dataSet.length === 0) {
      const dataSets = fibData(data);
      setDataSet(dataSets.dataSets);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);


  return (
    <div className="w-full h-screen">
      <Head>
        <title>Hairy Turtle</title>
        <meta name="description" content="Created by Anthony Tropeano / iiTONELOC" />
        <link rel="icon" href="/favicon.ico" />
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
          {error && <p>{error.message}</p>}
          {dataSet.length > 0 ? <LineGraph dataSet={dataSet} /> : <p>Loading...</p>}
        </section>
      </main>
    </div>
  );
}

