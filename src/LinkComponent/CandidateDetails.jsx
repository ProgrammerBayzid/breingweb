import { Link, useLoaderData } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Helmet } from "react-helmet";

const CandidateDetails = () => {
 
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
    _id,
  } = profile;

  const openAndroidApp = () => {
    try {
      if (!_id) {
        throw new Error("The _id is missing or invalid.");
      }
      window.open(`bringin://app.bringin.io/candidate-profile/${_id}`);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    openAndroidApp(); // Call openAndroidApp function when the component is mounted.
  }, []);
  console.log(userid);

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
  const inputDateString = education[0]?.startdate;
  const inputDateStrin = education[0]?.enddate;
  const inputDateStrindeatofbirth = userid?.deatofbirth;

  // Parse the input date string into a Date object
  const date = new Date(inputDateString);
  const edate = new Date(inputDateStrin);
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

  const [isAndroid, setIsAndroid] = useState(false);
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    // Check if the user agent contains "android" to identify Android devices.
    if (userAgent.includes("android")) {
      setIsAndroid(true);
    }

    // Check if the user agent contains "iphone" or "ipad" to identify Apple (iOS) devices.
    if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      setIsApple(true);
    }
  }, []);

  const openInApp =()=>{
    setTimeout(function() {
      window.location = isAndroid? "https://play.google.com/store/apps/details?id=com.bringin.io":"https://apps.apple.com/app/bringin-instant-hiring-app/id6463415765";
    }, 200);
    
    // once you do the custom-uri, it should properly execute the handler, otherwise, the settimeout that you set before will kick in
    window.location = `bringin://app.bringin.io/candidate-profile/${_id}`;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Candidate Profile- Unbolt</title>
        <meta
          name="description"
          content=" At Unbolt-instant hiring app, Both Job Seekers and Recruiters can chat directly, also can attend instant in-app video call interviews and get hired instantly."
        />
        <link rel="canonical" href="http://unbolt.co/candidate-profile" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KKFH10XGFV"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKFH10XGFV');
          `}
        </script>
      </Helmet>
      <div className="flex justify-center">
        {/* pc */}

        <div className="hidden lg:block">
          <div className="w-[675px] h-[560px] px-4 my-5">
            <div className="flex justify-between items-center bg-white sticky top-0 z-40 bg-white py-2">
              <div>
                <LazyLoadImage
                  effect="blur"
                  src="/images/navlogo.svg"
                  className="w-[100px] h-[41px]"
                />

                <div className="flex gap-x-1 text-[14px] items-center text-gray-500 ">
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <p className="mt-[1px] ml-2">25K</p>
                </div>
              </div>

              <div className="">
                {isAndroid && (
                  
                    <button onClick={openInApp} className="bg-[#0077B5] font-medium lg:w-[110px] lg:h-[30px] w-[80px] h-[25px] lg:text-[14px] text-[10px] text-white rounded rounded-[8px]">
                      Open in App
                    </button>
                  
                )}
                {isApple && (
                 
                    <button onClick={openInApp} className="bg-[#0077B5] font-medium lg:w-[110px] lg:h-[30px] w-[80px] h-[25px] lg:text-[14px] text-[10px] text-white rounded rounded-[8px]">
                      Open in App
                    </button>
                  
                )}
                {!isAndroid && !isApple && (
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bringin.io"
                    target="_blank"
                  >
                    <button className="bg-[#0077B5] font-medium lg:w-[110px] lg:h-[30px] w-[80px] h-[25px] lg:text-[14px] text-[10px] text-white rounded rounded-[8px]">
                      Open in App
                    </button>
                  </a>
                )}
              </div>
            </div>

            <div className="mt-[40px]">
              <div>
                <div className="flex justify-between">
                  <div>
                    {userid?.fastname ? (
                      <p className="text-[25px] font-medium text-[#212427]">
                        {userid?.fastname} {userid?.lastname}
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="text-[16px] text-[#212427] text-opacity-70 font-normal mt-[10px]">
                      {workexperience[0]?.designation}
                      {" | "}
                      {workexperience[0]?.companyname}
                    </p>
                  </div>
                  <div>
                    {userid?.image ? (
                      <LazyLoadImage
                        effect="blur"
                        src={`https://rsapp.unbolt.co/${userid?.image}`}
                        className="w-[100px] h-[100px] rounded rounded-full"
                      />
                    ) : (
                      <LazyLoadImage
                        effect="blur"
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
                      <LazyLoadImage
                        effect="blur"
                        alt="bringin image"
                        src="/images/profile/Years.svg"
                        className="w-4 h-4"
                      />
                      <p className="text-[14px] text-[#212427]">
                        {userid?.experiencedlevel?.name}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center ">
                      <LazyLoadImage
                        effect="blur"
                        alt="bringin image"
                        src="/images/profile/Mass.svg"
                        className="w-4 h-4"
                      />
                      {education[0]?.digree?.name ? education[0]?.digree?.name : ""}
                    </div>

                    <div className="flex gap-2 items-center ">
                      <LazyLoadImage
                        effect="blur"
                        alt="bringin image"
                        src="/images/profile/Age.svg"
                        className="w-4 h-4"
                      />
                      <p className="text-[14px] text-[#212427]">{age} Years</p>
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
                        {sk ? (
                          <p className="h-[39px]  px-4 bg-[#00A0DC] bg-opacity-20 rounded rounded-[7px] flex items-center text-[16px] font-normal">
                            {sk}
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
                            {ca.category?.map((catego, i) => (
                              <p
                                key={i}
                                className="text-[16px] font-light font-normal text-[#212427] text-opacity-70"
                              >
                                {catego.categoryname}
                                {i !== ca.category.length - 1 && (
                                  <span className="text-[16px] font-light font-normal text-[#212427] text-opacity-70">
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
                              <p className="text-[18px] font-normal leading-5 text-[#212427] text-end">
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
                            <p className="text-[16px] font-Light text-[#212427] text-end text-opacity-90">
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
                    <p className="text-[17px] font-normal text-[#212427] mt-1">
                      {workexperience[0]?.companyname}
                    </p>
                    <p className="text-[14px] font-light font-normal text-[#212427] text-opacity-90 mt-[2px]">
                      {workexperience[0]?.designation}
                    </p>

                    <p className="mt-[10px] text-[14px] font-light font-normal text-[#212427] text-opacity-90 ">
                      {workexperience[0]?.dutiesandresponsibilities}
                    </p>
                  </div>
                </div>

                <div className="mt-[25px]">
                  <h1 className="text-[#212427] text-[22px] font-semibold">
                    Educational Qualifications{" "}
                  </h1>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[17px] font-normal text-[#212427] mt-1">
                        {education[0]?.institutename}
                      </p>
                      <p className="text-[15px] font-light font-normal text-[#212427] text-opacity-90 mt-[2px]">
                        {education[0]?.subject?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-light font-normal text-[#212427] text-opacity-70 mt-[2px]">
                        {formattedDate} to {eformattedDate}
                      </p>
                    </div>
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

        {/* pc */}

        <div>
          <div className="block lg:hidden md:hidden">
            <div className="mx-1  px-4  my-5">
              <div className="flex justify-between items-center sticky top-0 z-40 bg-white py-2">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src="/images/link.png"
                    className="w-[125px] h-[27px]"
                  />
                  <div className="flex gap-x-1 text-[12px] items-center text-gray-500 ml-[33px]">
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <BsStarHalf></BsStarHalf>
                    <p className="mt-[1px] ml-1">25K</p>
                  </div>
                </div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bringin.io"
                  target="_blank"
                >
                  <button className="bg-[#0077B5] font-medium lg:w-[110px] lg:h-[30px] w-[80px] h-[25px] lg:text-[14px] text-[10px] text-white rounded rounded-[8px]">
                    Download App
                  </button>
                </a>
              </div>

              <div className="mt-[25px]">
                <div className="flex gap-x-3 items-center">
                  <div>
                    {userid?.image ? (
                      <LazyLoadImage
                        effect="blur"
                        src={`https://rsapp.unbolt.co/${userid?.image}`}
                        className="w-[70px] h-[60px] rounded rounded-full"
                      />
                    ) : (
                      <LazyLoadImage
                        effect="blur"
                        src="/images/candidate/Group 10464.svg"
                        className="w-[100px] h-[100px] rounded rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    {userid?.fastname ? (
                      <p className="text-[14px] font-semibold text-[#212427] ml-2">
                        {userid?.fastname} {userid?.lastname}
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="text-[12px] text-[#212427] text-opacity-90 font-normal mt-[2px] ml-2">
                      {workexperience[0]?.designation}
                      {" | "}
                      {workexperience[0]?.companyname}
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
                            <p className="text-[12px] font-light font-normal text-[#212427] text-opacity-80">
                              {ca.category?.map((catego, i) => (
                                <p
                                  key={i}
                                  className="text-[12px] font-light font-normal text-[#212427] text-opacity-70"
                                >
                                  {catego.categoryname}
                                  {i !== ca.category.length - 1 && (
                                    <span className="text-[12px] font-light font-normal text-[#212427] text-opacity-70">
                                      {" "}
                                      |{" "}
                                    </span>
                                  )}
                                </p>
                              ))}{" "}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div>
                              <p className="text-[13px] font-normal text-[#212427] text-end">
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
                            <p className="text-[12px] font-normal text-[#212427] text-opacity-90 text-end">
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
                      {workexperience[0]?.companyname}
                    </p>
                    <p className="text-[12px] font-light font-normal text-[#212427] text-opacity-90 mt-[2px]">
                      {workexperience[0]?.designation}
                    </p>

                    <p className="mt-[10px] text-[12px] font-light font-normal text-[#212427] text-opacity-90 ">
                      {workexperience[0]?.dutiesandresponsibilities}
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
                        {formattedDate} to {eformattedDate}
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
                  <div className=" gap-x-2">
                    {skill.map((sk, i) => (
                      <div key={i}>
                        <div className="flex gap-x-4 mt-1">
                          {sk ? (
                            <p className="  text-[14px] font-normal borber border-b-[1px]">
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
