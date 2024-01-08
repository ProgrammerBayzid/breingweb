import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const SearchComponent = () => {
  const [division, setLocation] = useState("");
  const [name, setName] = useState("");
  const containerRef = useRef(null);
 
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      `/candidates?skill=${selectedfuntionalareas}&division=${selectedLocation}`
    );
  };

  const [locate, setLocate] = useState([]);

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

  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState(() => {
    // Check if there's a stored value in local storage
    const storedValuel = localStorage.getItem("selectedLocation");
    return storedValuel || ""; // Use the stored value or an empty string if not found
  });

  useEffect(() => {
    // Update local storage whenever selectedfuntionalareas changes
    localStorage.setItem("selectedLocation", selectedLocation);
  }, [selectedLocation]);

  const clearselectedLocation = () => {
    // Clear the stored value and set selectedfuntionalareas to an empty string
    localStorage.removeItem("selectedLocation");
    setSelectedLocation("");
  };

  const filteredLocations = locate.filter((location) =>
    location.name.toLowerCase().includes(selectedLocation.toLowerCase())
  );
  const handleLocationSelect = (selectedLocation) => {
    // console.log("Selected Location:", selectedLocation);
    setSelectedLocation(selectedLocation);
    setShowLocationSuggestions(false);
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [showfuntionalareasSuggestions, setShowfuntionalareasSuggestions] =
    useState(false);

  const [selectedfuntionalareas, setSelectedfuntionalareas] = useState(() => {
    // Check if there's a stored value in local storage
    const storedValue = localStorage.getItem("selectedfuntionalareas");
    return storedValue || ""; // Use the stored value or an empty string if not found
  });

  // ... Other code ...

  useEffect(() => {
    // Update local storage whenever selectedfuntionalareas changes
    localStorage.setItem("selectedfuntionalareas", selectedfuntionalareas);
  }, [selectedfuntionalareas]);

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("selectedfuntionalareas");
      localStorage.removeItem("selectedLocation");
    };

    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const clearSelectedFunctionalAreas = () => {
    // Clear the stored value and set selectedfuntionalareas to an empty string
    localStorage.removeItem("selectedfuntionalareas");
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
  const location = useLocation();
  // Add this useEffect to clear local storage data when changing routes
  useEffect(() => {
    // Clear the stored values when the route changes
    localStorage.removeItem("selectedfuntionalareas");
    localStorage.removeItem("selectedLocation");
  }, [location.pathname]);

  return (
    <div ref={containerRef}>
      <div className="lg:block md:block hidden ">
        <div className="flex justify-center mt-[66px] ">
          <div>
            <div className="lg:w-[740px] h-[60px] rounded-lg bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
              <div className="flex items-center ">
                <div className="relative">
                  <div className=" ">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none pt-[5px] ">
                        <LazyLoadImage
                          effect="blur"
                          loading="lazy"
                          alt=""
                          src="/images/logo/job.svg"
                        />
                      </div>
                      <input
                        type="text"
                        value={selectedfuntionalareas}
                        onChange={(e) =>
                          setSelectedfuntionalareas(e.target.value)
                        }
                        onFocus={() => setShowfuntionalareasSuggestions(true)}
                        onBlur={() => setShowfuntionalareasSuggestions(false)}
                        onClick={toggleDrop}
                        className=" placeholder:font-normal    placeholder:text-[16px]  		 rounded-l-lg block  pl-[64px] pt-1   lg:w-[276px] h-[60px]  outline-none"
                        placeholder="Candidate Skills"
                        required
                      />
                    </div>
                  </div>
                  <div className="ml-[63px] absolute z-40">
                    {isOpenf && (
                      <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[250px] h-[300px] pb-3 pt-2  overflow-auto">
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
                            className="suggestion-item "
                          >
                            <div className="hover:bg-[#0077B5] hover:text-white">
                              <p className="text-[16px] mb-2 cursor-pointer  mx-3">
                                {funtion.functionalname}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-[25px] bg-white">
                  {selectedfuntionalareas ? (
                    <button
                      className="w-[25px] bg-white"
                      onClick={clearSelectedFunctionalAreas}
                    >
                      <RxCross2 className="mt-3 mx-1 bg-white"></RxCross2>
                    </button>
                  ) : (
                    <p className="bg-white w-[25px]"></p>
                  )}
                </div>

                <div className="relative">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-[32px] pt-[5px] pointer-events-none">
                      <LazyLoadImage
                        effect="blur"
                        loading="lazy"
                        alt=""
                        src="/images/logo/locetion.svg"
                      />
                    </div>
                    <input
                      type="text"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onFocus={() => setShowLocationSuggestions(true)}
                      onBlur={() => setShowLocationSuggestions(false)}
                      onClick={toggleDropd}
                      className="  placeholder:font-normal   		placeholder:text-[16px] rounded-l-lg block  pl-[64px] pt-1   lg:w-[260px] h-[60px]  outline-none"
                      placeholder="Location"
                      required
                    />
                  </div>
                  <div className="ml-[60px] absolute z-40">
                    {isOpen && (
                      <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[190px] pb-3 pt-2 ">
                        {filteredLocations.map((location) => (
                          <div
                            key={location.id}
                            onClick={() => {
                              // console.log("Suggestion Clicked:", location.name);
                              handleLocationSelect(location.name);
                            }}
                            className="suggestion-item"
                          >
                            <div className="hover:bg-[#0077B5] hover:text-white">
                              <p className="text-[16px] mb-2 cursor-pointer mx-3">
                                {location.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className=" ">
                  {selectedLocation ? (
                    <button onClick={clearselectedLocation}>
                      {" "}
                      <RxCross2 className="mt-3 mr-6"></RxCross2>
                    </button>
                  ) : (
                    <p className="bg-white w-[40px]"></p>
                  )}
                </div>

                <div className="">
                  <button
                    onClick={handleSearch}
                    className="w-[154px] rounded-r-lg h-[60px] bg-[#0077B5] text-[18px] font-medium text-white"
                  >
                    Start Hiring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="lg:hodden md:hidden block">
          <div className="flex justify-center mt-[46px] ">
            <div>
              <div className=" items-center ">
                <div className=" w-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded rounded-[10px] border h-[60px] mb-2">
                  <div className="flex itexs-center">
                    <div className="relative">
                      <div className="relative ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                          <LazyLoadImage
                            effect="blur"
                            loading="lazy"
                            alt=""
                            src="/images/logo/job.svg"
                          />
                        </div>
                        <input
                          type="text"
                          value={selectedfuntionalareas}
                          onChange={(e) =>
                            setSelectedfuntionalareas(e.target.value)
                          }
                          onFocus={() => setShowfuntionalareasSuggestions(true)}
                          onBlur={() => setShowfuntionalareasSuggestions(false)}
                          onClick={toggleDrop}
                          className=" block mb-2 pl-[64px] pt-1.5  rounded rounded-[10px]  h-[58px]  placeholder:font-normal   		placeholder:text-[16px] outline-none"
                          placeholder="Candidate Skills"
                          required
                        />
                      </div>

                      <div className="absolute z-40 ml-[20px]">
                        {isOpenf && (
                          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[220px] h-[300px] pb-3 pt-2  overflow-auto">
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
                                className="suggestion-item "
                              >
                                <div className="hover:bg-[#0077B5] hover:text-white">
                                  <p className="text-[14px] mb-2 cursor-pointer  mx-3">
                                    {funtion.functionalname}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-[25px]">
                      {selectedfuntionalareas ? (
                        <button onClick={clearSelectedFunctionalAreas}>
                          <RxCross2 className="mt-6 mr-2"></RxCross2>
                        </button>
                      ) : (
                        <p className="bg-white w-[24px]"></p>
                      )}
                    </div>
                  </div>
                </div>
                <div className=" w-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded rounded-[10px] border h-[60px] mb-5">
                  <div className="flex">
                    <div className="relative">
                      <div className="relative w-full ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                          <LazyLoadImage
                            effect="blur"
                            loading="lazy"
                            alt=""
                            src="/images/logo/locetion.svg"
                          />
                        </div>
                        <input
                          type="text"
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          onFocus={() => setShowLocationSuggestions(true)}
                          onBlur={() => setShowLocationSuggestions(false)}
                          onClick={toggleDropd}
                          className=" placeholder:font-normal   		placeholder:text-[16px]  rounded rounded-[10px]  block  pl-[64px] pt-1.5   h-[58px] outline-none"
                          placeholder="Location"
                          required
                        />
                      </div>

                      <div className=" absolute z-40 ml-[40px]">
                        {isOpen && (
                          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[150px] pb-3 pt-2 ">
                            {filteredLocations.map((location) => (
                              <div
                                key={location.id}
                                onClick={() => {
                                  // console.log(
                                  //   "Suggestion Clicked:",
                                  //   location.name
                                  // );
                                  handleLocationSelect(location.name);
                                }}
                                className="suggestion-item"
                              >
                                <div className="hover:bg-[#0077B5] hover:text-white">
                                  <p className="text-[14px] mb-2 cursor-pointer mx-3">
                                    {location.name}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className=" ">
                      {selectedLocation ? (
                        <button onClick={clearselectedLocation}>
                          {" "}
                          <RxCross2 className="mt-6 mr-5"></RxCross2>
                        </button>
                      ) : (
                        <p className="bg-white w-[56px]"></p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleSearch}
                    className="w-[120px] rounded-lg h-[40px] bg-[#0077B5] text-[14px] font-semibold text-white"
                  >
                    Start Hiring
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

export default SearchComponent;
