export default function Container({ children, className }) {
  return <div className={`container mx-auto px-5 py-5 ${className}`}>{children}</div>;
}
