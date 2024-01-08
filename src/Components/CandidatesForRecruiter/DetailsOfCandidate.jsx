import pic from "/public/images/RI-icons/report-pic.png";
import { useState } from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLoaderData, useNavigate, useOutlet } from "react-router-dom";
import DetailsOfCandidateWorkExprience from "./DetailsOfCandidateWorkExprience";
import DetailsOfCandidateEduction from "./DetailsOfCandidateEduction";
import ReportedCandidate from "./ReportedCandidate";
import { useSocket } from "../SocketContext/SocketContext";
import useAuth from "../RecruterPrivetRoute/Context/useAuth";

const DetailsOfCandidate = () => {
  const CandidateProfile = useLoaderData();
  const [showReportPopup, setShowReportPopup] = useState(false);
  const handleGoBack = () => {
    window.history.back(); // This will navigate back one step in the browser's history
  };
  console.log(CandidateProfile);
  const {
    userid,
    workexperience,
    education,
    skill,
    protfoliolink,
    about,
    careerPreference,
    _id,
  } = CandidateProfile;
  const lastIndex = workexperience.length - 1;

  // Access the last element using the lastIndex
  const lastElement = workexperience[lastIndex];
  const birthYearMonth = userid?.deatofbirth.slice(0, 7); // Your birth year and month in the format "yyyy-mm"
  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birthdate = new Date(`${birthYearMonth}-01`); // Assuming 1st day of birth month

    const yearsDiff = today.getFullYear() - birthdate.getFullYear();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
      today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() &&
        today.getDate() < birthdate.getDate())
    ) {
      setAge(yearsDiff - 1);
    } else {
      setAge(yearsDiff);
    }
  }, [birthYearMonth]);

  // Input date string

  const inputDateStrindeatofbirth = userid?.deatofbirth;

  const birth = new Date(inputDateStrindeatofbirth);

  // Months mapping
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const byear = birth.getFullYear();
  const bmonth = birth.getMonth(); // Month value is 0-indexed

  // Get the formatted month name

  const birthformattedMonth = months[bmonth];

  // Create the formatted output
  const birthformattedDate = `${byear} ${birthformattedMonth}`;

  const [message, setMessage] = useState("");
  console.log(message);
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken.replace(/"/g, ""));
    }
  }, []);

  const  candidatefullprofileID= _id;
  const candidateid = userid?._id;
console.log(candidateid,candidatefullprofileID );
  const saveCandidate = () => {
    // Check if the 'token' variable is defined.
    if (!token) {
      setMessage("Authentication token missing.");
      return;
    }

    // Prepare the candidate data.
    const candidateSavedata = {
      candidatefullprofile: candidatefullprofileID,
      candidateid: candidateid,
    };
    console.log(candidateSavedata);

    // Define the fetch options.
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(candidateSavedata),
    };

    // Perform the API request.
    fetch("https://rsapp.unbolt.co/candidate_save", requestOptions)
      .then((response) => {
        if (response.status === 200) {
          // Request was successful.
          return response.json(); // Parse response JSON.
        } else if (response.status === 401) {
          // Unauthorized, handle accordingly.
          throw new Error("Unauthorized: Token invalid or expired.");
        } else {
          // Other errors, handle accordingly.
          throw new Error("Failed to save candidate.");
        }
      })
      .then((data) => {
        // Handle the response data here (data is the parsed JSON response).
        console.log(data);
        setMessage("Candidate saved successfully.");
      })
      .catch((error) => {
        // Handle errors here.
        console.error("Error:", error);
        setMessage("An error occurred while processing your request.");
      });
  };

  // Call the saveCandidate function when needed..

  const textToCopy = `https://unbolt.co/candidate-profile/${_id}`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const [reportModalOpen, setreportModalOpen] = useState(false);
  const [reportcandidatedetails, setreportcandidatedetails] = useState(null);

  const handelreportModalOpen = (candidatedetails, tr) => {
    setreportcandidatedetails(candidatedetails), setreportModalOpen(tr);
  };

  const socket = useSocket();
  const recruter = useAuth();
  const recruterDetails = recruter.recruter;

console.log(recruterDetails);

  const naviget = useNavigate();
  // const handleChannelCreate = async () => {
  //   try {
  //     // Assuming you have the user token stored in localStorage or state
  //     const storedToken = localStorage.getItem("token");
  //     const cto = storedToken.replace(/"/g, "");

  //     const response = await fetch("https://rsapp.unbolt.co/channelcreate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${cto}`,
  //       },
  //       body: JSON.stringify({
  //         // Your request body data
  //         seekerid: CandidateProfile?.userid?._id,
  //         recruiterid: recruterDetails._id,
  //         // jobid: '...',
  //         candidate_fullprofile: _id,
  //         // outbound: '...',
  //       }),
  //     });

  //     const data = await response.json();
  //     const id = data._id;

  //     // Assuming 'channelinfo' contains the data you need
  //     console.log("Channel Info:", data);

  //     // Emit a socket event after API call if needed
  //     if (socket) {
  //       socket.emit("channelCreated", { channelInfo: data });
  //       naviget(`/dashboard/recruiter/chat/${id}`);
  //     }
  //   } catch (error) {
  //     console.error("Error creating channel:", error);
  //   }
  // };

  const handleChannelCreate = async () => {
    try {
      // Check if recruterDetails is not null
      if (recruterDetails !== null) {
        // Assuming you have the user token stored in localStorage or state
        const storedToken = localStorage.getItem("token");
        const cto = storedToken.replace(/"/g, "");
        const recruterID = localStorage.getItem("recruterID").replace(/"/g, "");

  
        const response = await fetch("https://rsapp.unbolt.co/channelcreate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cto}`,
          },
          body: JSON.stringify({
            // Your request body data
            seekerid: CandidateProfile?.userid?._id,
            recruiterid: recruterID,
            // jobid: '...',
            candidate_fullprofile: _id,
            // outbound: '...',
          }),
        });
  
        const data = await response.json();
        const id = data._id;
  
        // Assuming 'channelinfo' contains the data you need
        console.log("Channel Info:", data);
  
        // Emit a socket event after API call if needed
        if (socket) {
          socket.emit("channelCreated", { channelInfo: data });
          naviget(`/dashboard/recruiter/chat/${id}`);
        }
      } else {
        console.log("recruterDetails is null. Cannot create channel.");
      }
    } catch (error) {
      console.error("Error creating channel:", error);
    }
  };

  return (
    <div className=" font-inter">
      <div className="bg-white p-6 rounded-lg shadow-md md:w-[700px] h-auto  mb-40">
        <div className="flex justify-between">
          <div>
            <img
              onClick={handleGoBack}
              src="/images/RI-icons/RI-arrow-left.svg"
              className="w-[16px] h-[16px] cursor-pointer"
            />
          </div>
          <div>
            <button
              type="button"
              className="font-inter btn bg-[#00A0DC] bg-opacity-20 w-[105px] h-[28px] rounded-lg flex"
            >
              <img
                onClick={saveCandidate}
                className="font-inter w-[19px] h-[19px] m-1 ms-3"
                src="/images/care.svg"
                alt=""
              />
              <img
                onClick={handleCopy}
                className="font-inter w-[19px] h-[19px] m-1 mx-2"
                src="/images/share.svg"
                alt=""
              />
              <img
                onClick={() => handelreportModalOpen(CandidateProfile, true)}
                className="font-inter w-[19px] h-[19px] m-1"
                src="/images/report.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="font-inter flex px-4 pt-4 w-full h-[92px]">
          <div>
            {userid?.image ? (
              <LazyLoadImage
                effect="blur"
                src={`https://rsapp.unbolt.co/${userid?.image}`}
                className="font-inter w-[90px] h-[80px] rounded rounded-full"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                src="/images/candidate/Group 10464.svg"
                className="font-inter w-[90px] h-[90px] rounded rounded-full"
              />
            )}
          </div>
          <div className="font-inter w-full h-[81px] ms-3">
            {userid?.fastname ? (
              <p className="font-inter inline-flex gap-2 font-semibold ms-3 ">
                {userid?.fastname} {userid?.lastname}
                <li className="font-inter ms-2 text-[#00A0DC] font-normal">
                  {userid?.other?.online === true ? "Online" : "Ofline"}
                </li>
              </p>
            ) : (
              ""
            )}

            <p className="font-inter ms-3">
              {" "}
              {lastElement?.designation && lastElement?.companyname
                ? `${lastElement.designation} | ${lastElement.companyname}`
                : ""}
            </p>
            <div className="font-inter pl-[9px] flex">
              <span className="font-inter inline-flex gap-1">
                <img src="/images/RI-icons/experience.svg" alt="" />
                <p>{userid?.experiencedlevel?.name}</p>
              </span>
              <span className="font-inter inline-flex gap-1 mx-3 items-center">
                <img src="/images/RI-icons/degree.svg" alt="" />
                <p className="font-inter text-[14px] text-[#212427]">
                  {education[0]?.digree?.name ? education[0]?.digree?.name : ""}
                </p>
              </span>
              <span className="font-inter inline-flex gap-1">
                <img src="/images/RI-icons/age.svg" alt="" />
                {age} Years
              </span>
            </div>
          </div>
        </div>
        <div className="font-inter my-4 ms-2">
          <span className="font-inter font-semibold me-2">
            Job Hunting Status:
          </span>
          {userid?.other?.job_hunting ? (
            <>{userid?.other?.job_hunting}</>
          ) : (
            <></>
          )}

          {userid?.other?.more_status ? (
            <>
              <span className="font-inter text-[#212427] text-opacity-60 mx-2">
                |
              </span>
              {userid?.other?.more_status}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="font-inter w-[641px] h-auto">
          <button className="font-inter border border-1 border-[#212427] rounded-xl px-2 py-1 my-1 text-[#212427]">
            About Me
          </button>
          {about?.about ? (
            <p className="font-inter mt-2 mb-1 text-[#212427] text-opacity-40">
              {" "}
              {about?.about}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="font-inter w-[640px] h-auto">
          <button className="font-inter border border-1 border-[#212427] rounded-xl px-2 py-1 my-1 text-[#212427] mt-4 mb-2">
            Career Preferences
          </button>
          {careerPreference.map((ca, i) => (
            <div key={i} className="font-inter ">
              <div className="font-inter flex justify-between mb-[15px]">
                <div>
                  <div>
                    <p className="font-inter text-[18px] font-normal text-[#212427]">
                      {ca?.functionalarea?.functionalname}
                    </p>
                  </div>

                  <div className="font-inter mt-[3px]">
                    {ca.category?.map((catego, i) => (
                      <p
                        key={i}
                        className="font-inter text-[16px] font-light font-normal text-[#212427] text-opacity-70"
                      >
                        {catego.categoryname}
                        {i !== ca.category.length - 1 && (
                          <span className="font-inter text-[16px] font-light font-normal text-[#212427] text-opacity-70">
                            {" "}
                            |{" "}
                          </span>
                        )}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <p className="font-inter text-[18px] font-normal leading-5 text-[#212427] text-end">
                        {ca?.salaray?.min_salary?.salary
                          ? ca?.salaray?.min_salary?.salary
                          : "00"}
                        {ca?.salaray?.min_salary?.salary == "Negotiable"
                          ? ""
                          : "-"}
                        {ca?.salaray?.max_salary?.salary == "Negotiable"
                          ? ""
                          : ca?.salaray?.max_salary?.salary}
                        {ca?.salaray?.min_salary?.salary == "Negotiable"
                          ? ""
                          : "K"}{" "}
                        {ca?.salaray?.min_salary?.salary == "Negotiable"
                          ? ""
                          : "BDT"}
                      </p>
                    </div>
                  </div>
                  <div className="font-inter mt-[5px]">
                    <p className="font-inter text-[16px] font-Light text-[#212427] text-end text-opacity-90">
                      {ca.division?.divisionname
                        ? ca.division.divisionname
                        : ""}
                      ,{" "}
                      {ca.division?.cityid?.name
                        ? ca?.division?.cityid?.name
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-inter w-[641px] h-auto">
          <button className="font-inter border border-1 border-[#212427] rounded-xl px-2 py-1 text-[#212427] mt-2 mb-4">
            Work Experiences
          </button>
          {workexperience.length > 0 ? (
            <>
              {workexperience?.map((wken) => (
                <DetailsOfCandidateWorkExprience key={wken._id} wken={wken} />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="font-inter w-[641px] h-auto">
          <button className="font-inter border border-1 border-[#212427] rounded-xl px-2 py-1 text-[#212427] mt-5 mb-3">
            Educational Qualifications
          </button>
          {education.length > 0 ? (
            <div>
              {education?.map((edu) => (
                <DetailsOfCandidateEduction
                  key={edu._id}
                  edu={edu}
                ></DetailsOfCandidateEduction>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="font-inter w-[200px] h-auto">
          <button className="font-inter border border-1 border-[#212427] rounded-xl px-2 py-1 text-[#212427] mt-5 ">
            My Skills
          </button>

          <div className="font-inter mt-[5px] flex gap-x-3">
            {skill.map((sk, i) => (
              <div key={i}>
                <div className="font-inter flex gap-x-4 flex-wrap">
                  {sk ? (
                    <p
                      className="font-inter underline  rounded rounded-[7px] text-[16px] font-normal"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {sk}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="font-inter w-[124px] h-auto">
          <button className="font-inter border border-1 border-[#212427] rounded-xl px-2 py-1 text-[#212427] mt-5 mb-3">
            My Portfolio
          </button>
          {protfoliolink.length > 0 ? (
            <>
              {protfoliolink?.map((prt) => (
                <a key={prt._id} href={prt?.protfoliolink} target="_blank">
                  <p className="font-inter text-[#00A0DC]">
                    {prt?.protfoliolink}
                  </p>
                </a>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        {/* <div className="font-inter w-[640px] h-[78px] bg-[#00A0DC] bg-opacity-20 border border-2 border-[#0077B5] border-opacity-25 rounded-lg mt-48">
          <div className="font-inter flex p-2">
            <div>
              <img
                className="font-inter w-[48px] h-[48px] bg-blue-700 rounded-full"
                src="/images/RI-icons/samira.svg"
                alt=""
              />
            </div>
            <div className="font-inter w-[203px] h-[48px] my-1">
              <p className="font-inter ms-4 font-semibold">Samira Khan</p>
              <p className="font-inter ms-4">Full Stack Developer</p>
            </div>
            <button className="font-inter border border-1 rounded-xl px-1 w-[82px] h-[32px] bg-[#B0B0B0] bg-opacity-70 ms-72 mt-2">
              See Next
            </button>
          </div>
        </div> */}
        <div className="font-inter mt-6">
          <button
            onClick={handleChannelCreate}
            className="font-inter btn bg-[#0077B5] md:w-[640px] h-[48px] md:mx-auto rounded-lg text-white text-[18px]"
          >
            Start Chatting
          </button>
        </div>
      </div>

      {reportModalOpen && (
        <ReportedCandidate
          setreportModalOpen={setreportModalOpen}
          reportcandidatedetails={reportcandidatedetails}
          setShowReportPopup={setShowReportPopup}
        ></ReportedCandidate>
      )}

      {/* After successful report submission */}
      {showReportPopup && (
        <div className="font-inter fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
          <div className="font-inter bg-white mx-auto rounded-lg w-[460px] h-[236px] md:w-[460px] md:h-[236px]">
            <div className="font-inter w-[316px] h-[176px] mx-auto py-8">
              <img
                className="font-inter w-[60px] h-[60px] mx-auto"
                src={pic}
                alt=""
              />
              <p className="font-inter text-center text-[#212427] text-opacity-80 py-3 text-[18px]">
                Your report has been successfully submitted.
              </p>
              <div className="font-inter flex gap-14">
                <Link to="/dashboard/recruiter/candidates-list">
                  <button className="font-inter bg-[#00A0DC] w-[128px] h-[40px] rounded-md text-white text-[16px]">
                    Candidates
                  </button>
                </Link>
                <button className="font-inter bg-[#0077B5] w-[128px] h-[40px] rounded-md text-white text-[16px]">
                  Messages
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsOfCandidate;
