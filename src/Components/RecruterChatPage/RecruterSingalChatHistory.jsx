import { useState } from "react";
import { Link } from "react-router-dom";

const RecruterSingalChatHistory = ({ chanelList }) => {
  const {
    _id,
    seekerid,
    candidate_fullprofile,
    createdAt,
    date,
    greating,
    not_interest,
    outbound,
    recruiter_reject,
    recruiter_unseen,
    recruiterblock,
    recruiterid,
    recruitermsgdate,
    seeker_unseen,
    seekerblock,
    type,
    updatedAt,
    who_view_me,
  } = chanelList;
  const id = _id;


  return (
    <div
      
    >
      <Link to={`/dashboard/recruiter/chat/${id}`}>
        <div className="flex gap-x-2  px-2">
          <div className="mt-1">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={`https://rsapp.unbolt.co/${seekerid?.image}`}
            />
          </div>
          <div>
            <div className="w-[270px] border-b-[2px] pb-[12px]">
              <div className="flex justify-between">
                <p className="text-[#212427] text-opacity-90 text-[16px] font-medium font-inter">
                  {seekerid?.fastname} {seekerid?.lastname}
                </p>
                <p className=" text-[#212427] text-opacity-40 text-[16px] font-normal font-inter">
                  21:30
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <div>
                  {candidate_fullprofile?.workexperience[0] && (
                    <p
                      key={candidate_fullprofile.workexperience[0]._id}
                      className="text-[#212427] text-opacity-40 text-[14px]  font-inter"
                    >
                      {candidate_fullprofile.workexperience[0]?.companyname
                        .length > 18
                        ? candidate_fullprofile.workexperience[0]?.companyname.slice(
                            0,
                            18
                          ) + "..."
                        : candidate_fullprofile.workexperience[0]?.companyname}
                    </p>
                  )}
                </div>
                <div>
                {candidate_fullprofile?.workexperience[0] && (
                                     <img src="/images/rshccdion.svg" />

                  )}
                </div>
                <div>
                  {candidate_fullprofile?.workexperience[0] && (
                    <p
                      key={candidate_fullprofile.workexperience[0]._id}
                      className="text-[#212427] text-opacity-40 text-[14px] font-inter"
                    >
                      {candidate_fullprofile.workexperience[0]?.designation
                        .length > 10
                        ? candidate_fullprofile.workexperience[0]?.designation.slice(
                            0,
                            10
                          ) + "..."
                        : candidate_fullprofile.workexperience[0]?.designation}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-[#212427] text-opacity-40 text-[14px] font-inter">
                  Hi, I am interested in this job post...
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecruterSingalChatHistory;






