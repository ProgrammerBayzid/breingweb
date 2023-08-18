import AppLogo from "../App/AppLogo";
import useTitle from "../../hooks/useTitle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchComponent from "../SearchComponent/SearchComponent";
import SiCandidats from "./SiCandidats";
import Spinner from "../Spinner/Spinner"

const SearchCandidate = () => {
  useTitle("Candidates - Bringin");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const locationParam = queryParams.get("location");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  const [isLoding, setIsLoding] = useState(false);


  useEffect(() => {
    async function fetchSearchResults() {
      try {
        const apiUrl = `https://rsapp.bringin.io/clint_candidate_search?name=${name}&location=${locationParam}`;
        const response = await axios.get(apiUrl);
        setSearchResults(response.data);
        setIsLoding(true);

      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }

    if (name && locationParam) {
      fetchSearchResults();
    }
  }, [name, locationParam]);



const result = searchResults

  const [isActive, setIsActive] = useState(false);
  const [isActivesalary, setIsActivesalary] = useState(false);
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

  const [items, setItems] = useState(result);
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
    let updatedList = result;
    console.log(updatedList);
    // experiencedlevel Filter
    if (experienceValue) {
      updatedList = updatedList.filter(
        (item) => item?.userid?.experiencedlevel?.name == experienceValue
      );
    }

    // salary Filter
    if (salaryValue) {
      updatedList = updatedList.filter(
        (item) =>
          item?.careerPreference[0]?.salaray?.min_salary?.salary == salaryValue
      );
    }

    setItems(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [experienceValue, salaryValue, result]);

  const [activeButton, setActiveButton] = useState(false);
  const [activeButtonE, setActiveButtonE] = useState(false);

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


  if (isLoding === false) {
    return (
      <div className="">
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div className="my-10 ">
      <div className="mt-20">
        <SearchComponent></SearchComponent>
      </div>
      <div>
          <h1 className="text-center lg:text-[22px] md:text-[20px] text-[20px]  font-semibold mt-[50px]">
            Hire the Best {name? name : "null"} Professionals across {locationParam? locationParam : "null"}, Bangladesh{" "}
          </h1>
        </div>

      <div className="lg:mx-[40px] mx-[10px] my-10 " >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-0 ">
          <div className="lg:col-span-2 mx-auto  ">
            {items.map((singlecanditade) => (
              <SiCandidats
                key={singlecanditade.id}
                singlecanditade={singlecanditade}
              ></SiCandidats>
            ))}

            <div className="w-[200px] h-[57px] rounded rounded-full bg-[#0077B5] mx-auto mt-24">
              <h1 className="text-[20px] font-semibold text-center text-white pt-[15px] cursor-pointer">
                View More
              </h1>
            </div>
          </div>

          <div className="lg:ml-0 md:mx-auto mx-auto lg:mt-0 md:mt-0 mt-20">
            <div className="">
              <div className="lg:w-[405px] h-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5 ">
                <div className="">
                  <div className="flex justify-between">
                    <h1 className="text-[20px] font-semibold mb-[10px]">
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
                          ? "lg:w-[187px] h-[50px] text-[16px] text-[#212427] text-[#0077B5] border border-[#0077B5] bg-white"
                          : "lg:w-[187px] h-[50px] text-[16px] text-[#212427] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white"
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
                              ? "lg:w-[187px] h-[50px] text-[16px] text-[#212427] text-[#0077B5] border border-[#0077B5] bg-white"
                              : "lg:w-[187px] h-[50px] text-[16px] text-[#212427] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white"
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
                          ? "lg:w-[187px] h-[50px] text-[16px] text-[#212427] text-[#0077B5] border border-[#0077B5] bg-white"
                          : "lg:w-[187px] h-[50px] text-[16px] text-[#212427] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white"
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
                              ? "lg:w-[187px] h-[50px] text-[16px] text-[#212427] text-[#0077B5] border border-[#0077B5] bg-white"
                              : "lg:w-[187px] h-[50px] text-[16px] text-[#212427] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white"
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

export default SearchCandidate;
