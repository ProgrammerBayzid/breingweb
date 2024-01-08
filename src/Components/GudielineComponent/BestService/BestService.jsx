import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BestService = () => {
  return (
    <div className="lg:mx-[40px] md:mx-[10px] mx-[10px]">
      <h1 className="lg:text-[38px] text-[#00486D] md:text-[35px] text-[30px] font-semibold text-center lg:mb-[60px] my-[20px] my-[50px]">
        Revolutionize your hiring needs with Unbolt - Chat Based Hiring App.
      </h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[50px]  md:gap-y-[35px] gap-y-[25px] md:gap-x-[30px]">
          <div className="lg:w-[340px] lg:h-[370px]   w-[250px] h-[280] bg-white rounded rounded-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div>
              <LazyLoadImage
              effect= "blur" loading="lazy" className="" src="/images/guidline/gr1.png" />
            </div>

            <div className="px-5 py-8">
              <p className="lg:text-[20px] text-[#003956] md:text-[18px] text-[15px] font-semibold">
                Find AI Matching Jobs
              </p>
              <p className="lg:text-[16px] text-[#212427] text-opacity-80 md:text-[14px] text-[12px] font-medium mt-2">
                Unbolt provide you the AI Matching Recommended Jobs based on
                your career preferences.
              </p>
            </div>
          </div>
          <div className="lg:w-[340px] lg:h-[370px] w-[250px] h-[280] bg-white rounded rounded-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div>
              <LazyLoadImage
              effect= "blur" loading="lazy" className="" src="/images/guidline/gr2.png" />
            </div>

            <div className="px-5 py-8">
              <p className="lg:text-[20px] text-[#003956] md:text-[18px] text-[15px] font-semibold">
                Interview from Home
              </p>
              <p className="lg:text-[16px] text-[#212427] text-opacity-80 md:text-[14px] text-[12px] font-medium mt-2">
                Attend instant video interview from home that saves a lot of
                your energy, time and money.{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-[340px] lg:h-[370px] w-[250px] h-[280] bg-white rounded rounded-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div>
              <LazyLoadImage
              effect= "blur" loading="lazy" className="" src="/images/guidline/gr3.png" />
            </div>

            <div className="px-5 py-8">
              <p className="lg:text-[20px] text-[#003956] md:text-[18px] text-[15px] font-semibold">
                Search Job Near Your Location
              </p>
              <p className="lg:text-[16px] text-[#212427] text-opacity-80 md:text-[14px] text-[12px] font-medium mt-2">
                Search for jobs in your preferred region. The app helps you find
                nearby job opportunities.{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-[340px] lg:h-[370px] w-[250px] h-[280] bg-white rounded rounded-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div>
              <LazyLoadImage
              effect= "blur" loading="lazy" className="" src="/images/guidline/gr4.png" />
            </div>

            <div className="px-5 py-8">
              <p className="lg:text-[20px] text-[#003956] md:text-[18px] text-[15px] font-semibold">
                New Job Notifications{" "}
              </p>
              <p className="lg:text-[16px] text-[#212427] text-opacity-80 md:text-[14px] text-[12px] font-medium mt-2">
                Unbolt will notify you about the latest jobs opening that makes
                your job hunting easier.{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-[340px] lg:h-[370px] w-[250px] h-[280] bg-white rounded rounded-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div>
              <LazyLoadImage
              effect= "blur" loading="lazy" className="" src="/images/guidline/gr5.png" />
            </div>

            <div className="px-5 py-8">
              <p className="lg:text-[20px] text-[#003956] md:text-[18px] text-[15px] font-semibold">
                Secured & Verified Recruiters{" "}
              </p>
              <p className="lg:text-[16px] text-[#212427] text-opacity-80 md:text-[14px] text-[12px] font-medium mt-2">
                All recruiters of Unbolt is 100% verified, there is no chance
                to be spammed or scammed.{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-[340px] lg:h-[370px] w-[250px] h-[280] bg-white rounded rounded-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div>
              <LazyLoadImage
              effect= "blur" loading="lazy" className="" src="/images/guidline/gr6.png" />
            </div>

            <div className="px-5 py-8">
              <p className="lg:text-[20px] text-[#003956] md:text-[18px] text-[15px] font-semibold">
                Get an Instant Support{" "}
              </p>
              <p className="lg:text-[16px] text-[#212427] text-opacity-80 md:text-[14px] text-[12px] font-medium mt-2">
                We are available to assist you with any Unbolt App-related
                issues over WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestService;
