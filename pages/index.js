import Button from '../components/common/button';
import Layout from '../components/common/layout';
import Title from '../components/common/title';
import Subtitle from '../components/common/subtitle';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { keyStores, Near, WalletConnection, utils } from 'near-api-js';
import BN from 'bn.js';
import axios from 'axios';

const CONTRACT_ID = 'sevcik.testnet';
const gas = new BN('70000000000000');

export default function Home() {
  //const accountId = wallet.getAccountId();
  const router = useRouter();

  const [accountId, setAccountId] = useState('');
  let near, wallet;

  useEffect(() => {
    near = new Near({
      networkId: 'testnet',
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: 'https://rpc.testnet.near.org',
      walletUrl: 'https://wallet.testnet.near.org',
    });
    wallet = new WalletConnection(near, 'sevcik');
    console.log(wallet);
    setAccountId(wallet.getAccountId());
  }, []);

  const signIn = () => {
    wallet.requestSignIn(CONTRACT_ID);
  };

  const signOut = () => {
    wallet.signOut();
    router.replace(router.asPath);
  };

  const getLuckyQuote = async () => {
    const result = await wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: 'generateLuckyQuote',
      gas,
      attachedDeposit: utils.format.parseNearAmount('3'),
    });
    const { hash } = result.transaction;
    console.log(result);
    console.log(hash);
  };

  const getQuoteInfo = async () => {
    const response = await axios.post('https://rpc.testnet.near.org', {
      jsonrpc: '2.0',
      id: 'dontcare',
      method: 'tx',
      params: ['J21opPxvz43qMxbGGm2bhUtoCTBFHXZ8S53q1uw2YpdD', accountId],
    });
    console.log(response);
  };

  return (
    <Layout>
      {accountId ? (
        <>
          <div>{accountId}</div>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </>
      ) : (
        <Button onClick={() => signIn()}>Login with NEAR</Button>
      )}

      <Title level={1} className="ml-auto mr-auto">
        Ing. Ondrej Sevcik
      </Title>
      <Subtitle>Overview of primary skills I have used over years</Subtitle>
      <Button onClick={() => getLuckyQuote()}>Get lucky quote</Button>
      <Button onClick={() => getQuoteInfo()}>Get quote info</Button>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
