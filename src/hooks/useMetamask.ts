/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { networks } from 'utils/connectors';

interface ChangeNetwork {
  networkName: keyof typeof networks;
}

export function useMetaMask() {
  const [isMetaMaskInstalled, setMetamaskInstalled] = useState<boolean>();

  const changeNetwork = async ({ networkName }: ChangeNetwork) => {
    try {
      if (!window.ethereum) throw new Error('No crypto wallet found');
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (err) {
      console.dir(err.message);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    async function checkForMetaMask() {
      const provider = await detectEthereumProvider({
        timeout: 1000,
        mustBeMetaMask: true,
      });

      if (provider) {
        setMetamaskInstalled(true);
      } else {
        setMetamaskInstalled(false);
      }
    }

    checkForMetaMask();
  }, []);

  const isWeb3Available = typeof window !== 'undefined' && window?.ethereum;

  return {
    isMetaMaskInstalled,
    isWeb3Available,
    changeNetwork,
  };
}

export default useMetaMask;
