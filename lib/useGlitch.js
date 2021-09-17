import { useEffect, useState } from 'react';

const useGlitch = (type) => {
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
        } else if (reminder > 2000 && reminder < 2450) {
          setGlowClass('logo-pink-glow');
        } else if (reminder > 2450 && reminder < 2900) {
          setGlowClass('logo-teal-glow');
        } else if (reminder > 2900 && reminder < 3050) {
          setGlowClass('');
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
        const reminder = time % 19000;
        if (reminder > 0 && reminder < 250) {
          setGlowClass('button-pink-glow');
        } else if (reminder > 150 && reminder < 350) {
          setGlowClass('button-teal-glow');
        } else if (reminder > 18000 && reminder < 18150) {
          setGlowClass('button-teal-glow');
        } else if (reminder > 18100 && reminder < 18250) {
          setGlowClass('button-pink-glow');
        } else if (reminder > 18350 && reminder < 18500) {
          setGlowClass('button-teal-glow');
        } else {
          setGlowClass('');
        }
        break;
      }
      case 'title': {
        const reminder = time % 26000;
        if (reminder > 0 && reminder < 250) {
          setGlowClass('title-pink-glow');
        } else if (reminder > 150 && reminder < 350) {
          setGlowClass('title-teal-glow');
        } else if (reminder > 24000 && reminder < 24150) {
          setGlowClass('title-teal-glow');
        } else if (reminder > 24100 && reminder < 24250) {
          setGlowClass('title-pink-glow');
        } else if (reminder > 24350 && reminder < 24500) {
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

export default useGlitch;
