import a from "../../../../public/images/RI-icons/box.png";
import b from "../../../../public/images/RI-icons/left-arrow.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";
const Verify = () => {
  const [message, setMessage] = useState("");
  const [code, setOtp] = useState(new Array(4).fill(""));
  const navigate = useNavigate();
  const nu = localStorage.getItem("number");
  const n = JSON.parse(nu);
  console.log(n);
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...code.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleOtpSubmit = async (event) => {
    const userNumber = localStorage.getItem("number");
    console.log(userNumber);
    const sa = JSON.parse(userNumber);
    const s = JSON.stringify(sa);
    console.log(s);
    console.log(JSON.parse(userNumber));
    event.preventDefault();
    const otp = code;
    const arrOfNum = otp.map((str) => {
      return parseInt(str, 10);
    });
    console.log(arrOfNum);
    const digits = arrOfNum;
    const int = digits.reduce((accum, digit) => accum * 10 + digit, 0);
    console.log(JSON.stringify(int));
    const data = {
      number: JSON.parse(userNumber),
      otp: JSON.stringify(int),
      isrecruiter: 1,
    };
    console.log(data);

    try {
      const response = await fetch("https://rsapp.unbolt.co/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.userData.other.profile_verify !== false) {
          navigate("/dashboard/recruiter");
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("recruterID", JSON.stringify(data.userData._id));
          localStorage.setItem("recruterData", JSON.stringify(data.userData));
          setMessage("Verify successfully!");
        } else if (
          data.userData.firstname === null ||
          data.userData.lastname === null ||
          data.userData.designation === null ||
          data.userData.email === null
        ) {
          navigate("/registration-recruiters");
          console.log(data);
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("recruterID", JSON.stringify(data.userData._id));
          localStorage.setItem("recruterData", JSON.stringify(data.userData));
          setMessage("Verify successfully!");
        } else if (data.userData.companyname === null) {
          navigate("/register-your-company");
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("recruterID", JSON.stringify(data.userData._id));
          localStorage.setItem("recruterData", JSON.stringify(data.userData));
          setMessage("Verify successfully!");
          console.log(data);
        } else if (
          data.userData.companyname !== null &&
          data.userData.other.profile_verify === false
        ) {
          navigate("/recruiter-identity-verification");
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("recruterID", JSON.stringify(data.userData._id));
          localStorage.setItem("recruterData", JSON.stringify(data.userData));
          setMessage("Verify successfully!");
        } else {
          // Number doesn't exist, redirect to registration or show an error
          localStorage.setItem("token", JSON.stringify(data.token));
          setMessage("Verify successfully!");
          navigate("/registration-recruiters");
          console.log(data);

          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("recruterID", JSON.stringify(data.userData._id));
          localStorage.setItem("recruterData", JSON.stringify(data.userData));
        }
      } else {
        setMessage("Error Verify. Please try again later.");
      }
    } catch (err) {
      setMessage("Error Verify. Please try again later.");
    }
  };

  const [cmessage, setcMessage] = useState("");

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://rsapp.unbolt.co/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: n,
          isRecruiter: 0,
        }),
      });
      // .then((res) => res.json())
      // .then((result) => {
      //   console.log(result);
      //   setMessage("OTP sent successfully!");
      //   navigate('/verify');
      //   localStorage.setItem("number", JSON.stringify(phoneNumber));
      //   const u = localStorage.getItem("number");
      //   console.log(u);
      // });
      console.log("OTP GET");
      if (response.ok) {
        setcMessage("OTP Resend successfully!");
        setCounter(59);
        localStorage.setItem("number", JSON.stringify(phoneNumber));
        const u = localStorage.getItem("number");
        console.log(u);
      } else {
        setMessage("Error sending OTP. Please try again later.");
      }
    } catch (err) {
      setMessage("Error sending OTP. Please try again later.");
    }
  };

  console.log(message);

  const [counter, setCounter] = useState(59);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="font-inter">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Verify as a Recruiter | Unbolt Chat Based Hiring App </title>
        <meta name="description" content="" />
        <link rel="canonical" href="http://unbolt.co/verifications" />
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
          <div>
            <div className="lg:h-[550px]">
              <div></div>
              <div className="lg:flex md:flex  justify-center  ">
                <div className="pt-7 pb-20">
                  <div className="lg:w-[479px] bg-white lg:h-[345px] border bprder-[3px] rounded rounded-[10px] p-10">
                    <h1 className="lg:text-[22px] md:text-[20px] text-[17px] text-opacity-90 text-[#212427] font-inter font-semibold mb-2">
                      Enter verification code
                    </h1>
                    <p className="text-[14px] text-[#212427] text-opacity-80 font-normal font-inter">
                      A 4-digit code has been sent to +88{n}, Enter the code
                      within {counter} seconds.
                    </p>
                    <div className="mb-5"></div>
                    <div className="mb-5 flex justify-center ">
                      <form onSubmit={handleOtpSubmit}>
                        <div className="flex justify-center">
                          <div className=" flex gap-5">
                            {code.map((data, index) => {
                              return (
                                <input
                                  type="text"
                                  name="otp"
                                  key={index}
                                  value={data}
                                  onChange={(e) =>
                                    handleChange(e.target, index)
                                  }
                                  onFocus={(e) => e.target.select()}
                                  maxLength="1"
                                  className="focus:outline-none  border border-[1px] border-[#212427] border-opacity-40 rounded pl-[25px] w-[55px] h-[45px] mb-4 "
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div className=" mb-5 ">
                          <p className="text-[14px] text-[#212427] text-opacity-90 font-semibold">
                            Don't get code?
                          </p>
                          <p>
                            <>
                              <span
                                onClick={handleRegisterSubmit}
                                className="text-[#0077B5] text-[14px] cursor-pointer font-semibold"
                              >
                                Resend Code
                              </span>
                            </>
                          </p>
                          <p>{cmessage}</p>
                        </div>
                        <button
                          type="submit"
                          className="lg:w-[400px] w-[330px] h-[45px] bg-[#00A0DC] bg-opacity-40 text-[18px] font-medium hover:bg-[#0077B5] hover:text-white rounded"
                        >
                          Submit
                        </button>
                        {/* {message && <p>{message}</p>} */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive */}

      <div className="flex justify-center block lg:hidden bg-white">
        <div>
          <div className="mx-[10px] w-[360px]">
            <img
              className="w-[24px] h-[24px] -ms-10 cursor-pointer"
              src={b}
              alt=""
            />
            <div className="">
              <p className="text-[#212427] text-[26px] text-center font-semibold">
                Verify Your Phone Number
              </p>
              <p className="text-[#000000] text-opacity-70 text-[16px] text-center">
                Code is sent to 01756748675
              </p>

              {/* <p className="my-4 text-[#212427] text-[16px] text-center">
                Didn't receive code?
              </p> */}

              {/* conditonally while code not received */}

              <p className="my-4 text-[#00A0DC] text-[16px] text-center">
                Didn't receive code?
              </p>
              <div className="flex gap-5 justify-center">
                <img className="w-[59px] h-[47px]" src={a} alt="" />
                <img className="w-[59px] h-[47px]" src={a} alt="" />
                <img className="w-[59px] h-[47px]" src={a} alt="" />
                <img className="w-[59px] h-[47px]" src={a} alt="" />
              </div>
              <p className="mt-4 mb-2 text-[#212427] text-opacity-60 text-[16px] text-center">
                Enter the 4-digit code
              </p>

              {/* <p className="mb-4 text-[#212426] text-opacity-60 text-[16px] text-center">
                Resend Code
                <span className="text-[#212426]"> 60s</span>
              </p> */}

              {/* conditonally while code not received */}

              <p className="mb-4 text-[#00A0DC] text-[16px] text-center">
                Resend Code
              </p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-[140px] h-[48px] text-[16px] font-semibold bg-[#1C4B81] rounded-3xl text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
