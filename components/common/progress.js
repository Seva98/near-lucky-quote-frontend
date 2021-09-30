import useGlitch from '../../lib/useGlitch';

const Progress = ({ start, end, legend, text }) => {
  const glitch = useGlitch('title');

  const startYear = 2016;
  const endYear = new Date().getFullYear() + 1;
  const yearDiff = endYear - startYear;
  const years = [...Array(yearDiff + 1).keys()].map((y) => y + startYear);

  let relStart = ((start - startYear) / yearDiff) * 100;
  relStart = relStart > 100 ? 100 : relStart;
  let relDuration = ((end - start) / yearDiff) * 100;
  relDuration = relDuration > 100 - relStart ? 100 - relStart : relDuration;

  return (
    <div className="relative my-1">
      <div>
        <span className={`${glitch} inline-block uppercase text-2xl font-subtitle bg-gradient-to-r from-pink-primary to-teal-primary bg-clip-text text-transparent`}>{text}</span>
      </div>
      <div className="overflow-hidden h-2 mb-0 text-xs flex bg-gray-800">
        <div style={{ width: relDuration + '%', left: relStart + '%' }} className={`${glitch} shadow-none flex flex-col bg-gradient-to-r from-pink-primary to-teal-primary relative`}></div>
      </div>
      <div className="flex mb-0 items-center justify-between">
        {legend &&
          years.map((y) => (
            <span key={y} className={`${glitch} text-xs font-semibold inline-block bg-gradient-to-r from-pink-primary to-teal-primary bg-clip-text text-transparent`}>
              {y}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Progress;
