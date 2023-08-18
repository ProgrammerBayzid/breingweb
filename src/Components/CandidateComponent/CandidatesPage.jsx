import { useLoaderData } from "react-router-dom";
import Singlecandidate from "./Singlecandidate";

import useTitle from "../../hooks/useTitle";
import { useEffect, useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import AppLogo from "../App/AppLogo";

const CandidatesPage = () => {
  useTitle("Candidates - Bringin");

  const candidates = useLoaderData();
  const candidate = candidates;
  console.log(candidates);
  const first = candidate[0];
  const fa = first?.careerPreference[0];
  const [isActive, setIsActive] = useState(false);
  const [isActivesalary, setIsActivesalary] = useState(false);

  const [resultsFound, setResultsFound] = useState(true);

  const [experince, setExperince] = useState([]);

  useEffect(() => {
    fetch("https://rsapp.bringin.io/admin_exprience")
      .then((res) => res.json())
      .then((data) => {
        setExperince(data);
        console.log(data);
      });
  }, []);
  console.log(experince);

  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    fetch("https://rsapp.bringin.io/admin/salarie")
      .then((res) => res.json())
      .then((data) => {
        setSalaries(data);
        console.log(data);
      });
  }, []);
  console.log(salaries);

  const salary = salaries;
  console.log(salary);

  console.log(fa);

  console.log(candidate);

  const [items, setItems] = useState(candidate);
  console.log(items);

  const [experienceValue, setExperienceValue] = useState("");
  console.log(experienceValue);
  const handleExperienceClick = (value) => {
    setExperienceValue(value);
    setIsActive(value);
  };

  const [salaryValue, setSalaryValue] = useState("");
  console.log(salaryValue);
  const handleSalaryClick = (value) => {
    setSalaryValue(value);
    setIsActivesalary(value);
  };
  const applyFilters = () => {
    let updatedList = candidate;
    console.log(updatedList);
    // Rating Filter
    if (experienceValue) {
      updatedList = updatedList.filter(
        (item) => item?.userid?.experiencedlevel?.name == experienceValue
      );
    }

    // Category Filter
    if (salaryValue) {
      updatedList = updatedList.filter(
        (item) =>
          item?.careerPreference[0]?.salaray?.min_salary?.salary == salaryValue
      );
    }

    setItems(updatedList);

    // !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [experienceValue, salaryValue]);

  const [activeButton, setActiveButton] = useState(false);
  const [activeButtonE, setActiveButtonE] = useState(false);

  // const handleButtonClickAll = () => {
  //   setItems(candidate)

  // };

  const salaryAll = () => {
    setSalaryValue("");
    setIsActivesalary(false);
    setActiveButton(true);
  };

  const experinceAll = () => {
    setExperienceValue("");
    setIsActive(false);
    setActiveButtonE(true);
  };

  const reset = () => {
    setIsActive(false);
    setActiveButtonE(false);
    setIsActivesalary(false);
    setActiveButton(false);
    setExperienceValue("");
    setSalaryValue("");
  };

  return (
    <div className="my-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="relative bg-[url(/src/bgimages/candidateupbg.png)] bg-contain	 bg-right bg-no-repeat  pb-[80px]">
        <p className="text-white text-[1px]">k</p>
        <SearchComponent></SearchComponent>
        <div className="mt-20">
          <h1 className="mx-auto text-[#023C5B] lg:text-[40px] md:text-[36px] text-[30px] font-semibold  text-center">
            Hire the{" "}
            {fa?.functionalarea?.functionalname
              ? fa?.functionalarea?.functionalname
              : "Not Found"}{" "}
            Professionals across Bangladesh
          </h1>
        </div>
      </div>

      <div className="relative bg-[url(/src/bgimages/ibg.png)] bg-auto	 bg-bottom bg-no-repeat my- pb-[150px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-0 ">
          <div className="lg:col-span-2 mx-auto ">
            {items?.map((singlecanditade) => (
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
              <div className="lg:w-[405px] h-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5 ">
                <div className="">
                  <div className="flex justify-between">
                    <h1 className="text-[20px] font-semibold mb-[10px] text-[16px] text-[#212427]">
                      Required Experience
                    </h1>
                    <p
                      onClick={reset}
                      className="text-[#00A0DC] text-[16px] font-semibold cursor-pointer"
                    >
                      Reset
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={experinceAll}
                      className={
                        activeButtonE
                          ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white "
                          : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white"
                      }
                    >
                      Any Experience
                    </button>
                    {experince.map((exp, i) => {
                      return (
                        <button
                          key={i}
                          onClick={() => handleExperienceClick(exp?.name)}
                          className={
                            isActive == exp?.name
                              ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427] "
                              : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                          }
                        >
                          {exp?.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <hr className="my-5"></hr>
                <div className="">
                  <h1 className="text-[20px] font-semibold ">Salary</h1>
                  <div className="grid grid-cols-2 gap-4 mt-[10px]">
                    <button
                      onClick={salaryAll}
                      className={
                        activeButton
                          ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                          : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                      }
                    >
                      All
                    </button>

                    {salary.map((s, i) => {
                      return (
                        <button
                          key={i}
                          onClick={() => handleSalaryClick(s?.salary)}
                          className={
                            isActivesalary == s?.salary
                              ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                              : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                          }
                        >
                          {s?.salary}
                          {s?.salary == "Negotiable" ? "" : "-"}
                          {s?.salary == "Negotiable" ? "" : s?.salary + 5}
                          {s?.salary == "Negotiable" ? "" : "K BDT"}
                        </button>
                      );
                    })}
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
                      <p className="mb-3 text-[18px] text-[#212427]">Flutter Developer</p>
                      <p className="mb-3 text-[18px] text-[#212427]">Sales executive</p>
                      <p className="mb-3 text-[18px] text-[#212427]">HR Executive</p>
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
