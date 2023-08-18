import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import AppLinkModal from "../Components/ShereComponent/AppLinkModal";
import { useState } from "react";

const JobDetails = () => {
  useTitle("Job Details - Bringin");
  const [openModal, closeModal] = useState(false)


  const jobdetails = useLoaderData();
  console.log(jobdetails);

  const {
    userid,
    experience,
    education,
    skill,
    company,
    expertice_area,
    job_description,
    companyname,
    job_status,
    job_title,
    jobtype,
    postdate,
    salary,
    job_location
  } = jobdetails;

  return (
    <div>
      <div className="flex justify-center">
        {/* pc */}

        <div className="">
          <div className="lg:w-[675px] lg:h-[560px] md:w-[675px] md:h-[560px] px-4 my-5 w-[340px]  px-4  ">
            <div>
              <img src="/images/link.png" className="w-[190px] h-[41px]" />
            </div>

            <div className="mt-[40px]">
              <div className="flex justify-between">
                <p className="text-[#212427] lg:text-[24px] md:text-[24px] text-[20px] font-medium">
                  {job_title}
                </p>

                <div>
                  <p className="text-[#212427] lg:text-[18px] md:text-[18px] text-[16px] font-medium border border-[#212427] border-opacity-20 h-[32px]  rounded rounded-[30px] px-4 flex items-center">
                    {salary?.min_salary?.salary
                      ? salary?.min_salary?.salary
                      : "00"}
                    {salary?.min_salary?.salary == "Negotiable" ? "" : "-"}
                    {salary?.max_salary?.salary == "Negotiable"
                      ? ""
                      : salary?.max_salary?.salary}
                    {salary?.min_salary?.salary == "Negotiable" ? "" : "K"}{" "}
                    {salary?.min_salary?.salary == "Negotiable" ? "" : "BDT"}
                  </p>
                </div>
              </div>

              <div className="mb-[12px]">
                <div className="flex gap-x-3 mt-2">
                  <div className="flex gap-2 items-center ">
                    <img
                      alt="bringin image"
                      src="/images/je.png"
                      className="w-4 h-4"
                    />
                    <p className="text-[14px] text-[#212427]">
                      {education?.name}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <img
                      alt="bringin image"
                      src="/images/jl.png"
                      className="w-4 h-4"
                    />
                    <p className="text-[14px] text-[#212427]">
                      {job_location?.city}
                    </p>
                  </div>

                  <div className="flex gap-2 items-center ">
                    <img
                      alt="bringin image"
                      src="/images/jf.png"
                      className="w-4 h-4"
                    />
                    <p className="text-[14px] text-[#212427]">
                      {experience?.name}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="h-[112px] border border-[#212427] border-opacity-20   rounded rounded-[5px] px-4 pt-2">
                  <div>
                    <div className="flex gap-x-5 items-center">
                      <div>
                        {userid?.image ? (
                          <div className="relative">
                            <img
                              src="/images/candidate/Group 10464.svg"
                              // src={`https://rsapp.bringin.io/${userid?.image}`}
                              className="w-[60px] h-[60px] rounded rounded-full"
                            />
                            <img
                              src="/images/rv.png"
                              className="w-[15px] h-[15px]  absolute bottom-0 right-0"
                            />
                          </div>
                        ) : (
                          <img
                            src="/images/candidate/Group 10464.svg"
                            className="w-[60px] h-[60px] rounded rounded-full"
                          />
                        )}
                      </div>
                      <div>
                        <div>
                          <div className="  flex gap-x-7 items-center">
                            <div className="flex items-center gap-x-2">
                              <p className="lg:text-[16px] md:text-[16px] text-[10px]   text-[#212427] font-medium">
                                {" "}
                                {userid?.firstname} {userid?.lastname}
                              </p>
                              <img
                                src="/images/ro1.png"
                                className="lg:w-[7px] lg:h-[7px] w-[4px] h-[4px] "
                              />
                              <p className=" lg:text-[14px] md:text-[14px] text-[10px]  text-[#00A0DC] font-small">
                                {" "}
                                Online
                              </p>
                            </div>

                            <div className="flex">
                              {userid?.other?.premium === true ? (
                                <p className="text-[#D2AF26] text-[10px] broder broder-[#D2AF26] bg-[#D2AF26] bg-opacity-10 px-[2px] h-[16px] flex items-center border-[1px] rounded rounded-[2px]">
                                  {" "}
                                  Premium
                                </p>
                              ) : (
                                <p className="text-[#D2AF26] text-[10px] broder broder-[#D2AF26] bg-[#D2AF26] bg-opacity-10 px-[2px] h-[16px] flex items-center rounded border-[1px] rounded-[2px]">
                                  {" "}
                                  Free user
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <p className="lg:text-[16px] md:text-[16px] text-[10px]   text-[#212427] font-medium">
                              {" "}
                              {userid?.designation}
                            </p>
                            <img
                              src="/images/ro.png"
                              className="lg:w-[7px] lg:h-[7px] w-[4px] h-[4px] "
                            />
                            <p className="lg:text-[16px] md:text-[16px] text-[10px]   text-[#212427] font-medium">
                              {" "}
                              {userid?.companyname?.legal_name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      {userid?.other?.profile_verify === true ? (
                        <div className="flex items-center gap-x-2">
                          <img
                            src="/images/tick-mark.png"
                            className=" w-[14px] h-[14px] "
                          />
                          <p className="text-[13px] font-normal text-opacity-70  text-[#212427] ">
                            Verified{" "}
                            {userid?.other?.profile_verify_date.slice(0, 10)}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[17px] flex">
                <p className="h-[39px]  px-4 bg-[#00A0DC] bg-opacity-20 rounded rounded-[7px] flex items-center text-[16px] font-semibold">
                  Job Descriptions
                </p>
              </div>

              <div className="mt-[25px]">
                <div className="flex"></div>
                <div className="">
                  {skill.map((sk, i) => (
                    <div key={i}>
                      <div className="flex gap-x-4 mt-1">
                        {sk?.skill ? (
                          <p className="  text-[14px] font-normal borber border-b-[1px]">
                            {sk?.skill}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-[25px]">
                {job_description ? (
                  <p className="text-[14px] text-[#212427] text-opacity-90 font-medium">
                    {job_description}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="mt-[25px]">
                <div className="h-[74px] border border-[#212427] border-opacity-20   rounded rounded-[5px] px-4 flex items-center">
                  <div>
                    <div className="flex gap-x-5 items-center">
                      <div>
                        {userid?.image ? (
                          <div className="relative">
                            <img
                              src="/images/candidate/Group 10464.svg"
                              // src={`https://rsapp.bringin.io/${userid?.image}`}
                              className="w-[50px] h-[50px] rounded rounded-full"
                            />
                            <img
                              src="/images/rv.png"
                              className="w-[15px] h-[15px]  absolute bottom-0 right-0"
                            />
                          </div>
                        ) : (
                          <img
                            src="/images/candidate/Group 10464.svg"
                            className="w-[50px] h-[50px] rounded rounded-full"
                          />
                        )}
                      </div>
                      <div>
                        <div>
                          <div className="  flex gap-x-7 items-center">
                            <div className="flex items-center gap-x-2">
                              <p className="lg:text-[16px] md:text-[16px] text-[10px]   text-[#212427] font-medium">
                                {" "}
                                {company?.legal_name}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <p className="lg:text-[14px] md:text-[14px] text-[11px]   text-[#212427] font-small">
                              {" "}
                              {company?.c_size?.size} Employees
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[25px]">
                <img src="/images/map.png" className="lg:[389px]  " />
              </div>

              <div>
                <div className="">
                  <Link>
                    <button onClick={()=>closeModal(true)} className="text-white font-semibold text-[20px] bg-[#0077B5] w-full h-[52px] my-10 rounded rounded-[5px]">
                      Start Chatting
                    </button>
                  </Link>
                </div>
              </div>

              <hr className="mt-5 "></hr>
<div className="flex justify-center">

              <div className="flex gap-4 my-7 ">
                <a href="https://play.google.com/store/apps/details?id=com.bringin.io" target="_blank">
                  <img
                    className="lg:w-[130px] lg:h-[42px] w-[233px] h-[40px]  md:h-[62px]"
                    src="/images/playstore.png"
                  />
                </a>

                <a href="">
                  <img
                    className="lg:w-[130px] lg:h-[42px] w-[233px] h-[40px]  md:h-[62px]"
                    src="/images/appstore.png"
                  />
                </a>
              </div>
</div>
            </div>
          </div>
        </div>

        {/* pc */}

        {/* <div>
            <div className="block lg:hidden md:hidden">
              <div className="w-[340px]  px-4  my-5">
                <div>
                  <img src="/images/link.png" className="w-[130px] h-[31px]" />
                </div>
  
                <div className="mt-[40px]">

               </div>
              </div>
            </div>
          </div> */}
          <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal>
      </div>
    </div>
  );
};

export default JobDetails;
