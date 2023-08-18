import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
// import Spinner from "../../Spinner/Spinner";
const HotJobHome = () => {
  const [jobIndusturyName, setJobIndusturyName] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  useEffect(() => {
    fetch("https://rsapp.bringin.io/job_functionalarea/clint", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoding(true);
        setJobIndusturyName(data.slice(0, 4));
        console.log(data);
      });
  }, []);

  // if (isLoding === false) {
  //   return <Spinner></Spinner>;
  // }
  return (
      <div
        className="relative lg:bg-[url(/src/bgimages/hotjobhome.png)] bg-auto	 bg-bottom bg-no-repeat"
      >
        <div className="lg:mx-[40px] mx-[10px] md:mx-[10px] lg:h-[550px]">
            {/* <h1 className="text-white">d</h1> */}
          <div className="lg:mt-[100px] md:mt-[100px] mt-[50px]">
            <div className="relative">
              <h1 className=" text-center lg:text-[38px]  md:text-[32px] text-[22px] font-bold text-[#023C5B]">
              Hot job categories <span></span>
              </h1>
             <div className="hidden lg:block md:block ">
             <Link to="/jobindustry">
                <button className="absolute top-4 right-0  text-[16px] font-medium text-[#023C5B] border rounded rounded-[10px]  w-[60px] h-[35px] hover:bg-[#0077B5] hover:text-white">
                  More
                </button>
              </Link>
             </div>
            </div>
          </div>
          <div className="">
            <div className=" flex justify-center">
              <div>
                <div className="mt-[25px] md:mt-[60px] lg:mt-[60px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                  <div className=" ">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-[30px] md:gap-[30px] gap-[20px]  justify-center">
                      {jobIndusturyName.map((industry) => (
                        <SingleJob key={industry.id} job={industry}></SingleJob>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block lg:hidden md:hidden lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center mg:mt-0 md:mt-0 mt-7">
             <Link to="/jobindustry">
                <button className="  text-[16px] font-medium text-[#023C5B] border rounded rounded-[10px]  w-[100px] h-[35px] hover:bg-[#0077B5] hover:text-white">
                  More
                </button>
              </Link>
             </div>
        </div>
      </div>
  );
};

export default HotJobHome;
