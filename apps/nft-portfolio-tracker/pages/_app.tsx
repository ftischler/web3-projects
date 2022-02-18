import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import Web3 from 'web3';
import { AbstractProvider } from 'web3-core';
import { Web3ReactProvider } from '@web3-react/core';

import './styles.scss';

const getLibrary = (provider: AbstractProvider) => new Web3(provider);

function NftPortfolioTrackerApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Head>
        <title>Treasure Portfolio Tracker</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Web3ReactProvider>
  );
}

export default NftPortfolioTrackerApp;
