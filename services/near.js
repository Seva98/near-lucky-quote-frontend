import { keyStores, Near, WalletConnection, utils } from 'near-api-js';
import BN from 'bn.js';

// export const CONTRACT_ID = 'sevcik.testnet';
// const gas = new BN('70000000000000');

// use new NEAR to avoid async/await
export const near = new Near({
  networkId: 'testnet',
  keyStore: keyStores.BrowserLocalStorageKeyStore,
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
});

//export const wallet = new WalletConnection(near, 'sevcik');

export const generateLuckyQuote = ({ meme, title, data, category }) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'generateLuckyQuote',
    gas,
    attachedDeposit: utils.format.parseNearAmount('3'),
  });
};
