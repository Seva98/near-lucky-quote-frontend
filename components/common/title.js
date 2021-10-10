import useGlitch from '../../lib/useGlitch';

const Title = ({ children, className, style, level, size }) => {
  const glitch = useGlitch('title');
  const commonClass = `${glitch} font-title font-extrabold uppercase w-fit mb-4 bg-gradient-to-r from-pink-primary to-teal-primary bg-clip-text text-transparent whitespace-pre-line ${
    className || ''
  }`;

  const sizeArg = size ? size : 7 - level;
  const fontSize =
    sizeArg === 1
      ? 'text-xl'
      : sizeArg === 2
      ? 'text-2xl'
      : sizeArg === 3
      ? 'text-3xl'
      : sizeArg === 4
      ? 'text-4xl'
      : sizeArg === 5
      ? 'text-5xl'
      : sizeArg === 6
      ? 'text-6xl'
      : sizeArg === 7
      ? 'text-7xl'
      : sizeArg === 8
      ? 'text-8xl'
      : 'text-9xl';

  switch (level) {
    case 1:
      return (
        <h1 className={`${fontSize} ${commonClass}`} style={style}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={`${fontSize} ${commonClass}`} style={style}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`${fontSize} ${commonClass}`} style={style}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`${fontSize} ${commonClass}`} style={style}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`${fontSize} ${commonClass}`} style={style}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={`${fontSize} ${commonClass}`} style={style}>
          {children}
        </h6>
      );
    default:
      return (
        <div className={`${fontSize} ${commonClass}`} style={style}>
          {children}
        </div>
      );
  }
};

export default Title;
