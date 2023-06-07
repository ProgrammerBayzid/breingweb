import { useLoaderData } from "react-router-dom";
import Singlecandidate from "./Singlecandidate";

import job from "../../assets/logo/job.svg";
import location from "../../assets/logo/locetion.svg";
import AppLogo from "../App/AppLogo";
import useTitle from "../../hooks/useTitle";

const CandidatesPage = () => {
  useTitle("Candidates - Bringin");

  const candidates = useLoaderData();
  const candidate = candidates.filtered_jobs;
  const first = candidate[0]

  console.log(candidate);
  return (
    <div className="my-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="lg:block md:block hidden">
        <div className="flex justify-center mt-[66px] ">
          <div>
            <div className="lgw-[720px] h-[60px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <form className="flex items-center ">
                <div className="">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                      <img alt="" src={job} />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="   text-sm rounded-l-lg block  pl-[64px] pt-1.5   lg:w-[286px] h-[60px] placeholder:text-[18px] outline-none"
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
                        block  pl-[64px] pt-1.5 placeholder:text-[18px]  lg:w-[286px] h-[59px]"
                      placeholder="Location"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button className="w-[154px] rounded-lg h-[60px] bg-[#0077B5] text-[20px] font-semibold text-white">
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
              <div className="lg:ml-0 md:ml-0 ml-[70px]">
                <button className="w-[120px] rounded-lg h-[40px] bg-[#0077B5] text-[16px] font-semibold text-white">
                  Start Hiring
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-20">
       
              <h1 className="mx-auto lg:text-[40px] md:text-[40px] text-[30px] font-medium  text-center">
                Hire the {first.name} Developer Professionals across Bangladesh
              </h1>
            
      
      </div>

      <div className="my-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-0 ">
          <div className="lg:col-span-2 mx-auto ">
            {candidate.map((singlecanditade) => (
              <Singlecandidate
                key={singlecanditade.id}
                singlecanditade={singlecanditade}
              ></Singlecandidate>
            ))}

            <div className="w-[200px] h-[57px] rounded rounded-full bg-[#0077B5] mx-auto mt-24">
              <h1 className="text-[20px] font-semibold text-center text-white pt-[15px] cursor-pointer">
                View More
              </h1>
            </div>
          </div>

          <div className="lg:ml-0 md:mx-auto mx-auto lg:mt-0 md:mt-0 mt-20">
            <div className="">
              <div className="lg:w-[405px] h-[1261px] shadow-md p-5 ">
                <div className="">
                 <div className="flex justify-between">
                 <h1 className="text-[20px] font-semibold mb-[10px]">
                    Required Experience
                  </h1>
                  <p className="text-[#00A0DC] text-[16px] font-semibold">Reset</p>
                 </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="lg:lg:w-[187px] h-[50px] border border-[#0077B5]">
                      <p className="text-[#0077B5] text-center py-3 px-1 ">
                        Any Experience
                      </p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">Fresher</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">0-1 Years</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">1-3 Years</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">3-5 Years</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">5-10 Years</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">10+ Years</p>
                    </div>
                  </div>
                </div>
                <hr className="my-5"></hr>
                <div className="">
                  <h1 className="text-[20px] font-semibold ">Salary</h1>
                  <div className="grid grid-cols-2 gap-4 mt-[10px]">
                    <div className="lg:w-[187px] h-[50px] border border-[#0077B5]">
                      <p className="text-[#0077B5] text-center py-3 ">All</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">10-19K BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">20-29K BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">30-39 BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">40-49K BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">50-59K BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">60-69K BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">70-79K BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">80-89K BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">90-99K BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">100-119K BDT</p>
                    </div>
                    <div className="lg:w-[187px] h-[50px] bg-[#F6FCF6] ">
                      <p className=" text-center py-3 ">120-139K BDT</p>
                    </div>
                  </div>
                </div>

                <hr className="my-5"></hr>

                <div className="">
                  <h1 className="text-[20px] font-semibold">
                    {" "}
                    Most searched Jobs{" "}
                  </h1>
                  <div className="">
                    <div className="mt-5">
                      <p className="mb-3">Flutter Developer</p>
                      <p className="mb-3">Sales executive</p>
                      <p className="mb-3">HR Executive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <AppLogo></AppLogo>
      </div>
    </div>
  );
};

export default CandidatesPage;
