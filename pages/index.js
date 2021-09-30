import cv from '../data/cv.json';

import Head from 'next/head';
import Button from '../components/common/button';
import Card from '../components/common/card';
import Hr from '../components/common/hr';
import Layout from '../components/common/layout';
import Title from '../components/common/title';
import Logo from '../components/logo';
import CvCard from '../components/cv/cvCard';
import EducationCard from '../components/cv/educationCard';
import Subtitle from '../components/common/subtitle';
import Image from 'next/image';
import Link from 'next/link';
import Progress from '../components/common/progress';
import SkillSet from '../components/cv/skillSet';
import Intro from '../components/cv/intro';
import { useState } from 'react';

export default function Home({ work, education }) {
  const categories = ['Full Time', 'Freelancing'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <Layout>
      <div className="my-12 max-w-3xl mx-auto">
        <Logo />
        {/* <Title level={1}>Ing. Ondrej Sevcik</Title>
        <Subtitle>Full Stack Splunk, React and (to be) Blockchain Developer</Subtitle>
        <Intro />
        <Title level={2}>Skill set</Title>
        <Subtitle>Overview of primary skills I have used over years</Subtitle>
        <SkillSet />
        <Hr />
        <Title level={2}>Work experience</Title>
        <div className="flex justify-center">
          {categories.map((c) => (
            <Button active={activeCategory === c} onClick={() => setActiveCategory(c)}>
              {c}
            </Button>
          ))}
        </div>
        {work.map((w) => (
          <CvCard work={w} key={w.company} />
        ))}
        <Hr />
        <Title level={2}>Formal education</Title>
        {education.map((edu) => (
          <EducationCard education={edu} key={edu.institution} />
        ))} */}
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
