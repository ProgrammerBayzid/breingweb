import h1 from '../../../assets/enterprices/Group 12174.svg'
import h2 from '../../../assets/enterprices/Group 12175.svg'
import h3 from '../../../assets/enterprices/Group 12176.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Join = () => {
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
        navigate('/verify')
      } else {
        setMessage("Error sending OTP. Please try again later.");
      
      }
    } catch (err) {
      setMessage("Error sending OTP. Please try again later.");
    }
  };

  console.log(message);
  return (
    <div>
      <div className=" lg:h-[378px] shadow-[0_5px_20px_rgb(0,0,0,0.10)] pt-20">
        <div className=" flex justify-center">
          <div className=" ">
            <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold text-center">Join Now as Recruiter</h1>
            <h1 className="py-1 text-center text-[20px]">
            Build your team instantly & start with right away.
                        </h1>

            <div className="py-4 mx-auto">
              <div className="flex">
                <form onSubmit={handleRegisterSubmit} className="lg:flex md:flex gap-5">
                <div className="relative  lg:ml-0 md:ml-0 ml-[20px]">
                        <div className="absolute pt-[16px] text-[15px] left-0 flex items-center pl-3 pointer-events-none">
                          <p className="text-[#C7C8C9]">+880  ।</p>
                        </div>
                        <input
                         type="tel"
                         maxLength="10"
                         value={phoneNumber}
                         onChange={handleInputChange}
                         onBlur={handleBlur}
                          className="placeholder:text-[#C7C8C9] text-[15px] h-[55px]  lg:w-[356px]  md:w-[356px] w-full rounded px-[75px]  input shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                          placeholder="Enter 10 digit mobile number"
                          
                        />
                      </div>

                  <div className="lg:mt-0 md:mt-0 mt-4  ">
                    <button type="submit" className="  text-[18px] font-medium   w-[130px] h-[55px] bg-white hover:bg-[#0077B5] hover:text-white  shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md">Send Code</button>
                  </div>
                </form>
              </div>
              <p className="text-[12px] w-2/3 mt-2  lg:ml-0 md:ml-0 ml-[50px]">
              We will send you an OTP, Please enter the OTP to create recruiter profile.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="my-20 ">
          <div>
            <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold text-center">
              {" "}
              What Bringin Enterprise Hiring Offer?
            </h1>
          </div>
          <div className="flex justify-around  mt-20 lg:px-16 md:px-16">
            <div>
              <img alt="" src={h1} className="lg:w-[200px] lg:w-[200px] w-[70px] "/>
              <p className="lg:text-[26px] md:text-[26px] text-[15px] font-semibold lg:ml-[4px] md:ml-[4px] ml-0">Cost - Effective</p>
            </div>
            <div>
              <img alt=""  src={h2} className="lg:w-[200px] lg:w-[200px] w-[70px]"/>
              <p className="lg:text-[26px] md:text-[26px] text-[15px] font-semibold lg:ml-[20px] md:ml-[20px] ml-0">Time Saving</p>
            </div>
            <div>
              <img alt=""  src={h3} className="lg:w-[200px] lg:w-[200px] w-[70px] "/>
              <p className="lg:text-[26px] md:text-[26px] text-[15px] font-semibold lg:ml-[30px] md:ml-[30px] ml-0">Systematic</p>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <button className="w-[200px] h-[60px] text-[25px] font-medium cursor-pointer bg-[#0077B5] rounded text-white">Join now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
