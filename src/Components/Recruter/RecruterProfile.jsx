import { Link, useLoaderData } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const RecruterProfile = () => {
  const recruterProfiledetails = useLoaderData();
  console.log(recruterProfiledetails);
 
  const {
    number,
    firstname,
    lastname,
    designation,
    email,
    image,
    other,
    companyname,
  } = recruterProfiledetails;
  const link = `https://${companyname?.c_website}`;

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

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recruiters Job Posts | Unbolt Chat Based Hiring App </title>
        <meta
          name="description"
          content=" At Unbolt-instant hiring app, Both Job Seekers and Recruiters can chat directly, also can attend instant in-app video call interviews and get hired instantly."
        />
        <link rel="canonical" href="http://unbolt.co/profiles-recruiters" />
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
        <div className="">
          <div className="lg:w-[675px]  md:w-[675px] w-full  mb-5     px-3">
            <div className="flex justify-between items-center bg-white py-2 sticky top-0 z-40 bg-white">
                    <LazyLoadImage
              effect= "blur"
                src="/images/navlogo.svg"
                className="lg:w-[100px] lg:h-[41px] w-[140px] h-[30px]"
              />

              <div className="">
                {isAndroid && (
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bringin.io"
                    target="_blank"
                  >
                    <button className="bg-[#0077B5] font-medium lg:w-[110px] lg:h-[30px] w-[80px] h-[25px] lg:text-[14px] text-[10px] text-white rounded rounded-[8px]">
                      Download App
                    </button>
                  </a>
                )}
                {isApple && (
                  <a
                    href="https://apps.apple.com/app/bringin-instant-hiring-app/id6463415765"
                    target="_blank"
                  >
                    <button className="bg-[#0077B5] font-medium lg:w-[110px] lg:h-[30px] w-[80px] h-[25px] lg:text-[14px] text-[10px] text-white rounded rounded-[8px]">
                      Download App
                    </button>
                  </a>
                )}
                {!isAndroid && !isApple && (
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bringin.io"
                    target="_blank"
                  >
                    <button className="bg-[#0077B5] font-medium lg:w-[110px] lg:h-[30px] w-[80px] h-[25px] lg:text-[14px] text-[10px] text-white rounded rounded-[8px]">
                      Download App
                    </button>
                  </a>
                )}
              </div>
            </div>

            <div className="lg:mt-[40px] mt-[25px]">
              <div>
                <div className="h-[112px] border border-[#212427] border-opacity-20  flex gap  rounded rounded-[5px] px-4 pt-2">
                  <div>
                    <div className="flex gap-x-5 items-center">
                      <div>
                        {image ? (
                          <div className="relative">
                                  <LazyLoadImage
              effect= "blur"
                              src="/images/candidate/Group 10464.svg"
                              src={`https://rsapp.unbolt.co/${image}`}
                              className="w-[60px] h-[60px] rounded rounded-full"
                            />
                                  <LazyLoadImage
              effect= "blur"
                              src="/images/rv.png"
                              className="w-[15px] h-[15px]  absolute bottom-0 right-0"
                            />
                          </div>
                        ) : (
                                <LazyLoadImage
              effect= "blur"
                            src="/images/candidate/Group 10464.svg"
                            className="w-[60px] h-[60px] rounded rounded-full"
                          />
                        )}
                      </div>
                      <div>
                        <div>
                          <div className="  flex gap-x-7 items-center">
                            <div className="flex items-center gap-x-2">
                              <p className="lg:text-[16px] md:text-[16px] text-[10px]   text-[#212427] font-medium">
                                {" "}
                                {firstname} {lastname}
                              </p>
                                    <LazyLoadImage
              effect= "blur"
                                src="/images/ro1.png"
                                className="lg:w-[7px] lg:h-[7px] w-[4px] h-[4px] "
                              />
                              <p className=" lg:text-[14px] md:text-[14px] text-[10px]  text-[#00A0DC] font-small">
                                {" "}
                                Online
                              </p>
                            </div>

                            <div className="flex">
                              {other?.premium === true ? (
                                <p className="text-[#D2AF26] text-[10px] broder broder-[#D2AF26] bg-[#D2AF26] bg-opacity-10 px-[2px] h-[16px] flex items-center border-[1px] rounded rounded-[2px]">
                                  {" "}
                                  Premium
                                </p>
                              ) : (
                                <p className="text-[#D2AF26] text-[10px] broder broder-[#D2AF26] bg-[#D2AF26] bg-opacity-10 px-[2px] h-[16px] flex items-center rounded border-[1px] rounded-[2px]">
                                  {" "}
                                  Free user
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <p className="lg:text-[16px] md:text-[16px] text-[10px]   text-[#212427] font-medium">
                              {" "}
                              {designation}
                            </p>
                                  <LazyLoadImage
              effect= "blur"
                              src="/images/ro.png"
                              className="lg:w-[7px] lg:h-[7px] w-[4px] h-[4px] "
                            />
                            <p className="lg:text-[16px] md:text-[16px] text-[10px]   text-[#212427] font-medium">
                              {" "}
                              {companyname?.legal_name}
                            </p>
                          </div>
                          <p className="text-[10px] text-[#212427] block lg:hidden md:hidden ">
                            {email}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      {other?.profile_verify === true ? (
                        <div className="flex items-center gap-x-2">
                                <LazyLoadImage
              effect= "blur"
                            src="/images/tick-mark.png"
                            className=" w-[14px] h-[14px] "
                          />
                          <p className="text-[13px] font-normal text-opacity-70  text-[#212427] ">
                            Verified {other?.profile_verify_date.slice(0, 10)}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="h-[95px] w-[1px] bg-[#212427] bg-opacity-20 ml-[40px] hidden lg:block md:block"></div>
                  <div className="ml-[50px] mt-[8px] hidden lg:block md:block">
                    <p className="text-[14px] text-[#454545] text-opacity-80">
                      Email Adress
                    </p>
                    <p className="text-[14px] text-[#212427] ">{email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-[15px] flex justify-between items-center">
              <div>
                <p className="lg:text-[18px] text-[14px] text-[#212427] font-medium">
                  Company Address
                </p>
                <p className="lg:text-[16px] text-[12px] text-[#212427] text-opacity-80 font-normal">
                  {companyname?.c_location?.formet_address}
                </p>
                <p className="lg:text-[16px] text-[12px] text-[#212427] text-opacity-80 font-normal">
                  {companyname?.c_location?.city},{" "}
                  {companyname?.c_location?.division}
                </p>
              </div>
              <div>
                      <LazyLoadImage
              effect= "blur"
                  className="lg:w-[128px] lg:h-[35px] w-[100px] h-[25px]"
                  src="/images/Navigation.png"
                />
              </div>
            </div>

            <div className=" mt-[15px] lg:w-[400px] ">
              <p className="lg:text-[18px] text-[14px] text-[#212427] font-medium mb-1">
                Business Information
              </p>
              <div className=" flex justify-between mb-[4px]">
                <p className="lg:text-[16px] text-[12px] text-[#212427] text-opacity-80 font-normal">
                  Company Founded
                </p>
                <p className="lg:text-[16px] text-[12px] text-[#212427] text-opacity-80 font-normal">
                  {/* {companyname?.c_location?.formet_address} */}
                </p>
              </div>
              <div className=" flex justify-between  mb-[4px]">
                <p className="lg:text-[16px] text-[12px] text-[#212427] text-opacity-80 font-normal">
                  Official Website
                </p>
                <p className="lg:text-[16px] text-[12px] text-[#212427] text-opacity-80 font-normal flex items-center gap-x-1 text-blue-500">
                        <LazyLoadImage
              effect= "blur" src="/images/wlink.png" className="h-[15px] w-[15px]" />{" "}
                  <a href={link} target="_blank">
                    {companyname?.c_website}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <div className="mt-[25px]">
                <div className="lg:h-[35px] h-[30px] bg-[#F1F1F1] rounded rounded-[8px] flex items-center justify-center">
                  <div className="flex gap-x-3 items-center">
                    <p className="lg:text-[16px] text-[12px] text-[#212427]  font-semibold ">
                      Jobs Opening
                    </p>

                    <div className="flex">
                      <div className="bg-[#0077B5]  w-[17px] h-[19px] flex items-center justify-center rounded">
                        <p className=" text-white p-[2px] lg:text-[16px] text-[12px]">
                          {" "}
                          {other?.totaljob}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <div className="flex justify-between">
                  <p className="text-[#212427] font-semibold lg:text-[20px] text-[16px]">
                    {other?.latestjobid?.job_title}
                  </p>
                  <div>
                    <p className="text-[#0077B5] text-opacity-90 lg:text-[18px] md:text-[18px] text-[14px] font-medium border border-[#0077B5] border-opacity-20   rounded rounded-[10px] px-2 pt-1 flex items-center">
                      {other?.latestjobid?.salary?.min_salary?.salary
                        ? other?.latestjobid?.salary?.min_salary?.salary
                        : "00"}
                      {other?.latestjobid?.salary?.min_salary?.salary ==
                      "Negotiable"
                        ? ""
                        : "-"}
                      {other?.latestjobid?.salary?.max_salary?.salary ==
                      "Negotiable"
                        ? ""
                        : other?.latestjobid?.salary?.max_salary?.salary}
                      {other?.latestjobid?.salary?.min_salary?.salary ==
                      "Negotiable"
                        ? ""
                        : "K"}{" "}
                      {other?.latestjobid?.salary?.min_salary?.salary ==
                      "Negotiable"
                        ? ""
                        : "BDT"}
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  {other?.latestjobid?.job_description &&
                  other?.latestjobid?.job_description.length > 100 ? (
                    <div className="">
                      <p className="lg:text-[18px] text-[16] text-[#212427] text-opacity-60  font-normal">
                        {other?.latestjobid?.job_description.slice(0, 100) +
                          " " +
                          "..."}{" "}
                        <Link to={`/job-details/${other?.latestjobid?._id}`}>
                          <span className="text-[#00679C] lg:text-[16px] text-[12px]">
                            View Job{" "}
                          </span>
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <p className="lg:text-[18px] text-[16] text-[#212427] text-opacity-60  font-normal">
                      {other?.latestjobid?.job_description}{" "}
                      <Link to={`/job-details/${other?.latestjobid?._id}`}>
                        <span className="text-[#00679C] lg:text-[16px] text-[12px]">
                          View Job{" "}
                        </span>
                      </Link>
                    </p>
                  )}
                </div>
                <div className="mb-[2px]">
                  <div className="flex gap-x-3 mt-2">
                    <div className="flex gap-2 items-center ">
                            <LazyLoadImage
              effect= "blur"
                        alt="bringin image"
                        src="/images/je.png"
                        className="w-4 h-4"
                      />
                      <p className="lg:text-[14px] text-[12px] text-[#212427]">
                        {other?.latestjobid?.education?.name}
                      </p>
                    </div>

                    <div className="flex gap-2 items-center ">
                            <LazyLoadImage
              effect= "blur"
                        alt="bringin image"
                        src="/images/jf.png"
                        className="w-4 h-4"
                      />
                      <p className="lg:text-[14px] text-[12px] text-[#212427]">
                        {other?.latestjobid?.experience?.name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div className="flex gap-2 items-center ">
                          <LazyLoadImage
              effect= "blur"
                      alt="bringin image"
                      src="/images/jl.png"
                      className="w-4 h-4"
                    />
                    <p className="lg:text-[14px] text-[12px] text-[#212427]">
                      {other?.latestjobid?.job_location.city},{" "}
                      {other?.latestjobid?.job_location.division}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center ">
                          <LazyLoadImage
              effect= "blur"
                      alt="bringin image"
                      src="/images/jt.png"
                      className="w-4 h-4"
                    />
                    <p className="lg:text-[16px] text-[12px] text-[#00A0DC] font-medium">
                      {other?.latestjobid?.jobtype?.worktype}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F6F6F6] h-[8px] mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruterProfile;
