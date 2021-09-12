import { useEffect, useState } from 'react';

const UseGlitch = (type) => {
  const [time, setTime] = useState(Date.now());
  const [glowClass, setGlowClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    switch (type) {
      case 'logo': {
        const reminder = time % 6000;
        if (reminder > 0 && reminder < 250) {
          setGlowClass('logo-pink-glow');
        } else if (reminder > 150 && reminder < 350) {
          setGlowClass('logo-teal-glow');
        } else if (reminder > 4000 && reminder < 4150) {
          setGlowClass('logo-teal-glow');
        } else if (reminder > 4100 && reminder < 4250) {
          setGlowClass('logo-pink-glow');
        } else if (reminder > 4350 && reminder < 4500) {
          setGlowClass('logo-teal-glow');
        } else {
          setGlowClass('');
        }
        break;
      }
      case 'button': {
        const reminder = time % 13000;
        if (reminder > 0 && reminder < 250) {
          setGlowClass('logo-pink-glow');
        } else if (reminder > 150 && reminder < 350) {
          setGlowClass('logo-teal-glow');
        } else if (reminder > 10000 && reminder < 10150) {
          setGlowClass('logo-teal-glow');
        } else if (reminder > 10100 && reminder < 10250) {
          setGlowClass('logo-pink-glow');
        } else if (reminder > 10350 && reminder < 10500) {
          setGlowClass('logo-teal-glow');
        } else {
          setGlowClass('');
        }
        break;
      }
      case 'title': {
        const reminder = time % 19000;
        if (reminder > 0 && reminder < 250) {
          setGlowClass('title-pink-glow');
        } else if (reminder > 150 && reminder < 350) {
          setGlowClass('title-teal-glow');
        } else if (reminder > 18000 && reminder < 18150) {
          setGlowClass('title-teal-glow');
        } else if (reminder > 18100 && reminder < 18250) {
          setGlowClass('title-pink-glow');
        } else if (reminder > 18350 && reminder < 18500) {
          setGlowClass('title-teal-glow');
        } else {
          setGlowClass('');
        }
        break;
      }
    }
  }, [time]);

  return glowClass;
};

export default UseGlitch;
