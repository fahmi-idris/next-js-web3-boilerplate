import * as React from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { useLookupAddress } from '@usedapp/core';
import { useWeb3React } from '@web3-react/core';

import { useMetaMask, useAccount } from 'hooks';

import { injected, walletconnect, network, resetWalletConnector } from 'utils/connectors';
import { trimAddress } from 'utils/formatter';

// eslint-disable-next-line no-shadow
export enum ConnectorNames {
  Injected = 'Injected',
  Network = 'Network',
  WalletConnect = 'WalletConnect',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletConnect]: walletconnect,
};

const WalletButton: React.FC = () => {
  const { activate, deactivate, connector } = useWeb3React<Web3Provider>();
  const { isWeb3Available } = useMetaMask();
  const { account, isConnected, isWrongNetwork } = useAccount();
  const ens = useLookupAddress();

  const renderConnectWalletText = () => {
    if (isWrongNetwork) return 'Disconnect Wallet';
    if (account) return ens || trimAddress(account);
    return 'Connect Wallet';
  };

  return (
    <>
      {isConnected ? account : ''}
      <div>
        {renderConnectWalletText()}
        {connector ? (
          <button
            type="button"
            onClick={() => {
              deactivate();
            }}
          >
            Disconnect
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                if (isWeb3Available) {
                  activate(connectorsByName[ConnectorNames.Injected]);
                } else {
                  console.dir('handle open metamask url');
                }
              }}
            >
              {isWeb3Available ? 'MetaMask' : 'Open MetaMask'}
            </button>
            <button
              type="button"
              onClick={() => {
                activate(connectorsByName[ConnectorNames.WalletConnect], undefined, true)
                  .then(() => {
                    console.dir('handle success');
                  })
                  .catch(() => {
                    resetWalletConnector(connectorsByName[ConnectorNames.WalletConnect]);
                  });
              }}
            >
              WalletConnect
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default WalletButton;
