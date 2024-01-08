import { useState } from "react";
import AppLinkModal from "../ShereComponent/AppLinkModal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const TJob = () => {
  const [openModal, closeModal] = useState(false);

  return (
    <div className="lg:mx-[40px] mx-[10px] md:mx-[10px]">
      <div className="">
        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:h-[450px] rounded rounded-[10px] lg:mt-[90px] md:mt-[90px] mt-[90px] lg:p-0 p-0 md:p-5">
          <div className="lg:flex  lg:justify-between  items-center  ">
            <div className=" lg:flex-none lg:mx-0  md:flex md:mx-auto">
            <LazyLoadImage
              effect= "blur"
            
              
              src="/images/needjob1.png" loading="lazy" alt="" className="lg:w-[466px] md:w-[370px] w-[380px] lg:h-[450px] md:h-[370px] h-[350px]" />
            </div>
            <div className="lg:w-2/3 lg:px-10 p-5">
              <div className="text-left lg:pt-0 md:pt-[50px] pt-[10px] ">
                <h1 className="lg:text-[40px] text-[#023C5B] md:text-[32px] lg:text-start md:text-start text-center text-[22px]  font-bold lg:mt-0 md:mt-0 ">
                  No more traditional job <br></br>applications! Get AI
                  suggested jobs.{" "}
                </h1>
                <div className="pt-6">
                  <p className="text-[19px] lg:text-start md:text-start text-center text-[#212427] text-opacity-90">
                  Unbolt App has advanced AI algorithms to recommend the most
                    relevant jobs to the candidates according to their expected
                    job location, salary, educational qualifications and
                    expertise area to get hired without any hassle.
                  </p>
                </div>
                <div className="mt-[39px] lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">
                  <button
                    onClick={() => closeModal(true)}
                    className="font-medium bg-[#0077B5] w-[175px] h-[40px] text-white rounded rounded-[8px]"
                  >
                    Download App Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal>
    </div>
  );
};

export default TJob;
