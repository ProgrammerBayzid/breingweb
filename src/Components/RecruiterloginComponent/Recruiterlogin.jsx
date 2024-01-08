import pic from "../../../public/images/RI-icons/done.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../App.css";
import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";
const Recruiterlogin = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleAgreeClick = () => {
    setAgreed(true);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleInputChange = (e) => {
    const inputNumber = e.target.value.replace(/\D/g, "").replace(/^0+/, ""); // Remove non-digit characters
    setPhoneNumber(inputNumber);
  };

  console.log(phoneNumber);

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const formattedPhoneNumber = "0" + phoneNumber; // Add '0' at the beginning
      const response = await fetch("https://rsapp.unbolt.co/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: formattedPhoneNumber, // Use the formatted phone number
          isRecruiter: 1,
        }),
      });
      console.log("OTP GET");
      if (response.ok) {
        setMessage("OTP sent successfully!");
        setPhoneNumber("");
        localStorage.setItem("number", JSON.stringify(formattedPhoneNumber));
        const u = localStorage.getItem("number");
        console.log(u);
        navigate("/verifications");
      } else {
        setMessage("Error sending OTP. Please try again later.");
      }
    } catch (err) {
      setMessage("Error sending OTP. Please try again later.");
    }
  };

  console.log(message);
  const handleGoBack = () => {
    window.history.back(); // This will navigate back one step in the browser's history
  };
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recruiters login | Unbolt Chat Based Hiring App </title>
        <meta
          name="description"
          content="Welcome to Unbolt's Recruiter Login Page. Access powerful recruiting tools and find your next star employee effortlessly. Join us today."
        />
        <link rel="canonical" href="http://unbolt.co/recruiters-login" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KKFH10XGFV"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKFH10XGFV');
          `}
        </script>
      </Helmet>
      <div className="hidden lg:block">
        <div>
          <div className="mx-[10px] font-inter">
            <div className="lg:flex md:flex  justify-center  ">
              <div className="pt-5 pb-20">
                <div className="lg:w-[459px] bg-white lg:h-[451px] w-full border border-[2px] rounded rounded-[10px] lg:p-7 md:p-7 p-5">
                <h1 className="lg:text-[22px] md:text-[20px] text-[17px] font-inter text-[#212427] font-semibold mb-5 lg:text-start md:text-start text-center">
                    Login or Register As a Recruiter
                  </h1>
                  <div>
                    <div>
                      <div className="flex items-center gap-x-[12px]">
                        <img className="w-[14px] h-[14px]" src={pic} />
                        <p className="font-normal text-[16px]  text-[#212427] ">
                          I am genuinely a Recruiter
                        </p>
                      </div>
                      <div className="flex items-center gap-x-[12px] my-1">
                        <img className="w-[14px] h-[14px]" src={pic} />
                        <p className="font-normal text-[16px]  text-[#212427]">
                          I am not a Hiring Consultant
                        </p>
                      </div>
                      <div className="flex items-center gap-x-[12px]">
                        <img className="w-[14px] h-[14px]" src={pic} />
                        <p className="font-normal text-[16px]  text-[#212427]">
                          I am not a Fraud or Scammer
                        </p>
                      </div>
                      <p className="font-normal text-[14px]  text-[#212427] text-opacity-90 mt-5">
                        If you’re registered, you’ll login automatically after
                        OTP verification.
                      </p>
                    </div>
                  </div>

                  <div className="my-2">
                    <form onSubmit={handleRegisterSubmit}>
                      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute pt-[9px] left-0 flex items-center pl-3 pointer-events-none">
                          <p className="pt-[3px] font-normal text-[#212427] text-[16px]">+880 ।</p>
                        </div>
                        <input
                          type="tel"
                          maxLength="10"
                          value={phoneNumber}
                          onChange={handleInputChange}
                          // onBlur={handleBlur }
                          className="focus:outline-none  border border-[2px] rounded rounded-[7px] input  p-[9.5px] w-full mb-2 pl-[75px] placeholder: text-[#212427] placeholder: text-[14px] lg:placeholder: text-[16px] md:placeholder: text-[16px]"
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>

                      <div className="flex gap-2 mb-5">
                        <input
                          className="mb-5 cursor-pointer"
                          type="checkbox"
                          checked={agreed}
                          onChange={() => setAgreed(!agreed)}
                        />
                        <p className="text-[14px] ml:2">
                          I agree to the{" "}
                          <Link to="/privacypolicy">
                            <span className="text-[#0077B5]">
                              Unbolt’s Privacy Policy
                            </span>
                          </Link>{" "}
                          and{" "}
                          <Link to="/terms&conditions">
                            <span className="text-[#0077B5]">
                              Terms & Conditions
                            </span>
                          </Link>
                        </p>
                      </div>

                      <button
                        type="submit"
                        onClick={handleAgreeClick}
                        // disabled={!agreed}
                        // className={
                        //   agreed
                        //     ? "lg:w-[400px] md:w-[365px] w-[350px] h-[45px] bg-[#F2F2F2] text-[17px] font-semibold hover:bg-[#0077B5] hover:text-white rounded"
                        //     : "lg:w-[400px] md:w-[365px] w-[350px] h-[45px] bg-[#F2F2F2] text-[17px] font-semibold hover:bg-red-500 hover:text-white rounded"
                        // }
                        className="lg:w-[400px] md:w-[365px] w-[330px] h-[45px]  text-[18px] font-semibold bg-[#00A0DC] bg-opacity-25 hover:bg-[#0077B5] hover:text-white rounded text-[#212427] text-opacity-90"
                      >
                        Send Code
                      </button>
                    </form>
                    {message && <p>{message}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Responsive */}
      <div className="flex justify-center block lg:hidden bg-white mt-6 ">
        <div>
          <div className="mx-[10px]">
            <img
            onClick={handleGoBack}
              className="w-[24px] h-[24px]  cursor-pointer"
              src="/images/RI-icons/left-arrow.png"
              alt=""
            />
            <p className="text-[#212427] text-[24px] text-center font-semibold mb-5">
              Login or Register <br /> As a Recruiter
            </p>
            <div className="">
              <div className="flex gap-2">
                <img
                  className="w-[14px] h-[11px] mt-1"
                  src="/images/RI-icons/tick-mark.png"
                  alt=""
                />
                <p>I am genuinely a Recruiter</p>
              </div>
              <div className="flex gap-2">
                <img
                  className="w-[14px] h-[11px] mt-1"
                  src="/images/RI-icons/tick-mark.png"
                  alt=""
                />
                <p>I am not a Hiring Consultant</p>
              </div>
              <div className="flex gap-2">
                <img
                  className="w-[14px] h-[11px] mt-1"
                  src="/images/RI-icons/tick-mark.png"
                  alt=""
                />
                <p>I am not a Fraud or Scammer</p>
              </div>
            </div>
            <p className="my-4 text-[#212427] text-opacity-70 text-[16px] text-center">
              If you’re registered, you’ll login automatically <br />
              after OTP verification.
            </p>
            <div className="my-4">
            <div className="my-4">
                    <form onSubmit={handleRegisterSubmit}>
                      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute pt-[12px] left-0 flex items-center pl-3 pointer-events-none">
                          <p className="pt-[3px] text-[#212427]">+880 ।</p>
                        </div>
                        <input
                          type="tel"
                          maxLength="10"
                          value={phoneNumber}
                          onChange={handleInputChange}
                          // onBlur={handleBlur }
                          className="w-[330px] h-[52px] text-[#212427] text-opacity-30 text-[16px] border border-1 rounded-lg focus:outline-none    p-[9.5px]  mb-4 pl-[75px] placeholder:text-[#C7C8C9] placeholder:text-[14px] lg:placeholder:text-[16px] md:placeholder:text-[16px]"
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>

                      <div className="flex gap-2 mb-5 items-center">
                        <input
                          className="cursor-pointer mb-4"
                          type="checkbox"
                          checked={agreed}
                          onChange={() => setAgreed(!agreed)}
                        />
                        <p className="text-[14px] ml:2">
                          I agree to the{" "}
                          <Link to="/privacypolicy">
                            <span className="text-[#0077B5]">
                              Bringin’s Privacy Policy
                            </span>
                          </Link>{" "}
                          and{" "}<br/>
                          <Link to="/terms&conditions">
                            <span className="text-[#0077B5]">
                              Terms & Conditions
                            </span>
                          </Link>
                        </p>
                      </div>

                     <div className="flex justify-center">
                     <button
                        type="submit"
                        onClick={handleAgreeClick}
                        // disabled={!agreed}
                        // className={
                        //   agreed
                        //     ? "lg:w-[400px] md:w-[365px] w-[350px] h-[45px] bg-[#F2F2F2] text-[17px] font-semibold hover:bg-[#0077B5] hover:text-white rounded"
                        //     : "lg:w-[400px] md:w-[365px] w-[350px] h-[45px] bg-[#F2F2F2] text-[17px] font-semibold hover:bg-red-500 hover:text-white rounded"
                        // }
                        className="w-[130px] h-[45px] text-[16px] font-semibold bg-[#1C4B81] rounded-[20px] text-white"                      >
                        Send Code
                      </button>
                     </div>
                    </form>
                    {message && <p>{message}</p>}
                  </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiterlogin;
