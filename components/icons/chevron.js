import Image from 'next/image';
import useGlitch from '../../lib/useGlitch';

const Chevron = (props) => {
  const { className, onClick, up } = props;
  const glitch = useGlitch('button');

  return (
    <div className={`w-8 h-8 float-right transition ${up ? '-rotate-180' : ''} ${glitch} ${className || ''}`} onClick={onClick} {...props}>
      <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src="/icons/chevron-down.svg" />
    </div>
  );
};

export default Chevron;
