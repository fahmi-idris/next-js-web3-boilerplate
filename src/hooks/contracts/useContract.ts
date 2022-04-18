import { useMemo } from 'react';
import { Contract } from '@ethersproject/contracts';

import { contractInterface, contractAddress } from './constants';

export function useContract() {
  const contract = useMemo(
    () => new Contract(contractAddress, contractInterface),
    [contractAddress, contractInterface],
  );
  return { contract };
}

export default useContract;
