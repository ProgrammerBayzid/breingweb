import { Tooltip } from "antd";
import { Link } from "react-router-dom";

const SaveSingleCandidateLis = ({ candlst }) => {
  const { candidatefullprofile } = candlst;
  const cl = candidatefullprofile;
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

  return (
    <div
      key={cl._id}
      className="w-[700px] h-auto pb-[17px] bg-white mb-1 text-[#212427] text-opacity-90 rounded-md"
    >
      <div className="flex px-6 pt-4">
        <div className="">
          <img
            src={`https://rsapp.unbolt.co/${cl.userid?.image} `}
            alt=""
            className="w-[60px] h-[60px] rounded rounded-full"
          />
        </div>
        <div>
          <p className="inline-flex gap-2 ms-4 mb-2 font-semibold">
            {cl.userid?.fastname} {cl.userid?.lastname}{" "}
            <li className="ms-2">{cl.workexperience[0]?.designation}</li>
          </p>
          <p className="ms-4">
            <button className="border border-1 rounded-lg px-1">
              1-3 Years
            </button>
            {cl.education[0]?.digree?.education?.name ? (
              <button className="border border-1 rounded-lg px-1 mx-2">
                {cl.education[0]?.digree?.education?.name}
              </button>
            ) : (
              <button className="mx-2"></button>
            )}
            {cl?.careerPreference[0]?.salaray?.min_salary?.salary ? (
              <button className="border border-1 rounded-lg px-1">
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
          </p>
        </div>
      </div>
      <p className="">
        {cl?.about?.about && cl?.about?.about.length > 100 ? (
          <div className="">
            <p className="px-6 pe-10 py-2">
              {cl?.about?.about.slice(0, 160) + " " + "..."}
            </p>
          </div>
        ) : (
          <p className="px-6 pe-10 py-2">{cl?.about?.about}</p>
        )}
      </p>
      <div className=" h-[41px] flex ps-6 pb-6">
        <div className="w-[280px]">
          <div className="flex gap-4">
            <img src="/images/RI-icons/bringin.svg" alt="" />
            {cl?.workexperience[0]?.companyname ? (
              <p className="">{cl?.workexperience[0]?.companyname}</p>
            ) : (
              <p className="w-[180px]"></p>
            )}
          </div>
          {cl?.workexperience[0]?.startdate ? (
            <p className="ms-8">
              {jobStartYear} - {jobEndYear}
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <div>
          <div className="flex gap-3">
            <img src="/images/RI-icons/education.svg" alt="" />
            <div className="group flex ">
            <Tooltip placement="top" title={edu?.institutename ? edu?.institutename : ""} >
            <p className="font-inter "> {edu?.institutename ? edu?.institutename.slice(0, 30) : ""}{" "}</p>
          </Tooltip>
              <p className=" ">
                {edu?.digree?.name ? (
                  <li className="ms-2">{edu?.digree?.name}</li>
                ) : (
                  ""
                )}{" "}
              </p>
            </div>
          </div>
          {edu?.startdate ? (
            <p className="ms-8 ">
              {eduStartYear} - {eduEndYear}
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="flex  pe-6 pt-4">
       <div>
       <div className=" ps-6">
       <div className="flex items-center gap-x-[15px] w-[280px]">
            <img
              className="w-[18px] h-[18px]"
              src="/images/RI-icons/location.svg"
              alt=""
            />
            {first?.division?.divisionname ? (
              <p className="">
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
       <div className="flex items-center">
       <div className="flex   gap-x-[15px] w-[350px]">
            <img
              className="w-[17px] h-[17px] mt-1"
              src="/images/RI-icons/skills.svg"
              alt=""
            />
            <div className="flex flex-wrap gap-x-2   ">
              {skill.length > 0 ? (
                skill?.map((sk, i) => (
                  <div key={sk._id} className="">
                    <div className="">
                      <p className="text-[#00A0DC] lg:text-[16px] text-[11px] font-medium ">
                        {sk}
                        {i !== skill?.length - 1 ? (
                          <span className="">,</span>
                        ) : (
                          <span className="">.</span>
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
            className="text-[#212427] w-[20px] h-[12px] cursor-pointer mt-[2px]  flex justify-end"
          />
          </Link>
        </div>
       </div>
      </div>
    </div>
  );
};

export default SaveSingleCandidateLis;
