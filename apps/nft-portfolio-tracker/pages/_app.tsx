import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Treasure Portfolio Tracker</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
