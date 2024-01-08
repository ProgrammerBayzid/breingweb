import { Link } from "react-router-dom";
import RFaq from "./RFaq";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const RAdvanced = () => {
  return (
    <div className="relative lg:bg-[url(/src/bgimages/rfaq.png)] bg-auto  bg-bottom bg-no-repeat">
      <div className="lg:h-[1350px]  lg:mt-[100px] md:mt-[60px] mt-[65px]">
        <div className="lg:mx-[40px] md:mx-[10px] mx-[10px]">
          <div className="	 lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between  ">
            <div className=" lg:mt-[60px] md:mt-[40px]  h-[250px] lg:ml-0 md:ml-0 ml-16">
            <LazyLoadImage
              effect= "blur"
              loading="lazy"
                className="  lg:w-[450px] lg:h-[500px] w-[250px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
                src="./images/ra.png"
                alt=""
             
              />
            </div>
            <div className="lg:text-start md:text-start text-center lg:w-2/3 md:w-2/3 lg:mt-[60px] md:mt-[40px] mt-[65px] py-2">
              <h1 className="lg:text-[37px] text-[22px] md:text-[24px] font-bold text-[#023C5B]">
                Advanced AI algorithms for recruiters recommend the most
                relevant candidates at unbolt app.
              </h1>
              <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
                Unbolt offers free job posts as well as its AI recommendation
                helps recruiter to get relevant candidates instantly to their
                <span className="font-semibold"> Candidates for you</span> page based on the recruiters requirements
                against skills, experiences, job location and salary budget.
                Unbolt never suggests any irrelevant candidates to recruiters!
              </p>
              <Link to="/recruiters-login">
              
              <div className="mt-[33px] lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">
                <button className="hover:bg-[#0077B5] border border-[#0077B5] font-medium w-[155px] h-[40px] text-[#0071BC] hover:text-white rounded rounded-[3px]">
                  Get Started
                </button>
              </div>
              </Link>
            </div>

          </div>
            <div className="lg:mt-[400px] mt-[50px] md:mt-[60px] ">
          <RFaq></RFaq>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default RAdvanced;
