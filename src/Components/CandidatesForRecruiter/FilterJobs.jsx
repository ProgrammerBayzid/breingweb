import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

const FilterJobs = ({
  setFilterCandidateModal,
  setItems,
  candidateList,
  setResultsFound,
}) => {
  const [isActiveJobType, setIsActiveJobType] = useState(false);
  const [isActiveEducation, setIsActiveEducation] = useState(false);
  const [isActivesalary, setIsActivesalary] = useState(false);
  const [isActiveExprience, setIsActiveExprience] = useState(false);
  const [isActiveIndustery, setIsActiveIndustery] = useState(false);
  const [JobType, setJobType] = useState(false);
  const [Education, setEducation] = useState(false);
  const [salary, setsalary] = useState(false);
  const [Exprience, setExprience] = useState(false);
  const [Industery, setIndustery] = useState(false);
  const [loding, setloding] = useState(true);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin/jobtype")
      .then((res) => res.json())
      .then((data) => {
        setJobType(data);
        // console.log(data);
        setloding(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/education_lavel")
      .then((res) => res.json())
      .then((data) => {
        setEducation(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin_exprience")
      .then((res) => res.json())
      .then((data) => {
        setExprience(data);
        // console.log(data);
      });
  }, []);
  // console.log(experince);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin/salarie")
      .then((res) => res.json())
      .then((data) => {
        setsalary(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin/industry")
      .then((res) => res.json())
      .then((data) => {
        setIndustery(data);
      });
  }, []);

  const [activeButtons, setActiveButtons] = useState(false);
  const [activeButtonE, setActiveButtonE] = useState(false);
  const [activeButtonjt, setActiveButtonjt] = useState(false);
  const [activeButtoned, setActiveButtoned] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState(false);

  const [experienceValue, setExperienceValue] = useState("");
  // console.log(experienceValue);
  const handleExperienceClick = (value) => {
    if (value === experienceValue) {
      // If it's already selected, deselect it and set values to null
      experienceValue("");
      setIsActiveExprience(false);
    } else {
      setExperienceValue(value);
      setIsActiveExprience(value);
      setActiveButtonE(false);
    }
  };
  const [JobtypeValue, setJobtypeValue] = useState("");
  // console.log(JobtypeValue);
  const handleJobtypeClick = (value) => {
    // Check if the checkbox is already selected
    if (value === JobtypeValue) {
      // If it's already selected, deselect it and set values to null
      setJobtypeValue("");
      setIsActiveJobType(false);
    } else {
      // If it's not selected, select it and update values
      setJobtypeValue(value);
      setIsActiveJobType(value);
      setActiveButtonjt(false);
    }
  };
  const [educationValue, seteducationValue] = useState("");
  // console.log(JobtypeValue);
  const handleEducationClick = (value) => {
    if (value === educationValue) {
      // If it's already selected, deselect it and set values to null
      seteducationValue("");
      setIsActiveEducation(false);
    } else {
      seteducationValue(value);
      setIsActiveEducation(value);
      setActiveButtoned(false);
    }
  };
  const [IndustryValue, setIndustryValue] = useState("");
  // console.log(JobtypeValue);
  const handleIndustryClick = (value) => {
    setIndustryValue(value);
    setIsActiveIndustery(value);
    setActiveButtonId(false);
  };

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
    setActiveButtons(false);
  };

  const applyFilters = () => {
    let updatedList = candidateList;
    // console.log(updatedList);
    // Rating Filter
    if (experienceValue) {
      updatedList = updatedList.filter(
        (item) => item?.userid?.experiencedlevel?.name == experienceValue
      );
    }
    if (JobtypeValue) {
      updatedList = updatedList.filter(
        (item) => item?.careerPreference[0]?.jobtype?.worktype == JobtypeValue
      );
    }
    if (educationValue) {
      updatedList = updatedList.filter(
        (item) => item?.education[0]?.digree?.education?.name == educationValue
      );
    }
    if (IndustryValue) {
      updatedList = updatedList.filter(
        (item) =>
          item?.careerPreference[0]?.functionalarea?.industryid?.industryname ==
          IndustryValue
      );
    }
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
  }, [
    experienceValue,
    JobtypeValue,
    educationValue,
    IndustryValue,
    selectedSalaryRange,
    salaryValue,
  ]);

  const salaryAll = () => {
    setSalaryValue("");
    setSelectedSalaryRange("");
    setIsActivesalary(false);
    setActiveButtons(true);
  };

  const experinceAll = () => {
    setExperienceValue("");
    setIsActiveExprience(false);
    setActiveButtonE(true);
  };
  const jobtypeAll = () => {
    setJobtypeValue("");
    setIsActiveJobType(false);
    setActiveButtonjt(true);
  };
  const educationAll = () => {
    seteducationValue("");
    setIsActiveEducation(false);
    setActiveButtoned(true);
  };
  const industryAll = () => {
    setIndustryValue("");
    setIsActiveIndustery(false);
    setActiveButtonId(true);
  };

  const reset = () => {
    setIsActiveExprience(false);
    setActiveButtonE(false);
    setIsActivesalary(false);
    setActiveButtons(false);
    setExperienceValue("");
    setSalaryValue("");
    setSelectedSalaryRange("");

    setJobtypeValue("");
    setIsActiveJobType(false);
    setActiveButtonjt(false);

    seteducationValue("");
    setIsActiveEducation(false);
    setActiveButtoned(false);

    setIndustryValue("");
    setIsActiveIndustery(false);
    setActiveButtonId(false);
  };

  const handelclear = () => {
    reset();
    setTimeout(() => {
      setFilterCandidateModal(false);
    }, 100); // 1000 milliseconds = 1 second
  };

  return (
    <div className="fixed inset-0 bg-[#090808] bg-opacity-90 flex justify-center items-center z-40 App">
      {loding === true ? (
        <div className="flex justify-center items-center w-[700px] h-[500px] bg-white rounded">
          <ScaleLoader color="#365dd6" size="50" />
        </div>
      ) : (
        <div>
          <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-40 backdrop-blur-[10px]">
            <div className="font-inter bg-white mx-auto rounded-lg w-[360px] h-[500px] md:w-[700px] md:h-[550px] overflow-y-auto">
              <div className="flex gap-8 md:gap-56 pt-6 w-[350px] h-[26px] md:w-[700px]">
                <img
                  src="/images/RI-icons/RI-arrow-left.svg"
                  className="ms-4 mt-1 w-[16px] h-[16px] md:hidden"
                />

                <button className="text-[18px] font-bold text-center ms-72 border border-1 rounded-2xl bg-[#00A0DC] bg-opacity-20 -mb-14 w-[200px] h-[38px] px-4">
                  Filter
                </button>
                <p
                  onClick={handelclear}
                  className="hidden md:block cursor-pointer  me-2 text-[29px]"
                >
                  ✕
                </p>
              </div>
              <div className="flex justify-between mt-12 pt-4 pb-2 px-8 ">
                <h1 className="font-semibold">Workplace Policy</h1>
                <button
                  onClick={reset}
                  className="text-[#0077B5] font-medium text-[18px] border border-1 border-[#0077B5] px-2 rounded-lg"
                >
                  Reset
                </button>
              </div>
              <div className="mb-3  text-[14px] px-8 grid grid-cols-3 gap-y-3 ">
                <div className="flex items-center gap-x-2  ">
                  <div>
                    {" "}
                    <div className="w-[18px] h-[18px] rounded rounded-full border border-[#212427]  flex items-center justify-center">
                      <div
                        onClick={jobtypeAll}
                        className={`w-[12px] h-[12px] cursor-pointer ${
                          activeButtonjt === true
                            ? "rounded rounded-full  bg-blue-500 cursor-pointer"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  <p
                    onClick={jobtypeAll}
                    className={`${
                      activeButtonjt === true
                        ? "  text-blue-500 cursor-pointer"
                        : "cursor-pointer"
                    }`}
                  >
                    All
                  </p>
                </div>
                {JobType.length > 0 ? (
                  <>
                    {JobType.map((jty) => (
                      <div
                        key={jty._id}
                        className="flex items-center gap-x-2  "
                      >
                        <div>
                          {" "}
                          <div className="w-[18px] h-[18px] rounded rounded-full border border-[#212427]  flex items-center justify-center">
                            <div
                              onClick={() => handleJobtypeClick(jty?.worktype)}
                              className={`w-[12px] h-[12px] cursor-pointer ${
                                isActiveJobType === jty?.worktype
                                  ? "rounded rounded-full  bg-blue-500 cursor-pointer"
                                  : ""
                              }`}
                            ></div>
                          </div>
                        </div>

                        <p
                          onClick={() => handleJobtypeClick(jty?.worktype)}
                          className={` ${
                            isActiveJobType === jty?.worktype
                              ? "  text-blue-500 cursor-pointer"
                              : "cursor-pointer"
                          }`}
                        >
                          {jty?.worktype}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <h1 className="font-semibold ms-8 pb-4 mt-5">
                Required Education
              </h1>
              <div className="mx-4 pb-3 text-[14px] ">
                {Education.length > 0 ? (
                  <div className="grid grid-cols-3 gap-y-4 ml-[17px]">
                    <div className="flex items-center gap-x-2  ">
                      <div>
                        {" "}
                        <div className="w-[18px] h-[18px] rounded rounded-full border border-[#212427]  flex items-center justify-center">
                          <div
                            onClick={educationAll}
                            className={`w-[12px] h-[12px] cursor-pointer ${
                              activeButtoned === true
                                ? "rounded rounded-full  bg-blue-500 cursor-pointer"
                                : ""
                            }`}
                          ></div>
                        </div>
                      </div>

                      <p
                        onClick={educationAll}
                        className={`${
                          activeButtoned === true
                            ? "  text-blue-500 cursor-pointer"
                            : "cursor-pointer"
                        }`}
                      >
                        All
                      </p>
                    </div>
                    {Education.map((edu) => (
                      <div
                        key={edu._id}
                        className="flex items-center gap-x-2  "
                      >
                        <div>
                          {" "}
                          <div className="w-[18px] h-[18px] rounded rounded-full border border-[#212427]  flex items-center justify-center">
                            <div
                              onClick={() => handleEducationClick(edu?.name)}
                              className={`w-[12px] h-[12px] cursor-pointer ${
                                isActiveEducation === edu?.name
                                  ? "rounded rounded-full  bg-blue-500 cursor-pointer"
                                  : ""
                              }`}
                            ></div>
                          </div>
                        </div>

                        <p
                          onClick={() => handleEducationClick(edu?.name)}
                          className={` ${
                            isActiveEducation === edu?.name
                              ? "  text-blue-500 cursor-pointer"
                              : "cursor-pointer"
                          }`}
                        >
                          {edu?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <h1 className="font-semibold ms-8 mt-3">
                Offered Salary (Monthly)
              </h1>
              <div className="m-4 text-[14px] grid grid-cols-3 gap-y-1">
                <button
                  onClick={salaryAll}
                  className={
                    activeButtons === true
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mx-4 0 me-4 bg-[#0077B5] text-white"
                      : " rounded-[40px] w-[158px] h-[40px] mx-4 0 me-4 bg-[#212427] bg-opacity-5"
                  }
                >
                  All
                </button>
                <button
                  onClick={() => handleSalaryClick("Negotiable")}
                  className={
                    isActivesalary === "Negotiable"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  Negotiable
                </button>
                <button
                  onClick={() => handleSalaryClick("10K-19K")}
                  className={
                    isActivesalary === "10K-19K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  10K-19K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("20K-29K")}
                  className={
                    isActivesalary === "20K-29K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  20K-29K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("30K-39K")}
                  className={
                    isActivesalary === "30K-39K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  30K-39K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("40K-49K")}
                  className={
                    isActivesalary === "40K-49K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  40K-49K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("50K-59K")}
                  className={
                    isActivesalary === "50K-59K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  50K-59K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("60K-69K")}
                  className={
                    isActivesalary === "60K-69K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  60K-69K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("70K-79K")}
                  className={
                    isActivesalary === "70K-79K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  70K-79K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("80K-89K")}
                  className={
                    isActivesalary === "80K-89K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  80K-89K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("90K-99K")}
                  className={
                    isActivesalary === "90K-99K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  90K-99K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("100K-119K")}
                  className={
                    isActivesalary === "100K-119K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  100K-119K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("120K-139K")}
                  className={
                    isActivesalary === "120K-139K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  120K-139K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("140K-159K")}
                  className={
                    isActivesalary === "140K-159K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  140K-159K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("160K-179K")}
                  className={
                    isActivesalary === "160K-179K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  160K-179K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("180K-199K")}
                  className={
                    isActivesalary === "180K-199K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  180K-199K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("200K-219K")}
                  className={
                    isActivesalary === "200K-219K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  200K-219K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("220K-239K")}
                  className={
                    isActivesalary === "220K-239K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  220K-239K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("240K-279K")}
                  className={
                    isActivesalary === "240K-279K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mb-2 mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mb-2 mx-4 "
                  }
                >
                  240K-279K BDT
                </button>
                <button
                  onClick={() => handleSalaryClick("280K-320K")}
                  className={
                    isActivesalary === "280K-320K"
                      ? "border border-1 border-[#00A0DC] rounded-[40px] w-[158px] h-[40px] mx-4  bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] w-[158px] h-[40px] mx-4 "
                  }
                >
                  280K-320K BDT
                </button>
              </div>
              <h1 className="font-semibold ms-8 pb-3">Required Experience</h1>
              <div className="mx-4 mb-4 text-[14px]">

                {Exprience.length > 0 ? (
                  <div className="grid grid-cols-3 ml-5 gap-y-2 ">
                <div className="flex items-center gap-x-2  ">
                  <div>
                    {" "}
                    <div className="w-[18px] h-[18px] rounded rounded-full border border-[#212427]  flex items-center justify-center">
                      <div
                        onClick={experinceAll}
                        className={`w-[12px] h-[12px] cursor-pointer ${
                          activeButtonE === true
                            ? "rounded rounded-full  bg-blue-500 cursor-pointer"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  <p
                    onClick={experinceAll}
                    className={`${
                      activeButtonE === true
                        ? "  text-blue-500 cursor-pointer"
                        : "cursor-pointer"
                    }`}
                  >
                    Any Experience
                  </p>
                </div>
                    {Exprience.map((ex) => (
                      <div key={ex._id} className="flex items-center gap-x-2  ">
                        <div>
                          {" "}
                          <div className="w-[18px] h-[18px] rounded rounded-full border border-[#212427]  flex items-center justify-center">
                            <div
                              onClick={() => handleExperienceClick(ex?.name)}
                              className={`w-[12px] h-[12px] cursor-pointer ${
                                isActiveExprience === ex?.name
                                  ? "rounded rounded-full  bg-blue-500 cursor-pointer"
                                  : ""
                              }`}
                            ></div>
                          </div>
                        </div>

                        <p
                          onClick={() => handleExperienceClick(ex?.name)}
                          className={` ${
                            isActiveExprience === ex?.name
                              ? "  text-blue-500 cursor-pointer text-[14px]"
                              : "cursor-pointer text-[14px]"
                          }`}
                        >
                          {ex?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <h1 className="font-semibold ms-8 pb-3">Industry</h1>
              <div className="mx-4 text-[14px] flex items-center flex-wrap gap-x-[15px] gap-y-[10px] px-4">
                <button
                  onClick={industryAll}
                  className={
                    activeButtonId === true
                      ? "border border-1 border-[#00A0DC] rounded-[40px] px-[22px] h-[40px] mb-2   bg-[#0077B5] text-white"
                      : "bg-[#212427] bg-opacity-5 rounded-[40px] px-[22px] h-[40px] mb-2 "
                  }
                >
                  Any Industry
                </button>

                {Industery.length > 0 ? (
                  <>
                    {Industery.map((ind) => (
                      <button
                        onClick={() => handleIndustryClick(ind?.industryname)}
                        key={ind._id}
                        className={
                          isActiveIndustery !== ind?.industryname
                            ? "bg-[#212427] bg-opacity-5 rounded-[40px] px-[22px] h-[40px] mb-2 "
                            : "border border-1 border-[#00A0DC] rounded-[40px] px-[22px] h-[40px] mb-2   bg-[#0077B5] text-white"
                        }
                      >
                        {ind?.industryname}
                      </button>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="mt-8 mx-8">
                <button
                  onClick={() => setFilterCandidateModal(false)}
                  className="btn bg-[#0077B5] md:w-[640px] h-[48px] md:mx-auto rounded-lg text-white text-[18px] mb-5"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterJobs;
