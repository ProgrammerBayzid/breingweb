import Spinner from "../../Spinner/Spinner";

import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import SearchComponent from "../../SearchComponent/SearchComponent";

const jobs = () => {
  const [jobIndusturyName, setJobIndusturyName] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  useEffect(() => {
    
    const script = document.createElement("script");

     
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1556748687572177";
    script.async = true;
    script.crossOrigin = "anonymous";

     document.head.appendChild(script);

     return () => {
      document.head.removeChild(script);
    };
  }, []);
  useEffect(() => {
    fetch("https://rsapp.unbolt.co/job_functionalarea/clint", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoding(true);
        setJobIndusturyName(data.slice(4));
        console.log(data);
      });
  }, []);

  console.log("s", jobIndusturyName);
  const [currentPage, SetCurrentPage] = useState(1);
  const recruterPerPage = 12;
  const lastIndex = currentPage * recruterPerPage;
  const firstIndex = lastIndex - recruterPerPage;
  const cata = jobIndusturyName.slice(firstIndex, lastIndex);
  const npage = Math.ceil(jobIndusturyName.length / recruterPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  if (isLoding === false) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div>
        <div>
          <SearchComponent></SearchComponent>
          <div className="lg:mt-[67px] md:mt-[60px] mt-[30px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="mb-[46px]  ">
              <h1 className="mx-auto text-[40px] text-[#023C5B] font-semibold  text-center">
                Hot job categories
              </h1>
            </div>
            <div className="relative  lg:bg-[url(/src/bgimages/hotjobhome.png)] bg-auto	 bg-bottom bg-no-repeat">
              <div className="lg:pb-[200px]">
                <div className="flex justify-center ">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-[50px]">
                    {cata.map((industry) => (
                      <SingleJob key={industry.id} job={industry}></SingleJob>
                    ))}
                  </div>
                </div>
                <div className=" flex justify-between px-10 mt-20 ">
                  <div>
                    <p className="text-[18px] text-[#212427] bg-[#F6FCF6] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]  relative rounded rounded-[5px] h-[30px] px-5 flex items-center">
                      {firstIndex + 1} - {lastIndex} {"  "}of{"  "}
                      {jobIndusturyName.length}
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      {numbers.map((n, i) => (
                        <p
                          key={i}
                          className="text-[18px] text-[#212427] bg-[#F6FCF6] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]  relative rounded rounded-[5px] h-[30px] px-5 flex items-center hover:text-blue-500 cursor-pointer"
                          onClick={() => changePage(n)}
                        >
                          <a
                            href="#"
                            className={currentPage === n ? "text-blue-500" : ""}
                          >
                            {n}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function pevPage() {
    if (currentPage !== 1) {
      SetCurrentPage(currentPage - 1);
    }
  }

  function changePage(newPage) {
    SetCurrentPage(newPage);
  }

  function nextPage() {
    if (currentPage !== npage) {
      SetCurrentPage(currentPage + 1);
    }
  }
};

export default jobs;
