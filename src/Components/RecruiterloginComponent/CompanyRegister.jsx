import img1 from "../../../public/images/RI-icons/left-arrow.png";
import img2 from "../../../public/images/RI-icons/right-arrow.png";
import img3 from "../../../public/images/RI-icons/click.png";
import img4 from "../../../public/images/RI-icons/legal-company.png";
import pic from "../../../public/images/RI-icons/left-arrow.png";
import { useProfileData } from "../ProfieComponent/ProfileDataProvider";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import "react-lazy-load-image-component/src/effects/blur.css";
import LocationModal from "./LocationModal";
import { useEffect, useState, useRef } from "react";
import CompanyLocation from "./CompanyLocation";
import CompanyIndustryModal from "./CompanyIndustryModal";
import { useLocation, useNavigate } from "react-router-dom";
import CompanySizeModal from "./CompanySizeModal";
import Spinner from "../Spinner/Spinner";
const CompanyRegister = ({ google }) => {
  const locations = useLocation();
  const companyName = locations.state && locations.state.companyName;
  console.log(companyName);

  const [legal_name, setLegalName] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  const handleMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    setSelectedLocation({ lat, lng });
    setLocationName(""); // Clear location name when clicking on the map
    console.log(`Latitude: ${lat}, Longitude: ${lng}`); // Log lat and lng
  };

  // company  systame

  const [isOpenf, setIsOpenf] = useState(false);
  const toggleDrop = () => {
    setIsOpenf(!isOpenf);
  };
  // const toggleDropdownf = () => {
  //   setIsOpenf(!isOpenf);
  // };
  const toggleDropd = () => {
    setIsOpenf(false);
  };
  const closeDropdowns = () => {
    setIsOpenf(false);
  };

  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetch(`https://rsapp.unbolt.co/seekercompany?name=${legal_name}`)
      .then((res) => res.json())
      .then((data) => {
        setCompany(data);
        // console.log(data);
      });
  }, [legal_name]);
  console.log(company);

  const [showfuntionalareasSuggestions, setShowfuntionalareasSuggestions] =
    useState(false);

  const handleCompanySelect = (selectedfuntionalareas) => {
    console.log("Selected Location:", selectedfuntionalareas);
    setLegalName(selectedfuntionalareas); // Set legal_name to the same value
    setShowfuntionalareasSuggestions(false);
    setIsOpenf(!isOpenf);
  };
  const inputRef = useRef(null);

  useEffect(() => {
    // Event listener function to close the dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // Click occurred outside of the input element
        setIsOpenf(false);
      }
    };

    // Attach the event listener to the document body
    document.body.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // company devision

  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin/location")
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        // console.log(data);
      });
  }, []);

  const [locationopen, setLocationOpen] = useState(false);
  const handleLocationClick = () => {
    setLocationOpen(true);
  };

  const [selectedcityname, setSelectedcityname] = useState("");
  const [selectedClickDivision, setSelectedClickDivision] = useState("");
  const [selectedClickDivisionID, setSelectedClickDivisionID] = useState(null);
  // console.log("selectedcityname", selectedcityname);
  // console.log(selectedcityID);
  // console.log(selectedClickDivision);
  // console.log(selectedClickDivisionID);

  // Company industry

  const [industryopen, setindustryOpen] = useState(false);
  const handleindustryClick = () => {
    setindustryOpen(true);
  };

  const [selectedClickcatagory, setSelectedClickcatagory] = useState("");

  const [selectedIndustryname, setSelectedIndustryname] = useState(null);
  const [selectedIndustryID, setSelectedIndustryID] = useState(null);

  // console.log(selectedIndustryname);
  // console.log(selectedIndustryID);

  // console.log(legal_name);
  // console.log(locationName);
  // console.log(selectedClickcatagoryID, selectedClickcatagory );
  // console.log(selectedcityID, selectedcityname );

  // const [selectedLocation, setSelectedLocation] = useState({ lat: 0, lng: 0 });

  const [companySize, setcompanySize] = useState("");
  const [sizeOpen, setSizeOpen] = useState(false);
  console.log(companySize);
  const [sort_name, setSortName] = useState("");
  const [c_website, setc_website] = useState("");
  const [selectedClickcatagoryID, setSelectedClickcatagoryID] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [locationoptional, setlocationoptional] = useState("");
  const [selectedcityID, setSelectedcityID] = useState(null);
  const [companySizeId, setcompanySizeId] = useState(null);
  // console.log("si",companySizeId);
  console.log(selectedClickcatagoryID);

  const navigate = useNavigate();
  const [recruter, setrecruter] = useState([]);
  const [token, setToken] = useState(""); // State to store the token

  useEffect(() => {
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");
    const stringWithoutQuotes = storedToken.replace(/"/g, "");

    console.log(stringWithoutQuotes); // Replace "yourTokenKey" with the actual key you used to store the token

    if (stringWithoutQuotes) {
      // If a token is found in localStorage, set it in the component's state
      setToken(stringWithoutQuotes);
    }

    fetch("https://rsapp.unbolt.co/recruiters_profile", {
      headers: {
        Authorization: `Bearer ${token}`, // Use the token in the Authorization header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setrecruter(data);
        console.log(data);
      });
  }, [token]);

  const onSubmit = () => {
    const postData = {
      userid: recruter._id,
      legal_name: legal_name || companyValue.legal_name || companyName,
      sort_name: sort_name || companyValue?.sort_name,
      industry:
        selectedClickcatagoryID ||
        (companyValue && companyValue?.industry?._id),
      c_size: companySizeId || (companyValue && companyValue?.c_size?._id),
      c_location: {
        lat: selectedLocation
          ? selectedLocation.lat
          : null || companyValue?.c_location?.lat,
        lon: selectedLocation
          ? selectedLocation.lng
          : null || companyValue?.c_location?.lon,
        formet_address:
          locationName || companyValue?.c_location?.formet_address,
        locationoptional:
          locationoptional || companyValue?.c_location?.locationoptional, // Add locationoptional if needed
        divisiondata:
          selectedClickDivisionID || companyValue?.c_location?.divisiondata,
      },
      c_website: c_website || companyValue?.c_website, // Replace with your website dataa
    };
    console.log(postData);

    const token = localStorage.getItem("token");
    const tokenWithoutQuotes = token.replace(/"/g, "");

    fetch("https://rsapp.unbolt.co/company", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenWithoutQuotes}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.text(); // Read the response as text
      })
      .then((result) => {
        console.log("Response Body:", result); // Log the response body
        // Log the response body
        navigate("/register-job-post");

        try {
          const jsonResponse = JSON.parse(result); // Attempt to parse as JSON
          console.log(jsonResponse);
          // ...rest of your code
        } catch (jsonError) {
          console.error("JSON Parsing Error:", jsonError);
        }
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
      });
  };

  const [companyValue, setcompanyValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(companyValue);

  useEffect(() => {
    // Function to fetch the recruiter's profile
    const fetchRecruiterCompany = (token) => {
      fetch("https://rsapp.unbolt.co/company", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            console.log("error");
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setcompanyValue(data);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setIsLoading(false); // Mark the loading as complete
        });
    };
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      fetchRecruiterCompany(stringWithoutQuotes);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Assuming profileData and recruter are fetched asynchronously
    if (companyValue) {
      // Set the default values here
      // Set the default values here using setValue
      setValue("legal_name", legal_name || companyValue?.legal_name);
      setValue("sort_name", sort_name || companyValue?.sort_name);

      setValue("c_website", c_website || companyValue?.c_website);
      setValue(
        "formet_address",
        locationName || companyValue?.c_location?.formet_address
      );
      setValue(
        "locationoptional",
        locationoptional || companyValue?.c_location?.locationoptional
      );
    }
  }, [companyValue]);
  console.log(selectedClickcatagory);

  if (isLoading === true) {
    return (
      <div className=" h-screen ">
        <Spinner></Spinner>
      </div>
    );
  }
  const handleGoBack = () => {
    window.history.back(); // This will navigate back one step in the browser's history
  };

  return (
    <div>
      <div className="App font-inter">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Register as a Recruiter | Unbolt Chat Based Hiring App </title>
          <meta name="description" content="" />
          <link
            rel="canonical"
            href="http://unbolt.co/registration-recruiters"
          />
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
        <div className="hidden lg:block">
          {/* <p>{profileData.firstname}</p> */}
          <div>
            <div className="w-full App">
              <div></div>
              <div className="lg:flex md:flex  justify-center">
                <div className="pt-7 pb-20">
                  <div className="lg:w-[700px] bg-white lg:h-auto border border-[#212427] border-opacity-20 rounded rounded-[10px] px-7">
                    <div className="mb-4 inline-flex gap-[140px]">
                    <img onClick={handleGoBack} className="cursor-pointer mt-10 w-[20px] h-[20px]" src={pic} alt="" />
                      <div className="mx-auto ">
                      <h1 className="text-[22px] font-bold  text-center text-opacity-90 text-[#212427] pt-9">
                        Register Your Company
                      </h1>
                      <p className="text-center text-[16px] text-[#212427]  font-normal">
                        Introduce your company to the candidates.
                      </p>
                      </div>
                    </div>
                    <div className="mb-7 mt-12">
                      <h1 className="text-[18px] font-semibold text-[#212427] text-opacity-90">
                        Company Legal Name
                      </h1>
                      <h5 className="text-[14px] font-normal text-[#212427] text-opacity-60">
                        Please provide the full legal name of your company
                        exactly as it appears on official documents.
                      </h5>
                    </div>

                    <div className="mb-5">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                          <div className="relative w-full mb-1">
                            <img
                              src="/images/companyIL1.svg"
                              className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 h-[25px] w-[25px] "
                            />
                            <div className="" onClick={toggleDrop}>
                              <input
                                ref={inputRef}
                                placeholder="Bringin Technologies Limited"
                                type="text"
                                value={
                                  legal_name ||
                                  (companyValue && companyValue?.legal_name) ||
                                  companyName
                                } // Set the input value to legal_name
                                onChange={(e) => setLegalName(e.target.value)} // Update legal_name when input changes
                                onFocus={() =>
                                  setShowfuntionalareasSuggestions(true)
                                }
                                onBlur={() =>
                                  setShowfuntionalareasSuggestions(false)
                                }
                                className="focus:outline-none placeholder: text-[#212427] border-opacity-80 rounded font-normal text-[16px] placeholder:text-opacity-70 input pl-12 w-full mb-[5px] h-[44px] border border-[#212427] "
                                required=" legal_name is required"
                              />

                              {errors.legal_name && (
                                <p className="text-red-500">
                                  {errors.legal_name.message}
                                </p>
                              )}
                            </div>
                            {legal_name !== "" ||
                              (companyValue &&
                                companyValue?.legal_name === null) ? (
                              <>
                                <img
                                  src="/images/companyIL2.svg"
                                  className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 h-[16px] w-[16px] "
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  src="/images/inputtik.svg"
                                  className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 h-[16px] w-[16px] "
                                />
                              </>
                            )}
                          </div>

                          <div className="ml-[50px] absolute z-40">
                            {isOpenf && (
                              <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[250px] h-[300px] pb-3 pt-2  overflow-auto">
                                {company.map((co) => (
                                  <div
                                    key={co._id}
                                    onClick={() => {
                                      // console.log(
                                      //   "Suggestion Clicked:",
                                      //   co.functionalname
                                      // );
                                      handleCompanySelect(co.name);
                                    }}
                                    className="suggestion-item "
                                  >
                                    <div className="hover:bg-[#0077B5] hover:text-white">
                                      <p className="text-[16px] mb-2 cursor-pointer  mx-3">
                                        {co.name}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mb-2 my-6">
                          <h1 className=" text-[16px] text-[#212427]  font-light  mb-1 ">
                            Short Name of Company
                          </h1>
                          <input
                            placeholder="Bringin"
                            type="text"
                            {...register("sort_name", {
                              required: "sort_name is Required",
                            })}
                            value={
                              sort_name ||
                              (companyValue && companyValue?.sort_name)
                            }
                            onChange={(e) => setSortName(e.target.value)}
                            className="focus:outline-none placeholder:text-[#000000] font-normal text-[16px] border-opacity-80 rounded  input pl-3 w-full mb-[5px] h-[44px] border border-[#212427]"
                          />
                          {errors.sort_name && (
                            <p className="text-red-500">
                              {errors.sort_name.message}
                            </p>
                          )}
                        </div>
                        <div className="mb-3 my-7">
                          <h1 className=" text-[16px] text-[#212427]  font-light">
                            Field of Industry
                          </h1>

                          <div
                            className="relative w-full"
                            onClick={handleindustryClick}
                          >
                            <div className="">
                              {companyValue &&
                              companyValue.industry === null &&
                              selectedClickcatagory === "" ? (
                                selectedClickcatagory === "" ? (
                                  <p
                                    onClick={handleindustryClick}
                                    className="w-full mb-[0px] h-[20px] text-[#212427] text-opacity-70"
                                  >
                                    Informetion & Tecnalogy
                                  </p>
                                ) : (
                                  <p
                                    onClick={handleindustryClick}
                                    className="w-full mb-[0px] h-[20px] text-[#212427] text-opacity-90"
                                  >
                                    {selectedClickcatagory ||
                                      (companyValue &&
                                        companyValue?.industry?.categoryname)}
                                  </p>
                                )
                              ) : companyValue?.industry?.categoryname ===
                                  null && selectedClickcatagory === "" ? (
                                <p
                                  onClick={handleindustryClick}
                                  className="w-full mb-[0px] h-[20px] text-[#212427] text-opacity-70"
                                >
                                  Informetion & Tecnalogy
                                </p>
                              ) : (
                                <p
                                  onClick={handleindustryClick}
                                  className="w-full mb-[0px] h-[20px] text-[#212427] text-opacity-90"
                                >
                                  {selectedClickcatagory ||
                                    (companyValue &&
                                      companyValue?.industry?.categoryname)}
                                </p>
                              )}
                            </div>
                            <img
                              onClick={handleindustryClick}
                              src="/images/companyIIn.svg"
                              className="absolute cursor-pointer inset-y-0 right-3 top-[11px] transform -translate-y-1/2 h-[15px] w-[15px] "
                            />
                          </div>
                          {industryopen && (
                            <div className="map-modal">
                              <CompanyIndustryModal
                                setSelectedIndustryname={
                                  setSelectedIndustryname
                                }
                                setSelectedClickcatagory={
                                  setSelectedClickcatagory
                                }
                                setSelectedIndustryID={setSelectedIndustryID}
                                setSelectedClickcatagoryID={
                                  setSelectedClickcatagoryID
                                }
                                selectedIndustryname={selectedIndustryname}
                                selectedClickcatagory={selectedClickcatagory}
                                setindustryOpen={setindustryOpen}
                              ></CompanyIndustryModal>
                            </div>
                          )}
                        </div>
                        <div className="mb-3">
                          <div
                            className=" relative w-full"
                            onClick={() => setSizeOpen(true)}
                          >
                            <h1 className=" text-[16px] text-[#212427]  font-light  mb-1 my-7">
                              Company Size
                            </h1>
                            {companyValue &&
                            companyValue.c_size === null &&
                            companySize === "" ? (
                              companySize === "" ? (
                                <p
                                  onClick={() => setSizeOpen(true)}
                                  className="w-full mb-[0px] h-[20px] text-[#212427] text-opacity-70"
                                >
                                  100-500
                                </p>
                              ) : (
                                <p
                                  onClick={() => setSizeOpen(true)}
                                  className="w-full mb-[0px] h-[20px] text-[#212427]"
                                >
                                  {companySize ||
                                    (companyValue &&
                                      companyValue?.c_size?.size)}
                                </p>
                              )
                            ) : companyValue?.c_size?.size === null &&
                              companySize === "" ? (
                              <p
                                onClick={() => setSizeOpen(true)}
                                className="w-full mb-[0px] h-[20px] text-[#212427] text-opacity-70"
                              >
                                100-500
                              </p>
                            ) : (
                              <p
                                onClick={() => setSizeOpen(true)}
                                className="w-full mb-[0px] h-[20px] text-[#212427]"
                              >
                                {companySize ||
                                  (companyValue && companyValue?.c_size?.size)}
                              </p>
                            )}

                            <img
                              onClick={() => setSizeOpen(true)}
                              src="/images/companyIIn.svg"
                              className="absolute cursor-pointer inset-y-0 right-3 top-[41px] transform -translate-y-1/2 h-[15px] w-[15px] "
                            />
                          </div>
                          {sizeOpen && (
                            <div className="map-modal">
                              <CompanySizeModal
                                setcompanySize={setcompanySize}
                                setcompanySizeId={setcompanySizeId}
                                companySizeId={companySizeId}
                                companySize={companySize}
                                setSizeOpen={setSizeOpen}
                              ></CompanySizeModal>
                            </div>
                          )}
                        </div>
                        <div className="relative w-full mb-2 my-7">
                          <h1 className=" text-[16px] text-[#212427]  font-light  mb-1">
                            Company Website
                          </h1>
                          <input
                            placeholder="www.unbolt.co"
                            type="text"
                            value={
                              c_website ||
                              (companyValue && companyValue.c_website)
                            }
                            onChange={(e) => setc_website(e.target.value)}
                            className="focus:outline-none text-[#000000] text-[16px] font-normal border-opacity-80 rounded input pl-3 w-full mb-[5px] h-[44px] border border-[#212427]"
                          />

                          {c_website !== "" ||
                            (companyValue && companyValue.c_website !== null) ? (
                            <>
                              <img
                                src="/images/companyLoI.svg"
                                className="absolute right-3 bottom-5 h-[15px] w-[15px] "
                              />
                            </>
                          ) : (
                            <img
                              onClick={() => setSizeOpen(true)}
                              src="/images/wright.svg"
                              className="absolute cursor-pointer inset-y-0 right-3 top-2/3 transform -translate-y-1/2 h-[15px] w-[15px] "
                            />
                          )}
                        </div>

                        <div className="mb-2 mt-7">
                          <h1 className="text-[18px] font-semibold text-[#212427] text-opacity-90">
                            Company Location
                          </h1>
                          <h5 className="text-[14px] font-normal text-[#212427] text-opacity-70">
                            Mark the precise location of your company on Google
                            Maps and provide the complete address.
                          </h5>
                        </div>
                        <div className="border border-[#212427] border-opacity-70 rounded py-2 px-1">
                          <div>
                            <div className="relative w-full  ">
                              <p className="text-[14px] font-light text-[#212427]  absolute left-3 top-1 ">
                                Company Location
                              </p>
                              <div className="" onClick={handleInputClick}>
                                <input
                                  placeholder="Select location from the google map"
                                  type="text"
                                  // value={selectedLocation ? `Lat: ${selectedLocation.lat}, Lng: ${selectedLocation.lng}` : ''}
                                  value={
                                    locationName ||
                                    (companyValue &&
                                      companyValue?.c_location?.formet_address)
                                  }
                                  className="focus:outline-none placeholder:text-[#212427] border-opacity-80 rounded placeholder:text-opacity-70  input pl-3 pt-4 w-full mb-[5px] h-[60px] "
                                />

                                {locationName === "" ||
                                  (companyValue &&
                                    companyValue?.c_location?.formet_address ===
                                    null) ? (
                                  <>
                                    <img
                                      src="/images/companyIIn.svg"
                                      className="absolute cursor-pointer inset-y-0 right-3 top-2/3 transform -translate-y-1/2 h-[15px] w-[15px] "
                                    />
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <img
                                      src="/images/companyLoI.svg"
                                      className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                                    />
                                  </>
                                )}
                              </div>
                              {isModalOpen && (
                                <div className="map-modal">
                                  <LocationModal
                                    google={google}
                                    handleMapClick={handleMapClick}
                                    selectedLocation={selectedLocation}
                                    setIsModalOpen={setIsModalOpen}
                                    setSelectedLocation={setSelectedLocation}
                                    setLocationName={setLocationName}
                                  ></LocationModal>
                                </div>
                              )}
                            </div>
                            <img
                              src="/images/companyLoI.svg"
                              className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                            />
                          </div>
                          <div className="relative w-full ">
                            <p className="text-[14px] font-light text-[#212427]  absolute left-3 top-1 ">
                              Company Address (Optional) 0/100
                            </p>
                            <div className="">
                              <input
                                placeholder="House, Road"
                                type="text"
                                maxLength={100}
                                {...register("locationoptional", {
                                  required: "Company Address is Required",
                                })}
                                value={
                                  locationoptional ||
                                  (companyValue &&
                                    companyValue?.c_location?.locationoptional)
                                }
                                onChange={(e) =>
                                  setlocationoptional(e.target.value)
                                }
                                className="focus:outline-none text-[#000000] text-[16px] font-normal border-opacity-80 rounded input pl-3 pt-4 w-full mb-[5px] h-[60px] "
                              />
                              {errors.locationoptional && (
                                <p className="text-red-500">
                                  {errors.locationoptional.message}
                                </p>
                              )}
                            </div>

                            {locationoptional === "" ||
                              (companyValue &&
                                companyValue?.c_location?.locationoptional ===
                                null) ? (
                              <>
                                <img
                                  src="/images/wright.svg"
                                  className="absolute cursor-pointer inset-y-0 right-3 top-2/3 transform -translate-y-1/2 h-[15px] w-[15px] "
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  src="/images/companyLoI.svg"
                                  className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                                />
                              </>
                            )}
                          </div>
                          <div className="pb-2">
                            <p className="text-[14px] fonrmal text-[#212427]  ml-3  ">
                              Select City
                            </p>
                            <div className="relative w-full">
                              <div className="" onClick={handleLocationClick}>
                                {selectedClickDivision === "" ||
                                companyValue?.c_location?.divisiondata
                                  ?.divisionname === null ? (
                                  <>
                                    <p className="w-full mt-[2px] h-[20px] text-[#212427] text-opacity-70 ml-3">
                                      Damrai, Dhaka
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <p className="w-full mt-[2px] h-[20px] text-[#212427]  ml-3">
                                      {selectedClickDivision === ""
                                        ? `${companyValue?.c_location?.divisiondata?.divisionname}, ${companyValue?.c_location?.divisiondata?.cityid?.name}`
                                        : selectedClickDivision
                                        ? `${selectedClickDivision}, ${selectedcityname}`
                                        : selectedcityname}
                                    </p>
                                  </>
                                )}
                              </div>

                              {selectedClickDivision === "" ||
                                selectedClickDivision === null ? (
                                <>
                                  <img
                                    onClick={handleLocationClick}
                                    src="/images/companyIIn.svg"
                                    className="absolute cursor-pointer inset-y-0 right-3 top-2/3 transform -translate-y-1/2 h-[15px] w-[15px] "
                                  />
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <img
                                    onClick={handleLocationClick}
                                    src="/images/companyLoI.svg"
                                    className="absolute  right-3 bottom-5  top-[5px]  h-[15px] w-[15px] "
                                  />
                                </>
                              )}
                            </div>
                            {locationopen && (
                              <div className="map-modal">
                                <CompanyLocation
                                  selectedClickDivision={selectedClickDivision}
                                  selectedcityname={selectedcityname}
                                  setSelectedcityname={setSelectedcityname}
                                  setSelectedcityID={setSelectedcityID}
                                  setSelectedClickDivision={
                                    setSelectedClickDivision
                                  }
                                  setSelectedClickDivisionID={
                                    setSelectedClickDivisionID
                                  }
                                  setLocationOpen={setLocationOpen}
                                ></CompanyLocation>
                              </div>
                            )}
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full mb-2 h-[44px] bg-[#00A0DC] bg-opacity-40 text-[18px] mt-5 font-semibold hover:bg-[#0077B5] hover:text-white rounded text-center"
                        >
                          Register
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive */}

        <div className="flex justify-center block lg:hidden bg-white">
          <div>
            <div className="mx-[10px] w-[360px] h-[800px]">
              <img
                className="w-[24px] h-[24px] -ms-10 cursor-pointer"
                src={img1}
                alt=""
              />
              <div className="">
                <p className="text-[#212427] text-[26px] text-center font-semibold">
                  Register Your Company
                </p>
                <p className="text-[#212427] text-[16px] text-center mb-2">
                  Introduce your company to the candidates.
                </p>
                <div className="w-[330px] h-[72px] border border-1 border-[#212427] border-opacity-10 rounded-md mx-auto my-2">
                  <div className="flex py-2 ps-2 pe-1">
                    <img className="w-[26px] h-[26px] me-2" src={img4} alt="" />
                    <div>
                      <p>Company Legal Name</p>
                      <p>Bringin Technologies Ltd.</p>
                    </div>
                    <img
                      className="mt-6 ms-20 w-[18px] h-[18px]"
                      src={img3}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[330px] h-[352px] border border-1 border-[#212427] border-opacity-10 rounded-md p-2 mx-auto">
                  <div className="mb-2 p-2">
                    <p className="text-[#212427] text-opacity-50 text-[16px]">
                      Short Name of Company
                    </p>
                    <div className="flex justify-between">
                      <p className="text-[#212427] text-[18px]">Bringin</p>
                      <img
                        className="w-[12px] h-[12px] cursor-pointer"
                        src={img2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-2 px-2 pb-2">
                    <p className="text-[#212427] text-opacity-50 text-[16px]">
                      Field of Industry
                    </p>
                    <div className="flex justify-between">
                      <p className="text-[#212427] text-[18px]">Technology</p>
                      <img
                        className="w-[12px] h-[12px] cursor-pointer"
                        src={img2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-2 px-2 pb-2">
                    <p className="text-[#212427] text-opacity-50 text-[16px]">
                      Company Size
                    </p>
                    <div className="flex justify-between">
                      <p className="text-[#212427] text-[18px]">
                        20-99 Employees
                      </p>
                      <img
                        className="w-[12px] h-[12px] cursor-pointer"
                        src={img2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-2 px-2 pb-2">
                    <p className="text-[#212427] text-opacity-50 text-[16px]">
                      Company Location
                    </p>
                    <div className="flex justify-between">
                      <p className="text-[#212427] text-[18px]">
                        Uttara, Dhaka
                      </p>
                      <img
                        className="w-[12px] h-[12px] cursor-pointer"
                        src={img2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-2 px-2 pb-2">
                    <p className="text-[#212427] text-opacity-50 text-[16px]">
                      Company Website
                    </p>
                    <div className="flex justify-between">
                      <p className="text-[#212427] text-[18px]">
                        https://bringin.io
                      </p>
                      <img
                        className="w-[12px] h-[12px] cursor-pointer"
                        src={img2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-4 mt-44">
                  <button className="bg-[#1C4B81] w-[330px] h-[48px] border border-1 rounded-lg text-white text-[18px] text-center">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegister;
