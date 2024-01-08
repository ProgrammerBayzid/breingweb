import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const RecruterRightSideBar = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
console.log(profileInfo);
  useEffect(() => {
    const fetchRecruiterProfile = (token) => {
      axios
        .get("https://rsapp.unbolt.co/recruiters_profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 401) {
            console.log(res.status);
          } else {
            setProfileInfo(res.data);
            console.log(res.data);
          }
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled:", error.message);
          } else if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error(
              "Server responded with an error:",
              error.response.data
            );
          } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received:", error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error setting up the request:", error.message);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      fetchRecruiterProfile(stringWithoutQuotes);
    } else {
      setIsLoading(false);
    }
  }, []);

  const calculateCompletionPercentage = () => {
    const totalFields = Object.keys(profileInfo).length;
    const filledFields = Object.values(profileInfo).filter(
      (value) => value !== null
    ).length;
    return (filledFields / totalFields) * 100;
  };

  if (isLoading === true) {
    return <div className="lg:w-[249px]"></div>;
  }

  return (
    <div>
      <div className="flex flex-col font-inter">
        <div className="w-[263px] h-[165px]  bg-white rounded-md p-4 mt-[2px]">
          <p>Profile Setup:</p>
          <div className="flex justify-between pe-6">
            Your profile has 3 areas for improvement.
            <img
              src="/images/RI-icons/right-arrow.svg"
              className="w-[18px] h-[12px] rounded-full bg-slate-300 text-[#FFFFFF] cursor-pointer mt-2"
            />
          </div>
          <div className="w-[151px] h-[52px] flex gap-6 mt-2">
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={calculateCompletionPercentage}
                text={`${calculateCompletionPercentage()}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.15,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "20px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(0, 119, 181, 1, ${
                    calculateCompletionPercentage / 100
                  })`,
                  textColor: "#0077B5",
                  trailColor: "#EBF9EF",
                  backgroundColor: "#0077B5",
                })}
              />
            </div>
            <img src="/images/RI-icons/Job Profile.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruterRightSideBar;
