import useGlitch from '../../lib/useGlitch';

const Card = (props) => {
  const { children, className } = props;

  const glitch = useGlitch('button');
  return (
    <div className={`${glitch} card-glow w-full relative mb-10 ${className || ''}`}>
      <div className={`card bg-gray-800 p-7`} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Card;
