import useGlitch from '../../lib/useGlitch';

const Button = (props) => {
  const glitch = useGlitch('button');
  const { className, children } = props;

  return (
    <div className={`text-center ${className || ''}`} {...props}>
      <button className={`${glitch} px-12 py-3 font-subtitle font-extrabold uppercase text-3xl bg-gradient-to-r from-pink-primary to-teal-primary bg-clip-text text-transparent`}>{children}</button>
    </div>
  );
};

export default Button;
