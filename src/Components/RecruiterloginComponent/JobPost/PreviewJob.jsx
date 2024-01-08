import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const PreviewJob = () => {
  const [openModal, closeModal] = useState(false);
 
  const jobdetails = useLoaderData();
  console.log(jobdetails);

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
    _id
  } = jobdetails;

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



  





const dateString = postdate.slice(0, 10);
const date = new Date(dateString);

// Create an array of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const day = date.getDate();
const month = monthNames[date.getMonth()];
const year = date.getFullYear();

const formattedDate = `${day} ${month} ${year}`;


console.log(formattedDate);



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
          <div className="lg:w-[675px] lg:h-auto md:w-[675px] md:h-auto w-full px-7 py-2 my-5 rounded rounded-[10px]   px-4  mx-1 bg-[#FCFCFC]">
           <div className="flex justify-end lg:mt-[10px] mt-[25px]">
            <img src="/images/jobpreviewLinkdinicon.svg" />
           </div>
           
            <div className="lg:mt-[20px] mt-[25px] ">
              <div className="flex justify-between">
                <p className="text-[#212427] text-opacity-90 lg:text-[24px] md:text-[24px] text-[20px] font-semibold">
                  {job_title}
                </p>

                <div>
                  <p className="text-[#212427] text-opacity-90 lg:text-[18px] md:text-[18px] text-[14px] font-semibold border border-[#212427]    rounded rounded-[13px] px-2 py-1 flex items-center">
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
                <div className="flex gap-2 items-center ">
                  <LazyLoadImage
                    effect="blur"
                    alt="bringin image"
                    src="/images/je.png"
                    className="w-4 h-4"
                  />
                  <p className="text-[16px] text-[#212427] text-opacity-80">
                    {education?.name}
                  </p>
                </div>
                <div className="flex gap-x-3 mt-2">
                  <div className="flex gap-2 items-center ">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      src="/images/jl.png"
                      className="w-4 h-4"
                    />
                    {
                     job_location?.divisiondata === null  ?
                      <></>: <>
                      
                       <p className="text-[16px] text-[#212427] text-opacity-80">
                       {`${job_location?.divisiondata?.divisionname}, ${job_location?.divisiondata?.cityid?.name}`}

                    </p>
                      </>
                    }
                   
                  </div>

                  <div className="flex gap-2 items-center ">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      src="/images/jf.png"
                      className="w-4 h-4"
                    />
                    <p className="text-[16px] text-[#212427] text-opacity-80">
                      {experience?.name}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="h-[62px] border border-[#212427] border-opacity-90   rounded rounded-[5px] px-4 flex items-center">
                  <div>
                    {
                        job_status === "Open" ?
                    <div className="flex gap-x-2">
                        <img src="/images/jobActive.svg" />
                        <p className="text-[#0077B5] text-[18px] font-semibold">Active</p>
                    </div> : <div>
                    <img src="/images/jobActive.svg" />
                        <p className="text-[#0077B5] text-[18px] font-semibold">Deactive</p>
                    </div>
                    }
                    <p className="text-[#000000] text-[16px] font-normal text-opacity-60 mt-[2px]">Posted on {formattedDate}</p>
                  </div>
                </div>
              </div>

              <div className="mt-[17px] flex">
                <p className="h-[39px] text-opacity-80 text-[#212427]  px-4 bg-[#00A0DC] bg-opacity-20 rounded rounded-[7px] flex items-center text-[18px] font-semibold">
                  Job Descriptions
                </p>
              </div>

              <div className="lg:mt-[20px] mt-[12px]">
                <div className="flex"></div>
                <div className="flex  flex-wrap gap-x-5">
                  {skill.map((sk, i) => (
                    <div key={i}>
                      <div className="flex gap-x-4 mt-1">
                        {sk ? (
                          <p className="  text-[16px] font-normal borber border-b-[1px] text-[#212427] text-opacity-90 border-[#212427]">
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

              <div className="lg:mt-[20px] mt-[12px]">
                {job_description ? (
                  <p className="text-[16px] text-[#212427] text-opacity-80 font-medium">
                    {job_description}
                  </p>
                ) : (
                  ""
                )}
              </div>

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
                  <Link to={`/registration-job-post-edit/${_id}`}>
                    <button
                    type="button"
                      className="text-[#0077B5] font-semibold text-[20px] border border-[#0077B5] w-full h-[52px] my-10 rounded rounded-[5px]"
                    >
                      Edit
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

export default PreviewJob;
