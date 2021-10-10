import Image from 'next/image';
import useGlitch from '../lib/useGlitch';

const Logo = () => {
  const glitch = useGlitch('logo');

  return (
    <div className="flex justify-center mb-12">
      <Image src="/logo.svg" width="300" height="300" className={glitch} />
    </div>
  );
};

export default Logo;
