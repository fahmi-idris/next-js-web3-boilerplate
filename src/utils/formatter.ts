import type { BigNumberish } from '@ethersproject/bignumber';
import { format, parseISO } from 'date-fns';
import { ethers } from 'ethers';

/**
 * Converts an address to trimAddress, eg: xxxx....xxxxx
 *
 * @param address A string
 * @param trim A number
 */
export const trimAddress = (address: string, trim: number | undefined = 4) =>
  `${address.slice(0, trim)}...${address.slice(-trim)}`;

export const dateFormatter = (date: string, formatter = 'd LLL y') => format(new Date(date), formatter);

export const toUpperCase = (value: string) => value.toUpperCase();

export const toLowerCase = (value: string) => value.toLowerCase();

export const getNetworkName = (network: number) => {
  const networkName = {
    1: 'Mainnet',
    3: 'Ropsten',
    4: 'Rinkeby',
    5: 'Goerli',
    42: 'Kovan',
  };
  return networkName[network];
};

export const formatBigNumber = (value: BigNumberish) =>
  ethers.BigNumber.isBigNumber(value) ? ethers.BigNumber.from(value).toNumber() : 0;

export const formatNumberToDate = (date: number) => new Date(1000 * date);

export const formatDate = (val: number) => {
  const result = format(parseISO(new Date(1000 * val).toISOString()), 'd LLLL yyyy');
  return result;
};

export const ipfsImage = (ipfsUrl: string) => {
  const url = ipfsUrl.replace(/(^\w+:|^)\/\//, '');
  return `https://ipfs.moralis.io:2053/ipfs/${url}`;
};

export const idrFormatter = (value: number) => `Rp. ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

// eslint-disable-next-line no-shadow
export enum NetworkFormatter {
  'Eth' = 1,
  'Ropsten' = 3,
  'Rinkeby' = 4,
  'Goerli' = 5,
  'Kovan' = 42,
}
