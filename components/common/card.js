import useGlitch from '../../lib/useGlitch';
import Title from '../common/title';

const Card = (props) => {
  const { title, subtitle, text, children, className } = props;
  return (
    <div className={`${className || ''} card-glow bg-gray-800 m-5 p-5 w-fit h-fit`} {...props}>
      <Title size={4}>{title}</Title>
      <div>{subtitle}</div>
      <div>{text}</div>
      {children}
    </div>
  );
};

export default Card;
