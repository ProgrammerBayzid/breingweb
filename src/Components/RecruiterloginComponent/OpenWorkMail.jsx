import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const OpenWorkMail = ({ setWorkMailOpen }) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setemail] = useState("");
  const [error, setError] = useState(""); // State to store the error message

  const navigate = useNavigate();

  const isFreeEmail = (email) => {
    // Regular expression to check if the email is from a free provider
    const freeEmailPattern =
    /@(yahoo\.com|hotmail\.com|outlook\.com|gmail\.com|etc\.)/i;
    return freeEmailPattern.test(email);
  };

  const onSubmit = () => {
    if (isFreeEmail(email)) {
      setError(
        "To proceed with the verification process, kindly use your company email. Please note that free email addresses are not accepted."
      );
    } else {
      setError(""); // Clear the error message if the email is not from a free provider.

      // Your existing code to submit the email
      const postData = {
        email: email,
      };
      console.log(postData);

      // Rest of your code...

      const token = localStorage.getItem("token");
      const tokenWithoutQuotes = token.replace(/"/g, "");

      fetch("https://rsapp.unbolt.co/profile_verify_email", {
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
          localStorage.setItem("verifyEmail", email);
          navigate("/verify-company-with-confirmation-code");

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

  return (
    <div className="font-inter fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
      <div className="font-inter   bg-white  relative  w-[350px] h-[500px] lg:w-[700px] lg:h-[481px] lg:p-0 md:p-0 p-2 rounded-[10px]">
        <div className="font-inter flex justify-between w-[305px] h-[66px] md:w-[641px] md:h-[48px] md:ps-4 md:py-4">
          <div>
            <p className="font-inter text-[20px] font-bold mb-2">Verify with work email</p>
            <p className="font-inter text-[#212427] text-[16px] text-opacity-60">
              Click below to enter your work email which was provided by your
              company domain.
            </p>
          </div>
          <p className="font-inter cursor-pointer -me-7 md:-me-9" onClick={() => setWorkMailOpen(false)}>✕</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="font-inter relative w-full mb-1 mx-5">
            <div className="font-inter mt-12 ms-0 me-2 md:ms-6">
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="font-inter focus:outline-none input ps-2 w-full -ms-4 md:-ms-8 md:-mx-2 mb-[5px] h-[44px] border-[2px] text-[#212427] text-opacity-60"
                placeholder="Enter your work e-mail"
              />
            </div>
            <img
              src="/images/RI-icons/Tick mark.svg"
              className="font-inter absolute inset-y-0 right-12 top-1/2 transform -translate-y-1/2 h-[16px] w-[16px] "
            />
          </div>
          <div>
            {error && (
              <div className="font-inter mx-4 mt-6">
                <p className="font-inter text-[16px] text-[#212427] text-opacity-90 font-semibold">
                  Authorization Request!
                </p>
                <p className="font-inter text-[16px] text-[#212427] text-opacity-70 font-normal">
                  {error}
                </p>
              </div>
            )}
          </div>
          <div className="font-inter mx-6">
            <button
              type="submit"
              className={` bg-[#0077B5] w-[330px] md:w-[640px] h-[48px]  -mx-6 md:mx-auto rounded-lg text-white text-[18px] ${
                error !== "" ? "mt-[158px]" : "mt-[250px]"
              }`}
            >
              Submit
            </button>
          </div>
        </form>
        
      </div>
    </div>

  );
};

export default OpenWorkMail;
