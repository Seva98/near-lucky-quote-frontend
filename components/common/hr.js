import useGlitch from '../../lib/useGlitch';

const Hr = ({ className }) => {
  const glitch = useGlitch('button');

  return <hr className={`${glitch}  bg-gradient-to-r from-pink-primary to-teal-primary border-0 my-8 ${className || ''}`} />;
};

export default Hr;
