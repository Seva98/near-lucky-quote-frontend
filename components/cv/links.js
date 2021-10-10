import Image from 'next/image';

const Links = () => {
  return (
    <div className="-mt-4 mb-2 flex gap-x-3 justify-center">
      <a href="https://www.linkedin.com/in/ondrej-sevcik/" target="_blank">
        <div className="w-8 bg-white rounded-lg">
          <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src={`/icons/linkedin.svg`} />
        </div>
      </a>
      <a href="https://github.com/Seva98" target="_blank">
        <div className="w-8">
          <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src={`/icons/github.png`} />
        </div>
      </a>
      <a href="https://github.com/Seva98/" target="_blank">
        <div className="w-8 ">
          <Image className="-my-5" width="100%" height="100%" layout="responsive" objectFit="contain" src={`/icons/stackoverflow.svg`} />
        </div>
      </a>
    </div>
  );
};

export default Links;
