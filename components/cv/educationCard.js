import Card from '../common/card';
import Subtitle from '../common/subtitle';
import Title from '../common/title';
import Button from '../common/button';
import Image from 'next/image';
import { useState } from 'react';
import useGlitch from '../../lib/useGlitch';
import Chevron from '../icons/chevron';

const CvCard = ({ education }) => {
  const { institution, area, studyType, startDate, endDate, highlights } = education;

  const [showDetails, setShowDetails] = useState('');

  return (
    <Card>
      <Title size={4}>
        {studyType || ''}
        {area}
      </Title>
      <Subtitle className="text-xl">
        {institution}, {startDate}-{endDate}
      </Subtitle>
      <ul>
        {highlights.map((h) => (
          <li key={Math.random()}>{h}</li>
        ))}
      </ul>
    </Card>
  );
};

export default CvCard;
