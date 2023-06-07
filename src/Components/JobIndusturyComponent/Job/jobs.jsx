import Spinner from "../../Spinner/Spinner";
import job from "../../../assets/logo/job.svg";
import location from "../../../assets/logo/locetion.svg";
import {  useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const jobs = () => {
    const [jobIndusturyName, setJobIndusturyName] = useState([]);
    const [isLoding, setIsLoding] = useState(false);
    useEffect(() => {
        fetch("https://admin.bringin.io/api/client/hot/industries")
          .then((res) => res.json())
          .then((data) => {
            setIsLoding(true);
            setJobIndusturyName(data.hot_industries);
          });
    
        
      }, []);
      if (isLoding === false) {
        return <Spinner></Spinner>;
      }
    return (
        <div className="flex justify-center">
      <div>
        <div>
          <div className="lg:block md:block hidden">
            <div className="flex justify-center mt-[66px] ">
              <div>
                <div className="lgw-[720px] h-[60px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                  <form className="flex items-center ">
                    <div className="">
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                          <img src={job} />
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          className=" text-sm rounded-l-lg block  pl-[64px] pt-1.5   lg:w-[286px] h-[60px] placeholder:text-[18px] outline-none"
                          placeholder="Candidate Skills"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                          <img src={location} />
                        </div>
                        <input
                          type="text"
                          id="location"
                          className="  text-sm outline-2 outline-none
                      block  pl-[64px] pt-1.5 placeholder:text-[18px]  lg:w-[286px] h-[60px]"
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
                        <img src={job} />
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
                        <img src={location} />
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
          <div className="mt-[67px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="mb-[46px]  ">
              <h1 className="mx-auto text-[40px] font-medium  text-center">
                Hot Job Industries
              </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-[50px] justify-center">
              {jobIndusturyName.map((industry) => (
              <SingleJob
              key={industry.id}
              job={industry}
              ></SingleJob>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default jobs;