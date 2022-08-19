import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // if mounted grab the html element and set the height to the window height
  if (typeof window !== 'undefined') {
    document.querySelector('body')
      .setAttribute('class', `bg-zinc-900 text-gray-300 w-screen h-screen`);
  }
  return <Component {...pageProps} />;
}

export default MyApp;
