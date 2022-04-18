import * as React from 'react';
import { NextSeo } from 'next-seo';

import { useContract, useContractCall, useTransactions } from 'hooks';

import { WalletButton } from '../components';

const Home: React.FC = () => {
  const { contract } = useContract();
  const { onSendTransaction, isLoading } = useTransactions({
    contract,
    functionName: 'mintingExample',
    transactionName: 'Mint Example',
  });
  const price = useContractCall<number>({ method: 'methodExample', args: [] }) ?? 0;

  return (
    <>
      <NextSeo title="Home" description="Lorem ipsum dolor sit amet" />
      <WalletButton />
    </>
  );
};

export default Home;
