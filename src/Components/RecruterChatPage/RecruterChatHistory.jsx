import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import RecruterSingalChatHistory from "./RecruterSingalChatHistory";
import useAuth from "../RecruterPrivetRoute/Context/useAuth";

const RecruterChatHistory = () => {
  const recruter = useAuth();
  const recruterDetails = recruter.recruter;
  // console.log(recruterDetails);

  const [chanelLists, setchanelList] = useState([]);
  const [error, setError] = useState(null);
  // console.log(chanelLists);


  // Replace 'YOUR_DYNAMIC_USERID' with the actual dynamic user ID you want to use
  const dynamicUserId = recruterDetails?._id;
  // console.log(dynamicUserId);
 


  useEffect(() => {
    // Function to fetch the recruiter's profile
    const fetchRecruiterchatHistory = (recruterID,token) => {
        fetch(
          `https://rsapp.unbolt.co/channellist?userid=${recruterID}&seeker=true`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((res) => {
            if (res.status === 401) {
              // console.log("error");
            }
            return res.json();
          })
          .then((data) => {
            if (data) {
              setchanelList(data);
              data;
            }
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          })
          .finally(() => {
            // setIsLoading(false); // Mark the loading as complete
          });
      
    };

    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");
    const recruterIDD = localStorage.getItem("recruterID");

    if (storedToken && recruterIDD ) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      const recruterID = recruterIDD.replace(/"/g, "");
      fetchRecruiterchatHistory( recruterID, stringWithoutQuotes);
    } else {
      // setIsLoading(false);
    }
  }, [recruterDetails]);





  const [searchQuery, setSearchQuery] = useState("");
  const [chanelid, setchanelid] = useState("");
  const [Active, setActive] = useState(false);
  // console.log(chanelid, Active);
  const handleEducationClick = (value) => {
    setchanelid(value);
    setActive(value);
  };
  return (
    <div>
      <div className="w-[360px] h-[556px] bg-white rounded-[10px]  py-5 font-inter ">
        <div>
          <div>
            <div className="flex justify-between px-3">
              <p className="text-[#212427] text-opacity-90 text-[22px] font-semibold font-inter">
                Chats
              </p>
              <p className="text-[#212427] text-opacity-60 text-[20px] font-normal font-inter">
                Interactivity
              </p>
            </div>
              <div className="relative w-full mb-[8px] mt-[17px] px-3">
                <img
                  src="/images/companyIL2.svg"
                  className="absolute inset-y-0 left-8 top-1/2 transform -translate-y-1/2 h-[16px] w-[16px] "
                />
                <div className="">
                  <input
                    placeholder="Search"
                    type="text"
                    className="focus:outline-none input pl-[45px] w-full bg-[#EEEEEE] h-[33px] border border-[2px] placeholder:text-[14px] rounded"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

              </div>
            <div className="h-[435px] overflow-y-auto">
              <div className="">
                {chanelLists.length > 0 ? (
                  <div>
                    {chanelLists
                      ?.filter((chanelList) => {
                        return searchQuery.toLocaleLowerCase() === ""
                          ? chanelList
                          : chanelList.seekerid?.fastname === null
                          ? chanelList
                          : (
                              chanelList?.seekerid?.fastname?.toLocaleLowerCase() +
                              " " +
                              chanelList?.seekerid?.lastname?.toLocaleLowerCase()
                            ).includes(searchQuery);
                      })
                      .map((chanelList) => (
                        <div key={chanelList._id} className={
                            Active === chanelList._id
                              ? "my-5 border-l-4    border-[#0077B5] "
                              : "my-5 border-l-4 border-white   hover:border-[#0077B5] "
                          }
                          onClick={() => handleEducationClick(chanelList._id)}>

                            <RecruterSingalChatHistory
                              
                              chanelList={chanelList}
                            />
                        </div>
                      ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruterChatHistory;
