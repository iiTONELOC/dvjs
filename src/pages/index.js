import Link from 'next/link';
import { Footer, Head } from '../components';
import { NavLinks } from '../components/Navbar';

const minCols = 2;
const maxCols = 3;

const numberOfCols = NavLinks.length % minCols === 0 ? minCols : maxCols;
const gapAndPadding = numberOfCols === 1 ? 'px-3' : 'gap-3 p-3';

function NavCards() {
  return (
    NavLinks.map(({ href, label }) => (
      <Link href={href} key={label}>
        <a className='flex hover:text-pink-600 bg-gray-900 hover:bg-gray-800 p-5 rounded-lg text-center self-center min-h-[150px]'>
          <p className='self-center'>Evaluate the {label}</p>
        </a>
      </Link>
    ))
  );
}

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-start items-center p-1 gap-y-3 ">
      <Head title={'Hairy Turtle'} />

      <header className='w-full h-auto flex flex-col justify-start items-center'>
        <h1 className={'text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl'}>
          Welcome to the <span className='text-blue-500 font-semibold'>Hairy Turtle!</span>
        </h1>
        <p className={'my-5 text-xl text-sm-2xl font-medium text-pink-600'}>
          A JavaScript and Python Speed Comparison App
        </p>
        <p className={'text-3xl gap-y-3 pb-7'}>
          Which one do <em className='text-blue-500'>you</em> think is faster?
        </p>
      </header>

      <section className={`grid grid-cols-${numberOfCols} ${gapAndPadding} h-auto max-w-lg justify-center bg-black rounded-md`}>
        <NavCards />
      </section>
      <Footer className='justify-self-end' />
    </main>
  );
}
