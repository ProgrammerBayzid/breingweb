import { useState } from "react";
// import { toast } from "react-toastify";
import Frame from '../../assets/login/Frame.svg'
import useTitle from "../../hooks/useTitle";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  useTitle('Verify - Bringin')

  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();

    const code = otp;
    const arrOfNum = code.map((str) => {
      return parseInt(str, 10);
    })
    const digits = arrOfNum;
    const int = digits.reduce((accum, digit) => accum * 10 + digit, 0);
    console.log(int);

    try {
      const response = await fetch("https://admin.bringin.io/api/verifyotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: int,
        }),
      });
      console.log("OTP GET");
      if (response.ok) {
        setMessage("Verify successfully!");
        navigate('/register')

        console.log(response.body);
      } else {
        setMessage("Error Verify. Please try again later.");
      }
    } catch (err) {
      setMessage("Error Verify. Please try again later.");
    }
  }

  return (
    <div>
      <div className=" my-12 px-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="lg:flex md:flex   gap-20 ">
          <div className="hidden lg:block md:block   ">
            <img
             
              alt=""
              src={Frame}
              className="w-[300px] mt-24"
            />
          </div>
          <div className="">
            <div className="lg:w-[513px] lg:h-[361px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-10">
              <h1 className="text-center lg:text-[30px] md:text-[30px] text-[25px] font-semibold mb-">
                Enter verification code
              </h1>
              <div className="mb-5">
               
              </div>
              <div className="mb-5 flex justify-center ">
                <form onSubmit={handleOtpSubmit}>
                <div className="flex justify-center">
                <div className=" flex gap-5">
                    {otp.map((data, index) => {
                      return (
                        <input
                          type="text"
                          name="otp"
                          key={index}
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                          maxLength="1"
                          className="input-bordered input rounded pl-[27px] w-[65px] h-[55px] mb-4 "
                        />
                      );
                    })}
                  </div>
                </div>
                  <div className=" mb-5 text-center">
                    <p className="text-[14px]">Don't get code?</p>
                    <p>
                      <>
                        <span className="text-[#0077B5]">Resend Code</span>
                      </>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="lg:w-[441px] w-[330px] h-[60px] bg-[#F2F2F2] text-[18px] font-semibold hover:bg-[#0077B5] hover:text-white rounded"
                  >
                    Submit
                  </button>
                  {message && <p>{message}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="  block lg:hidden md:hidden ">
          <img
       
            alt=""
            src="/Frame.png"
            className="w-[300px] mt-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Verify;
