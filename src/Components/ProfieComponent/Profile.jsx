import { Link, useLoaderData } from "react-router-dom";
import SearchComponent from "../SearchComponent/SearchComponent";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useProfileData } from "./ProfileDataProvider";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Profile = () => {
 
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
  const first = careerPreference[0];
  const ins = first.category[0];
  console.log(ins);

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

  const { profileData, updateProfileData } = useProfileData();

  // Update profileData when input fields change
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    let newValue;
  
    if (type === "checkbox") {
      newValue = checked;
    } else if (name === "number") {
      // If the input field is named "number," apply the numeric transformation
      newValue = value.replace(/\D/g, "").replace(/^0+/, ""); // Remove non-digit characters and leading zeros
    } else {
      newValue = value;
    }
  
    updateProfileData({ [name]: newValue });
  };
  

  return (
    <div className="lg:my-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Candidate Profile- Unbolt</title>
        <meta
          name="description"
          content=" At Unbolt-instant hiring app, Both Job Seekers and Recruiters can chat directly, also can attend instant in-app video call interviews and get hired instantly."
        />
        <link rel="canonical" href="http://unbolt.co" />
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
      <div className="relative lg:bg-[url(/src/bgimages/candidateupbg.png)] bg-contain	 bg-right bg-no-repeat  lg:pb-[100px] pb-[30px]">
        <p className="text-white text-[1px]">k</p>

        <SearchComponent></SearchComponent>

        <div>
          <h1 className="text-center lg:text-[36px] md:text-[30px] text-[20px] text-[#023C5B]  font-semibold lg:mt-[50px] mt-[20px]">
            Hire the Best{" "}
            {first?.functionalarea?.functionalname
              ? first?.functionalarea?.functionalname
              : "null"}{" "}
            Professionals across Bangladesh{" "}
          </h1>
        </div>
      </div>
      <div>
        <div className="my-">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 ">
            <div className="lg:col-span-2   mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
              <div className="relative bg-[#EEFCFE] lg:bg-[url(/src/bgimages/Gradientp.png)] bg-auto	 bg-right-top bg-no-repeat">
                <div className="lg:w-[833px] md:w-[600px] w-[330px]  shadow- lg:p-7 p-2 ">
                  <div>
                    <div className="mb-4"></div>
                    <div className="lg:flex lg:flex-cols-2 gap-10 items-center">
                      <div className="lg:mt-0 md:mt-4 mt-4">
                        {userid?.image ? (
                           <LazyLoadImage
              effect= "blur"
                            alt=""
                            src={`https://rsapp.unbolt.co/${userid?.image}`}
                            className=" rounded rounded-full lg:w-24 w-[60px] lg:h-24 h-[60px]  "
                          ></LazyLoadImage>
                        ) : (
                           <LazyLoadImage
              effect= "blur"
                            alt=""
                            src="/images/candidate/Group 10464.svg"
                            className=" rounded rounded-full lg:w-24 w-[60px] lg:h-24 h-[60px]"
                          ></LazyLoadImage>
                        )}
                      </div>
                      <div>
                        <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-semibold flex gap-1 mb-2 mt-2 ">
                          <div className="flex gap-1 items-center">
                            <p>
                              {" "}
                              {userid?.fastname
                                ? userid?.fastname
                                : "No Name"}{" "}
                              {userid?.lastname ? userid?.lastname : "No Name"}{" "}
                            </p>
                             <LazyLoadImage
              effect= "blur"
                              alt="bringin image"
                              src="/images/profile/Ellipse 153.svg"
                              className="w-1"
                            />
                          </div>{" "}
                          {workexperience?.map((w) => (
                            <p key={w._id}>
                              {w?.designation ? w?.designation : ""}
                            </p>
                          ))}
                        </h1>
                        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-y-2 gap-x-5 mt-2">
                          <div className="flex gap-2">
                             <LazyLoadImage
              effect= "blur"
                              alt="bringin image"
                              src="/images/profile/Years.svg"
                              className="w-5 h-5"
                            />
                            <p className="lg:ml-0 md:ml-0 ml-[2px]">
                              {userid?.experiencedlevel?.name}
                            </p>
                          </div>
                          <div className="flex gap-2">
                             <LazyLoadImage
              effect= "blur"
                              alt="bringin image"
                              src="/images/profile/Mass.svg"
                              className="w-5 h-5"
                            />

                            {education?.map((e) => (
                              <p
                                key={e._id}
                                className="lg:ml-0 md:ml-0 ml-[2px]"
                              >
                                {e?.digree?.name ? e?.digree?.name : ""}
                              </p>
                            ))}
                          </div>

                          <div className="flex gap-2">
                             <LazyLoadImage
              effect= "blur"
                              alt="bringin image"
                              src="/images/profile/Age.svg"
                              className="w-5 h-5"
                            />
                            <p className="lg:ml-0 md:ml-0 ml-[2px]">
                              {age} Years
                            </p>
                          </div>

                          <div className="flex gap-2">
                             <LazyLoadImage
              effect= "blur"
                              alt="bringin image"
                              src="/images/profile/Location.svg"
                              className="w-5 h-5"
                            />
                            <p className="">
                              {" "}
                              {first?.division?.divisionname
                                ? first?.division?.divisionname
                                : ""}
                              ,{" "}
                              {first?.division?.cityid?.name
                                ? first?.division?.cityid?.name
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h1 className="font-semibold text-[20px] lg:mt-3 md:my-4 my-4">
                        About me
                      </h1>
                      <p>{about?.about ? about?.about : "..........."}</p>
                    </div>

                    <h1 className="font-semibold text-[20px] lg:mt-3 md:my-4 my-3">
                      Skills
                    </h1>
                    <div className="lg:flex lg:gap-x-5 ">
                      {skill.map((c) => (
                        <div
                          key={c._id}
                          className=" lg:bg-[#C2DFEF] lg:px-3 lg:py-1 rounded rounded-md"
                        >
                          <p>{c ? c : ""}</p>
                        </div>
                      ))}
                    </div>

                    <div className="">
                      <h1 className="font-semibold text-[20px] mt-7 mb-4">
                        Career Preferences
                      </h1>

                      {careerPreference.map((ca, i) => (
                        <div key={i} className="">
                          <div className="flex justify-between mb-[15px] lg:w-3/4">
                            <div>
                              <div>
                                <p className="text-[16px] font-normal text-[#212427] text-opacity-70">
                                  {ca?.functionalarea?.functionalname}
                                </p>
                              </div>

                              <div className="mt-[3px]">
                                {ca.category?.map((catego, i) => (
                                  <p
                                    key={i}
                                    className="text-[14px] font-light font-normal text-[#212427] text-opacity-50"
                                  >
                                    {catego.categoryname}
                                    {i !== ca.category.length - 1 && (
                                      <span className="text-[14px] ffont-light font-normal text-[#212427] text-opacity-50">
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
                                  <p className="text-[14px] font-normal text-[#212427] text-opacity-50 text-end">
                                    {ca?.salaray?.min_salary?.salary
                                      ? ca?.salaray?.min_salary?.salary
                                      : "00"}
                                    {ca?.salaray?.min_salary?.salary ==
                                    "Negotiable"
                                      ? ""
                                      : "-"}
                                    {ca?.salaray?.max_salary?.salary ==
                                    "Negotiable"
                                      ? ""
                                      : ca?.salaray?.max_salary?.salary}
                                    {ca?.salaray?.min_salary?.salary ==
                                    "Negotiable"
                                      ? ""
                                      : "K"}{" "}
                                    {ca?.salaray?.min_salary?.salary ==
                                    "Negotiable"
                                      ? ""
                                      : "BDT"}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-[5px]">
                                <p className="text-[14px] font-Light text-[#212427] text-opacity-50 text-end">
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
                  </div>
                </div>
              </div>
              <div className="relative lg:bg-[url(/src/bgimages/profiledownbg.png)] bg-cover	 bg-right bg-no-repeat bg-[#EEFCFE]">
                <div className="lg:w-[833px] md:w-[600px] w-[320px] lg:h-[258px]  p-7    ">
                  <div>
                    <p className="text-[#023C5B] lg:text-[30px] text-[25px] font-medium mb-7 ">
                      To chat with your future employees
                      <p className="lg:text-[30px] text-[20px] text-[#005085] font-semibold mb-7">
                        Download Bringin App Now.
                      </p>
                    </p>

                    <div className="flex gap-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.bringin.io"
                        target="_blank"
                      >
                         <LazyLoadImage
              effect= "blur"
                          className="lg:w-[130px] lg:h-[42px] w-[233px] h-[40px]  md:h-[62px]"
                          src="/images/playstore.png"
                        />
                      </a>

                      <a href="https://apps.apple.com/app/bringin-instant-hiring-app/id6463415765"  target="_blank">
                         <LazyLoadImage
              effect= "blur"
                          className="lg:w-[130px] lg:h-[42px] w-[233px] h-[40px]  md:h-[62px]"
                          src="/images/appstore.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:ml-0 md:mx-auto mx-auto ">
              <div className="">
                <div className="lg:w-[400px] md:w-[400px] w-[320px] lg:h-[825px]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-5 ">
                  <div>
                    <h1 className="text-center font-semibold lg:text-[20px] text-[18px]">
                      Let's Simplify the Hiring Process
                    </h1>
                    <p className="text-center text-[#454545]">
                      Register as recruiter.
                    </p>
                  </div>
                  <div className="px-7 mt-3">
                    <from>
                      <input
                        type="text"
                        name="firstname"
                        value={profileData.firstname}
                        onChange={handleInputChange}
                        className="placeholder:text-[#C7C8C9] h-[45px]     w-full rounded px-5 border border-[2px] my-2  focus:outline-none mb-[px]"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        name="lastname"
                        value={profileData.lastname}
                        onChange={handleInputChange}
                        className="placeholder:text-[#C7C8C9] h-[45px]     w-full rounded px-5 border border-[2px] my-2  focus:outline-none mb-[px]"
                        placeholder="Name"
                      />

                      <div className="relative my-2">
                        <div className="absolute pt-[11px] left-0 flex items-center pl-5 pointer-events-none">
                          <p className="text-[#C7C8C9]">+880 ।</p>
                        </div>
                        <input
                          type="text"
                          name="number"
                          maxLength="10"
                          value={profileData.number}
                          onChange={handleInputChange}
                          className="placeholder:text-[#C7C8C9] placeholder:text-[15px] h-[45px]   w-full rounded  pl-[72px] pl-[80px]  border border-[2px]  focus:outline-none mb-[px]"
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>
                      <input
                        type="text"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="placeholder:text-[#C7C8C9] placeholder:text-[15px] h-[45px]     w-full rounded px-5 border border-[2px] my-2  focus:outline-none mb-[px]"
                        placeholder="Official email"
                      />

                      <input
                        type="text"
                        name="companyname"
                        value={profileData.companyname}
                        onChange={handleInputChange}
                        className="placeholder:text-[#C7C8C9] placeholder:text-[15px] h-[45px]     w-full rounded px-5 border border-[2px] my-2  focus:outline-none mb-[px]"
                        placeholder="Company name"
                      />
                      <input
                        type="text"
                        name="designation"
                        value={profileData.designation}
                        onChange={handleInputChange}
                        className="placeholder:text-[#C7C8C9] placeholder:text-[15px]    h-[45px]    w-full rounded px-5 border border-[2px] my-2  focus:outline-none mb-[px]"
                        placeholder="Designation"
                      />

                      <div className="flex gap-2 mb-[25px] px-3 mt-5">
                        <input
                          type="checkbox"
                          name="receiveNotifications"
                          checked={profileData.receiveNotifications}
                          onChange={handleInputChange}
                        />
                        <p className="text-[14px] text-[#454545] mt-">
                          I would like to get notifications via whatsApp.
                        </p>
                      </div>
                      <Link to="/recruiters-login">
                        <button
                          className="lg:w-[343px] w-[280px] h-[50px] bg-[#F2F2F2] font-semibold font-semibold hover:bg-[#0077B5] hover:text-white rounded text-center "
                          type="submit"
                        >
                          Submit
                        </button>
                      </Link>
                    </from>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
