import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSocket } from "../SocketContext/SocketContext";
import useAuth from "../RecruterPrivetRoute/Context/useAuth";

const SingleCandidateLis = ({ cl }) => {
  const { workexperience, education, careerPreference, skill } = cl;
  const first = careerPreference[0];

  // Mapping workexperience outside the return statement
  const startDates = workexperience?.map((w) =>
    w?.startdate ? w?.startdate.slice(0, 10) : ""
  );
  const formattedStartDates = startDates.join(", ");
  // Mapping workexperience outside the return statement
  const endDates = workexperience?.map((w) =>
    w?.enddate ? w?.enddate.slice(0, 10) : ""
  );
  const formattedendDates = endDates.join(", ");

  var jobStartdateString = formattedStartDates;

  // Parse the input date string into a Date object
  var Jobstart = new Date(jobStartdateString);

  // Define an array to map month numbers to their abbreviated names
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month and year from the Date object
  var month = monthNames[Jobstart.getMonth()];
  var year = Jobstart.getFullYear();

  // Create the formatted date string
  var jobStartYear = month + " " + year;

  // Input date string
  var jobEnddateString = formattedendDates;

  // Parse the input date string into a Date object
  var JobEnd = new Date(jobEnddateString);
  // Define an array to map month numbers to their abbreviated names
  var EmonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month and year from the Date object
  var Emonth = EmonthNames[JobEnd.getMonth()];
  var Eyear = JobEnd.getFullYear();

  // Create the formatted date string
  var jobEndYear = Emonth + " " + Eyear;

  const edu = education[0];
  // edu
  // Input date string
  var eduStartdateString = edu?.startdate.slice(0, 10);

  // Parse the input date string into a Date object
  var Edustart = new Date(eduStartdateString);

  // Define an array to map month numbers to their abbreviated names
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month and year from the Date object
  var month = monthNames[Edustart.getMonth()];
  var year = Edustart.getFullYear();

  // Create the formatted date string
  var eduStartYear = month + " " + year;

  // Input date string
  var eduEnddateString = edu?.enddate.slice(0, 10);

  // Parse the input date string into a Date object
  var eduEnd = new Date(eduEnddateString);

  // Define an array to map month numbers to their abbreviated names
  var EmonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month and year from the Date object
  var Emonth = EmonthNames[eduEnd.getMonth()];
  var Eyear = eduEnd.getFullYear();

  // Create the formatted date string
  var eduEndYear = Emonth + " " + Eyear;

  const socket = useSocket();
  const [seeker, setseeker] = useState({});
  // console.log(seeker);
  const handleClick = (cl) => {
    getSeeker(cl); // Call the getSeeker function
    handleChannelCreate(); // Call the handleChannelCreate function
  };

  const getSeeker = (value) => {
    setseeker(value);
  };

  const recruter = useAuth();
  const recruterDetails = recruter.recruter;
// console.log(recruterDetails);

  const naviget = useNavigate();


  
  const handleChannelCreate = async () => {

    try {
      // Check if recruterDetails is not null
      if ( seeker._id !== undefined) {
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
            seekerid: seeker?.userid?._id,
            recruiterid: recruterID,
            // jobid: '...',
            candidate_fullprofile: seeker?._id,
            // outbound: '...',
          }),
        });
  
        const data = await response.json();
        const id = data._id;
  
        // Assuming 'channelinfo' contains the data you need
        console.log("Channel Info:", data);
  
        // Emit a socket event after API call if needed
        if (socket) {
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
    <div className="font-inter">
     
      <div
        key={cl._id}
        className="font-inter w-[700px] h-auto pb-[17px] bg-white mb-1 text-[#212427] text-opacity-90 rounded-md"
      >
        <div className="flex px-6 pt-4 justify-between">
          <div className="font-inter flex  ">
            <div className="font-inter ">
               <Link to={`/dashboard/recruiter/details-of-candidate/${cl?._id}`}>
              <img
                src={`https://rsapp.unbolt.co/${cl.userid?.image} `}
                alt=""
                className="font-inter w-[60px] h-[60px] rounded rounded-full"
              />

               </Link>
            </div>
            <div>
              <p className="font-inter inline-flex gap-2 ms-4 mb-1 font-semibold">
              <Link to={`/dashboard/recruiter/details-of-candidate/${cl?._id}`}>

                {cl.userid?.fastname} {cl.userid?.lastname}{" "}
              </Link>
                <li className="font-inter ms-2">
                  {cl.careerPreference[0]?.functionalarea?.functionalname}
                </li>
              </p>
              <div className="font-inter ms-4">
                <button className="font-inter ">
                  {cl?.userid?.experiencedlevel?.name}
                </button>
                {cl.education[0]?.digree?.education?.name ? (
                  <button className="font-inter  px-1 mx-2">
                    {cl.education[0]?.digree?.education?.name}
                  </button>
                ) : (
                  <button className="font-inter mx-2"></button>
                )}
                {cl?.careerPreference[0]?.salaray?.min_salary?.salary ? (
                  <button className="font-inter  px-1">
                    {cl?.careerPreference[0]?.salaray?.min_salary?.salary
                      ? cl?.careerPreference[0]?.salaray?.min_salary?.salary
                      : "00"}
                    {cl?.careerPreference[0]?.salaray?.min_salary?.salary ==
                    "Negotiable"
                      ? ""
                      : "-"}
                    {cl?.careerPreference[0]?.salaray?.max_salary?.salary ==
                    "Negotiable"
                      ? ""
                      : cl?.careerPreference[0]?.salaray?.max_salary?.salary}
                    {cl?.careerPreference[0]?.salaray?.min_salary?.salary ==
                    "Negotiable"
                      ? ""
                      : "K"}{" "}
                    {cl?.careerPreference[0]?.salaray?.min_salary?.salary ==
                    "Negotiable"
                      ? ""
                      : "BDT"}
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <img
            onClick={()=>handleClick(cl)}
            className="font-inter w-[18px] h-[18px] cursor-pointer "
            src="/images/RI-icons/sms.svg"
            alt=""
          />
        </div>

        <p className="font-inter ">
          {cl?.about?.about && cl?.about?.about.length > 100 ? (
            <div className="font-inter ">
              <p className="font-inter px-6 pe-10 py-2 text-[15px] text-[#212427] text-opacity-90">
                {cl?.about?.about.slice(0, 160) + " " + "..."}
              </p>
            </div>
          ) : (
            <p className="font-inter px-6 pe-10 py-2 text-[15px] text-[#212427] text-opacity-90">
              {cl?.about?.about}
            </p>
          )}
        </p>
        <div className="font-inter ps-6 ">
          <div className="">
            <div className="font-inter flex gap-x-3">
              <img src="/images/RI-icons/education.svg" alt="" />
              <div className="font-inter group flex ">
                <Tooltip
                  placement="top"
                  title={edu?.institutename ? edu?.institutename : ""}
                >
                  <p className="font-inter text-[15px] text-[#212427] text-opacity-80">
                    {" "}
                    {edu?.institutename
                      ? edu?.institutename.slice(0, 30)
                      : ""}{" "}
                  </p>
                </Tooltip>
                <p className="font-inter  ">
                  {edu?.digree?.name ? (
                    <li className="font-inter ms-2 text-[15px] text-[#212427] text-opacity-80">
                      {edu?.digree?.name}
                    </li>
                  ) : (
                    ""
                  )}{" "}
                </p>
              </div>
            </div>
            {/* {edu?.startdate ? (
            <p className="font-inter ms-8 ">
              {eduStartYear} - {eduEndYear}
            </p>
          ) : (
            <p></p>
          )} */}
          </div>
          <div className="font-inter mt-[5px]">
            <div className="font-inter flex gap-3">
              <img src="/images/RI-icons/bringin.svg" alt="" />
              {cl?.workexperience[0]?.companyname ? (
                <p className="font-inter text-[15px] text-[#212427] text-opacity-80">
                  {cl?.workexperience[0]?.companyname}
                </p>
              ) : (
                <p className="font-inter w-[180px]"></p>
              )}
              {cl?.workexperience[0]?.startdate ? (
                <li className="font-inter text-[15px] text-[#212427] text-opacity-80 ">
                  {jobStartYear} - {jobEndYear}
                </li>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
        <div className="font-inter flex mt-[5px] ">
          <div>
            <div className="font-inter  ps-6">
              <div className="font-inter flex items-center gap-x-[12px] w-[280px]">
                <img
                  className="font-inter w-[18px] h-[18px]"
                  src="/images/RI-icons/location.svg"
                  alt=""
                />
                {first?.division?.divisionname ? (
                  <p className="font-inter text-[15px] text-[#212427] text-opacity-80">
                    {first?.division?.cityid?.name
                      ? first?.division?.cityid?.name
                      : ""}
                    ,{" "}
                    {first?.division?.divisionname
                      ? first?.division?.divisionname
                      : ""}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
          <div className="font-inter flex items-center mt-[5px]">
            <div className="font-inter flex   gap-x-[15px] w-[350px]">
              <div className="font-inter flex flex-wrap gap-2   ">
                {skill.length > 0 ? (
                  skill?.map((sk, i) => (
                    <div key={sk._id} className="font-inter ">
                      <div className="font-inter ">
                        <p className="font-inter px-[7px] bg-[#1C4B81] text-[#212427] text-opacity-80 bg-opacity-10 lg:text-[15px] text-[11px] font-medium ">
                          {sk}
                          {i !== skill?.length - 1 ? (
                            <span className="font-inter "></span>
                          ) : (
                            <span className="font-inter "></span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p> </p>
                )}
              </div>
            </div>
            <div>
              <Link to={`/dashboard/recruiter/details-of-candidate/${cl?._id}`}>
                <img
                  src="/images/RI-icons/right-arrow.svg"
                  className="font-inter text-[#212427] w-[20px] h-[12px] cursor-pointer mt-[2px]  flex justify-end"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default SingleCandidateLis;
