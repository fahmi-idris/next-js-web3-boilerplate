import * as React from 'react';
import { getExplorerTransactionLink, TransactionState, useContractFunction } from '@usedapp/core';
import { Contract } from '@ethersproject/contracts';

import { trimAddress } from 'utils/formatter';

interface UseTransactionsProps {
  contract: Contract;
  functionName: string;
  transactionName: string;
}

interface UseTransaction {
  onSendTransaction: (...args: unknown[]) => void;
  isLoading: boolean;
  status: TransactionState;
}

export const useTransactions = ({ contract, functionName, transactionName }: UseTransactionsProps): UseTransaction => {
  const { state, send } = useContractFunction(contract, functionName, {
    transactionName,
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const explorerUrl = state?.transaction?.hash
      ? getExplorerTransactionLink(state?.transaction?.hash, parseInt(process.env.NEXT_PUBLIC_NETWORK, 10) ?? 1)
      : '';

    switch (state.status) {
      case 'Mining':
        console.dir(trimAddress(explorerUrl, 16));
        break;
      case 'Success':
        setIsLoading(false);
        console.dir(trimAddress(explorerUrl, 16));
        break;
      case 'Fail':
      case 'Exception':
        setIsLoading(false);
        console.dir(state.errorMessage);
        break;
      default:
        break;
    }
  }, [state]);

  return {
    onSendTransaction: (...args) => {
      setIsLoading(true);
      send(...args);
    },
    status: state.status,
    isLoading,
  };
};

export default useTransactions;
