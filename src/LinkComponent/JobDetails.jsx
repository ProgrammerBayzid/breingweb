import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useLoaderData } from "react-router-dom";
import AppLinkModal from "../Components/ShereComponent/AppLinkModal";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const JobDetails = () => {
  const [openModal, closeModal] = useState(false);

  const jobdetails = useLoaderData();
  // console.log(jobdetails);

  const {
    userid,
    experience,
    education,
    skill,
    company,
    expertice_area,
    job_description,
    companyname,
    job_status,
    job_title,
    jobtype,
    postdate,
    salary,
    job_location,
    _id,
    richText,
  } = jobdetails;

  const jobDescriptionArray = JSON.parse(job_description);
  const quillContent = {
    ops: jobDescriptionArray.map((item) => ({
      insert: item.insert,
      attributes: item.attributes || {},
    })),
  };
  const converter = new QuillDeltaToHtmlConverter(quillContent.ops, {});
  const html = converter.convert();
console.log(html);
  const openAndroidApp = () => {
    try {
      if (!_id) {
        throw new Error("The _id is missing or invalid.");
      }
      window.open(`bringin://app.bringin.io/job-details/${_id}`);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  useEffect(() => {
    openAndroidApp(); // Call openAndroidApp function when the component is mounted.
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBqybgfOd1_p1YKH1nOPOuR_C8Nbfv3kQ0", // Replace with your Google Maps API key
  });

  const location = job_location.formet_address;
  console.log(company);

  const [center, setCenter] = useState({ lat: 23.8041, lng: 90.4152 });
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    // Use the Google Maps Geocoding API to convert location to coordinates
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: location,
          key: "AIzaSyBqybgfOd1_p1YKH1nOPOuR_C8Nbfv3kQ0", // Replace with your Google Maps API key
        },
      })
      .then((response) => {
        const results = response.data.results;
        if (results && results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          setCenter({ lat, lng });
          setMarkerPosition({ lat, lng }); // Set the marker position
        } else {
          console.error("Location not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching location data", error);
      });
  }, [location]);

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

  const openInApp = () => {
    setTimeout(function () {
      window.location = isAndroid
        ? "https://play.google.com/store/apps/details?id=com.bringin.io"
        : "https://apps.apple.com/app/bringin-instant-hiring-app/id6463415765";
    }, 200);

    // once you do the custom-uri, it should properly execute the handler, otherwise, the settimeout that you set before will kick in
    window.location = `bringin://app.bringin.io/job-details/${_id}`;
  };





  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recruiters Job Posts | Unbolt Chat Based Hiring App </title>
        <meta
          name="description"
          content=" At Unbolt-instant hiring app, Both Job Seekers and Recruiters can chat directly, also can attend instant in-app video call interviews and get hired instantly."
        />
        <link rel="canonical" href="http://unbolt.co/job-details" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KKFH10XGFV"
        ></script>
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

        <div className="">
          <div className="lg:w-[675px] lg:h-[560px] md:w-[675px] md:h-[560px] w-full px-4 my-5   px-4  mx-1">
            <div className="flex justify-between items-center bg-white py-2 sticky top-0 z-40 bg-white">
              <LazyLoadImage
                effect="blur"
                src="/images/navlogo.svg"
                className="lg:w-[100px] lg:h-[41px] w-[140px] h-[30px]"
              />

              <div className="">
                {isAndroid && (
                  <button
                    onClick={openInApp}
                    className="bg-[#0077B5] font-medium lg:w-[110px] lg:h-[30px] w-[80px] h-[25px] lg:text-[14px] text-[10px] text-white rounded rounded-[8px]"
                  >
                    Open in App
                  </button>
                )}
                {isApple && (
                  <button
                    onClick={openInApp}
                    className="bg-[#0077B5] font-medium lg:w-[110px] lg:h-[30px] w-[80px] h-[25px] lg:text-[14px] text-[10px] text-white rounded rounded-[8px]"
                  >
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
            <div className="lg:mt-[40px] mt-[25px]">
              <div className="flex justify-between">
                <p className="text-[#212427] lg:text-[24px] md:text-[24px] text-[20px] font-medium">
                  {job_title}
                </p>

                <div>
                  <p className="text-[#212427] lg:text-[18px] md:text-[18px] text-[14px] font-medium border border-[#212427] border-opacity-20   rounded rounded-[10px] px-2 py-1 flex items-center">
                    {salary?.min_salary?.salary
                      ? salary?.min_salary?.salary
                      : "00"}
                    {salary?.min_salary?.salary == "Negotiable" ? "" : "-"}
                    {salary?.max_salary?.salary == "Negotiable"
                      ? ""
                      : salary?.max_salary?.salary}
                    {salary?.min_salary?.salary == "Negotiable" ? "" : "K"}{" "}
                    {salary?.min_salary?.salary == "Negotiable" ? "" : "BDT"}
                  </p>
                </div>
              </div>

              <div className="mb-[12px]">
                <div className="flex gap-x-3 mt-2">
                  <div className="flex gap-2 items-center ">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      src="/images/je.png"
                      className="w-4 h-4"
                    />
                    <p className="text-[14px] text-[#212427]">
                      {education?.name}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      src="/images/jl.png"
                      className="w-4 h-4"
                    />
                    <p className="text-[14px] text-[#212427]">
                      {`${job_location?.divisiondata?.divisionname}, ${job_location?.divisiondata?.cityid?.name}`}
                    </p>
                  </div>

                  <div className="flex gap-2 items-center ">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      src="/images/jf.png"
                      className="w-4 h-4"
                    />
                    <p className="text-[14px] text-[#212427]">
                      {experience?.name}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="h-[112px] border border-[#212427] border-opacity-20   rounded rounded-[5px] px-4 pt-2">
                  <div>
                    <div className="flex gap-x-5 items-center">
                      <div>
                        {userid?.image ? (
                          <div className="relative">
                            <LazyLoadImage
                              effect="blur"
                              src="/images/candidate/Group 10464.svg"
                              // src={`https://rsapp.unbolt.co/${userid?.image}`}
                              className="w-[60px] h-[60px] rounded rounded-full"
                            />
                            <LazyLoadImage
                              effect="blur"
                              src="/images/rv.png"
                              className="w-[15px] h-[15px]  absolute bottom-0 right-0"
                            />
                          </div>
                        ) : (
                          <LazyLoadImage
                            effect="blur"
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
                                {userid?.firstname} {userid?.lastname}
                              </p>
                              <LazyLoadImage
                                effect="blur"
                                src="/images/ro1.png"
                                className="lg:w-[7px] lg:h-[7px] w-[4px] h-[4px] "
                              />
                              <p className=" lg:text-[14px] md:text-[14px] text-[10px]  text-[#00A0DC] font-small">
                                {" "}
                                Online
                              </p>
                            </div>

                            <div className="flex">
                              {userid?.other?.premium === true ? (
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
                              {userid?.designation}
                            </p>
                            <LazyLoadImage
                              effect="blur"
                              src="/images/ro.png"
                              className="lg:w-[7px] lg:h-[7px] w-[4px] h-[4px] "
                            />
                            <p className="lg:text-[16px] md:text-[16px] text-[10px]   text-[#212427] font-medium">
                              {" "}
                              {userid?.companyname?.legal_name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      {userid?.other?.profile_verify === true ? (
                        <div className="flex items-center gap-x-2">
                          <LazyLoadImage
                            effect="blur"
                            src="/images/tick-mark.png"
                            className=" w-[14px] h-[14px] "
                          />
                          <p className="text-[13px] font-normal text-opacity-70  text-[#212427] ">
                            Verified{" "}
                            {userid?.other?.profile_verify_date.slice(0, 10)}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[17px] flex">
                <p className="h-[39px]  px-4 bg-[#00A0DC] bg-opacity-20 rounded rounded-[7px] flex items-center text-[16px] font-semibold">
                  Job Descriptions
                </p>
              </div>
           
   


              {skill.length > 0 && (
                <div className="lg:mt-[20px] mt-[12px]">
                  <div className="flex"></div>
                  <div className="flex  flex-wrap gap-x-5">
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
              )}
              {richText === true ? (
                <div className="lg:mt-[16px] mt-[12px]">
                  {job_description ? (
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <div className="lg:mt-[16px] mt-[12px]">
                  {job_description ? (
                    <p className="text-[14px] text-[#212427] text-opacity-90 font-medium">
                      {job_description}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              )}

              <div className="mt-[25px]">
                <div className="h-[74px] border border-[#212427] border-opacity-20   rounded rounded-[5px] px-4 flex items-center">
                  <div>
                    <div className="flex gap-x-5 items-center">
                      <div>
                        {userid?.image ? (
                          <div className="relative">
                            <LazyLoadImage
                              effect="blur"
                              src="/images/candidate/Group 10464.svg"
                              // src={`https://rsapp.unbolt.co/${userid?.image}`}
                              className="w-[50px] h-[50px] rounded rounded-full"
                            />
                            <LazyLoadImage
                              effect="blur"
                              src="/images/rv.png"
                              className="w-[15px] h-[15px]  absolute bottom-0 right-0"
                            />
                          </div>
                        ) : (
                          <LazyLoadImage
                            effect="blur"
                            src="/images/candidate/Group 10464.svg"
                            className="w-[50px] h-[50px] rounded rounded-full"
                          />
                        )}
                      </div>
                      <div>
                        <div>
                          <div className="  flex gap-x-7 items-center">
                            <div className="flex items-center gap-x-2">
                              <p className="lg:text-[16px] md:text-[16px] text-[10px]   text-[#212427] font-medium">
                                {" "}
                                {company?.legal_name}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <p className="lg:text-[14px] md:text-[14px] text-[11px]   text-[#212427] font-small">
                              {" "}
                              {company?.c_size?.size} Employees
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[25px]">
                <div className="flex justify-center">
                  {!isLoaded ? (
                    <div>Loading...</div>
                  ) : (
                    <div className="w-full h-[400px]  ">
                      <GoogleMap
                        zoom={13}
                        center={center}
                        mapContainerClassName="w-full h-[400px] rounded-[5px]"
                      >
                        {markerPosition && (
                          <Marker position={markerPosition} /> // Add the marker at the specified position
                        )}
                      </GoogleMap>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="">
                  <Link>
                    <button
                      onClick={() => closeModal(true)}
                      className="text-white font-semibold text-[20px] bg-[#0077B5] w-full h-[52px] my-10 rounded rounded-[5px]"
                    >
                      Start Chatting
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AppLinkModal
          visible={openModal}
          closeModal={closeModal}
        ></AppLinkModal>
      </div>
    </div>
  );
};

export default JobDetails;
