import {  useState } from "react";
import AppLinkModal from "../ShereComponent/AppLinkModal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Hero = () => {
  const [openModal, closeModal] = useState(false);

  
  return (
    <div className="relative bg-[url(/src/bgimages/h_hero_bg.png)] bg-auto	 bg-right-top bg-no-repeat">
      <div className="lg:h-[500px]">
        <div className="	 lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:mx-[40px] md:mx-[10px] mx-[10px] ">
          <div className=" lg:mt-[60px] md:mt-[40px]  lg:ml-0 md:ml-0 ml-0 lg:flex-none md:flex-none flex justify-center">
            <LazyLoadImage
              effect= "blur"
              className="lg:w-[500px] lg:h-[500px] w-[230px] h-[250px] md:w-[350px] md:h-[350px] lg:pt-0 md:pt-0 pt-4"
              src="/images/heroMan.png"
              alt="Unbolt"
              loading="lazy"
            
            />
          </div>

          <div className="lg:text-start md:text-start text-center lg:w-1/2 md:w-1/2 lg:mt-[60px] md:mt-[40px] mt-4 py-2">
            <h1 className="lg:text-[40px] text-[22px] md:text-[24px] font-bold text-[#023C5B]">
            AI-powered first chat-based hiring app specialized for Startups and SMEs in Bangladesh.
            </h1>
            <h4 className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
              At Unbolt, Both Job Seekers and Recruiters can chat directly like
              the whatsapp, also can attend instant in-app video call interviews
              and get hired instantly.
            </h4>
            <div className="mt-[33px] lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">
              <button
                onClick={() => closeModal(true)}
                className="bg-[#0077B5] font-medium w-[155px] h-[40px] text-white rounded rounded-[8px]"
              >
                Download App
              </button>
            </div>
            
          </div>
        </div>

        <div></div>
      </div>
      <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal>
    </div>
  );
};

export default Hero;
