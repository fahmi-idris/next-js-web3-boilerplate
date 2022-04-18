/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface EthereumProvider {
  isMetaMask?: boolean;
  request: any;
}

interface Window {
  ethereum: EthereumProvider;
}
