import cv from '../data/cv.json';

import Head from 'next/head';
import Button from '../components/common/button';
import Card from '../components/common/card';
import Hr from '../components/common/hr';
import Layout from '../components/common/layout';
import Title from '../components/common/title';
import Logo from '../components/logo';
import CvCard from '../components/cv/cvCard';
import Subtitle from '../components/common/subtitle';

export default function Home({ work }) {
  return (
    <Layout>
      <div className="my-12 max-w-3xl mx-auto">
        <Logo />
        {/* <Title level={1}>Lorem ipsum generator</Title>
        <Subtitle>by Ondrej Sevcik, {new Date().toLocaleString()}</Subtitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et ex, optio quod enim, beatae nihil facilis ab excepturi itaque quisquam ducimus mollitia non illo ipsum nulla accusantium
          pariatur amet!
        </p>
        <Hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nostrum rerum dignissimos inventore eligendi. Vitae tempore accusantium rem ab, blanditiis dolores reiciendis? Fugiat optio
          expedita beatae voluptatum, quam explicabo. Laudantium?
        </p>
        <Hr />
        <div className="flex gap-x-0 justify-center">
          <Button>Programming</Button>
          <Button>Other</Button>
        </div>
        {work.map((w) => (
          <CvCard work={w} key={w.company} />
        ))}
        <Hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, exercitationem magni assumenda accusamus ullam illum est quaerat neque id. Molestiae nulla est quod, consequatur natus
          dignissimos. Similique eligendi id sed?
        </p>
        text-3xl border-2 border-transparent py-2 px-4 font-title font-extrabold uppercase w-fit mb-4 bg-gradient-to-r from-pink-primary via-teal-primary to-pink-primary bg-clip-text text-transparent
        <Button>Testoavaci vbutton</Button>
        <Title size={1}>Sevcik.dev</Title>
        <Title size={2}>Sevcik.dev</Title>
        <Title size={3}>Sevcik.dev</Title>
        <Title size={4}>Sevcik.dev</Title>
        <Title size={5}>Sevcik.dev</Title>
        <Title size={6}>Sevcik.dev</Title>
        <Title size={7}>Sevcik.dev</Title>
        <Title size={8}>Sevcik.dev</Title>
        <Title size={9}>Sevcik.dev</Title> */}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { work, education, skills } = cv;

  return {
    props: {
      work,
      education,
      skills,
    },
  };
}
