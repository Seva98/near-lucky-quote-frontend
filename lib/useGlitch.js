import { useEffect, useRef, useState } from 'react';

const useGlitch = (type) => {
  const [glowClass, setGlowClass] = useState('');
  const interval = useRef();

  useEffect(() => {
    switch (type) {
      case 'logo': {
        interval.current = setInterval(() => {
          setTimeout(() => setGlowClass('logo-pink-glow'), 100);
          setTimeout(() => setGlowClass('logo-teal-glow'), 250);
          setTimeout(() => setGlowClass(''), 350);
          setTimeout(() => setGlowClass('logo-pink-glow'), 2000);
          setTimeout(() => setGlowClass('logo-teal-glow'), 2150);
          setTimeout(() => setGlowClass('logo-pink-glow'), 2300);
          setTimeout(() => setGlowClass(''), 3000);
          setTimeout(() => setGlowClass('logo-teal-glow'), 4000);
          setTimeout(() => setGlowClass('logo-pink-glow'), 4150);
          setTimeout(() => setGlowClass('logo-teal-glow'), 4350);
          setTimeout(() => setGlowClass(''), 4600);
        }, 6000);
        break;
      }
      case 'button': {
        interval.current = setInterval(() => {
          setTimeout(() => setGlowClass('button-pink-glow'), 100);
          setTimeout(() => setGlowClass('button-teal-glow'), 250);
          setTimeout(() => setGlowClass(''), 750);
          setTimeout(() => setGlowClass('button-teal-glow'), 18000);
          setTimeout(() => setGlowClass('button-pink-glow'), 18150);
          setTimeout(() => setGlowClass('button-teal-glow'), 18350);
          setTimeout(() => setGlowClass(''), 18500);
        }, 19000);
        break;
      }

      case 'title': {
        interval.current = setInterval(() => {
          setTimeout(() => setGlowClass('title-pink-glow'), 100);
          setTimeout(() => setGlowClass('title-teal-glow'), 250);
          setTimeout(() => setGlowClass(''), 400);
          setTimeout(() => setGlowClass('title-teal-glow'), 24000);
          setTimeout(() => setGlowClass('title-pink-glow'), 24100);
          setTimeout(() => setGlowClass('title-teal-glow'), 24350);
          setTimeout(() => setGlowClass(''), 24500);
        }, 26000);
        break;
      }
    }

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return glowClass;
};

export default useGlitch;
