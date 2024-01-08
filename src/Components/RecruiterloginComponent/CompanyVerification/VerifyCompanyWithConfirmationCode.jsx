import { useState } from "react";

const VerifyCompanyWithConfirmationCode = () => {
  const [code, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...code.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };


  const [message, setMessage] = useState("");

 const handleOtpSubmit = async (event) => {
  event.preventDefault();
  const otp = code;
  const arrOfNum = otp.map((str) => {
    return parseInt(str, 10);
  });

  const int = arrOfNum.reduce((accum, digit) => accum * 10 + digit, 0);
  
  const data = {
    otp: int, // No need to use JSON.stringify here
  };

  const token = localStorage.getItem("token");
  const tokenWithoutQuotes = token.replace(/"/g, "");

  try {
    const response = await fetch(
      "https://rsapp.unbolt.co/email_code_verify",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenWithoutQuotes}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      // Check the response data for success or any specific error messages
      if (responseData.success) {
        // Handle success, for example, navigate to the next page
        console.log("Verification successful");
      } else {
        // Handle specific errors from the response
        setMessage(responseData.error || "Error Verify. Please try again later.");
      }
    } else {
      setMessage("Error Verify. Please try again later.");
    }
  } catch (err) {
    // Handle network or other unexpected errors
    setMessage("Error Verify. Please try again later.");
  }
};


  const verifyEmail = localStorage.getItem("verifyEmail");

  const isFreeEmail = (email) => {
    // Regular expression to check if the email is from a free provider
    const freeEmailPattern = /@(yahoo\.com|hotmail\.com|outlook\.com|etc\.)/i;
    return freeEmailPattern.test(email);
  };
  const [error, setError] = useState(""); // State to store the error message

  const onSubmit = () => {
    if (isFreeEmail(verifyEmail)) {
      setError(
        "To proceed with the verification process, kindly use your company email. Please note that free email addresses are not accepted."
      );
    } else {
      setError(""); // Clear the error message if the email is not from a free provider.

      // Your existing code to submit the email
      const postData = {
        type: 1,
        email: verifyEmail,
      };
      console.log(postData);

      // Rest of your code...

      const token = localStorage.getItem("token");
      const tokenWithoutQuotes = token.replace(/"/g, "");

      fetch("https://rsapp.unbolt.co/profile_verify", {
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

          try {
            const jsonResponse = JSON.parse(result); // Attempt to parse as JSON
            console.log(jsonResponse);
          } catch (jsonError) {
            console.error("JSON Parsing Error:", jsonError);
          }
        })
        .catch((error) => {
          console.error("Error uploading data:", error);
        });
    }
  };

  const handleGoBack = () => {
    window.history.back(); // This will navigate back one step in the browser's history
  };

  return (
    <div className="font-inter bg-white md:bg-gray-100 flex justify-center">
      <div className="font-inter bg-white py-6 md:p-6 rounded-lg shadow-md w-[336px] h-[700px] md:w-[700px] md:h-[624px] md:mt-8 mb-40">
        <div className="font-inter flex justify-between">
          <div className="font-inter ps-2 md:ps-0">
            <img onClick={handleGoBack}
              src="/images/RI-icons/RI-arrow-left.svg"
              className="font-inter w-[16px] h-[16px]"
            />
          </div>
          <div className="font-inter w-[260px] h-[69px] md:w-[569px] md:h-[70px] mx-auto">
            <h2 className="font-inter text-[#454545] text-[22px] font-semibold  ms-10 md:mx-44 text-center">
              Under Verification
            </h2>
            <p className="font-inter ps-7 md:px-12 md:pb-6 md:ms-8 text-[#212427] text-opacity-60 text-[14px] md:text-[16px] text-center">
              <small>
                Thank you for submitting your work email. Kindly check your
                mailbox for{" "}
                <span className="font-inter ">
                  the confirmation code and enter it below to get verified
                  instantly.
                </span>
              </small>
            </p>
          </div>
        </div>
        <form onSubmit={handleOtpSubmit}>
          <div className="font-inter pt-14 pb-4 mx-14 md:mx-auto w-[240px] h-202px] md:w-[218px] md:[h-38px]">
            <div className="font-inter flex justify-center">
              <div className="font-inter  flex gap-5">
                {code.map((data, index) => {
                  return (
                    <input
                      type="text"
                      name="otp"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                      maxLength="1"
                      className="font-inter focus:outline-none  border bprder-[3px] border-[#212427] border-opacity-40 rounded pl-[22px] w-[55px] h-[45px] mb-4 "
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="font-inter w-[304px] h-[14px] mx-auto">
            <p className="font-inter text-[#212427] text-opacity-60 text-[14px] text-center pb-2">
              If you received a verification code, please{" "}
              <span className="font-inter ">submit here immediately!</span>
            </p>
            <div className="font-inter py-3 text-center">
              <button
                type="submit"
                className="font-inter btn bg-[#0077B5] w-[106px] h-[34px] rounded text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="font-inter pt-28">
          <p className="font-inter text-[#212427] text-opacity-60 text-center text-[14px] pb-2">
            Didn't receive a code?{" "}
          </p>
          <p
            onClick={onSubmit}
            className="font-inter text-[#00A0DC] text-[16px] text-center cursor-pointer"
          >
            Resend Code
          </p>
        </div>
        <div className="font-inter w-[330px] h-[95px] md:w-[623px] md:h-[38px] text-[16px] text-[#212427] text-opacity-60 pt-8 mx-auto md:px-6">
          <p className="font-inter mt-32 md:mt-0">
            Up to 90% of recruiters will receive a confirmation code within a
            maximum of 2 minutes. However, during server downtime, the
            verification process may be delayed for a maximum of 6 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyCompanyWithConfirmationCode;
