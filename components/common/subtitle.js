const Subtitle = ({ children, className }) => {
  return <div className={`font-subtitle -mt-6 mb-4 text-gray-300 text-lg drop-shadow-brand ${className || ''}`}>{children}</div>;
};

export default Subtitle;
