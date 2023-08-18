import { useState } from "react";
import AppLinkModal from "../ShereComponent/AppLinkModal";

const ThousandsofApplicants = () => {
  const [openModal, closeModal] = useState(false)

  return (
    <div className=" lg:mx-[40px] mx-[10px] md:mx-[10px]">
      <div className="">
        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:h-[496px] rounded rounded-[17px] lg:mt-[90px] md:mt-[90px] mt-[70px] lg:p-0 md:p-5 p-0 ">
          <div className="lg:flex lg:flex-row-reverse lg:justify-between items-center  ">
            <div>
              <img className="lg:w-[550px] md:w-[370px] md:flex md:mx-auto" src="./images/haj.png" alt="" />
            </div>
            <div className="lg:w-2/3 lg:pl-10 p-5">
              <div className="text-left lg:pt-0 md:pt-[50px] pt-[10px] ">
                <h1 className="lg:text-start md:text-start text-center lg:text-[34px] text-[#023C5B] md:text-[32px]  text-[22px]  font-bold lg:mt-0 md:mt-0 ">
                  No more thousands of applicants in a single job post! Get AI
                  suggested relevant candidates.{" "}
                </h1>
                <div className="pt-6">
                  <p className="text-[18px] lg:text-start md:text-start text-center">
                    Bringin App has advanced AI algorithms to recommend the most
                    relevant candidates to the recruiters according to their
                    required experiences, expertise area, salary budget,
                    required educational qualifications and company location to
                    hunt without any hassle.
                  </p>
                </div>
                <div className="mt-[39px] lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">
                  <button onClick={()=>closeModal(true)} className="font-medium bg-[#0077B5] w-[175px] h-[40px] text-white rounded rounded-[8px]">
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

export default ThousandsofApplicants;
