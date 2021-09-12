import useGlitch from '../../lib/useGlitch';

const Hr = () => {
  const glitch = useGlitch('button');

  return <hr className={`${glitch} bg-gradient-to-r from-pink-primary to-teal-primary border-0`} />;
};

export default Hr;
