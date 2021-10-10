import Image from 'next/image';
import Card from '../common/card';

const Intro = () => {
  return (
    <>
      <p className="font-subtitle text-xl">“Develop a passion for learning. If you do, you will never cease to grow.” – Anthony J. D’Angelo</p>
      <Card>
        <div className="items-center gap-x-4 w-full">
          <div className="float-left w-full sm:w-80 mb-4 mr-6">
            <Image src="/images/selfie.jpeg" width={350} height={444} />
          </div>
          <div>
            <p>The curiousity to learn new things is what drives me every day.</p>
            <p>
              Back in 2016, my friend told me about iOS course on Udemy that he bought. I've decided to give it a shot and it was the best decision of my life. I've been coding or learning new
              technologies almost every day since then.
            </p>
            <p>
              I've started by creating mobile apps, later shifted my focus towards web apps, took Harvard's CS50 to fill gaps, landed my first programming full time job and somehow got offered a
              Splunk position which opened doors to dozens of different technologies.
            </p>
            <p>
              In 2021, I've deep dived into the crypto world, not just into a trading but I've learned about crypto history, fundamentals and core functionality. Now, I am learning about development
              of dApps, web3 and smart contracts.
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Intro;
