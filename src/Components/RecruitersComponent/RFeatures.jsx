import Applogo from "./Applogo";

const Features = () => {
  return (
    <div className="relative lg:bg-[url(/src/bgimages/jfbg.png)] bg-cover  bg-bottom bg-no-repeat">
      <div className=" lg:mx-[40px] md:mx-[10px] mx-[10px]  lg:mt-[px] md:mt-[50px] mt-[50px]">
        <div>
          <p className="text-center lg:text-[38px]  md:text-[32px] text-[22px] font-bold text-[#023C5B] mb-[50px]">
            Our features
          </p>
        </div>

       <div  className="lg:h-[500px]">
       <div className="flex justify-center lg:pt-3">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="w-[290px] h-[290px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded rounded-[5px] bg-white">
              <div>
                <div className="my-[70px] px-5">
                  <div>
                    <div className="flex justify-center mb-[65px]">
                      <img
                        className="w-[70px] h-[70px] "
                        src="./images/rf1.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#004674] text-center text-[20px] font-bold">
                        AI matching candidates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[290px] h-[290px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded rounded-[5px] bg-white">
              <div>
                <div className="my-[70px] px-5">
                  <div>
                    <div className="flex justify-center mb-[65px]">
                      <img
                        className="w-[70px] h-[70px] "
                        src="./images/rf2.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#004674] text-center text-[20px] font-bold">
                        No spam or scam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[290px] h-[290px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded rounded-[5px] bg-white">
              <div>
                <div className="my-[70px] px-5">
                  <div>
                    <div className="flex justify-center mb-[65px]">
                      <img
                        className="w-[70px] h-[70px] "
                        src="./images/rf3.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#004674] text-center text-[20px] font-bold">
                        Find candidates in your city
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[290px] h-[290px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded rounded-[5px] bg-white">
              <div>
                <div className="my-[70px] px-5 ">
                  <div>
                    <div className="flex justify-center mb-[65px]">
                      <img
                        className="w-[70px] h-[70px] "
                        src="./images/rf4.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#004674] text-center text-[20px] font-bold">
                        100% data privacy{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Applogo></Applogo>
       </div>
      </div>
    </div>
  );
};

export default Features;
