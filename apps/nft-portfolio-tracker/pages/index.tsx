import { ReactElement, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../components/injected';

import styles from './index.module.scss';

export function Index(): ReactElement {
  const { active, account, activate, deactivate } = useWeb3React();

  const [error, setError] = useState();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (e) {
      setError(e);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      {error && <div>An error occured: {error}</div>}
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={connect}
          className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
        >
          Connect to MetaMask
        </button>
        {active ? (
          <span>
            Connected with <b>{account}</b>
          </span>
        ) : (
          <span>Not connected</span>
        )}
        <button
          onClick={disconnect}
          className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
        >
          Disconnect
        </button>
      </div>
    </>
  );
}

export default Index;
