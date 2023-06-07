import job from "../../../assets/logo/job.svg";
import location from "../../../assets/logo/locetion.svg";
import h from '../../../assets/homeimg/Group 11752.svg'

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="hero pt-7 ">
        <div className="hero-content  text-center pb-20">
          <div className="">
              <div>
              <h1 className="lg:text-[70px] text-center md:text-[70px] text-[50px] font-bold	">
                Instant Chat - <span className="text-[#0077B5]">Hire</span>{" "}
                Direct <br/> Anytime, Anywhere !
              </h1>
              </div>
            <div>
              {/* <img src={h} /> */}
              <p className="pt-6 lg:text-[38px] md:text-[38px] text-[25px] font-semibold">
                AI-Powered first{" "}
                <span className="text-[#0077B5]">chat-based</span> instant{" "}
                <span className="text-[#0077B5]">hiring</span>{" "}
              </p>
              <p className="lg:text-[38px] md:text-[38px] text-[25px]  font-semibold">
                app for the Startup & SMEs in Bangladesh{" "}
              </p>
            </div>

            <div className="lg:block md:block hidden">
              <div className="flex justify-center mt-[66px] ">
                <div>
                  <div className="lg:w-[720px] h-[60px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <form className="flex items-center ">
                      <div className="">
                        <div className="relative w-full">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                            <img alt="" src={job} />
                          </div>
                          <input
                            type="text"
                            id="simple-search"
                            className="  text-sm rounded-l-lg block  pl-[64px] pt-1   lg:w-[286px] h-[60px] placeholder:text-[18px] outline-none"
                            placeholder="Candidate Skills"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="relative w-full">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                            <img alt="" src={location} />
                          </div>
                          <input
                            type="text"
                            id="location"
                            className="  text-sm outline-2 outline-none
                        block  pl-[64px] pt-1 placeholder:text-[18px]  lg:w-[286px] h-[60px]"
                            placeholder="Location"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <button className="w-[154px] rounded-r-lg h-[60px] bg-[#0077B5] text-[20px] font-semibold text-white">
                          Start Hiring
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hodden md:hidden block">
              <div className="flex justify-center mt-[46px] ">
                <div>
                  <form className=" items-center ">
                    <div className="">
                      <div className="relative w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                          <img alt="" src={job} />
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          className=" border in text-sm rounded-lg block mb-7 pl-[64px] pt-1.5   lg:w-[286px] h-[60px] input placeholder:text-[18px] outline-none"
                          placeholder="Candidate Skills"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                          <img alt="" src={location} />
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          className="  text-sm rounded-lg border mb-5 block  pl-[64px] pt-1.5 placeholder:text-[18px] input lg:w-[286px] h-[59px] outline-none"
                          placeholder="Location"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <button className="w-[120px] rounded-lg h-[40px] bg-[#0077B5] text-[16px] font-semibold text-white">
                        Start Hiring
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
