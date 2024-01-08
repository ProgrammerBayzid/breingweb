import { useEffect, useRef, useState } from "react";

import {  useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ExperticeAreaSelectForJobPost from "../RecruiterloginComponent/JobPost/ExperticeAreaSelectForJobPost";
import JobDecription from "../RecruiterloginComponent/JobPost/JobDecription";
import JobSalarey from "../RecruiterloginComponent/JobPost/JobSalarey";
import AddSkill from "../RecruiterloginComponent/JobPost/AddSkill";
import SkillAddError from "../RecruiterloginComponent/JobPost/SkillAddError";
import e from "../../../public/images/RI-icons/switch-job.png";
import CompanyLocation from "../RecruiterloginComponent/CompanyLocation";
import JobLocationModal from "../RecruiterloginComponent/JobPost/JobLocationModal";
import useAuth from "../RecruterPrivetRoute/Context/useAuth";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const ManageJobDetailsEdit = ({ google }) => {
  const jobdetails = useLoaderData();

  const handleGoBack = () => {
    window.history.back(); // This will navigate back one step in the browser's history
  };
  console.log(jobdetails);

  const {
    userid,
    experience,
    company,
    expertice_area,
    job_description,
    companyname,
    job_status,
    job_title,
    jobtype,
    postdate,
    salary,
    job_location,
    _id,
  } = jobdetails;
const jobDescriptionArray = JSON.parse(job_description);
const quillContent = {
  ops: jobDescriptionArray.map((item) => ({
    insert: item.insert,
    attributes: item.attributes || {},
  })),
};
const converter = new QuillDeltaToHtmlConverter(quillContent.ops, {});
const html = converter.convert();

  const inputRef = useRef(null);

  useEffect(() => {
    // Event listener function to close the dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // Click occurred outside of the input element
        // setjobTypeModalOpen(false);
        // setexpriencesModalOpen(false);
        // seteducationModalOpen(false);
      }
    };

    // Attach the event listener to the document body
    document.body.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [jobTypeModalOpen, setjobTypeModalOpen] = useState(false);
  const [expriencesModalOpen, setexpriencesModalOpen] = useState(false);
  const [educationModalOpen, seteducationModalOpen] = useState(false);

  const [jobType, setJobtype] = useState([]);
  const [token, setToken] = useState(""); // State to store the token

  useEffect(() => {
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");
    const stringWithoutQuotes = storedToken.replace(/"/g, "");

    console.log(stringWithoutQuotes); // Replace "yourTokenKey" with the actual key you used to store the token

    if (stringWithoutQuotes) {
      // If a token is found in localStorage, set it in the component's state
      setToken(stringWithoutQuotes);
    }

    fetch("https://rsapp.unbolt.co/jobtype", {
      headers: {
        Authorization: `Bearer ${token}`, // Use the token in the Authorization header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setJobtype(data);
        console.log(data);
      });
  }, [token]);

  const [expriencesdata, setexpriencesdata] = useState([]);

  useEffect(() => {
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");
    const stringWithoutQuotes = storedToken.replace(/"/g, "");

    console.log(stringWithoutQuotes); // Replace "yourTokenKey" with the actual key you used to store the token

    if (stringWithoutQuotes) {
      // If a token is found in localStorage, set it in the component's state
      setToken(stringWithoutQuotes);
    }

    fetch("https://rsapp.unbolt.co/experiencelist", {
      headers: {
        Authorization: `Bearer ${token}`, // Use the token in the Authorization header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setexpriencesdata(data);
        console.log(data);
      });
  }, [token]);
  console.log(expriencesdata);

  const [educationData, seteducationData] = useState([]);

  useEffect(() => {
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");
    const stringWithoutQuotes = storedToken.replace(/"/g, "");

    console.log(stringWithoutQuotes); // Replace "yourTokenKey" with the actual key you used to store the token

    if (stringWithoutQuotes) {
      // If a token is found in localStorage, set it in the component's state
      setToken(stringWithoutQuotes);
    }

    fetch("https://rsapp.unbolt.co/education_lavel", {
      headers: {
        Authorization: `Bearer ${token}`, // Use the token in the Authorization header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        seteducationData(data);
        console.log(data);
      });
  }, [token]);
  console.log(educationData);

  const [experticeAreaModalOpen, setexperticeAreaModalOpen] = useState(false);
  const [jobdecriptionModalOpen, setjobdecriptionModalOpen] = useState(false);
  const [salaryModalOpen, setsalaryModalOpen] = useState(false);
  const [skillModalOpen, setskillModalOpen] = useState(false);

  const toggleDrop = () => {
    setjobTypeModalOpen(true);
    console.log("click");
  };
  console.log(jobTypeModalOpen);
  const handelGetJobType = (worktype, id) => {
    setjobeTypename(worktype);
    setjobeTypeId(id);
    setjobTypeModalOpen(false);
  };

  const handelExprienceType = (name, id) => {
    setexpriences(name);
    setexpriencesID(id);
    setexpriencesModalOpen(false);
  };
  const handeleducationType = (name, id) => {
    seteducation(name);
    seteducationID(id);
    seteducationModalOpen(false);
  };

  const toggleDropExprience = () => {
    setexpriencesModalOpen(true);
  };
  const toggleDropEducation = () => {
    seteducationModalOpen(true);
  };

  const [jobeTypeId, setjobeTypeId] = useState(jobdetails?.jobtype?._id);
  const [jobeTypename, setjobeTypename] = useState(
    jobdetails?.jobtype?.worktype
  );
  const [jobTitle, setJobTitle] = useState(jobdetails?.job_title || "");
  const [experticeArea, setexperticeArea] = useState(
    jobdetails?.expertice_area?.functionalname || ""
  );
  const [experticeAreaCatagoryID, setexperticeAreaCatagoryID] = useState(
    jobdetails?.expertice_area?.categoryid?._id || null
  );
  const [experticeAreaID, setexperticeAreaID] = useState(
    jobdetails?.expertice_area?._id || null
  );
  const [jobdeceription, setjobdeceription] = useState(
    jobdetails?.job_description || ""
  );
  console.log("jobdeceription",jobdeceription.ops);
  const [jobdeceriptionHtml, setjobdeceriptionHtml] = useState("");
  const [expriences, setexpriences] = useState(
    jobdetails.experience?.name || ""
  );
  const [expriencesID, setexpriencesID] = useState(
    jobdetails.experience?._id || null
  );
  const [education, seteducation] = useState(jobdetails.education?.name || "");
  const [educationID, seteducationID] = useState(
    jobdetails.education?._id || null
  );
  const [maxsalary, setmaxsalary] = useState(
    jobdetails?.salary?.max_salary?.salary || ""
  );
  const [maxsalaryID, setmaxsalaryID] = useState(
    jobdetails?.salary?.max_salary?._id || null
  );
  const [minsalary, setminsalary] = useState(
    jobdetails?.salary?.min_salary?.salary || ""
  );
  const [minsalaryID, setminsalaryID] = useState(
    jobdetails?.salary?.min_salary?._id || null
  );
  const [skill, setSkill] = useState(jobdetails.skill || []);
  const [remote, setRemote] = useState(jobdetails?.remote || false);
  console.log(expriences, expriencesID);
  console.log("catagori id", experticeAreaCatagoryID);

  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const handleAddSkill = () => {
    if (experticeArea === "") {
      // If experticeArea is empty, show the error popup
      setShowErrorPopup(true);
      // alert("Please fill in the Expertise Area before adding a skill.");
    } else {
      setskillModalOpen(true);
      // Proceed to add the skill
      // ... your code to add the skill ...
    }
  };
  console.log(remote);
  const [jobstatustype, setjobstatustype] = useState(
    jobdetails?.job_status_type || 1
  );
  console.log(jobstatustype);

  const handelJobstatus = () => {
    setjobstatustype(jobstatustype === 1 ? 2 : 1);
  };

  const [openLocationDropdown, setOpenLocationDropdown] = useState(false);

  const [isModalOpenJobLocation, setIsModalOpenJobLocation] = useState(false);
  const handleInputClick = () => {
    setIsModalOpenJobLocation(true);
  };
  const [locationName, setLocationName] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const handleMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    setSelectedLocation({ lat, lng });
    setLocationName(""); // Clear location name when clicking on the map
    console.log(`Latitude: ${lat}, Longitude: ${lng}`); // Log lat and lng
  };
  const [locationoptional, setlocationoptional] = useState("");
  const [locationopen, setLocationOpen] = useState(false);
  const [selectedcityname, setSelectedcityname] = useState("");
  const [selectedClickDivision, setSelectedClickDivision] = useState("");
  const [selectedClickDivisionID, setSelectedClickDivisionID] = useState(null);
  console.log(selectedClickDivisionID);
  const [selectedcityID, setSelectedcityID] = useState(null);
  const handleLocationClick = () => {
    setLocationOpen(true);
  };

  const [defaultSkill, setdefaultSkill] = useState([]);
  const [skilltype, setskilltype] = useState([]);

  useEffect(() => {
    // Function to fetch the recruiter's profile
    const fetchRecruiterProfile = (token) => {
      if (expertice_area.categoryid !== null) {
        fetch(
          `https://rsapp.unbolt.co/default_skill?categoryid=${expertice_area.categoryid?._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((res) => {
            if (res.status === 401) {
              console.log("error");
            }
            return res.json();
          })
          .then((data) => {
            if (data) {
              setdefaultSkill(data);
              data;
            }
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          })
          .finally(() => {
            // setIsLoading(false); // Mark the loading as complete
          });
      }
    };

    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      fetchRecruiterProfile(stringWithoutQuotes);
    } else {
      // setIsLoading(false);
    }
  }, [experticeAreaCatagoryID]);

  const handleAddDefaultSkill = (selectedSkill) => {
    if (skill.length < 5) {
      // Check if the selectedSkill is not already in the skill array
      if (!skill.includes(selectedSkill)) {
        setSkill([...skill, selectedSkill]);
      } else {
        alert("Skill already added.");
      }
    } else {
      alert("You can only add up to 5 skills.");
    }
  };

  const handleRemoveSkills = (functionalname) => {
    // Remove the skill
    setSkill(skill.filter((skil) => skil !== functionalname));
  };
  const handleRemoveSkill = (index) => {
    // Create a new array without the skill at the specified index
    const updatedSkillt = skilltype.filter((i) => i !== index);
    const updatedSkill = skill.filter((i) => i !== index);
    setskilltype(updatedSkillt);
    setSkill(updatedSkill);
  };

  const navigate = useNavigate();
  const onSubmit = () => {
    const postData = {
      job_title: jobTitle,
      expertice_area: experticeAreaID,
      job_description: jobdeceriptionHtml === "" ? job_description : `${JSON.stringify(jobdeceription.ops)}`,
      experience: expriencesID,
      education: educationID,
      salary: {
        min_salary: minsalaryID,
        max_salary: maxsalaryID,
      },
      job_status_type: jobstatustype,
      company: companyValue._id,
      skill: skill,
      jobtype: jobeTypeId,
      job_location: {
        lat: selectedLocation === null? job_location?.lat : selectedLocation ? selectedLocation.lat : null,
        lon:  selectedLocation === null? job_location?.lon :  selectedLocation ? selectedLocation.lng : null,
        formet_address: locationName === ""?job_location?.formet_address:  locationName,
        locationoptional: locationoptional === ""?  job_location?.locationoptional :locationoptional,
        divisiondata: selectedClickDivisionID === null ?job_location?.divisiondata?._id : selectedClickDivisionID ,
      },
      remote: remote,
      companyname: companyValue?.legal_name,
    };
    console.log(postData);

    const token = localStorage.getItem("token");
    const tokenWithoutQuotes = token.replace(/"/g, "");

    fetch(`https://rsapp.unbolt.co/job_post_update?jobid=${jobdetails?._id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenWithoutQuotes}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.text(); // Read the response as text
      })
      .then((result) => {
        console.log("Response Body:", result); // Log the response body
        // Log the response body
        navigate("/dashboard/recruiter/manage-jobs");
        try {
          const jsonResponse = JSON.parse(result); // Attempt to parse as JSON
          console.log(jsonResponse);
          // ...rest of your code
        } catch (jsonError) {
          console.error("JSON Parsing Error:", jsonError);
        }
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
      });
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const recruter = useAuth();
  const recruterDetails = recruter.recruter;

  const [companyValue, setcompanyValue] = useState([]);

  useEffect(() => {
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");
    const stringWithoutQuotes = storedToken.replace(/"/g, "");

    console.log(stringWithoutQuotes); // Replace "yourTokenKey" with the actual key you used to store the token

    if (stringWithoutQuotes) {
      // If a token is found in localStorage, set it in the component's state
      setToken(stringWithoutQuotes);
    }

    fetch("https://rsapp.unbolt.co/company", {
      headers: {
        Authorization: `Bearer ${token}`, // Use the token in the Authorization header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setcompanyValue(data);
        console.log(data);
      });
  }, [token]);

  const onChangeRemote = () => {
    setRemote(!remote);
  };

  // const handleRemoveSkill = (index) => {
  //   // Create a new array without the skill at the specified index
  //   const updatedSkill = skill.filter((_, i) => i !== index);
  //   setSkill(updatedSkill);
  // };
  const skillCountText = `${skill.length}`;

  return (
    <div className="w-full App font-inter">
      <div className="lg:flex md:flex  ">
        <div className=" pb-10">
          <div className="lg:w-[700px] bg-white  pb-5 border border-[2px] rounded rounded-[10px] p-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="flex justify-between">
                  <img
                    onClick={handleGoBack}
                    className="cursor-pointer"
                    src="/images/tircompany.svg"
                  />

                  <div className="flex gap-x-7">
                    <p className="text-[#00A0DC] font-normal text-[16px] underline">
                      Need Help?
                    </p>
                    <button
                      type="submit"
                      className="w-[55px] h-[28px] bg-[#0077B5] rounded rounded-[5px] text-white font-medium text-[16px] "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="mt-4">
                    <div className="flex justify-between relative items-center border h-[45px] border-[#212427] border-opacity-80 px-5 rounded ">
                      <div className="flex gap-x-2 items-center">
                        <h3 className="text-[#212427] text-[17px] font-medium">
                          Post a
                        </h3>
                        <p className="text-[#212427] text-[17px] font-medium">
                          {jobeTypename}
                        </p>

                        <h3 className="text-[#212427] text-[17px] font-medium">
                          Job
                        </h3>
                      </div>

                      <div className="" ref={inputRef}>
                        <div className="flex items-center gap-x-2">
                          <img
                            onClick={toggleDrop}
                            className="cursor-pointer"
                            src={e}
                          />
                          <p
                            onClick={toggleDrop}
                            className="text-[#212427] text-opacity-80 text-[16px] font-medium cursor-pointer"
                          >
                            Switch Job Type
                          </p>
                        </div>

                        <div className=" absolute z-40 mt-3 ">
                          {jobTypeModalOpen && (
                            <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[190px] h-[210px] pb-3 pt-2  overflow-auto">
                              {jobType.map((job) => (
                                <div
                                  key={job._id}
                                  onClick={() => {
                                    // console.log(
                                    //   "Suggestion Clicked:",
                                    //   job.functionalname
                                    // );
                                    handelGetJobType(job.worktype, job._id);
                                  }}
                                  className="suggestion-item "
                                >
                                  <div className="hover:bg-[#0077B5] hover:text-white mt-2 pl-5">
                                    <p className="text-[16px] text-[#212427] hover:text-white text-opacity-70 mb-2 cursor-pointer  mx-3">
                                      {job.worktype}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div></div>

                  <div className="my-6">
                    <p className="text-[#212427] text-opacity-80 text-[16px] font-light ">
                      Job Ttitle
                    </p>
                    <input
                      placeholder="Add job title"
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      
                      readOnly
                      className="focus:outline-none placeholder:text-[16px] placeholder:text-opacity-95 placeholder:text-[#212427]  input  w-full mb-[5px] h-[40px] border border-[#212427] border-opacity-70 rounded pl-3"
                    />
                  </div>
                  <div className="mt-3 relative">
                    <p className="text-[#212427] text-opacity-80 text-[16px] font-light ">
                      Expertise Area
                    </p>

                    {experticeArea === "" ? (
                      <p
                        // onClick={() => setexperticeAreaModalOpen(true)}
                        className="text-[16px] text-[#212427] text-opacity-80 font-thin cursor-pointer"
                      >
                        e.g: Web Developer
                      </p>
                    ) : (
                      <p
                        // onClick={() => setexperticeAreaModalOpen(true)}
                        className="text-[16px] text-[#212427] font-semibold"
                      >
                        {experticeArea}
                      </p>
                    )}
                    <img
                      // onClick={() => setexperticeAreaModalOpen(true)}
                      src="/images/companyIIn.svg"
                      className="absolute cursor-pointer inset-y-0 right-3 top-[45px] transform -translate-y-1/2 h-[15px] w-[15px] "
                    />

                    <div>
                      {experticeAreaModalOpen && (
                        <div className="map-modal">
                          <ExperticeAreaSelectForJobPost
                            setexperticeAreaModalOpen={
                              setexperticeAreaModalOpen
                            }
                            setexperticeArea={setexperticeArea}
                            setexperticeAreaID={setexperticeAreaID}
                            experticeArea={experticeArea}
                            setexperticeAreaCatagoryID={
                              setexperticeAreaCatagoryID
                            }
                            experticeAreaCatagoryID={experticeAreaCatagoryID}
                          ></ExperticeAreaSelectForJobPost>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 relative">
                    <p className="text-[#212427] text-opacity-80 text-[16px] font-light ">
                      Job Descriptions
                    </p>

                    {jobdeceriptionHtml === "" ? (
                      <p
                        onClick={() => setjobdecriptionModalOpen(true)}
                        className="text-opacity-80 text-[#212427] text-[16px] font-medium"
                      
                        dangerouslySetInnerHTML={{
                          __html: html.length > 25
                            ? html.slice(0, 25) + "....."
                            : html
                        }}
                      >
                      </p>
                    ) : (
                      <p
                        onClick={() => setjobdecriptionModalOpen(true)}
                        className="text-opacity-80 text-[#212427] text-[16px] font-medium"
                      
                        // dangerouslySetInnerHTML={{
                        //   __html: html.length > 25
                        //     ? html.slice(0, 25) + "....."
                        //     : html
                        // }}
                      
                      >
                       {jobdeceriptionHtml.length > 25
                        ? jobdeceriptionHtml.slice(0, 25) + "....."
                        : jobdeceriptionHtml}
                      </p>
                    )}

                    <img
                      onClick={() => setjobdecriptionModalOpen(true)}
                      src="/images/companyIIn.svg"
                      className="absolute cursor-pointer inset-y-0 right-3 top-[43px] transform -translate-y-1/2 h-[15px] w-[15px] "
                    />
                    <div>
                      {jobdecriptionModalOpen && (
                        <div>
                          <JobDecription
                            setjobdecriptionModalOpen={
                              setjobdecriptionModalOpen
                            }
                            setjobdeceription={setjobdeceription}
                            jobdeceription={jobdeceription}
                            jobdeceriptionHtml={jobdeceriptionHtml}
                            setjobdeceriptionHtml={setjobdeceriptionHtml}
                            html={html}
                          ></JobDecription>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-[#212427] text-opacity-80 text-[16px] font-light ">
                      Job Requirements
                    </p>
                    <div className="h-[70px] bg-white border border-[#212427] border-opacity-20 rounded rounded-[5px] ">
                      <div className="flex justify-around  mt-2">
                        <div className="flex justify-center relative">
                          <div className="" ref={inputRef}>
                            <p className="text-[16px] font-normal text-[#212427] text-center">
                              Experience
                            </p>
                            <p
                              onClick={toggleDropExprience}
                              className="text-[14px] font-normal text-[#212427]  mt-1 text-center cursor-pointer"
                            >
                              {expriences === "" ? (
                                <p
                                  onClick={toggleDropExprience}
                                  className="text-[14px] font-normal text-[#212427] text-opacity-70 mt-1 text-center cursor-pointer"
                                >
                                  Select
                                </p>
                              ) : (
                                expriences
                              )}
                            </p>
                            <div className="-ml-[50px] absolute z-40 mt-[15px]">
                              {expriencesModalOpen && (
                                <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[220px] h-[210px] pb-3 pt-2  overflow-auto">
                                  {expriencesdata.map((exprien) => (
                                    <div
                                      key={exprien._id}
                                      onClick={() => {
                                        // console.log(
                                        //   "Suggestion Clicked:",
                                        //   exprien.functionalname
                                        // );
                                        handelExprienceType(
                                          exprien.name,
                                          exprien._id
                                        );
                                      }}
                                      className="suggestion-item "
                                    >
                                      <div className="hover:bg-[#0077B5] hover:text-white mt-2 pl-5">
                                        <p className="text-[16px] text-[#212427] hover:text-white text-opacity-70 mb-2 cursor-pointer  mx-3">
                                          {exprien.name}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex justify-center relative "
                          ref={inputRef}
                        >
                          <div>
                            <p className="text-[16px] font-normal text-[#212427] text-center">
                              Education
                            </p>
                            <p
                              onClick={toggleDropEducation}
                              className="text-[14px] font-normal text-[#212427]  mt-1 text-center cursor-pointer"
                            >
                              {education === "" ? (
                                <p
                                  onClick={toggleDropEducation}
                                  className="text-[14px] font-normal text-[#212427] text-opacity-70 mt-1 text-center cursor-pointer"
                                >
                                  Select
                                </p>
                              ) : (
                                education
                              )}
                            </p>
                          </div>
                          <div className="mt-[65px]">
                            <div className="-ml-[100px] absolute z-40">
                              {educationModalOpen && (
                                <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[220px] h-[210px] pb-3 pt-2  overflow-auto">
                                  {educationData.map((edu) => (
                                    <div
                                      key={edu._id}
                                      onClick={() => {
                                        // console.log(
                                        //   "Suggestion Clicked:",
                                        //   edu.functionalname
                                        // );
                                        handeleducationType(edu.name, edu._id);
                                      }}
                                      className="suggestion-item "
                                    >
                                      <div className="hover:bg-[#0077B5] hover:text-white mt-2 pl-5">
                                        <p className="text-[16px] text-[#212427] hover:text-white text-opacity-70 mb-2 cursor-pointer  mx-3">
                                          {edu.name}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div>
                            <p className="text-[16px] font-normal text-[#212427] text-center">
                              Salary
                            </p>

                            <p
                              onClick={() => setsalaryModalOpen(true)}
                              className="text-[14px] font-normal text-[#212427]  mt-1 text-center cursor-pointer"
                            >
                              {minsalary === "" && maxsalary === "" ? (
                                <p
                                  onClick={() => setsalaryModalOpen(true)}
                                  className="text-[14px] font-normal text-[#212427] text-opacity-70 mt-1 text-center cursor-pointer"
                                >
                                  Select
                                </p>
                              ) : (
                                <>
                                  {" "}
                                  {minsalary}K-{maxsalary}K BDT
                                </>
                              )}
                            </p>

                            <div>
                              {salaryModalOpen && (
                                <JobSalarey
                                  setsalaryModalOpen={setsalaryModalOpen}
                                  setmaxsalary={setmaxsalary}
                                  maxsalary={maxsalary}
                                  setmaxsalaryID={setmaxsalaryID}
                                  maxsalaryID={maxsalaryID}
                                  setminsalary={setminsalary}
                                  minsalary={minsalary}
                                  setminsalaryID={setminsalaryID}
                                  minsalaryID={minsalaryID}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="mt-8 relative">
                      <p className="text-[#212427] text-opacity-80 text-[16px] font-light ">
                        Required Location
                      </p>
                      <input
                        placeholder="Describe key responsibilities, skills & oth..."
                        type="text"
                        value={locationName || job_location?.formet_address}
                        className="focus:outline-none placeholder:text-[16px] placeholder:text-opacity-80 text-opacity-80 text-[16px] placeholder:text-[#212427] text-[#212427] pl-0   placeholder:font-medium font-medium border-white  input  w-full mb-[5px] h-[30px] border border-[2px] rounded "
                      />
                      {openLocationDropdown === true ? (
                        <>
                          <img
                            onClick={() => setOpenLocationDropdown(false)}
                            src="/images/companyIIn.svg"
                            className="absolute -rotate-90 cursor-pointer inset-y-0 right-3 top-[43px] transform -translate-y-1/2 h-[15px] w-[15px] "
                          />{" "}
                        </>
                      ) : (
                        <>
                          <img
                            onClick={() => setOpenLocationDropdown(true)}
                            src="/images/companyIIn.svg"
                            className="absolute rotate-90 cursor-pointer inset-y-0 right-3 top-[43px] transform -translate-y-1/2 h-[15px] w-[15px] "
                          />{" "}
                        </>
                      )}
                    </div>

                    <div className=" absolute z-40 mt-3 w-full bg-white">
                      {openLocationDropdown === true && (
                        <div className="border border-[#212427] border-opacity-70 rounded py-2 px-1">
                          <div>
                            <div className="relative w-full  ">
                              <p className="text-[14px] fonrmal text-[#212427]  absolute left-3 top-1 ">
                                Job Location
                              </p>
                              <div className="" onClick={handleInputClick}>
                                <input
                                  placeholder="Select location from the google map"
                                  type="text"
                                  // value={selectedLocation ? `Lat: ${selectedLocation.lat}, Lng: ${selectedLocation.lng}` : ''}
                                  value={
                                    locationName || job_location?.formet_address
                                  }
                                  className="focus:outline-none cursor-pointer placeholder:text-[#212427] border-opacity-80 rounded placeholder:text-opacity-70  input pl-3 pt-4 w-full mb-[5px] h-[60px] "
                                />

                                {locationName === "" ||
                                job_location?.formet_address === null ? (
                                  <>
                                    <img
                                      src="/images/companyIIn.svg"
                                      className="absolute cursor-pointer inset-y-0 right-3 top-2/3 transform -translate-y-1/2 h-[15px] w-[15px] "
                                    />
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <img
                                      src="/images/companyLoI.svg"
                                      className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                                    />
                                  </>
                                )}
                              </div>
                              {isModalOpenJobLocation && (
                                <div className="map-modal">
                                  <JobLocationModal
                                    google={google}
                                    handleMapClick={handleMapClick}
                                    selectedLocation={selectedLocation}
                                    setIsModalOpenJobLocation={
                                      setIsModalOpenJobLocation
                                    }
                                    setSelectedLocation={setSelectedLocation}
                                    setLocationName={setLocationName}
                                  ></JobLocationModal>
                                </div>
                              )}
                            </div>
                            <img
                              src="/images/companyLoI.svg"
                              className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                            />
                          </div>
                          <div className="relative w-full ">
                            <p className="text-[14px] fonrmal text-[#212427]  absolute left-3 top-1 ">
                              Job Addess (Optional) 0/100
                            </p>
                            <div className="">
                              <input
                                placeholder="House, Road"
                                type="text"
                                maxLength={100}
                                {...register("locationoptional", {
                                  required: "Company Addess is Required",
                                })}
                                defaultValue={
                                  job_location?.locationoptional ||
                                  locationoptional
                                }
                                onChange={(e) =>
                                  setlocationoptional(e.target.value)
                                }
                                className="focus:outline-none placeholder:text-[#212427] border-opacity-80 rounded placeholder:text-opacity-70  input pl-3 pt-4 w-full mb-[5px] h-[60px] "
                              />
                              {errors.locationoptional && (
                                <p className="text-red-500">
                                  {errors.locationoptional.message}
                                </p>
                              )}
                            </div>

                            {locationoptional === "" ||
                            job_location?.locationoptional === null ? (
                              <>
                                <img
                                  src="/images/wright.svg"
                                  className="absolute cursor-pointer inset-y-0 right-3 top-2/3 transform -translate-y-1/2 h-[15px] w-[15px] "
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  src="/images/companyLoI.svg"
                                  className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                                />
                              </>
                            )}
                          </div>
                          <div className="pb-2">
                            <p className="text-[14px] fonrmal text-[#212427]  ml-3  ">
                              Select City
                            </p>
                            <div className="relative w-full">
                              <div className="" onClick={handleLocationClick}>
                                {job_location?.divisiondata === null ? (
                                  <>
                                    <p className="w-full cursor-pointer mt-[2px] h-[20px] text-[#212427] text-opacity-70 ml-3">
                                      Damrai, Dhaka
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <p className="w-full cursor-pointer mt-[2px] h-[20px] text-[#212427] text-opacity-90 ml-3">
                                      {selectedClickDivision !== ""
                                        ? `${selectedClickDivision}, ${selectedcityname}`
                                        : `${job_location?.divisiondata?.divisionname}, ${job_location?.divisiondata?.cityid?.name}`}
                                    </p>
                                  </>
                                )}
                              </div>

                              {job_location?.divisiondata === null ? (
                                <>
                                  <img
                                    onClick={handleLocationClick}
                                    src="/images/companyIIn.svg"
                                    className="absolute cursor-pointer inset-y-0 right-3 top-2/3 transform -translate-y-1/2 h-[15px] w-[15px] "
                                  />
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <img
                                    onClick={handleLocationClick}
                                    src="/images/companyLoI.svg"
                                    className="absolute  right-3 bottom-5  top-[5px]  h-[15px] w-[15px] "
                                  />
                                </>
                              )}
                            </div>
                            {locationopen && (
                              <div className="map-modal">
                                <CompanyLocation
                                  selectedClickDivision={selectedClickDivision}
                                  selectedcityname={selectedcityname}
                                  setSelectedcityname={setSelectedcityname}
                                  setSelectedcityID={setSelectedcityID}
                                  setSelectedClickDivision={
                                    setSelectedClickDivision
                                  }
                                  setSelectedClickDivisionID={
                                    setSelectedClickDivisionID
                                  }
                                  setLocationOpen={setLocationOpen}
                                ></CompanyLocation>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-[#212427] text-opacity-80 text-[16px] font-light ">
                      Set Various Skills (Optional)
                    </p>

                    <div className="w-full flex flex-wrap gap-3 mt-2">
                    
                    </div>
                    {defaultSkill.length > 0 ? (
                      <>
                        <div className="w-full flex flex-wrap gap-3 mt-2 mb-1">
                          {skilltype.map((s, index) => (
                            <div key={index} className="flex gap-x-1">
                              <div className="flex items-center h-[30px]  text-blue-500 border-blue-500 text-[16px] text-opacity-90 border  border-opacity-40 rounded rounded-[25px] px-2">
                                <div className=" flex gap-x-2  items-center">
                                  <p>{s}</p>
                                  <img
                                    className="w-[13px] h-[13px] cursor-pointer"
                                    onClick={() => handleRemoveSkill(s)} // Call handleRemoveSkill with the index
                                    src="/images/skillremove.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                          {defaultSkill?.map((ds) => (
                            <div key={ds._id} className="flex gap-x-1">
                              <p
                                className={`flex items-center h-[30px] text-[#212427] text-[16px] text-opacity-90 border border-[#212427] border-opacity-40 rounded rounded-[25px] px-2 cursor-pointer ${
                                  skill.includes(ds.functionalname)
                                    ? "text-blue-500 border-blue-500"
                                    : ""
                                }`}
                                onClick={() => {
                                  if (skill.includes(ds.functionalname)) {
                                    handleRemoveSkills(ds.functionalname);
                                  } else {
                                    handleAddDefaultSkill(ds.functionalname);
                                  }
                                }}
                              >
                                {ds.functionalname}

                                {skill.includes(ds.functionalname) && (
                                  <img
                                    className="w-[13px] h-[13px] cursor-pointer ml-2"
                                    // Call handleRemoveSkill with the index
                                    src="/images/skillremove.svg"
                                  />
                                )}
                              </p>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="flex justify-end">
                      <p className="text-blue-500 text-[16px] font-medium">
                        {skillCountText}
                      </p>
                      <p className="text-[#212427] text-[16px] font-medium">
                        /5
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddSkill}
                      className="w-[110px] h-[30px] text-[#212427] text-[16px] border border-[#212427] border-opacity-40 rounded rounded-[25px] px-1 -mt-[20px]"
                    >
                      Add Skills +
                    </button>

                    {skillModalOpen && (
                      <AddSkill
                        setskillModalOpen={setskillModalOpen}
                        setSkill={setSkill}
                        setskilltype={setskilltype}
                        skilltype={skilltype}
                        skill={skill}
                        experticeAreaCatagoryID={experticeAreaCatagoryID}
                      ></AddSkill>
                    )}

                    {showErrorPopup && (
                      <SkillAddError
                        setShowErrorPopup={setShowErrorPopup}
                      ></SkillAddError>
                    )}
                  </div>

                  <div className="flex justify-between items-center mb-7 mt-5">
                    <div className="flex gap-x-3">
                      <img src="/images/joblocationremote.svg" />
                      <p className="text-[#212427]  text-[20px] font-normal">
                        This is a remote job
                      </p>
                    </div>
                    <div>
                      {/* Your complex checkbox input with classes */}
                      <input
                        className="mr-2 mt-[0.3rem] h-3.5 w-10 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-blue-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.2985rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        //   onClick={onChangeRemote}
                        checked={remote}
                        onChange={onChangeRemote}
                      />
                    </div>
                  </div>
                  <p className="text-[18px] text-[#0077B5] font-medium text-center">
                    Already Hired?
                  </p>
                  <button
                    type="button"
                    onClick={handelJobstatus}
                    className="w-full mb-5 h-[44px]  bg-[#0077B5] bg-opacity-45 text-[17px] mt-2 font-semibold hover:bg-[#0077B5] text-white rounded text-center "
                  >
                    {jobstatustype === 1 ? "Close This Job" : "Open This Job"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageJobDetailsEdit;
