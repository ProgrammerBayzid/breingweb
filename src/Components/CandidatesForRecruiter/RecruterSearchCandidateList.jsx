import { useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RecruterSearchSingalCandidate from "./RecruterSearchSingalCandidate";
import RecruterRightSideBar from "../RegisterDahsbord/RecruterRightSideBar";
import NoCandidateFound from "./NoCandidateFound";
import SearchCandidateFilter from "./SearchCandidateFilter";

const RecruterSearchCandidateList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("skill");
  const locationParam = queryParams.get("division");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  const [isLoding, setIsLoding] = useState(false);
  const [isLodingr, setIsLodingr] = useState(false);

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        const apiUrl = `https://rsapp.unbolt.co/candidates_s?skill=${name}&division=${locationParam}`;
        const response = await axios.get(apiUrl);
        setSearchResults(response.data);
        // setIsLoding(true);
        if (response.data) {
          setIsLoding(true);
          setIsLodingr(true);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }

    if (name || locationParam || (name && locationParam)) {
      setIsLodingr(false);
      fetchSearchResults();
    }
  }, [name, locationParam]);

  const result = searchResults;

  const [resultsFound, setResultsFound] = useState(true);
  const [filterCandidateModals, setFilterCandidateModals] = useState(false);

  useEffect(() => {
    setItems(result);
  }, [result]);
  const [items, setItems] = useState([]);
  console.log(items);

  const [displayCount, setDisplayCount] = useState(6); // Initially, display 3 items

  // Handle the "View More" button click
  const handleViewMoreClick = () => {
    // If token exists, show all items
    if (displayCount < items.length) {
      setDisplayCount((prevCount) => prevCount + 10);
    } else {
      console.log("error");
      // If token doesn't exist, redirect to the login route
    }
  };
  const shouldShowViewMoreButton = displayCount < items.length;

  if (isLoding === false) {
    return (
      <div className="w-[700px]">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <div>
      <div className="flex gap-[30px] font-inter">
        <div>
          {isLodingr === false ? (
             <div className="w-[700px]">

                 <Spinner></Spinner>
             </div>
          ) : (
            <div>
              {result.length > 0 ? (
                <div>
                  {resultsFound === true ? (
                    <div>
                      {items.slice(0, displayCount).map((cl) => (
                        <RecruterSearchSingalCandidate
                          key={cl.id}
                          cl={cl}
                        ></RecruterSearchSingalCandidate>
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
               <div>
            {shouldShowViewMoreButton && (
              <div className=" w-[150px] h-[40px]  rounded rounded-full bg-[#0077B5] mx-auto lg:mt-12 mt-10">
                <h1
                  onClick={handleViewMoreClick}
                  className="text-[16px] font-semibold text-center text-white  pt-[8px] cursor-pointer"
                >
                  View More
                </h1>
              </div>
            )}
          </div>
            </div>
          )}

         
        </div>

        <div className="">
            <div className="w-[263px] h-auto bg-white rounded-md mb-4">
              <div className="flex flex-col">
                <div className="p-3">
                 
                  <button className="border border-2 rounded-[15px] px-[8px] text-[#212427] text-opacity-90 m-2">
                    Nearby
                  </button>
                  <button className="border border-2 rounded-[15px] px-[8px] text-[#212427] text-opacity-90 m-2">
                    New
                  </button>
                  <button
                    onClick={() => setFilterCandidateModals(true)}
                    className="border border-2 rounded-[15px] px-[8px] text-[#212427] text-opacity-90 bg-[#D3D5DA] bg-opacity-70 m-2"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <RecruterRightSideBar
              
            ></RecruterRightSideBar>
          </div>
      </div>
      {filterCandidateModals && (
        <SearchCandidateFilter
          setFilterCandidateModals={setFilterCandidateModals}
          setItems={setItems}
          result={result}
          setResultsFound={setResultsFound}
          items={items}
        />
      )}
    </div>
  );
};

export default RecruterSearchCandidateList;
