import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const CandidateDetails = () => {
  useTitle("Candidate Details - Bringin");

  const profile = useLoaderData();

  console.log(profile);
  const {
    userid,
    workexperience,
    education,
    skill,
    protfoliolink,
    about,
    careerPreference,
  } = profile;

  console.log(userid);








  // Input date string
  const inputDateString = education[0]?.startdate;
  const inputDateStrin = education[0]?.enddate  ;
  const inputDateStrindeatofbirth = userid?.deatofbirth  ;


  // Parse the input date string into a Date object
  const date = new Date(inputDateString);
  const edate = new Date(inputDateStrin);
  const birth = new Date(inputDateStrindeatofbirth);

  // Months mapping
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Extract year and month
  const year = date.getFullYear();
  const month = date.getMonth(); // Month value is 0-indexed
  const eyear = edate.getFullYear();
  const emonth = edate.getMonth(); // Month value is 0-indexed
  const byear = birth.getFullYear();
  const bmonth = birth.getMonth(); // Month value is 0-indexed

  // Get the formatted month name
  const formattedMonth = months[month];
  const eformattedMonth = months[emonth];
  const birthformattedMonth = months[bmonth];

  // Create the formatted output
  const formattedDate = `${year} ${formattedMonth}`;
  const eformattedDate = `${eyear} ${eformattedMonth}`;
  const birthformattedDate = `${byear} ${birthformattedMonth}`;

  // const first = careerPreference[0];
  // const ins = first.category[0];
  // console.log(ins);

  return (
    <div>
      <div className="flex justify-center">
        {/* pc */}

        <div className="hidden lg:block">
          <div className="w-[675px] h-[560px] px-4 my-5">
            <div>
              <img src="/images/link.png" className="w-[190px] h-[41px]" />
            </div>

            <div className="mt-[40px]">
              <div>
                <div className="flex justify-between">
                  <div>
                    {userid?.fastname ? (
                      <p className="text-[24px] font-medium text-[#212427]">
                        {userid?.fastname} {userid?.lastname}
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="text-[16px] text-[#212427] text-opacity-70 font-normal mt-[10px]">
                      Bringin Technologies Ltd.
                    </p>
                  </div>
                  <div>
                    {userid?.image ? (
                      <img
                        src={`https://rsapp.bringin.io/${userid?.image}`}
                        className="w-[100px] h-[100px] rounded rounded-full"
                      />
                    ) : (
                      <img
                        src="/images/candidate/Group 10464.svg"
                        className="w-[100px] h-[100px] rounded rounded-full"
                      />
                    )}
                  </div>
                </div>
                <hr className="mt-[5px]"></hr>

                <div className="">
                  <div className="flex gap-x-3 mt-2">
                    <div className="flex gap-2 items-center ">
                      <img
                        alt="bringin image"
                        src="/images/profile/Years.svg"
                        className="w-4 h-4"
                      />
                      <p className="text-[14px] text-[#212427]">
                        {userid?.experiencedlevel?.name}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center ">
                      <img
                        alt="bringin image"
                        src="/images/profile/Mass.svg"
                        className="w-4 h-4"
                      />
                      {education?.map((e) => (
                        <p key={e._id} className="text-[14px] text-[#212427]">
                          {e?.digree?.name ? e?.digree?.name : ""}
                        </p>
                      ))}
                    </div>

                    <div className="flex gap-2 items-center ">
                      <img
                        alt="bringin image"
                        src="/images/profile/Age.svg"
                        className="w-4 h-4"
                      />
                      <p className="text-[14px] text-[#212427]">
                        {birthformattedDate}
                      </p>
                    </div>

                   
                  </div>
                </div>

                <div className="mt-[15px]">
                  {about?.about ? (
                    <p className="text-[16px] font-normal text-[#212427] text-opacity-90">
                      {" "}
                      {about?.about}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mt-[15px] flex gap-x-3">
                  {skill.map((sk, i) => (
                    <div key={i}>
                      <div className="flex gap-x-4">
                        {sk?.skill ? (
                          <p className="h-[39px]  px-4 bg-[#00A0DC] bg-opacity-20 rounded rounded-[7px] flex items-center text-[16px] font-normal">
                            {sk?.skill}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-[20px] ">
                  <h1 className="text-[#212427] text-[22px] font-semibold mb-[10px]">
                    Career Preferences
                  </h1>
                  {careerPreference.map((ca, i) => (
                    <div key={i} className="">
                      <div className="flex justify-between mb-[15px]">
                        <div>
                          <div>
                            <p className="text-[18px] font-normal text-[#212427]">
                              {ca?.functionalarea?.functionalname}
                            </p>
                          </div>

                          <div className="mt-[3px]">
                            <p className="text-[14px] font-light font-normal text-[#212427] text-opacity-90">
                              {ca?.functionalarea?.industryid?.industryname}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div>
                              <p className="text-[16px] font-normal text-[#212427]">
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
                          <div className="mt-[5px]">
                            <p className="text-[16px] font-normal text-[#212427]">
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

                <div className="mt-[20px]">
                  <h1 className="text-[#212427] text-[22px] font-semibold">
                    Work Experiences
                  </h1>
                  <div>
                    <p className="text-[16px] font-normal text-[#212427] mt-1">
                      Bringin Technologies Ltd.
                    </p>
                    <p className="text-[14px] font-light font-normal text-[#212427] text-opacity-90 mt-[2px]">
                      UI/UX Designer
                    </p>

                    <p className="mt-[10px] text-[14px] font-light font-normal text-[#212427] text-opacity-90 ">
                      Examine previous design feedback and briefs for new
                      projects, and collaborate with the team. Investigate
                      various topics, from the web or mobile usage analytics to
                      trend spotting. Exa
                    </p>
                  </div>
                </div>

                <div className="mt-[25px]">
                  <h1 className="text-[#212427] text-[22px] font-semibold">
                    Educational Qualifications{" "}
                  </h1>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[16px] font-normal text-[#212427] mt-1">
                        {education[0]?.institutename}
                      </p>
                      <p className="text-[14px] font-light font-normal text-[#212427] text-opacity-90 mt-[2px]">
                       {education[0]?.subject?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-light font-normal text-[#212427] text-opacity-70 mt-[2px]">
                        { formattedDate} to {eformattedDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link to='/recruiterslogin'>
                    <button className="text-white font-semibold text-[20px] bg-[#0077B5] w-full h-[52px] my-10 rounded rounded-[5px]">
                      Start Chatting
                    </button>
                  </Link>
                </div>

              
              </div>
            </div>
          </div>
        </div>

        {/* pc */}

        <div>
          <div className="block lg:hidden md:hidden">
            <div className="w-[340px]  px-4  my-5">
              <div>
                <img src="/images/link.png" className="w-[130px] h-[31px]" />
              </div>

              <div className="mt-[40px]">
                <div className="flex gap-x-3 items-center">
                  <div>
                    {userid?.image ? (
                      <img
                        src={`https://rsapp.bringin.io/${userid?.image}`}
                        className="w-[60px] h-[60px] rounded rounded-full"
                      />
                    ) : (
                      <img
                        src="/images/candidate/Group 10464.svg"
                        className="w-[100px] h-[100px] rounded rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    {userid?.fastname ? (
                      <p className="text-[14px] font-semibold text-[#212427]">
                        {userid?.fastname} {userid?.lastname}
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="text-[12px] text-[#212427] text-opacity-90 font-normal mt-[2px]">
                      Bringin Technologies Ltd.
                    </p>
                  </div>
                </div>

                <div className="mt-[25px] flex">
                  <p className="flex items-center text-[16px] font-semibold text-[#212427] border border-[#212427] border-opacity-20 h-[32px]  rounded rounded-[30px] px-4">
                    About me
                  </p>
                </div>
                <div className="mt-[5px]">
                  {about?.about ? (
                    <p className="text-[14px] font-normal text-[#212427] text-opacity-70">
                      {" "}
                      {about?.about}
                    </p>
                  ) : (
                    "In the beginning of career I’m highly desired to work in an organization where. eginning of career I’m the"
                  )}
                </div>

                <div className="mt-[20px] ">
                  <div className="flex">
                    <p className="flex items-center text-[16px] font-semibold text-[#212427] border border-[#212427] border-opacity-20 h-[32px]  rounded rounded-[30px] px-4  mb-[7px]">
                      Career Preferences
                    </p>
                  </div>
                  {careerPreference.map((ca, i) => (
                    <div key={i} className="">
                      <div className="flex justify-between mb-[15px]">
                        <div>
                          <div>
                            <p className="text-[14px] font-normal text-[#212427]">
                              {ca?.functionalarea?.functionalname}
                            </p>
                          </div>

                          <div className="mt-[3px]">
                            <p className="text-[12px] font-light font-normal text-[#212427] text-opacity-90">
                              {ca?.functionalarea?.industryid?.industryname}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div>
                              <p className="text-[14px] font-normal text-[#212427]">
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
                          <div className="mt-[5px]">
                            <p className="text-[14px] font-normal text-[#212427]">
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
                <div className="mt-[20px]">
                  <div className="flex">
                    <p className="flex items-center text-[16px] font-semibold text-[#212427] border border-[#212427] border-opacity-20 h-[32px]  rounded rounded-[30px] px-4  mb-[7px]">
                      Work Experiences
                    </p>
                  </div>

                  <div>
                    <p className="text-[14px] font-normal text-[#212427] mt-1">
                      Bringin Technologies Ltd.
                    </p>
                    <p className="text-[12px] font-light font-normal text-[#212427] text-opacity-90 mt-[2px]">
                      UI/UX Designer
                    </p>

                    <p className="mt-[10px] text-[12px] font-light font-normal text-[#212427] text-opacity-90 ">
                      Examine previous design feedback and briefs for new
                      projects, and collaborate with the team. Investigate
                      various topics, from the web or mobile usage analytics to
                      trend spotting. Exa
                    </p>
                  </div>
                </div>

                <div className="mt-[25px]">
                  <div className="flex">
                    <p className="flex items-center text-[16px] font-semibold text-[#212427] border border-[#212427] border-opacity-20 h-[32px]  rounded rounded-[30px] px-4  mb-[7px]">
                      Educational Qualifications{" "}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[14px] font-normal text-[#212427] mt-1">
                      {education[0]?.institutename}
                      </p>
                      <p className="text-[12px] font-light font-normal text-[#212427] text-opacity-90 mt-[2px]">
                      {education[0]?.subject?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] font-light font-normal text-[#212427] text-opacity-70 mt-[2px]">
                      { formattedDate} to {eformattedDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[25px]">
                  <div className="flex">
                    <p className="flex items-center text-[16px] font-semibold text-[#212427] border border-[#212427] border-opacity-20 h-[32px]  rounded rounded-[30px] px-4  mb-[7px]">
                      My Skill{" "}
                    </p>
                  </div>
                  <div className="flex gap-x-2">
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

                <div>
                  <Link to="/recruiterslogin">
                    <button className="text-white font-semibold text-[20px] bg-[#0077B5] w-full h-[52px] my-10 rounded rounded-[5px]">
                      Start Chatting
                    </button>
                  </Link>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
