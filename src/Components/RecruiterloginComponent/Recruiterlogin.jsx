 
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import Frame from '../../assets/login/Frame.svg'
import useTitle from "../../hooks/useTitle";

const Recruiterlogin = () => {
  useTitle('Recruiter login - Bringin')
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState("");
  const handleInputChange = (e) => {
    const inputNumber = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setPhoneNumber(inputNumber);
  };

  const handleBlur = () => {
    if (phoneNumber.length < 10) {
      console.log('Phone number is too short');
    } else {
      setPhoneNumber(`0${phoneNumber}`);
    }
  };

console.log(phoneNumber);
 
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://admin.bringin.io/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber,
          isRecruiter: 0,
        }),
      });
      console.log("OTP GET");
      if (response.ok) {
        setMessage("OTP sent successfully!");
        navigate('/verify');
      } else {
        setMessage("Error sending OTP. Please try again later.");
      
      }
    } catch (err) {
      setMessage("Error sending OTP. Please try again later.");
    }
  };

  console.log(message);

  return (
    <div className=" my-12 p-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="lg:flex md:flex  gap-20 ">
        <div className=" hidden lg:block md:block ">
          <img  alt="" src={Frame} className="w-[300px] mt-24" />
        </div>
        <div className="">
          <div className="lg:w-[513px] lg:h-[361px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:p-10 md:p-10 p-5">
            <h1 className="lg:text-[30px] md:text-[30px] text-[25px] font-semibold mb-5">
              Verify your phone number
            </h1>

            <div className="mb-5">
              <form onSubmit={handleRegisterSubmit}>
                <label
                  
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute pt-[9px] left-0 flex items-center pl-3 pointer-events-none">
                    <p className="pt-[3px] text-[#C7C8C9]">+880 ।</p>
                  </div>
                  <input
                    type="tel"
                    maxLength="10"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="shadow input p-2 w-full mb-4 px-[75px] placeholder:text-[#C7C8C9] placeholder:text-[14px] lg:placeholder:text-[16px] md:placeholder:text-[16px]"
                    placeholder="Enter 10 digit mobile number"
                  />
                </div>

                <div className="flex gap-2 mb-5">
                  <input type="checkbox" />
                  <p className="text-[14px]">
                    I agree to the{" "}
                    <Link href="/privacy-policy">
                      <span className="text-[#0077B5]">
                        Bringin’s Privacy Policy
                      </span>
                    </Link>{" "}
                    and{" "}
                    <Link to="terms-&-condition">
                      <span className="text-[#0077B5]">Terms & Conditions</span>
                    </Link>
                  </p>
                </div>

                <button
                  type="submit"
                  className="lg:w-[441px] md:w-[365px] w-[330px] h-[60px] bg-[#F2F2F2] text-[18px] font-semibold hover:bg-[#0077B5] hover:text-white rounded"
                >
                  Login
                </button>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
        <div className="  block lg:hidden md:hidden ">
          <img  alt="" src="/Frame.png" className="w-[300px] mt-24" />
        </div>
      </div>
    </div>
  );
};

export default Recruiterlogin;
