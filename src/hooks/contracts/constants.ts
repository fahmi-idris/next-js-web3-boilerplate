import { utils } from 'ethers';

import abi from 'contracts/abi.json';
import getRuntimeEnv from 'utils/env';

export const contractAddress = getRuntimeEnv('CONTRACT_ADDRESS');
export const contractInterface = new utils.Interface(abi);
