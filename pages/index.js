import Loader from '../components/common/loader';
import Card from '../components/common/card';
import Button from '../components/common/button';
import Layout from '../components/common/layout';
import Title from '../components/common/title';
import Subtitle from '../components/common/subtitle';
import { useEffect, useState } from 'react';
import { CONTRACT_ID, gas, getWallet, parseNear, getLuckyQuoteFromNEAR } from '../lib/near';
import Container from '../components/common/container';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [wallet, setWallet] = useState();
  const [accountId, setAccountId] = useState('');
  const [infoMessage, setInfoMessage] = useState([]);
  const [luckyQuote, setLuckyQuote] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const tempWallet = await getWallet();
        setWallet(tempWallet);
        setAccountId(tempWallet.getAccountId());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const signIn = () => {
    setLoading(true);
    try {
      wallet.requestSignIn(CONTRACT_ID, 'NEAR Lucky Quote Generator');
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const signOut = () => {
    setLoading(true);
    try {
      wallet.signOut();
      localStorage.removeItem('near-api-js:keystore:sevcik.testnet:testnet');
      setInfoMessage([]);
      setLuckyQuote('');
      setAccountId('');
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const getLuckyQuote = async () => {
    setLoading(true);
    try {
      const result = await getLuckyQuoteFromNEAR(wallet);
      const {
        status: { SuccessValue },
      } = result;
      const contractResponse = atob(SuccessValue).split('\\n');
      setLuckyQuote(formattedQuote(contractResponse));
      setInfoMessage(formattedInfo(contractResponse));
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const formattedInfo = (contractResponse) => contractResponse.slice(0, 2).join('\n').replaceAll(`"\"`, '').replaceAll(`"`, '').split('\n');
  const formattedQuote = (contractResponse) => contractResponse[4].replaceAll('â', '').replaceAll('\u009c', '“').replaceAll('\u009d', '”').replaceAll('\u0093', '-');

  return (
    <Layout>
      <Container>
        <Loader loading={loading} />
        <div className="text-center pt-20">
          <Title level={1} className="mx-auto">
            NEAR LUCKY QUOTE
          </Title>
          <Subtitle className="">Connect your NEAR testnet wallet and generate lucky quote about learning that is linked to your NEAR testnet account</Subtitle>
          {accountId ? (
            <>
              <div className="mb-4">
                Welcome{' '}
                <a href={`https://explorer.testnet.near.org/accounts/${accountId}`} target="_blank">
                  {accountId}
                </a>
                {!luckyQuote && <span>, please click below to generate your Lucky Quote</span>}
              </div>
              {luckyQuote ? (
                <Card>
                  <Title level={3} className="mx-auto">
                    Your lucky quote
                  </Title>
                  <>
                    <p className="font-subtitle text-2xl">{luckyQuote}</p>
                    {infoMessage.map((m) => (
                      <p key={m} className="text-gray-300 text-md">
                        {m}
                      </p>
                    ))}
                  </>
                </Card>
              ) : (
                <Button onClick={() => getLuckyQuote()}>Get lucky quote</Button>
              )}
              <Button onClick={() => signOut()}>Sign Out</Button>
            </>
          ) : (
            <Button onClick={() => signIn()}>Login with NEAR</Button>
          )}
        </div>
      </Container>
    </Layout>
  );
}
