import * as React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('modules/home'));

const Index: NextPage = () => <HomePage />;

export default Index;
