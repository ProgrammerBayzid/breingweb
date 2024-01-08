import copy from "clipboard-copy";
import { useState } from "react";
import CopyJobLinkPopUp from "./CopyJobLinkPopUp";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const JobSheare = () => {
  const jobid = localStorage.getItem("jobid");
  const jobidWithoutQuotes = jobid.replace(/"/g, "");
  console.log(jobidWithoutQuotes);

  const url = `https://bringin.io/job-details/${jobidWithoutQuotes}`;
  const [copied, setCopied] = useState(false);
  const [ShowCopyJobLinkPopup, setShowCopyJobLinkPopup] = useState(false);

  const handleCopyClick = () => {
    copy(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the "Copied!" message after 2 seconds
    if (copied == true) {
      setShowCopyJobLinkPopup(true);
    }
  };
  useEffect(() => {
    if (copied) {
      setShowCopyJobLinkPopup(true);
    }
  }, [copied]);

  const handleFacebookShare = () => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#BringinInstantHiringApp"; // Replace with your desired hashtags, separated by commas
    console.log(url);
    // Encode the URL, title, and hashtags
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the Facebook share URL with title and hashtags
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&title=${encodedTitle}&hashtag=${encodedHashtags}`;

    // Open the Facebook share URL in a new tab/window
    window.open(facebookShareUrl, "_blank");
  };

  const handleTwiterShare = () => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#BringinInstantHiringApp"; // Replace with your desired hashtags, separated by commas
    console.log(url);
    // Encode the URL, title, and hashtags
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the Facebook share URL with title and hashtags
    const facebookShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&title=${encodedTitle}&hashtag=${encodedHashtags}`;

    // Open the Facebook share URL in a new tab/window
    window.open(facebookShareUrl, "_blank");
  };

  const handleLinkedInShare = () => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#BringinInstantHiringApp"; // Replace with your desired hashtags, separated by commas
    console.log(shareUrl);
    // Encode the URL, title, and hashtags
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the LinkedIn share URL with hashtags
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary_hashtags=${encodedHashtags}`;

    // Open the LinkedIn share URL in a new tab/window
    window.open(linkedInShareUrl, "_blank");
  };

  const handleInstagramShare = () => {
    const shareUrl = url; // Replace with your URL
    const shareCaption = "Check out this awesome content!"; // Replace with your caption
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedCaption = encodeURIComponent(shareCaption);

    // Construct the Instagram share URL
    const instagramShareUrl = `https://www.instagram.com/share?url=${encodedUrl}&caption=${encodedCaption}`;

    // Open the Instagram share URL in a new tab/window
    window.open(instagramShareUrl, "_blank");
  };

  const location = useLocation();
  console.log(location);
  const isActive = (path) => {
    return location.pathname === path;
  };

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
  const navagative = useNavigate();
  const registerjobpost = () => {
    navagative("/register-job-post");
  };
  const recruiteridentityverification = () => {
    navagative("verify-company");
  };
  const dashbordregisterjobpost = () => {
    navagative("/dashboard/recruiter/register-job-post");
  };

  return (
    <div
      className={`  ${
        isActive("/dashboard/recruiter/registration-job-post-success")
          ? "pb-[80px] font-inter flex "
          : "flex justify-center pt-3 lg:pt-10 pb-[80px] font-inter"
      }`}
    >
      <div className="  bg-[#FCFCFC]  relative  w-[350px]  lg:w-[700px]  h-auto   lg:p-0 md:p-0 p-2 rounded rounded-[10px] ">
        <div className="px-5">
          <div className="my-5 ">
            <div className="flex justify-between">
              <img
                // onClick={handelSkillRemove}
                className="cursor-pointer"
                src="/images/tircompany.svg"
              />
              {isActive ===
              "/dashboard/recruiter/registration-job-post-success" ? (
                <Link
                  to={`/dashboard/recruiter/job-details/${jobidWithoutQuotes}`}
                >
                  <button className=" text-white bg-[#0077B5] h-[25px] text-[14px] rounded rounded-[15px] px-2">
                    Preview
                  </button>
                </Link>
              ) : (
                <Link to={`/job-details-preview/${jobidWithoutQuotes}`}>
                  <button className=" text-white bg-[#1C4B81] h-[28px] w-[80px] text-[14px] rounded rounded-[15px] ">
                    Preview
                  </button>
                </Link>
              )}
            </div>
          </div>

          <div>
            <p className="lg:text-[22px] md:text-[18px] text-[14px] text-opacity-90 text-[#212427] font-semibold">
              Job Successfully Posted
            </p>
            <p className="lg:text-[16px] md:text-[14px] text-[12px]  text-[#212427] text-opacity-70 font-normal">
              Kindly share your job post within next 60 seconds to gain enhanced
              visibility and maximize exposure for your position at Bringin.
            </p>

            <div className="mt-3">
              <div className="w-full lg:py-3 py-2  flex gap-x-[130px] items-center ">
                <div>
                  <div className="flex gap-x-3 bg-white h-[32px] px-[14px] rounded rounded-[25px]">
                    <img
                      onClick={handleFacebookShare}
                      className="w-[10px] w-[20px] cursor-pointer"
                      src="/images/fbs.svg"
                    />
                    <img
                      onClick={handleLinkedInShare}
                      className="w-[20px] w-[20px] cursor-pointer"
                      src="/images/lns.svg"
                    />
                    <img
                      onClick={handleTwiterShare}
                      className="w-[19px] w-[20px] cursor-pointer"
                      src="/images/tws.svg"
                    />
                    <img
                      onClick={handleInstagramShare}
                      className="w-[20px] w-[20px] cursor-pointer"
                      src="/images/igs.svg"
                    />
                  </div>
                </div>
                <div>
                  <img
                    onClick={handleCopyClick}
                    className="lg:h-[35px] w-[55px] lg:w-[95px] cursor-pointer"
                    src="/images/sheare.svg"
                  />

                  {ShowCopyJobLinkPopup && (
                    <CopyJobLinkPopUp
                      setShowCopyJobLinkPopup={setShowCopyJobLinkPopup}
                    ></CopyJobLinkPopUp>
                  )}
                </div>
              </div>
            </div>
            <p className="lg:text-[16px] md:text-[14px] text-[12px]  text-[#212427] text-opacity-70 font-normal">
            Enhance job visibility and attract a wider pool of candidates by leveraging alternative platforms for sharing your job openings.
            </p>

            <div className="flex justify-center my-[50px]">
              <img
                className="lg:h-[312px] lg:w-[388px] h-[150px] w-[250px]"
                src="/images/jobsharep2.svg"
              />
            </div>
            <div>
              <p className="lg:text-[16px] md:text-[15px] text-[12px]  text-[#212427] font-normal">
                <span className="lg:text-[16px] md:text-[15px] text-[12px]  text-[#212427] font-semibold">
                  Note:{" "}
                </span>
                Once your company and recruiter identity are verified, your job
                post will be live.
              </p>
            </div>
            {isActive ===
            "/dashboard/recruiter/registration-job-post-success" ? (
              <button
                onClick={dashbordregisterjobpost}
                type="button"
                className="w-full
 border border-[1px] border-[#212427] border-opacity-80 lg:text-[16px] md:text-[14px] px-1 text-[14px] h-[48px]  text-[#212427] rounded-[5px] font-medium lg:mb-0 md:mb-3 mb-3"
              >
                Post Another
              </button>
            ) : (
              <div className="lg:flex gap-x-2 pb-[45px] mt-[30px]">
                <button
                  onClick={registerjobpost}
                  type="button"
                  className="w-full
 border border-[1px] border-[#212427] border-opacity-80  lg:text-[16px] md:text-[14px] px-1 text-[14px]  h-[48px] text-[#212427] rounded-[5px] font-medium lg:mb-0 md:mb-3 mb-3"
                >
                  Post Another
                </button>
                {recruter?.other?.profile_verify_type === 1 ? (
                  <></>
                ) : (
                  <button
                    onClick={recruiteridentityverification}
                    type="button"
                    className="w-full
 lg:text-[16px] md:text-[14px] text-[14px] px-1 h-[48px]  text-[#212427] rounded-[5px] font-medium text-white bg-[#0077B5]"
                  >
                    Verify Your Company
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSheare;
