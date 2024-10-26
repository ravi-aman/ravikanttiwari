
import Magnetic from '../../components/common/Magnetic';

export default function index() {
  return (
    <>
      <div className="flex w-full justify-between text-[12px] gap-[40px] md:flex-row md:items-center md:gap-[20px]">
        <Magnetic>
          <div className="relative el">
            <a href='https://www.linkedin.com/in/rishi-lahoti-665889166/' target='_blank' className="font-lexend text-[13px] text-white no-underline">LinkedIn</a>
            <div className="absolute w-full h-[2px] top-[17px] bg-white transform scale-0 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="relative el">
            <a href='https://github.com/rishilahoti' target='_blank' className="font-lexend text-[13px] text-white no-underline">GitHub</a>
            <div className="absolute w-full h-[2px] top-[17px] bg-white transform scale-0 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="relative el">
            <a href='https://twitter.com/rishii_lahoti' target='_blank' className="font-lexend text-[13px] text-white no-underline">Twitter</a>
            <div className="absolute w-full h-[2px] top-[17px] bg-white transform scale-0 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="relative el">
            <a href='https://drive.google.com/file/d/18StCZFuKOo7RkzZxnvuk93OuQuct0Svi/view?usp=sharing' target='_blank' className="font-lexend text-[13px] text-white no-underline">my resume</a>
            <div className="absolute w-full h-[2px] top-[17px] bg-white transform scale-0 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
          </div>
        </Magnetic>
      </div>
    </>
  );
}
