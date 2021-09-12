import useGlitch from '../../lib/useGlitch';

const Button = () => {
  const glitch = useGlitch('button');

  return (
    <div className="text-center">
      <button className={`${glitch} px-12 py-3 font-subtitle font-extrabold uppercase text-3xl bg-gradient-to-r from-pink-primary to-teal-primary bg-clip-text text-transparent`}>Test button</button>
    </div>
  );
};

export default Button;
