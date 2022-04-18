import { useContractCall as contractCall } from '@usedapp/core';
import { contractAddress, contractInterface } from './constants';

interface UseContractCall {
  method: string;
  args?: unknown[];
}

export function useContractCall<T>({ method, args = [] }: UseContractCall) {
  const [response]: T[] =
    contractCall({
      abi: contractInterface,
      address: contractAddress,
      method,
      args,
    }) ?? [];
  return response;
}

export default useContractCall;
