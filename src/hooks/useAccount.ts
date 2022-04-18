import { Web3Provider } from '@ethersproject/providers';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

interface UseAccount {
  account: string;
  isWrongNetwork: boolean;
  isConnected: boolean;
  deploymentNetwork: number;
}

export function useAccount(): UseAccount {
  const { account, library, error } = useWeb3React<Web3Provider>();
  const isWrongNetwork = !!error && error instanceof UnsupportedChainIdError;
  const isConnected = typeof account === 'string' && !!library;
  const deploymentNetwork = parseInt(process.env.NEXT_PUBLIC_NETWORK, 10) ?? 0;

  return {
    account,
    isWrongNetwork,
    isConnected,
    deploymentNetwork,
  };
}

export default useAccount;
