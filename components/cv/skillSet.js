import Progress from '../common/progress';
import Title from '../common/title';

const SkillSet = () => {
  return (
    <>
      <p>Below is timeline of technologies that I've been using for long time from three areas - Web, Splunk and Mobile development.</p>
      <p>The list doesn't cover everything I know but I've wanted to pin point technologies that I've worked the most time with.</p>
      <Title level={3}>Web</Title>
      <div className="mb-6 mx-1 sm:mx-0 ">
        <Progress text="Next.js" start={2020} end={9999} />
        <Progress text="React" start={2019} end={9999} />
        <Progress text="MongoDB" start={2019} end={9999} />
        <Progress text="Node.js / TypeScript" start={2018} end={2021} />
        <Progress text="Vue.js" start={2018} end={2020} />
        <Progress text="Javascript / HTML / CSS" legend start={2017} end={9999} />
      </div>
      <Title level={3}>Splunk</Title>
      <div className="mb-6 mx-1 sm:mx-0 ">
        <Progress text="Unix / Win / Oracle DB / MSSQL / SAP / MSIIS / ..." start={2020} end={9999} />
        <Progress text="SplunkJS" start={2019} end={2020} />
        <Progress text="Splunk" start={2019} end={9999} />
        <Progress text="Python" legend start={2018} end={9999} />
      </div>
      <Title level={3}>Mobile</Title>
      <div className="mb-6 mx-1 sm:mx-0 ">
        <Progress text="React Native" start={2021} end={2022} />
        <Progress text="Java/Kotlin" start={2017} end={2018} />
        <Progress text="Swift" legend start={2016} end={2018} />
      </div>
    </>
  );
};

export default SkillSet;
