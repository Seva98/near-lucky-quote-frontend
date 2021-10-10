import cv from '../data/cv.json';
import Button from '../components/common/button';
import Hr from '../components/common/hr';
import Layout from '../components/common/layout';
import Title from '../components/common/title';
import Logo from '../components/logo';
import CvCard from '../components/cv/cvCard';
import EducationCard from '../components/cv/educationCard';
import Subtitle from '../components/common/subtitle';
import SkillSet from '../components/cv/skillSet';
import Intro from '../components/cv/intro';
import Links from '../components/cv/links';
import { useState } from 'react';
import FreelancingCard from '../components/cv/freelancingCard';

export default function Home({ work, education, freelancing }) {
  const categories = ['Full Time', 'Freelancing'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <Layout>
      <div className="my-12">
        <Logo />
        <div className="text-center">
          <Title level={1} className="ml-auto mr-auto">
            Ing. Ondrej Sevcik
          </Title>
          <Subtitle>Full Stack Splunk, React and (to be) Blockchain Developer</Subtitle>
          <Links />
        </div>
        <Intro />
        <Title level={2}>Skill set</Title>
        <Subtitle>Overview of primary skills I have used over years</Subtitle>
        <SkillSet />
        <Hr />
        <Title level={2}>Work experience</Title>
        <div className="flex justify-center">
          {categories.map((c) => (
            <Button active={activeCategory === c ? 1 : 0} key={c} onClick={() => setActiveCategory(c)}>
              {c}
            </Button>
          ))}
        </div>
        {activeCategory === categories[0] ? work.map((w) => <CvCard work={w} key={w.company} />) : freelancing.map((w) => <FreelancingCard work={w} key={w.company} />)}
        <Hr />
        <Title level={2}>Formal education</Title>
        {education.map((edu) => (
          <EducationCard education={edu} key={edu.institution} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { work, education, freelancing } = cv;

  return {
    props: {
      work,
      education,
      freelancing,
    },
  };
}
