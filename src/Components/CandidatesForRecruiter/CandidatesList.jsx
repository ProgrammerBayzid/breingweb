import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import SingleCandidateLis from "./SingleCandidateLis";
import RecruterRightSideBar from "../RegisterDahsbord/RecruterRightSideBar";
import AddExperticeAreaForCandidateModan from "./AddExperticeAreaForCandidateModan";
import { BeatLoader, PropagateLoader } from "react-spinners";
import FilterJobs from "./FilterJobs";
import NoCandidateFound from "./NoCandidateFound";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const CandidatesList = () => {
  const [candidateFyntionalArea, setcandidateFyntionalArea] = useState([]);
  const [candidateExperticeAreaLoding, setcandidateExperticeAreaLoding] =
    useState(false); // State to store the token
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Function to fetch the recruiter's profile
    const fetchRecruiterCompanyExperticearea = (token) => {
      fetch("https://rsapp.unbolt.co/candidate_functionalarea", {
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
            setcandidateFyntionalArea(data);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setcandidateExperticeAreaLoding(true); // Mark the loading as complete
        });
    };
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      fetchRecruiterCompanyExperticearea(stringWithoutQuotes);
    } else {
      setcandidateExperticeAreaLoding(true);
    }
  }, []);

  console.log(candidateFyntionalArea);

  const [selectFuntionalArea, setselectFuntionalArea] =
    useState("Candidates for You");
  const [selectFuntionalAreaId, setselectFuntionalAreaId] = useState(0);
  const [selectDevisionId, setselectDevisionId] = useState(0);

  const handelFuntionalAreaSelect = (functionalname, _id) => {
    setselectFuntionalArea(functionalname);
    setselectFuntionalAreaId(_id);
    setcandidateList([]); // Reset the candidateList
    setPage(1); // Reset the page to 1 when changing the functional area
  };
  const handelAllFuntionalAreaSelect = () => {
    setselectFuntionalArea("Candidates for You");
    setselectFuntionalAreaId(0);

    setcandidateList([]); // Reset the candidateList
    setPage(1); // Reset the page to 1 when changing the functional area
  };

  console.log(selectFuntionalArea, selectFuntionalAreaId);

  const [candidateList, setcandidateList] = useState([]);
  const [loding, setloding] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(7);
  useEffect(() => {
    // Function to fetch the recruiter's profile
    const fetchRecruiterCompanyExperticeareaCandidate = (
      token,
      selectFuntionalAreaId,
      limit,
      page
    ) => {
      // setloding(false);
      axios
        .get(
          `https://rsapp.unbolt.co/candidatelist?functionalareaid=${selectFuntionalAreaId}&recruitersDivisionId=${selectDevisionId}&limit=${limit}&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 401) {
            console.log("error");
          }
          // return res.json();
          else {
            setcandidateList((prevData) =>
              page === 1 ? res.data : [...prevData, ...res.data]
            );
            setHasMore(res.data.length >= limit);
          }
        })
        .then((data) => {
          if (data) {
            setcandidateList((prevData) =>
              page === 1 ? data : [...prevData, ...data]
            );
            setHasMore(data.length >= limit);
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
      fetchRecruiterCompanyExperticeareaCandidate(
        stringWithoutQuotes,
        selectFuntionalAreaId,
        limit,
        page
      );
    } else {
      setloding(true);
    }
  }, [selectFuntionalAreaId, limit, page]);

  console.log(candidateList);

  const [addExperticeAreaModal, setAddExperticeAreaModal] = useState(false);
  const [filterCandidateModal, setFilterCandidateModal] = useState(false);
  const [resultsFound, setResultsFound] = useState(true);

  useEffect(() => {
    setItems([]); // Clear existing items before setting new items
    setItems(candidateList);
  }, [candidateList]);
  const [items, setItems] = useState([]);
  console.log(items);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);

  };

  return (
    <div className="  font-inter">
      <div className=" rounded-lg   mb-20">
        <div className="flex flex-row gap-[30px]">
          <div>
            <div className="">
              <div className="sticky top-[58px] h-[45px] pt-[1px]  bg-[#F2F0F5] rounded-b-md">
                <div className="w-[700px] h-[39px]   bg-white  rounded-md flex items-center justify-between pl-3 pr-4 sticky top-[60px]">
                  {candidateExperticeAreaLoding === false ? (
                    <div className="flex justify-center  w-[700px] ">
                      <div>
                        <PropagateLoader
                          color="#0077B5"
                          speedMultiplier={1}
                          size="8"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-x-4 overflow-y-auto pr-5 w-full  ">
                        <div
                          onClick={handelAllFuntionalAreaSelect}
                          className={`${
                            selectFuntionalArea === "Candidates for You"
                              ? "text-[18px] text-[#0077B5] font-semibold cursor-pointer"
                              : "text-[#212427] text-opacity-60 text-[16px] cursor-pointer"
                          }`}
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Candidates for You
                        </div>

                        {candidateFyntionalArea.length > 0 &&
                          candidateFyntionalArea.map((cf) => {
                            return (
                              <div key={cf._id}>
                                <p
                                  onClick={() =>
                                    handelFuntionalAreaSelect(
                                      cf.expertice_area.functionalname,
                                      cf.expertice_area._id
                                    )
                                  }
                                  className={`${
                                    selectFuntionalArea ===
                                    cf?.expertice_area?.functionalname
                                      ? "text-[18px] text-[#0077B5] font-semibold cursor-pointer"
                                      : "text-[#212427] text-opacity-60 text-[16px] cursor-pointer"
                                  }`}
                                  style={{ whiteSpace: "nowrap" }}
                                >
                                  {cf?.expertice_area?.functionalname}
                                </p>
                              </div>
                            );
                          })}
                      </div>

                      <img
                        onClick={() => setAddExperticeAreaModal(true)}
                        className="  w-[16px] h-[16px] ml-3 cursor-pointer"
                        src="/images/RI-icons/plus.svg"
                        alt=""
                      />
                    </>
                  )}
                </div>
              </div>
              {loding === false ? (
                <div>{/* <Spinner></Spinner> */}</div>
              ) : (
                <div>
                  <InfiniteScroll
                    dataLength={items.length}
                    next={handleLoadMore}
                    hasMore={hasMore}
                    loader={
                      <div className="flex justify-center mt-10">
                        <BeatLoader color="#3675d6" />{" "}
                      </div>
                    }
                  >
                    {candidateList.length > 0 ? (
                      <div>
                        {resultsFound === true ? (
                          <div>
                            {items.map((cl) => (
                              <SingleCandidateLis
                                key={cl.id}
                                cl={cl}
                              ></SingleCandidateLis>
                            ))}
                          </div>
                        ) : (
                          <div>
                            <NoCandidateFound></NoCandidateFound>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <NoCandidateFound></NoCandidateFound>
                      </div>
                    )}
                  </InfiniteScroll>
                </div>
              )}
            </div>
          </div>

          <div className="">
            <div className="w-[263px] h-auto bg-white rounded-md mb-4">
              <div className="flex flex-col">
                <div className="p-3">
                  <button
                    onClick={handelAllFuntionalAreaSelect}
                    className={`border border-2 rounded-[15px] px-[8px] text-[#212427] text-opacity-90 ${
                      selectFuntionalAreaId === 0
                        ? "border-[#0077B5] text-[#0077B5]"
                        : ""
                    }`}
                  >
                    For You
                  </button>
                  <button className="border border-2 rounded-[15px] px-[8px] text-[#212427] text-opacity-90 m-2">
                    Nearby
                  </button>
                  <button className="border border-2 rounded-[15px] px-[8px] text-[#212427] text-opacity-90">
                    New
                  </button>
                  <button
                    onClick={() => setFilterCandidateModal(true)}
                    className="border border-2 rounded-[15px] px-[8px] text-[#212427] text-opacity-90 bg-[#D3D5DA] bg-opacity-70"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <RecruterRightSideBar
              handelAllFuntionalAreaSelect={handelAllFuntionalAreaSelect}
              selectFuntionalAreaId={selectFuntionalAreaId}
            ></RecruterRightSideBar>
          </div>
        </div>
      </div>
      {addExperticeAreaModal && (
        <AddExperticeAreaForCandidateModan
          setcandidateExperticeAreaLoding={setcandidateExperticeAreaLoding}
          setAddExperticeAreaModal={setAddExperticeAreaModal}
          setcandidateFyntionalArea={setcandidateFyntionalArea}
        />
      )}
      {filterCandidateModal && (
        <FilterJobs
          setFilterCandidateModal={setFilterCandidateModal}
          setItems={setItems}
          candidateList={candidateList}
          setResultsFound={setResultsFound}
          setcandidateList={setcandidateList}
          items={items}
        />
      )}
    </div>
  );
};

export default CandidatesList;
