import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RecruiterPerSonalDashboard from "../Recruter/RecruiterPerSonalDashboard";

const RecruterDashbordHeadre = ({recruter}) => {
  const navigate = useNavigate();
  const [locate, setLocate] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin/location")
      .then((res) => res.json())
      .then((data) => {
        setLocate(data);
        // console.log(data);
      });
  }, []);
  // console.log(location);

  const [functionalarea, setFunctionalarea] = useState([]);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin/functionalarea")
      .then((res) => res.json())
      .then((data) => {
        setFunctionalarea(data);
        // console.log(data);
      });
  }, []);
  // console.log(functionalarea);
  const handleSearch = () => {
    navigate(
      `/dashboard/recruiter/candidates?skill=${selectedfuntionalareas}&division=${selectedLocation}`
    );
  };

  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState(() => {
    // Check if there's a stored value in local storage
    const storedValuel = localStorage.getItem("selectedLocation");
    return storedValuel || ""; // Use the stored value or an empty string if not found
  });

  useEffect(() => {
    // Update local storage whenever selectedfuntionalareas changes
    localStorage.setItem("selectedLocationRecruter", selectedLocation);
  }, [selectedLocation]);

  const clearselectedLocation = () => {
    // Clear the stored value and set selectedfuntionalareas to an empty string
    localStorage.removeItem("selectedLocationRecruter");
    setSelectedLocation("");
  };

  const filteredLocations = locate.filter((location) =>
    location.name.toLowerCase().includes(selectedLocation.toLowerCase())
  );
  const handleLocationSelect = (selectedLocation) => {
    setSelectedLocation(selectedLocation);
    setShowLocationSuggestions(false);
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [showfuntionalareasSuggestions, setShowfuntionalareasSuggestions] =
    useState(false);

  const [selectedfuntionalareas, setSelectedfuntionalareas] = useState(() => {
    // Check if there's a stored value in local storage
    const storedValue = localStorage.getItem("selectedfuntionalareasRecruter");
    return storedValue || ""; // Use the stored value or an empty string if not found
  });

  // ... Other code ...

  useEffect(() => {
    // Update local storage whenever selectedfuntionalareas changes
    localStorage.setItem(
      "selectedfuntionalareasRecruter",
      selectedfuntionalareas
    );
  }, [selectedfuntionalareas]);

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("selectedfuntionalareasRecruter");
      localStorage.removeItem("selectedLocationRecruter");
    };

    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const clearSelectedFunctionalAreas = () => {
    // Clear the stored value and set selectedfuntionalareas to an empty string
    localStorage.removeItem("selectedfuntionalareasRecruter");
    setSelectedfuntionalareas("");
  };

  const filteredFuntionarea = functionalarea.filter((funtiona) =>
    funtiona.functionalname
      .toLowerCase()
      .includes(selectedfuntionalareas.toLowerCase())
  );
  const handleFuntionaSelect = (selectedfuntionalareas) => {
    // console.log("Selected Location:", selectedfuntionalareas);
    setSelectedfuntionalareas(selectedfuntionalareas);
    setShowfuntionalareasSuggestions(false);
    setIsOpenf(!isOpenf);
  };

  const [isOpenf, setIsOpenf] = useState(false);
  // const toggleDropdownf = () => {
  //   setIsOpenf(!isOpenf);
  // };
  const toggleDropd = () => {
    setIsOpenf(false);
    setIsOpen(!isOpen);
  };
  const toggleDrop = () => {
    setIsOpenf(!isOpenf);
    setIsOpen(false);
  };
  const closeDropdowns = () => {
    setIsOpen(false);
    setIsOpenf(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        closeDropdowns();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [myProfile, setMyProfile] = useState(false);
  const location = useLocation();
  // Add this useEffect to clear local storage data when changing routes
  useEffect(() => {
    // Clear the stored values when the route changes
    localStorage.removeItem("selectedfuntionalareasRecruter");
    localStorage.removeItem("selectedLocationRecruter");
  }, [location.pathname]);

  return (
    <div ref={containerRef}>
      <div className="    bg-[#FFFFFF] ">
        <div className="  font-inter flex justify-center">
          <div className="  flex justify-around w-[1350px] h-[58px] gap-x-[100px] items-center px-[40px]">
            <div className="flex gap-x-[30px]">
              <div>
                <Link to="/dashboard/recruiter">
                  <img
                    src="/images/navlogo.svg"
                    className="w-[260px] h-[40px]"
                  />
                </Link>
              </div>
              <div className="  flex items-center border h-[37px]  px-3 border-[1px] border-[#212427] border-opacity-40 rounded ">
                <div className="">
                  <div className="  ">
                    <input
                      value={selectedfuntionalareas}
                      onChange={(e) =>
                        setSelectedfuntionalareas(e.target.value)
                      }
                      onFocus={() => setShowfuntionalareasSuggestions(true)}
                      onBlur={() => setShowfuntionalareasSuggestions(false)}
                      onClick={toggleDrop}
                      placeholder="Expertise Area, Industry"
                      type="text"
                      className="  focus:outline-none input  w-[190px] rounded  h-[34px]   placeholder:text-[14px]"
                    />
                  </div>

                  <div className="  mt-[5px] absolute z-50">
                    {isOpenf && (
                      <div className="  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[190px] h-[300px] pb-3 pt-2  overflow-auto">
                        {filteredFuntionarea.map((funtion) => (
                          <div
                            key={funtion._id}
                            onClick={() => {
                              // console.log(
                              //   "Suggestion Clicked:",
                              //   funtion.functionalname
                              // );
                              handleFuntionaSelect(funtion.functionalname);
                            }}
                            className="  suggestion-item "
                          >
                            <div className="  hover:bg-[#0077B5] hover:text-white">
                              <p className="  text-[16px] mb-2 cursor-pointer  mx-3">
                                {funtion.functionalname}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-[#212427] text-opacity-40">|</p>
                <div className="    pl-7 pr-3">
                  <div className="  ">
                    <input
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onFocus={() => setShowLocationSuggestions(true)}
                      onBlur={() => setShowLocationSuggestions(false)}
                      onClick={toggleDropd}
                      placeholder="Location, City"
                      type="text"
                      className="  focus:outline-none input w-[163px] rounded  h-[34px]   placeholder:text-[14px]"
                    />
                  </div>
                  <div className="  mt-[5px] absolute z-90">
                    {isOpen && (
                      <div className=" shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[165px] pb-3 pt-2 ">
                        {filteredLocations.map((location) => (
                          <div
                            key={location.id}
                            onClick={() => {
                              // console.log("Suggestion Clicked:", location.name);
                              handleLocationSelect(location.name);
                            }}
                            className="  suggestion-item"
                          >
                            <div className="  hover:bg-[#0077B5] hover:text-white">
                              <p className="  text-[16px] mb-2 cursor-pointer mx-3">
                                {location.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <button onClick={handleSearch} className="corsor-pointer pt-[7px]">
                    <svg
                      className="feather feather-search"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" x2="16.65" y1="21" y2="16.65" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex gap-x-[30px] pt-[8px]">
              <div>
                <img
                  src="/images/Outbound Chat.svg"
                  className="  flex justify-center w-[18px] h-[18px] ml-[45px] mb-[4px]"
                />
                <p className="  text-[#212427] text-opacity-90  text-[14px] w-[102px] font-normal">
                  Outbound Chat
                </p>
              </div>
              <div>
                <p className="  text-[#212427] text-opacity-90  text-[14px] font-normal text-center">
                  0
                </p>
                <p className="  text-[#212427] text-opacity-90  text-[14px] font-normal text-center">
                  Interviews
                </p>
              </div>
              <div>
                <p className="  text-[#212427] text-opacity-90  text-[14px] font-normal text-center">
                  0
                </p>
                <p className="  text-[#212427] text-opacity-90  text-[14px] font-normal text-center w-[121px]">
                  Saved Candidates
                </p>
              </div>
              <div>
                <p className="  text-[#212427] text-opacity-90  text-[14px] font-normal text-center">
                  0
                </p>
                <p className="  text-[#212427] text-opacity-90  text-[14px] font-normal text-center w-[76px]">
                  Total Chats
                </p>
              </div>
              <Link to="/dashboard/recruiter/chat">
                <div>
                  <img
                    src="/images/recruterChat.svg"
                    className="  flex justify-center w-[20px] h-[17px] ml-[10px] mb-[4px]"
                  />

                  <p className="  text-[#212427] text-opacity-90  text-[14px] font-normal text-center">
                    Chats
                  </p>
                </div>
              </Link>
              <div className=" w-[35px]">
                {myProfile === true ? (
                  <img
                    onClick={() => setMyProfile(false)}
                    src={`https://rsapp.unbolt.co/${recruter?.image}`}
                    className="  w-[27px] h-[26px] rounded-full   cursor-pointer"
                  />
                ) : (
                  <img
                    onClick={() => setMyProfile(true)}
                    src={`https://rsapp.unbolt.co/${recruter?.image}`}
                    className="  w-[27px] h-[26px] rounded-full   cursor-pointer"
                  />
                )}
                <div className="flex items-center gap-x-1 mt-[1px]">
                  {myProfile === true ? (
                    <p
                      onClick={() => setMyProfile(false)}
                      className="text-[#212427] text-opacity-90  text-[12px] font-normal  text-center cursor-pointer"
                    >
                      Me
                    </p>
                  ) : (
                    <p
                      onClick={() => setMyProfile(true)}
                      className="text-[#212427] text-opacity-90  text-[12px] font-normal text-center cursor-pointer"
                    >
                      Me
                    </p>
                  )}
                  {myProfile === true ? (
                    <img
                      onClick={() => setMyProfile(false)}
                      className="rotate-180 cursor-pointer w-[11px] h-[8px]"
                      src="/images/recruterDropdown.svg"
                    />
                  ) : (
                    <img
                      onClick={() => setMyProfile(true)}
                      className="cursor-pointer w-[11px] h-[8px]"
                      src="/images/recruterDropdown.svg"
                    />
                  )}
                </div>
              </div>
              <div className="absolute inset-y-0 left-[330px] top-[60px]">
                {myProfile && (
                  <RecruiterPerSonalDashboard
                    setMyProfile={setMyProfile}
                    recruter={recruter}
                  ></RecruiterPerSonalDashboard>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruterDashbordHeadre;
