import { Link, useLoaderData } from "react-router-dom";
import job from "../../assets/logo/job.svg";
import location from "../../assets/logo/locetion.svg";
import AppLogo from "../App/AppLogo";
import useTitle from "../../hooks/useTitle";
import { useEffect, useState } from "react";
const Catagory = () => {
  useTitle("Cetagory - Bringin");

  const cetagory = useLoaderData();
  console.log(cetagory.categories_by_industries);
  const everyca = cetagory.categories_by_industries;
  const first = everyca[0]

  const [cities, setcities] = useState([]);

  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/cities")
      .then((res) => res.json())
      .then((data) => {
        setcities(data);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="">
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
                    <div className="lg:ml-0 md:ml-0 ml-[70px]">
                      <button className="w-[120px] rounded-lg h-[40px] bg-[#0077B5] text-[16px] font-semibold text-white">
                        Start Hiring
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <div className="mt-[67px] ">
                  <div className="mb-[46px]  ">
                    
                    <h1 className=" lg:text-[40px] md:text-[40px] text-[30px] font-medium  text-center">
                          Trending {first?.parent_industry_name? first.parent_industry_name : ""}  Categories in Bangladesh
                        </h1>
                  </div>
                  <div className="flex justify-center">
                  <div className="lg:p-0 md:p-0 p-5 ">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-[58px] md:gap-[58px] gap-2  justify-center">
                      {everyca.map((ceta) => (
                        <div key={ceta.id}>
                          <Link to={`/candidate/${ceta.id}`}>
                            <div className="card lg:w-[250px] md:w-[200px] w-[160px]  h-[130px] bg-[#F6FCF6] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]  relative">
                              <div className=" py-5 px-5">
                                <div className="lg:w-[170px] md:w-[200px] w-[160px]  h-[110px]">
                                  <h2 className="lg:text-[20px] text-[#373A3D] md:text-[20px] text-[14px] leading-[22px] ">
                                    {ceta.name.split('/').join('/ ')}
                                  </h2>
                                  <p className="lg:text-[16px] text-[#7A7C7D] md:text-[16px] text-[14px]  absolute bottom-4">
                                    90+ candidatess
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div></div>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <div className="mt-[67px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-20">
                  <div className="mb-[46px]  ">
                    <h1 className="mx-auto lg:text-[40px] md:text-[40px] text-[30px] font-medium  text-center">
                      Top Cities for {first?.parent_industry_name? first.parent_industry_name : ""}  in Bangladesh
                    </h1>
                  </div>
                  <div className=" lg:p-0 md:p-0 p-5">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-[58px] md:gap-[58px] gap-5  justify-center">
                    {cities.length > 0 && cities.map((b) => 
              <div key={b._id}>
                  <Link to={`/candidate/${b._id}`}>
                  <div className="card lg:w-[250px] md:w-[200px] w-[160px] relative h-[130px] bg-[#F6FCF6] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)] relative">
                          <div className="py-5 px-5">
                            <h2 className="lg:text-[20px] text-[#373A3D] md:text-[20px] text-[14px] leading-[22px]">
                             {b.citiesName}
                            </h2>
                            <p className="lg:text-[16px] text-[#7A7C7D] md:text-[16px] text-[14px] absolute bottom-4">
                              80+ candidatess
                            </p>
                          </div>
                        </div>
                </Link>
              </div>
              )}
                  
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

export default Catagory;
