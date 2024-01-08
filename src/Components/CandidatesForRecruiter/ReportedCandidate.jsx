import { IoEllipseOutline } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { useState } from "react";

const ReportedCandidate = ({ setreportModalOpen, reportcandidatedetails, setShowReportPopup }) => {
  console.log(reportcandidatedetails);
  const candidatefullprofileID = reportcandidatedetails?._id;
  const candidateid = reportcandidatedetails?.userid?._id;
  console.log(candidatefullprofileID, candidateid)
  const [message, setMessage] = useState("");
  const [report, setReport] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [showImage, setShowImage] = useState(null);

  // Function to handle option selection
  const handleOptionClick = (option) => {
    const index = report.indexOf(option);
    if (index === -1) {
      setReport([...report, option]);
    } else {
      setReport(report.filter((item) => item !== option));
    }
  };
  const isOptionSelected = (option) => report.includes(option);
  console.log(report)

// Function to handle description
  const handleDescription = (event) => {
    setDescription(event.target.value)
  }
  console.log(description)

  // Function for button click
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = useRef(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file.name);
    // setSelectedDefaultFile(null);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setShowImage(imageUrl)
    }
  };
  console.log(image);

  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken.replace(/"/g, ""));
    }
  }, []);



  const reportCandidate = () => {
    // Check if the 'token' variable is defined.
    if (!token) {
      setMessage("Authentication token missing.");
      return;
    }

    // Prepare the candidate data.
    const candidateReportData = {
      candidatefulldetailsid: candidatefullprofileID,
      candidateid: candidateid,
      report: report,
      image: image,
      description: description
    };
    console.log(candidateReportData);

    // Define the fetch options.
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(candidateReportData),
    };

    // Perform the API request.
    fetch("https://rsapp.unbolt.co/candidate_report", requestOptions)
      .then((response) => {
        if (response.status === 200) {
          // Request was successful.
          return response.json(); // Parse response JSON.
        } else if (response.status === 401) {
          // Unauthorized, handle accordingly.
          throw new Error("Unauthorized: Token invalid or expired.");
        } else {
          // Other errors, handle accordingly.
          throw new Error("Failed to Report candidate.");
        }
      })
      .then((data) => {
        // Handle the response data here (data is the parsed JSON response).
        console.log(data);
        setMessage("Candidate Reported successfully.");
        console.log(message, "message")

        // Close the modal when successfully reported
        setreportModalOpen(false);
        // Show the success popup after the report is successfully submitted
        setShowReportPopup(true);
      })
      .catch((error) => {
        // Handle errors here.
        console.error("Error:", error);
        setMessage("An error occurred while processing your request.");
      });
  };
  console.log(message)

  return (
    <div className="font-inter fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
      <div className="font-inter bg-white mx-auto rounded-lg w-[360px] h-[800px] md:w-[700px] md:h-[606px]">
        <div className="font-inter flex gap-8 md:gap-56 pt-6 w-[350px] h-[26px] md:w-[700px]">
          <img

            src="/images/RI-icons/RI-arrow-left.svg"
            className="font-inter ms-4 mt-1 w-[16px] h-[16px] md:hidden"
          />
          <p className="font-inter text-[18px] font-bold ms-6 md:ms-56">
            Report this Candidate
          </p>
          <p onClick={() => setreportModalOpen(false)} className="font-inter hidden md:block cursor-pointer mt-1 md:me-4">✕</p>
        </div>
        <div className="font-inter ms-6 md:ms-12 pt-16 pb-6 flex flex-col">
          {[
            "Fake Candidate",
            "Wrong profile information",
            "Harassment",
            "Fraud",
            "Violence",
            "Wrong Identity",
            "Spam or Scam",
            "Others",
          ].map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="font-inter cursor-pointer inline-flex gap-5"
            >
              <IoEllipseOutline
                className={`cursor-pointer mt-1 rounded-full w-[16px] h-[16px] text-[#212427] text-opacity-20 ${isOptionSelected(option) ? "bg-blue-500" : ""
                  }`}
              />
              {option}
            </div>
          ))}
        </div>
        <div className="font-inter relative">
          <textarea onChange={handleDescription} value={description} className="font-inter w-[330px] md:w-[632px] h-[120px] border border-1 rounded-lg mx-8 text-[15px] text-[#212427] text-opacity-80 pl-[8px] pt-[8px] focus:outline-none"
            type="textarea"
            maxLength={700}
            placeholder="Write a report to help us remove frauds."
          />
          <p className="font-inter text-right text-[14px] mt-16 px-2 absolute bottom-4 right-10">
            <span className="font-inter text-[#0077B5] text-opacity-90 font-semibold">
              {description.length}
            </span>
            /700
          </p>
        </div>
        <div>
          <button onClick={handleButtonClick} className="font-inter w-[133px] h-[38px] border border-1 rounded-md my-6 ms-4 md:ms-9 text-[#212427] flex items-center justify-center gap-x-[5px] text-[12px] bg-[#F3F3F3] bg-opacity-50">
            <p>
              <BsPlus className="font-inter " />
            </p>
            <p>Add Screenshot</p>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            name="image"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <div className="font-inter mt-44 md:mt-5 mx-4 md:mx-6">
          <button onClick={reportCandidate}
            className="font-inter btn bg-[#0077B5] w-[330px] md:w-[640px] h-[48px] md:mx-auto rounded-lg text-white text-[18px]">
            Submit
          </button>
        </div>
      </div>
    </div>

  );
};

export default ReportedCandidate;
