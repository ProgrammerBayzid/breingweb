import { Link } from "react-router-dom";
import RFaq from "./Faq";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AppLinkModal from "../ShereComponent/AppLinkModal";
import { useState } from "react";
const Advanced = () => {
  const [openModal, closeModal] = useState(false);

  return (
    <div className="relative lg:bg-[url(/src/bgimages/rfaq.png)] bg-auto  bg-bottom bg-no-repeat">
      <div className="lg:h-[1350px]   lg:mt-[100px] md:mt-[60px] mt-[65px]">
        <div className="lg:mx-[40px] md:mx-[10px] mx-[10px]">
          <div className="	 lg:flex  lg:gap-x-[100px] md:gap-x-[50px] lg:justify-between md:flex  md:justify-between ">
            <div className=" lg:mt-[60px] md:mt-[40px]  h-[250px] lg:ml-0 md:ml-0 ml-16">
            <LazyLoadImage
              effect= "blur"
                loading="lazy"
                className="  lg:w-[470px] lg:h-[500px] w-[250px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
                src="/images/ja.png"
               
                alt=""
              />
            </div>
            <div className="lg:text-start md:text-start text-center lg:w-2/3 md:w-2/3 lg:mt-[60px] md:mt-[40px] mt-[65px] py-2">
              <h1 className="lg:text-[37px] text-[22px] md:text-[24px] font-bold text-[#023C5B]">
                Advanced AI algorithms recommend the most relevant suggested
                jobs at unbolt app for job seekers.
              </h1>
              <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
                The innovative and secure instant chat-based hiring app offers
                job seekers the opportunity to send direct messages to
                recruiters completely free of charge! Unbolt never recommends
                any irrelevant job suggestions to the seekers. AI segregates
                relevant job recommendations according to the seeker's expertise
                level and area.
                <p className="pt-6">
                  Connect directly with verified recruiters, eliminate the
                  hassle of third parties or intermediaries, and find your dream
                  job with full privacy protection.
                </p>
              </p>

            
                <div className="mt-[33px] lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">
                  <button onClick={() => closeModal(true)} className="hover:bg-[#0077B5] border border-[#0077B5] font-medium w-[155px] h-[40px] text-[#0071BC] hover:text-white rounded rounded-[3px]">
                    Get Started
                  </button>
                </div>
          
            </div>
          </div>
          <div className="lg:mt-[310px] mt-[50px] md:mt-[60px] ">
            <RFaq></RFaq>
          </div>
        </div>
      </div>
      <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal>

    </div>
  );
};

export default Advanced;
