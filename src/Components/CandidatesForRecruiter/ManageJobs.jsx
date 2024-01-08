// import { useEffect, useState } from "react";
// import Spinner from "../Spinner/Spinner";
// import ManageJopDeleteModal from "./ManageJopDeleteModal";
// import ManageJobRepostModal from "./ManageJobRepostModal";
// import { Link } from "react-router-dom";
// import RecruterRightSideBar from "../RegisterDahsbord/RecruterRightSideBar";

// const ManageJobs = () => {
//   const [jobPost, setjobPost] = useState([]);
//   const [loding, setloding] = useState(true);
//   const [jobStatuse, setjobStatuse] = useState(0); // State to store the token

//   console.log(jobStatuse);

//   const job_status = (status) => {
//     setjobStatuse(status);
//   };

//   useEffect(() => {
//     // Function to fetch the recruiter's profile
//     const fetchRecruiterCompanyManageJob = (token, jobStatuse) => {
//       setloding(true);
//       fetch(`https://rsapp.unbolt.co/job_post?type=${jobStatuse}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((res) => {
//           if (res.status === 401) {
//             console.log("error");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           if (data) {
//             setjobPost(data);
//           }
//         })
//         .catch((error) => {
//           console.error("Fetch error:", error);
//         })
//         .finally(() => {
//           setloding(false); // Mark the loading as complete
//         });
//     };
//     // Retrieve the token from localStorage
//     const storedToken = localStorage.getItem("token");

//     if (storedToken) {
//       const stringWithoutQuotes = storedToken.replace(/"/g, "");
//       fetchRecruiterCompanyManageJob(stringWithoutQuotes, jobStatuse);
//     } else {
//       setloding(false);
//     }
//   }, [jobStatuse]);

//   console.log(jobPost);

//   const [rePostJob, setRepostJob] = useState(null);
//   const [rePostJobModal, setRepostJobModal] = useState(false);
//   const [deletePostJob, setdeletepostJob] = useState(null);
//   const [deletePostJobModal, setdeletepostJobModal] = useState(false);

//   console.log(deletePostJob);
//   console.log(deletePostJobModal);

//   const deleteJobModalOpen = (job, modal) => {
//     setdeletepostJob(job);
//     setdeletepostJobModal(modal);
//   };
//   const repostJobModalOpen = (job, modal) => {
//     setRepostJob(job);
//     setRepostJobModal(modal);
//   };

//   return (
//     <div className="font-inter">
//       <div className=" rounded-lg  h-auto mb-40">
//         <div className="flex flex-row gap-4">
//           <div>
//             <div className="font-inter sticky top-[58.5px] h-[45px] pt-[1px]  z-40 bg-[#F2F0F5] rounded-b-md ">
//               <div className="font-inter w-[700px] h-[39px] text-[16px] grid md:grid-cols-4 bg-white mb-1 rounded-md sticky top-[60px]  z-40">
//                 <div className="font-inter text-[#212427] text-opacity-70 my-2 flex flex-row gap-36">
//                   <p
//                     onClick={() => job_status(0)}
//                     className={`ms-6 cursor-pointer  ${
//                       jobStatuse === 0
//                         ? "text-[#0077B5] font-semibold text-[18px]"
//                         : "text-[16px] text-[#212427] text-opacity-70 font-medium"
//                     }`}
//                   >
//                     All
//                   </p>
//                   <p
//                     onClick={() => job_status(1)}
//                     className={` cursor-pointer  ${
//                       jobStatuse === 1
//                         ? "text-[#0077B5] font-semibold text-[18px]"
//                         : "text-[16px] text-[#212427] text-opacity-70 font-medium"
//                     }`}
//                   >
//                     Opening
//                   </p>
//                   <p
//                     onClick={() => job_status(2)}
//                     className={` cursor-pointer  ${
//                       jobStatuse === 2
//                         ? "text-[#0077B5] font-semibold text-[18px]"
//                         : "text-[16px] text-[#212427] text-opacity-70 font-medium"
//                     }`}
//                   >
//                     Closed
//                   </p>
//                   <p
//                     className={` cursor-pointer  ${
//                       jobStatuse === 3
//                         ? "text-[#0077B5] font-semibold text-[18px]"
//                         : "text-[16px] text-[#212427] text-opacity-70 font-medium"
//                     }`}
//                     onClick={() => job_status(3)}
//                   >
//                     Rejected
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {loding === true ? (
//               <div>
//                 <Spinner />
//               </div>
//             ) : (
//               <div>
//                 {jobPost.length > 0 ? (
//                   jobPost.map((jp) => (
//                     <Link
//                       key={jp._id}
//                       to={`/dashboard/recruiter/job-details/${jp?._id}`}
//                     >
//                       <div className="font-inter w-[700px] h-[190px] bg-white mb-1 text-[#212427] text-opacity-90 rounded-md">
//                         <div className="w-[642px] h-[34px] ms-7 p-3">
//                           <div className="flex justify-between py-3">
//                             <div className="flex gap-x-2 items-center">
//                               <p className="font-semibold">{jp?.job_title}</p>
//                               {jp?.job_status_type === 2 ? (
//                                 <img
//                                   onClick={() => deleteJobModalOpen(jp, true)}
//                                   src="/images/jobDeleteicon.svg"
//                                   className="w-[15px] h-[15px] cursor-pointer"
//                                 />
//                               ) : (
//                                 <></>
//                               )}
//                             </div>
//                             <button className="border border-1 rounded-lg px-1">
//                               {jp?.salary?.min_salary?.salary
//                                 ? jp?.salary?.min_salary?.salary
//                                 : "00"}
//                               {jp?.salary?.min_salary?.salary == "Negotiable"
//                                 ? ""
//                                 : "-"}
//                               {jp?.salary?.max_salary?.salary == "Negotiable"
//                                 ? ""
//                                 : jp?.salary?.max_salary?.salary}
//                               {jp?.salary?.min_salary?.salary == "Negotiable"
//                                 ? ""
//                                 : "K"}{" "}
//                               {jp?.salary?.min_salary?.salary == "Negotiable"
//                                 ? ""
//                                 : "BDT"}
//                             </button>
//                           </div>
//                           {jp?.job_description !== null && (
//                             <p className="px-10 pt-6 text-[#212427] text-opacity-80 text-[16px]">
//                               {jp?.job_description.length > 100
//                                 ? jp?.job_description.slice(0, 100) + " ..."
//                                 : jp?.job_description}
//                             </p>
//                           )}
//                           <div className="flex items-center justify-between">
//                             <div className="px-3 py-2 text-[#212427] text-opacity-60">
//                               <p className="ms-7">
//                                 <button className="border border-1 rounded-lg px-1">
//                                   {jp?.experience?.name}
//                                 </button>
//                                 <button className="border border-1 rounded-lg px-1 mx-2">
//                                   {jp?.education?.name}
//                                 </button>
//                               </p>
//                             </div>
//                             <div className="mr-5">
//                               {jp?.job_status_type === 2 ? (
//                                 <button
//                                   onClick={() => repostJobModalOpen(jp, true)}
//                                   className="bg-[#00A0DC] bg-opacity-20 text-[#00A0DC] w-[59px] h-[24px] rounded text-[14px] font-normal"
//                                 >
//                                   Repost
//                                 </button>
//                               ) : (
//                                 <></>
//                               )}
//                             </div>
//                           </div>
//                           <div className="flex justify-between">
//                             <div className="w-[550px] h-[19px] flex">
//                               <img
//                                 className="w-[18px] h-[18px] ms-10 mt-1"
//                                 src="/images/RI-icons/location.svg"
//                                 alt=""
//                               />
//                               {jp?.company?.c_location?.divisiondata !==
//                               null ? (
//                                 <p className="ms-2 text-[#212427] text-opacity-60 pb-4">
//                                   {
//                                     jp?.company?.c_location?.divisiondata
//                                       ?.cityid?.name
//                                   }
//                                   ,{" "}
//                                   {
//                                     jp?.company?.c_location?.divisiondata
//                                       .divisionname
//                                   }
//                                 </p>
//                               ) : (
//                                 <></>
//                               )}
//                             </div>
//                             <button className="border border-1 rounded-lg px-1">
//                               {jp?.salary?.min_salary?.salary
//                                 ? jp?.salary?.min_salary?.salary
//                                 : "00"}
//                               {jp?.salary?.min_salary?.salary == "Negotiable"
//                                 ? ""
//                                 : "-"}
//                               {jp?.salary?.max_salary?.salary == "Negotiable"
//                                 ? ""
//                                 : jp?.salary?.max_salary?.salary}
//                               {jp?.salary?.min_salary?.salary == "Negotiable"
//                                 ? ""
//                                 : "K"}{" "}
//                               {jp?.salary?.min_salary?.salary == "Negotiable"
//                                 ? ""
//                                 : "BDT"}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="font-inter text-center mt-5">No Job found.</p>
//                 )}
//               </div>
//             )}
//           </div>
//           <div>
//             <RecruterRightSideBar></RecruterRightSideBar>
//           </div>
//         </div>
//       </div>
//       {deletePostJobModal && (
//         <ManageJopDeleteModal
//           deletePostJob={deletePostJob}
//           deletePostJobModal={deletePostJobModal}
//           setdeletepostJobModal={setdeletepostJobModal}
//           setloding={setloding}
//           job_status={job_status}
//           setjobPost={setjobPost}
//         />
//       )}
//       {rePostJobModal && (
//         <ManageJobRepostModal
//           rePostJob={rePostJob}
//           rePostJobModal={rePostJobModal}
//           setRepostJobModal={setRepostJobModal}
//           setloding={setloding}
//           job_status={job_status}
//           jobStatuse={jobStatuse}
//           setjobPost={setjobPost}
//         />
//       )}
//     </div>
//   );
// };

// export default ManageJobs;

import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import ManageJopDeleteModal from "./ManageJopDeleteModal";
import ManageJobRepostModal from "./ManageJobRepostModal";
import { Link } from "react-router-dom";
import RecruterRightSideBar from "../RegisterDahsbord/RecruterRightSideBar";
import NoJobPosts from "./NoJobPosts";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const ManageJobs = () => {
  const [jobPost, setjobPost] = useState([]);
  const [loding, setloding] = useState(true);
  const [jobStatuse, setjobStatuse] = useState(0); // State to store the token

  console.log(jobStatuse);

  const job_status = (status) => {
    setjobStatuse(status);
  };

  useEffect(() => {
    // Function to fetch the recruiter's profile
    const fetchRecruiterCompanyManageJob = (token, jobStatuse) => {
      setloding(true);
      fetch(`https://rsapp.unbolt.co/job_post?type=${jobStatuse}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            console.log("error");
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setjobPost(data);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setloding(false); // Mark the loading as complete
        });
    };
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      fetchRecruiterCompanyManageJob(stringWithoutQuotes, jobStatuse);
    } else {
      setloding(false);
    }
  }, [jobStatuse]);

  console.log(jobPost);

  const [rePostJob, setRepostJob] = useState(null);
  const [rePostJobModal, setRepostJobModal] = useState(false);
  const [deletePostJob, setdeletepostJob] = useState(null);
  const [deletePostJobModal, setdeletepostJobModal] = useState(false);

  console.log(deletePostJob);
  console.log(deletePostJobModal);

  const deleteJobModalOpen = (job, modal) => {
    setdeletepostJob(job);
    setdeletepostJobModal(modal);
  };
  const repostJobModalOpen = (job, modal) => {
    setRepostJob(job);
    setRepostJobModal(modal);
  };

  return (
    <div className="font-inter">
      <div className=" rounded-lg  h-auto mb-40">
        <div className="flex flex-row gap-4">
          <div>
            <div className="font-inter sticky top-[58.5px] h-[45px] pt-[1px]  z-40 bg-[#F2F0F5] rounded-b-md ">
              <div className="font-inter w-[700px] h-[39px] text-[16px] grid md:grid-cols-4 bg-white mb-1 rounded-md sticky top-[60px]  z-40">
                <div className="font-inter text-[#212427] text-opacity-70 my-2 flex flex-row gap-36">
                  <p
                    onClick={() => job_status(0)}
                    className={`ms-6 cursor-pointer  ${
                      jobStatuse === 0
                        ? "text-[#0077B5] font-semibold text-[18px]"
                        : "text-[16px] text-[#212427] text-opacity-70 font-medium"
                    }`}
                  >
                    All
                  </p>
                  <p
                    onClick={() => job_status(1)}
                    className={` cursor-pointer  ${
                      jobStatuse === 1
                        ? "text-[#0077B5] font-semibold text-[18px]"
                        : "text-[16px] text-[#212427] text-opacity-70 font-medium"
                    }`}
                  >
                    Opening
                  </p>
                  <p
                    onClick={() => job_status(2)}
                    className={` cursor-pointer  ${
                      jobStatuse === 2
                        ? "text-[#0077B5] font-semibold text-[18px]"
                        : "text-[16px] text-[#212427] text-opacity-70 font-medium"
                    }`}
                  >
                    Closed
                  </p>
                  <p
                    className={` cursor-pointer  ${
                      jobStatuse === 3
                        ? "text-[#0077B5] font-semibold text-[18px]"
                        : "text-[16px] text-[#212427] text-opacity-70 font-medium"
                    }`}
                    onClick={() => job_status(3)}
                  >
                    Rejected
                  </p>
                </div>
              </div>
            </div>
            {loding === true ? (
              <div>
                <Spinner />
              </div>
            ) : (
              <div>
                {jobPost.length > 0 ? (
                  jobPost.map((jp) => {
                    const { job_description } = jp;
                    console.log(job_description);
                    const jobDescriptionArray = JSON.parse(job_description);
                    const quillContent = {
                      ops: jobDescriptionArray.map((item) => ({
                        insert: item.insert,
                        attributes: item.attributes || {},
                      })),
                    };
                    const converter = new QuillDeltaToHtmlConverter(
                      quillContent.ops,
                      {}
                    );
                    const html = converter.convert();
                    console.log(html);

                    return (
                      <Link
                        key={jp._id}
                        to={`/dashboard/recruiter/job-details/${jp?._id}`}
                      >
                        <div className="font-inter w-[700px] h-auto pb-5 bg-white mb-1 text-[#212427] text-opacity-90 rounded-md px-[25px] py-[15px]">
                          <div className=" ">
                            <div className="flex justify-between  items-center">
                              <div className="flex gap-x-2 items-center">
                                <p className="font-semibold text-[18px] font-medium  text-[#212427]">
                                  {jp?.job_title}
                                </p>
                                {jp?.job_status_type === 2 ? (
                                  <img
                                    onClick={() => deleteJobModalOpen(jp, true)}
                                    src="/images/jobDeleteicon.svg"
                                    className="w-[15px] h-[15px] cursor-pointer"
                                  />
                                ) : (
                                  <></>
                                )}
                              </div>
                              <button className="border border-[1px] border-[#212427] border-opacity-90 rounded-[30px] px-[10px] py-[5px] text-[16px] font-medium text-[#212427] text-opacity-70">
                                {jp?.salary?.min_salary?.salary
                                  ? jp?.salary?.min_salary?.salary + "K"
                                  : "00"}
                                {jp?.salary?.min_salary?.salary == "Negotiable"
                                  ? ""
                                  : "-"}
                                {jp?.salary?.max_salary?.salary == "Negotiable"
                                  ? ""
                                  : jp?.salary?.max_salary?.salary}
                                {jp?.salary?.min_salary?.salary == "Negotiable"
                                  ? ""
                                  : "K"}{" "}
                                {jp?.salary?.min_salary?.salary == "Negotiable"
                                  ? ""
                                  : "BDT"}
                              </button>
                            </div>
                            {jp?.job_description !== null && (
                              <p
                                className="  text-[#212427] text-opacity-80 text-[16px]"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    html.length > 25
                                      ? html.slice(0, 25) + "....."
                                      : html,
                                }}
                              >
                                {/* {jp?.job_description.length > 100
                                  ? jp?.job_description.slice(0, 100) + " ..."
                                  : jp?.job_description} */}
                              </p>
                            )}
                            <div className="flex items-center justify-between font-inter mt-[2px]">
                              <div className=" py-2 text-[#212427] text-opacity-60 ">
                                <p className="">
                                  <button className="border border-1 text-[#212427] text-opacity-60 text-[16px] rounded-[25px] px-1 font-normal">
                                    {jp?.experience?.name}
                                  </button>
                                  <button className="border border-1 text-[#212427] text-opacity-60 text-[16px] rounded-[25px] px-1 mx-2  font-normal">
                                    {jp?.education?.name}
                                  </button>
                                </p>
                              </div>
                              <div className="mr-5">
                                {jp?.job_status_type === 2 ? (
                                  <button
                                    onClick={() => repostJobModalOpen(jp, true)}
                                    className="bg-[#00A0DC] bg-opacity-20 text-[#00A0DC] w-[59px] h-[24px] rounded text-[14px] font-normal"
                                  >
                                    Repost
                                  </button>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                            <div className="flex justify-between mt-[4px]">
                              <div className=" flex">
                                <img
                                  className="w-[18px] h-[18px]  mt-1"
                                  src="/images/RI-icons/location.svg"
                                  alt=""
                                />
                                {jp?.company?.c_location?.divisiondata !==
                                null ? (
                                  <p className="ms-2 text-[#212427] text-opacity-60 pb-4">
                                    {
                                      jp?.company?.c_location?.divisiondata
                                        ?.cityid?.name
                                    }
                                    ,{" "}
                                    {
                                      jp?.company?.c_location?.divisiondata
                                        .divisionname
                                    }
                                  </p>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <NoJobPosts></NoJobPosts>
                )}
              </div>
            )}
          </div>
          <div>
            <RecruterRightSideBar></RecruterRightSideBar>
          </div>
        </div>
      </div>
      {deletePostJobModal && (
        <ManageJopDeleteModal
          deletePostJob={deletePostJob}
          deletePostJobModal={deletePostJobModal}
          setdeletepostJobModal={setdeletepostJobModal}
          setloding={setloding}
          job_status={job_status}
          setjobPost={setjobPost}
        />
      )}
      {rePostJobModal && (
        <ManageJobRepostModal
          rePostJob={rePostJob}
          rePostJobModal={rePostJobModal}
          setRepostJobModal={setRepostJobModal}
          setloding={setloding}
          job_status={job_status}
          jobStatuse={jobStatuse}
          setjobPost={setjobPost}
        />
      )}
    </div>
  );
};

export default ManageJobs;
