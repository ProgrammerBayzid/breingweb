import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SearchComponent from "../SearchComponent/SearchComponent";
import Singlecandidate from "./Singlecandidate";
import { useEffect, useState } from "react";
import AppLogo from "../App/AppLogo";
import { useParams } from "react-router-dom";

const Di = (props) => {
  const { name } = useParams();
  const navigate = useNavigate();

 

  const candidates = useLoaderData();
  const candidate = candidates;
  console.log(candidate);

  const first = candidate[0];
  const fa = first?.careerPreference[0];
  const [isActive, setIsActive] = useState(false);
  const [isActivesalary, setIsActivesalary] = useState(false);

  const [resultsFound, setResultsFound] = useState(true);

  const [experince, setExperince] = useState([]);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin_exprience")
      .then((res) => res.json())
      .then((data) => {
        setExperince(data);
        console.log(data);
      });
  }, []);
  console.log(experince);

  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin/salarie")
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
    setActiveButtonE(false);
  };

  // console.log(salaryValue);
  // const handleSalaryClicks = (value) => {
  //   setSalaryValue(value);
  //   setIsActivesalary(value);
  // };
  const [salaryValue, setSalaryValue] = useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("");

  const handleSalaryClick = (value) => {
    if (value === "Negotiable") {
      setSalaryValue("Negotiable");
    } else {
      setSalaryValue(value);
    }
    setIsActivesalary(value);
    setSelectedSalaryRange(value);
    setActiveButton(false);
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
    // if (salaryValue) {
    //   updatedList = updatedList.filter(
    //     (item) =>
    //       item?.careerPreference[0]?.salaray?.min_salary?.salary == salaryValue
    //   );
    // }
    if (selectedSalaryRange) {
      if (selectedSalaryRange === "Negotiable") {
        updatedList = updatedList.filter((item) => {
          const candidateSalary =
            item?.careerPreference[0]?.salaray?.min_salary?.salary;
          return candidateSalary === "Negotiable";
        });
      } else {
        const [minSalary, maxSalary] = selectedSalaryRange.split("-");
        updatedList = updatedList.filter((item) => {
          const candidateSalary = parseFloat(
            item?.careerPreference[0]?.salaray?.min_salary?.salary
          );
          return (
            candidateSalary >= parseFloat(minSalary) &&
            candidateSalary <= parseFloat(maxSalary)
          );
        });
      }
    }

    setItems(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [experienceValue, selectedSalaryRange, salaryValue]);

  const [activeButton, setActiveButton] = useState(false);
  const [activeButtonE, setActiveButtonE] = useState(false);

  const salaryAll = () => {
    setSalaryValue("");
    setSelectedSalaryRange("");
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
    setSelectedSalaryRange("");
  };
  const token = localStorage.getItem("token");

  const [displayCount, setDisplayCount] = useState(6); // Initially, display 3 items

  // Handle the "View More" button click
  const handleViewMoreClick = () => {
    // If token exists, show all items
    if (token && displayCount < items.length) {
      setDisplayCount((prevCount) => prevCount + 10);
    } else {
      // If token doesn't exist, redirect to the login route
      navigate("/recruiters-login");
    }
  };
  const shouldShowViewMoreButton =  displayCount < items.length;
  const ex = [
    {
      functionalname: "Flutter",
    },
    {
      functionalname: "Node JS Engineer",
    },
    {
      functionalname: "Marketing Director",
    },
    {
      functionalname: "Web Full Stack Engineer",
    },
  ];
  
  return (
    <div className="lg:my-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="relative bg-[url(/src/bgimages/candidateupbg.png)] bg-contain	 bg-right bg-no-repeat  lg:pb-[80px] pb-[30px]">
        <p className="text-white text-[1px]">k</p>
        <SearchComponent></SearchComponent>
        <div className="lg:mt-20 mt-5">
          <h1 className="mx-auto text-[#023C5B] lg:text-[40px] md:text-[36px] text-[25px] font-semibold  text-center">
            Hire the Best Professionals across {name}
          </h1>
        </div>
      </div>

      <div className="relative bg-[url(/src/bgimages/ibg.png)] bg-auto	 bg-bottom bg-no-repeat pb-[150px]">
        {candidate.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-0 ">
            {resultsFound ? (
              <div className="lg:col-span-2 mx-auto ">
                {items?.slice(0, displayCount).map((singlecanditade) => (
                  <Singlecandidate
                    key={singlecanditade.id}
                    singlecanditade={singlecanditade}
                  ></Singlecandidate>
                ))}

                {shouldShowViewMoreButton && (
                  <div className="lg:w-[200px] w-[150px] h-[40px] lg:h-[57px] rounded rounded-full bg-[#0077B5] mx-auto lg:mt-24 mt-10">
                    <h1
                      onClick={handleViewMoreClick}
                      className="text-[20px] font-semibold text-center text-white lg:pt-[15px] pt-[7px] cursor-pointer"
                    >
                      {token ? "View More" : "View More"}
                    </h1>
                  </div>
                )}
              </div>
            ) : (
              <p className="lg:col-span-2 lg:h-[400px] flex items-center justify-center font-medium text-[30px] tezt-[#212427]">
                No candidates found
              </p>
            )}

            <div className="lg:ml-0 md:mx-auto mx-auto lg:mt-0 md:mt-0 mt-10">
              <div className="">
                <div className="lg:w-[405px] h-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5 ">
                  <div className="">
                    <div className="flex justify-between gap-x-2 ">
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
                      <button
                        onClick={() => handleSalaryClick("Negotiable")}
                        className={
                          isActivesalary === "Negotiable"
                            ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                            : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                        }
                      >
                        Negotiable
                      </button>
                      <button
                        onClick={() => handleSalaryClick("5K-50K")}
                        className={
                          isActivesalary === "5K-50K"
                            ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                            : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                        }
                      >
                        5K-50K
                      </button>
                      <button
                        onClick={() => handleSalaryClick("50K-100K")}
                        className={
                          isActivesalary === "50K-100K"
                            ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                            : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                        }
                      >
                        50K-100K
                      </button>
                      <button
                        onClick={() => handleSalaryClick("100K-150K")}
                        className={
                          isActivesalary === "100K-150K"
                            ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                            : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                        }
                      >
                        100K-150K
                      </button>
                      <button
                        onClick={() => handleSalaryClick("150K-200K")}
                        className={
                          isActivesalary === "150K-200K"
                            ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                            : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                        }
                      >
                        150K-200K
                      </button>
                      <button
                        onClick={() => handleSalaryClick("200K-250K")}
                        className={
                          isActivesalary === "200K-250K"
                            ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                            : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                        }
                      >
                        200K-250K
                      </button>
                      <button
                        onClick={() => handleSalaryClick("250K-300K")}
                        className={
                          isActivesalary === "250K-300K"
                            ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                            : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                        }
                      >
                        250K-300K
                      </button>
                      <button
                        onClick={() => handleSalaryClick("250K-300K")}
                        className={
                          isActivesalary === "250K-300K"
                            ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                            : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                        }
                      >
                        300K-350K
                      </button>
                      <button
                        onClick={() => handleSalaryClick("250K-300K")}
                        className={
                          isActivesalary === "250K-300K"
                            ? "lg:w-[187px] h-[50px] text-[#0077B5] border border-[#0077B5] bg-white text-[16px] text-[#212427]"
                            : "lg:w-[187px] h-[50px] bg-[#F6FCF6] hover:border border-[#0077B5] hover:text-[#0077B5] hover:bg-white text-[16px] text-[#212427]"
                        }
                      >
                        350K-400K
                      </button>

                    
                    </div>
                  </div>

                  <hr className="my-5"></hr>

                  <div className="">
                  <h1 className="text-[19px] mb-3 font-semibold test-[#212427]">
                      {" "}
                      Most searched Candidates{" "}
                    </h1>
                    {ex.map((e, i) => (
                      <div key={i}>
                        <Link
                          to={`/candidates/${e.functionalname}`}
                        >
                          <p className="mb-2 text-[18px] text-[#212427] font-normal">
                            {e.functionalname}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="lg:h-[400px] flex items-center justify-center font-medium text-[30px] tezt-[#212427]">
            No candidates found
          </p>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <AppLogo></AppLogo>
      </div>
    </div>
  );
};

export default Di;
