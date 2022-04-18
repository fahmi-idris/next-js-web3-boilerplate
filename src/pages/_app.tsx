import * as React from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { Web3ReactProvider } from '@web3-react/core';
import { ChainId, Config, DAppProvider } from '@usedapp/core';
import NProgress from 'nprogress';

import { AppContextProvider } from 'context';

import getLibrary from 'utils/getLibrary';

const progress = NProgress.configure({ showSpinner: false });
const config: Config = {
  readOnlyChainId: (parseInt(process.env.NEXT_PUBLIC_NETWORK, 10) as ChainId) ?? 4,
  readOnlyUrls: {
    [ChainId.Rinkeby]: process.env.NEXT_PUBLIC_RPC_URL_4,
    [ChainId.Mainnet]: process.env.NEXT_PUBLIC_RPC_URL_1,
  },
};

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const handleRouteChangeComplete = () => {
    progress.done();
  };

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => progress.start());
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', () => progress.done());

    return () => {
      Router.events.off('routeChangeStart', () => progress.start());
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', () => progress.done());
    };
  }, []);

  return (
    <DAppProvider config={config}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </Web3ReactProvider>
    </DAppProvider>
  );
};
export default App;
