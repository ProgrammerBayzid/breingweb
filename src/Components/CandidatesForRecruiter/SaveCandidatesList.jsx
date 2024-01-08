import pic from "../../../public/images/RI-icons/No-rejected-candidate.png";
import { useEffect, useState } from "react";
import RecruterRightSideBar from "../RegisterDahsbord/RecruterRightSideBar";
import Spinner from "../Spinner/Spinner";
import SaveSingleCandidateLis from "./SaveSingleCandidateLis";
const SaveCandidatesList = () => {
  const [candidateList, setcandidateList] = useState([]);
  const [loding, setloding] = useState(false);

  useEffect(() => {
    // Function to fetch the recruiter's profile
    const fetchRecruiterCompanyManageJob = (token) => {
      fetch("https://rsapp.unbolt.co/candidate_save", {
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
            setcandidateList(data);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setloding(true); // Mark the loading as complete
        });
    };
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      fetchRecruiterCompanyManageJob(stringWithoutQuotes);
    } else {
      setloding(true);
    }
  }, []);

  console.log(candidateList);

  

  return (
    <div className="  ">
      <div className=" rounded-lg   mb-20">
        <div className="flex flex-row gap-[30px] ">
          <div className="">
            <div className="w-[700px]"></div>
            {loding === false ? (
              <div>
                <Spinner></Spinner>
              </div>
            ) : (
              <div>
                {candidateList.length > 0 ? (
                  <div>
                    {candidateList.map((cl) => (
                      <SaveSingleCandidateLis
                        key={cl.id}
                        candlst={cl}
                      ></SaveSingleCandidateLis>
                    ))}
                  </div>
                ) : (
                  <div>
                  <div className="w-[700px] h-[445px] bg-white flex flex-col  justify-center items-center">
        <img src={pic} alt="" />
        <p className="mt-4 font-inter">There are no Save candidates</p>
    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="">
            <RecruterRightSideBar></RecruterRightSideBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCandidatesList;
