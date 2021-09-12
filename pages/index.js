import Head from 'next/head';
import Button from '../components/common/button';
import Layout from '../components/common/layout';
import Title from '../components/common/title';
import Logo from '../components/logo';

export default function Home() {
  return (
    <Layout>
      <div className="my-12 max-w-3xl mx-auto">
        <Logo />
        <Title level={1}>Lorem ipsum generator</Title>
        <div className="font-subtitle -mt-6 mb-4 text-gray-300 text-lg drop-shadow-brand">by Ondrej Sevcik, {new Date().toLocaleString()}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et ex, optio quod enim, beatae nihil facilis ab excepturi itaque quisquam ducimus mollitia non illo ipsum nulla accusantium
          pariatur amet!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nostrum rerum dignissimos inventore eligendi. Vitae tempore accusantium rem ab, blanditiis dolores reiciendis? Fugiat optio
          expedita beatae voluptatum, quam explicabo. Laudantium?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, exercitationem magni assumenda accusamus ullam illum est quaerat neque id. Molestiae nulla est quod, consequatur natus
          dignissimos. Similique eligendi id sed?
        </p>
        text-3xl border-2 border-transparent py-2 px-4 font-title font-extrabold uppercase w-fit mb-4 bg-gradient-to-r from-pink-primary via-teal-primary to-pink-primary bg-clip-text text-transparent
        <Button />
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
