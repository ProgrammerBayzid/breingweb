import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Singlecandidate = ({ singlecanditade }) => {
  useEffect(() => {
    
    const script = document.createElement("script");

     
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1556748687572177";
    script.async = true;
    script.crossOrigin = "anonymous";

     document.head.appendChild(script);

     return () => {
      document.head.removeChild(script);
    };
  }, []);
  // console.log(singlecanditade);
  const { education, userid, careerPreference, workexperience, _id, skill } =
    singlecanditade;
  // console.log(skill);
  const first = careerPreference[0];
  const edu = education[0];
  // console.log(first);






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

  // Logging the formatted string
  // console.log(formattedStartDates);

  // Input date string
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

// edu 
 // Input date string
 var eduStartdateString =  edu?.startdate.slice(0, 10)

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
    <div>
      <div className="lg:w-[845px] lg:h-[240px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:px-7 lg:py-7 p-2 mb-10 bg-white w-[330px] rounded">
        <div className="lg:flex gap-x-5">
          <div className="flex gap-2 ">
            <div className=" lg:ml-5  ">
              <div>
                {userid?.image ? (
                  <LazyLoadImage  effect="blur"
                    alt=""
                    src={`https://rsapp.unbolt.co/${userid?.image}`}
                    className=" rounded rounded-full lg:w-24 w-[60px] lg:h-24 h-[60px] lg:ml-3 ml-[10px]"
                  ></LazyLoadImage>
                ) : (
                  <LazyLoadImage  effect="blur"
                    alt=""
                    src="/images/candidate/Group 10464.svg"
                    className=" rounded lg:w-24 w-[60px] lg:h-24 h-[60px] lg:ml-3 ml-[10px]"
                  ></LazyLoadImage>
                )}
              </div>
              <Link to={`/profiles-candidates/${_id}`}>
                <button className="rounded rounded-full lg:text-[16px] text-[12px]  hidden lg:block  lg:font-semibold font-medium border-[1px] border border-black hover:text-white text-black hover:border-[#0077B5] hover:bg-[#0077B5] lg:h-[40px] h-[20px] lg:w-[120px]  w-[80px] mt-2 lg:mt-7">
                  View Profile
                </button>
              </Link>
            </div>

            <div className="ml-[4px]">
              <h1 className="lg:text-[20px] text-[12px] font-semibold flex flex-wrap block lg:hidden mt-3">
                <div className="flex items-center">
                  <p>
                    {userid?.fastname ? userid?.fastname : ""}{" "}
                    {userid?.lastname ? userid?.lastname : ""}
                  </p>
                  <LazyLoadImage  effect="blur"
                    alt=""
                    src="/images/profile/Ellipse 153.svg"
                    className="lg:px-[5px] w-1 mx-1"
                  />
                </div>{" "}
                {/* {workexperience?.map((w) => (
                  ))} */}
                  <p >{first.functionalarea?.functionalname ? first.functionalarea?.functionalname : ""}</p>
              </h1>

              <div className="block lg:hidden ">
                <div className="flex gap-3 mt-[7px]">
                  {edu ? (
                    <div className="rounded rounded-[20px] border borded-[#5C6565]">
                      <div>
                        <p className="px-[4px] py-[3px] text-[#5C6565] text-[10px]">
                          {edu?.digree?.name ? edu?.digree?.name : ""}
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {userid?.experiencedlevel?.name ? (
                    <div className="  rounded rounded-[20px] border borded-[#5C6565] ">
                      <p className="px-[4px] py-[3px] text-[#5C6565] mx-[2px] text-[10px]">
                        {userid?.experiencedlevel?.name
                          ? userid?.experiencedlevel?.name
                          : ""}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {first?.salaray?.min_salary?.salary ? (
                    <div className="  rounded rounded-[20px] border borded-[#5C6565] ">
                      <p className="px-[4px] py-[3px] text-[#5C6565] text-[10px]">
                        {/* {first?.salaray?.salary? first?.salaray?.salary : "00K"}{" "}{first?.salaray?.currency? first?.salaray?.currency : "BDT"} */}
                        {first?.salaray?.min_salary?.salary
                          ? first?.salaray?.min_salary?.salary + "K"
                          : "00"}
                        {first?.salaray?.min_salary?.salary == "Negotiable"
                          ? ""
                          : "-"}
                        {first?.salaray?.max_salary?.salary == "Negotiable"
                          ? ""
                          : first?.salaray?.max_salary?.salary}
                        {first?.salaray?.min_salary?.salary == "Negotiable"
                          ? ""
                          : "K"}{" "}
                        {first?.salaray?.min_salary?.salary == "Negotiable"
                          ? ""
                          : "BDT"}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[18px] font-semibold flex hidden lg:block ">
              <div className="flex  items-center">
                <p>
                  {userid?.fastname ? userid?.fastname : ""}{" "}
                  {userid?.lastname ? userid?.lastname : ""}
                </p>
                <LazyLoadImage  effect="blur"
                  alt=""
                  src="/images/profile/Ellipse 153.svg"
                  className="px-[5px]"
                />
                {workexperience?.map((w) => (
                  <p key={w._id}>{w?.designation ? w?.designation : ""}</p>
                ))}
              </div>{" "}
            </h1>
            <div className="hidden lg:block">
              <div className="flex gap-3 mt-[7px]">
                {edu ? (
                  <div className="rounded rounded-[20px] border borded-[#5C6565]">
                    <div>
                      <p className="px-1 py-1 text-[#5C6565] text-[13px] ">
                        {edu?.digree?.name ? edu?.digree?.name : ""}
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {userid?.experiencedlevel?.name ? (
                  <div className="  rounded rounded-[20px] border borded-[#5C6565] ">
                    <p className="px-1 py-1 text-[#5C6565] text-[13px]">
                      {userid?.experiencedlevel?.name
                        ? userid?.experiencedlevel?.name
                        : ""}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {first?.salaray?.min_salary?.salary ? (
                  <div className="  rounded rounded-[20px] border borded-[#5C6565] ">
                    <p className="px-1 py-1 text-[#5C6565] text-[13px]">
                      {first?.salaray?.min_salary?.salary
                        ? first?.salaray?.min_salary?.salary
                        : "00"}
                      {first?.salaray?.min_salary?.salary == "Negotiable"
                        ? ""
                        : "-"}
                      {first?.salaray?.max_salary?.salary == "Negotiable"
                        ? ""
                        : first?.salaray?.max_salary?.salary}
                      {first?.salaray?.min_salary?.salary == "Negotiable"
                        ? ""
                        : "K"}{" "}
                      {first?.salaray?.min_salary?.salary == "Negotiable"
                        ? ""
                        : "BDT"}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className=" lg:flex justity-between ">
              <div className="">
                {workexperience ? (
                  <div className=" h-[47px]">
                    <div className="mt-[30px] flex gap-2">
                      <div>
                        {" "}
                        <LazyLoadImage  effect="blur"
                          alt="bringin image"
                          src="/images/logo/job.svg"
                          className=" rounded w-[18px] h-[19px] mt-[2px]"
                        ></LazyLoadImage>
                      </div>
                      <div className="">
                        {workexperience?.map((w) => (
                          <div key={w._id}>
                            <p className="lg:text-[14px] text-[14px] font-medium">
                              {w?.companyname ? w?.companyname : ""}
                            </p>
                            <p className="text-[#5C6565]">
                            {jobStartYear} - {jobEndYear}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="lg:ml-12 flex gap-2 lg:mt-16 block lg:hidden  mt-[10px]">
                  <div>
                    <LazyLoadImage  effect="blur"
                      alt="bringin image"
                      src="/images/candidate/Group 11727.svg"
                      className=" rounded w-[23px] h-[24px] "
                    ></LazyLoadImage>
                  </div>

                  <div className="">
                    <h1 className="text-[14px] font-medium">
                      {edu?.institutename ? edu?.institutename : ""}
                    </h1>
                    {edu?.startdate ? (
                      <p className="text-[#5C6565]">
                         {eduStartYear} -{" "}
                          {eduEndYear}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="">
                  {first?.division?.divisionname ? (
                    <div className=" flex gap-2 items-center lg:mt-[25px] mt-[10px]">
                      <div>
                        {" "}
                        <LazyLoadImage  effect="blur"
                          alt="bringin image"
                          src="/images/logo/locetion.svg"
                          className=" rounded w-[18px] h-[19px] "
                        ></LazyLoadImage>
                      </div>
                      <div>
                        <h1 className="lg:text-[14px] text-[14px] font-medium">
                          {first?.division?.cityid?.name
                            ? first?.division?.cityid?.name
                            : ""}
                          ,{" "}
                          {first?.division?.divisionname
                            ? first?.division?.divisionname
                            : ""}
                        </h1>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="">
                <div className="lg:ml-12 flex gap-2 lg:mt-[30px] hidden lg:block h-[47px]">
                  <div className="flex gap-x-2">
                    <div>
                      <LazyLoadImage  effect="blur"
                        alt="bringin image"
                        src="/images/candidate/Group 11727.svg"
                        className=" rounded w-[23px] h-[24px] "
                      ></LazyLoadImage>
                    </div>

                    <div className="">
                      <h1 className="text-[14px] font-medium">
                        {edu?.institutename ? edu?.institutename : ""}
                      </h1>
                      {edu?.startdate ? (
                        <p className="text-[#5C6565]">
                          {eduStartYear} -{" "}
                          {eduEndYear}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex   lg:mt-[25px] mt-[5px] ml-7 lg:ml-12 ">
                  <div className="flex flex-wrap gap-x-2 items-center">
                    {skill.length > 0 ? (
                      skill?.map((sk, i) => (
                        <div key={sk._id} className="">
                          <div className="">
                            <p className="text-[#00A0DC] lg:text-[14px] text-[11px] font-medium">
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
              </div>
            </div>
          </div>
        </div>
        <Link to={`/profiles-candidates/${_id}`}>
          <button className="block lg:hidden rounded rounded-full lg:text-[16px] text-[12px]   lg:font-semibold font-medium border-[1px] border border-black hover:text-white text-black hover:border-[#0077B5] hover:bg-[#0077B5] lg:h-[40px] h-[25px] lg:w-[120px]  w-full mt-2 lg:mt-7">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Singlecandidate;
