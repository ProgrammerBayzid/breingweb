import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const JobSekkerbringinworks = () => {
  return (
    <div>
      <div className=" lg:mx-[40px] md:mx-[10px] mx-[10px] lg:mt-[100px] md:mt-[50px] mt-[10px]">
        <div>
          <p className="text-center lg:text-[38px]  md:text-[32px] text-[22px] font-bold text-[#023C5B] mb-[40px]">
            How unbolt works
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="w-[290px] h-[350px]  ">
              <div>
                <div className="">
                  <div className="	relative">
                    <p className="text-[#004674] mt-[250px] mx-[30px]  absolute text-center text-[18px] font-bold">
                      Create profile very simply
                    </p>
                       <img loading="lazy" className=" " src="./images/jhw1.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[290px] h-[350px]  ">
              <div>
                <div className="">
                  <div className="	relative">
                    <p className="text-[#004674] mt-[250px] lg:mx-[53px] md:mx-[53px] mx-[70px]  absolute text-center text-[18px] font-bold">
                      Get AI matching jobs{" "}
                    </p>
                       <img loading="lazy" className=" " src="./images/jhw2.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[290px] h-[350px]  ">
              <div>
                <div className="">
                  <div className="	relative">
                    <p className="text-[#004674] mt-[250px] mx-[30px]  absolute text-center text-[18px] font-bold">
                      Chat directly with recruiters{" "}
                    </p>
                       <img loading="lazy" className=" " src="./images/jhw3.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[290px] h-[350px]  ">
              <div>
                <div className="">
                  <div className="	relative">
                    <p className="text-[#004674] mt-[250px] lg:mx-[65px] md:mx-[68px] mx-[65px] absolute text-center text-[18px] font-bold">
                      Get hired Instantly{" "}
                    </p>
                       <img loading="lazy" className=" " src="./images/jhw4.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSekkerbringinworks;
