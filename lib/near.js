import { keyStores, Near, connect, WalletConnection, utils } from 'near-api-js';
import BN from 'bn.js';

export const CONTRACT_ID = 'sevcik.testnet';
export const gas = new BN('70000000000000');

export const getWallet = async () => {
  const near = await connect({
    networkId: 'testnet',
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
  });
  const wallet = new WalletConnection(near, 'sevcik');
  return wallet;
};

export const getLuckyQuoteFromNEAR = async (wallet) => {
  const response = await wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'generateLuckyQuote',
    gas,
    attachedDeposit: utils.format.parseNearAmount('0.001'),
  });
  return response;
};
