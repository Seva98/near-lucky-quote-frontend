import Card from '../common/card';
import Subtitle from '../common/subtitle';
import Title from '../common/title';
import Button from '../common/button';
import Image from 'next/image';
import { useState } from 'react';
import useGlitch from '../../lib/useGlitch';
import Chevron from '../icons/chevron';

const CvCard = ({ work }) => {
  const { company, startDate, endDate, summary, highlights } = work;

  console.log(summary);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card>
      <Title size={4}>{company}</Title>
      <Subtitle>
        {startDate} - {endDate}
      </Subtitle>
      <div className="-mt-4 mb-2 flex gap-x-3 ">
        <div className="w-8">
          <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src="/icons/javascript.svg" />
        </div>
        <div className="w-8 h-8">
          <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src="/icons/python.svg" />
        </div>
        <div className="w-8 h-8">
          <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src="/icons/react.svg" />
        </div>
        <div className="w-8 h-8">
          <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src="/icons/rhel.svg" />
        </div>
        <div className="w-8 h-8">
          <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src="/icons/splunk.svg" />
        </div>
        <div className="w-8 h-8">
          <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src="/icons/typescript.svg" />
        </div>
      </div>
      {summary.map((s) => (
        <p className="lead">{s}</p>
      ))}
      {summary.map((s) => (
        <blockquote>{s}</blockquote>
      ))}
      {showDetails ? (
        <>
          {summary.map((s) => (
            <p>{s}</p>
          ))}
          <ul>
            {highlights.map((h) => (
              <li key={Math.random()}>{h}</li>
            ))}
          </ul>
          <Button className="text-right" onClick={() => setShowDetails(!showDetails)} up={showDetails}>
            Read Less
          </Button>
        </>
      ) : (
        <Button className="text-right" onClick={() => setShowDetails(!showDetails)} up={showDetails}>
          Read More
        </Button>
      )}
    </Card>
  );
};

export default CvCard;
