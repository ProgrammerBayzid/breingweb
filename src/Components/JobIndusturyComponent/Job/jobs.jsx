import Spinner from "../../Spinner/Spinner";
import job from "../../../assets/logo/job.svg";
import location from "../../../assets/logo/locetion.svg";
import {  useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import SearchComponent from "../../SearchComponent/SearchComponent";

const jobs = () => {
    const [jobIndusturyName, setJobIndusturyName] = useState([]);
    const [isLoding, setIsLoding] = useState(false);
    useEffect(() => {
        fetch("https://rsapp.bringin.io/job_functionalarea/clint",{
          method: 'GET',
          headers: {
              authorization: `bearer ${localStorage.getItem('token')}`
          }
        })
          .then((res) => res.json())
          .then((data) => {
            setIsLoding(true);
            setJobIndusturyName(data.slice(4));
            console.log(data);
          });   
      }, []);


      console.log("s", jobIndusturyName);


      if (isLoding === false) {
        return <Spinner></Spinner>;
      }
    return (
        <div >
      <div>
        <div>
        <SearchComponent></SearchComponent>
          <div className="mt-[67px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="mb-[46px]  ">
              <h1 className="mx-auto text-[40px] text-[#023C5B] font-semibold  text-center">
              Hot job categories
              </h1>
            </div>
           <div         className="relative  lg:bg-[url(/src/bgimages/hotjobhome.png)] bg-auto	 bg-bottom bg-no-repeat"
>
            <div className="flex justify-center lg:pb-[200px]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-[50px]">
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
      </div>
    </div>
    );
};

export default jobs;