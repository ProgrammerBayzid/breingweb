import a from "../../../public/images/RI-icons/active-post-job.png";
import aa from "../../../public/images/RI-icons/post-job.png";
import b from "../../../public/images/RI-icons/active-manage-job.png";
import bb from "../../../public/images/RI-icons/manage-job.png";
import c from "../../../public/images/RI-icons/active-candidates.png";
import cc from "../../../public/images/RI-icons/candidates.png";
import d from "../../../public/images/RI-icons/active-saved-candidate.png";
import dd from "../../../public/images/RI-icons/saved-candidate.png";
import e from "../../../public/images/RI-icons/active-welcome-message.png";
import ee from "../../../public/images/RI-icons/welcome-msg.png";
import f from "../../../public/images/RI-icons/contact-us.png";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const RecruiterDashboard = ({recruter}) => {
  const location = useLocation();
  console.log(location);
  const isActive = (path) => {
    return location.pathname === path;
  };



  return (
    <div className="bg-white md:bg-gray-100 flex font-inter">
      <div className="bg-white  rounded-lg shadow-md  md:w-[249px] md:h-auto pb-2 md:mt-  text-[#212427]">
        <div className="mx-auto text-center text-[13px] mb-7">
          <div className="flex justify-center mt-5">

            <img
              className=" w-[60px] h-[60px] rounded-full"
              src={`https://rsapp.unbolt.co/${recruter?.image}`}
              alt=""
            />
          </div>
          <p className="text-[#454545] font-semibold text-xl pt-2">
            {recruter?.firstname}{" "}{recruter?.lastname}
          </p>
          <p className="text-[#212427] text-opacity-80">{recruter?.designation}</p>
          <p className="text-[#212427] text-opacity-80">
            {recruter?.companyname?.legal_name}
          </p>
        </div>

        <div className="">
          <Link to="/dashboard/recruiter/register-job-post"

          >
            <div
              className={`inline-flex gap-3 mb-[10px] pl-4 items-center ${isActive("/dashboard/recruiter/register-job-post") ? "bg-[#0077B5] text-white md:w-[249px] md:h-[30px] " : ""
                }`}
            >
              <img
                src={isActive("/dashboard/recruiter/register-job-post") ? a : aa}
                className={`w-[20px] h-[20px] cursor-pointer ${isActive("/dashboard/recruiter/register-job-post") ? "text-[#0077B5]" : ""}`}
              />
              <p>Post a New Job</p>
            </div>
          </Link>
          <Link to="/dashboard/recruiter/manage-jobs">
            <div
              className={`inline-flex gap-3 mb-[10px] pl-4 items-center md:w-[249px] md:h-[27px] ${isActive("/dashboard/recruiter/manage-jobs")
                  ? "bg-[#0077B5] text-white md:w-[249px] md:h-[27px] "
                  : ""
                }`}
            >
              
              <img
                src={isActive("/dashboard/recruiter/manage-jobs") ? b : bb}
                className={`w-[20px] h-[20px] cursor-pointer ${isActive("/dashboard/recruiter/manage-jobs") ? "text-[#0077B5]" : ""}`}
              />
              <p>  Manage Jobs</p>
            </div>
          </Link>
          <div className="w-full h-[2px] bg-[#F2F0F5] my-2"></div>
        </div>
        <div>
          <Link to="/dashboard/recruiter/candidates-list">
            <div
              className={`inline-flex gap-3 mb-[10px] pl-4 items-center md:w-[249px] md:h-[27px] ${isActive("/dashboard/recruiter/candidates-list")
                  ? "bg-[#0077B5] text-white md:w-[249px] md:h-[27px] "
                  : ""
                }`}
            >
              
              <img
                src={isActive("/dashboard/recruiter/candidates-list") ? c : cc}
                className={`w-[20px] h-[20px] cursor-pointer ${isActive("/dashboard/recruiter/candidates-list") ? "text-[#0077B5]" : ""}`}
              />
              <p className="font-inter ">Candidates</p>
            </div>
          </Link>
          <Link to="/dashboard/recruiter/save-candidates-list">
            <div
              className={`inline-flex gap-3 mb-[10px] pl-4 items-center md:w-[249px] md:h-[27px] ${isActive("/dashboard/recruiter/save-candidates-list")
                  ? "bg-[#0077B5] text-white md:w-[249px] md:h-[27px] "
                  : ""
                }`}
            >
              
              <img
                src={isActive("/dashboard/recruiter/save-candidates-list") ? d : dd}
                className={`w-[20px] h-[20px] cursor-pointer ${isActive("/dashboard/recruiter/save-candidates-list") ? "text-[#0077B5]" : ""}`}
              />
              <p className="font-inter ">Saved Candidates</p>
            </div>
          </Link>
        </div>
        <div className="w-[249px] h-[2px] bg-[#F2F0F5] my-2"></div>


        <div>
          <Link to="/dashboard/recruiter/welcome-message">
            <div
              className={`inline-flex gap-3 mb-[10px] pl-4 items-center md:w-[249px] md:h-[27px] ${isActive("/dashboard/recruiter/welcome-message")
                  ? "bg-[#0077B5] text-white md:w-[249px] md:h-[27px] "
                  : ""
                }`}
            >
             
              <img
                src={isActive("/dashboard/recruiter/welcome-message") ? e : ee}
                className={`w-[20px] h-[20px] cursor-pointer ${isActive("/dashboard/recruiter/welcome-message") ? "text-[#0077B5]" : ""}`}
              />
              <p>Welcome Message</p>
            </div>
          </Link>
          <Link to="/dashboard/recruiter/contact-us-popup">
            <div
              className={`inline-flex gap-3 mb-[10px] pl-4 items-center md:w-[249px] md:h-[27px] ${isActive("/dashboard/recruiter/contact-us-popup")
                  ? "bg-[#0077B5] text-white md:w-[249px] md:h-[27px] "
                  : ""
                }`}
            >
              <img
                className="w-[20px] h-[20px]"
                src={f}
                alt=""
              />{" "}
              <p>Contact Us</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
