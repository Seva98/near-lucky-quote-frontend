import Head from 'next/head';
import Layout from '../components/common/layout';
import Title from '../components/common/title';

export default function Home() {
  return (
    <Layout>
      <div className="text-center my-12 ">
        <Title size={1}>Sevcik.dev</Title>
        <Title size={2}>Sevcik.dev</Title>
        <Title size={3}>Sevcik.dev</Title>
        <Title size={4}>Sevcik.dev</Title>
        <Title size={5}>Sevcik.dev</Title>
        <Title size={6}>Sevcik.dev</Title>
        <Title size={7}>Sevcik.dev</Title>
        <Title size={8}>Sevcik.dev</Title>
        <Title size={9}>Sevcik.dev</Title>
      </div>
    </Layout>
  );
}
