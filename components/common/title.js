const Title = ({ children, className, style, level, size }) => {
  const commonClass = `font-extrabold uppercase w-min mb-4 bg-gradient-to-r from-teal-400 to-pink-500 bg-clip-text text-transparent ${className || ''}`;

  const fontSize = size ? `text-${size}xl` : `text-${level}xl`;

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
