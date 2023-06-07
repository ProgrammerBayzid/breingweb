 import { useState } from 'react';
import r from '../../../assets/recruiters/Group 12091.svg'
import { useNavigate } from 'react-router-dom';
const Hero = () => {



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
    <div className="flex justify-center">
      <div>
        <div>
          <div className="hero  py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
              
              
               alt=""
              
              src={r} className=" lg:mb-24 md:mb-2 lg:w-[390px] lg:h-[473px] md:w-[350px] md:h-[473px] w-[320px] h-[340px]"></img>
              <div className="">
                <div className="lg:text-start md:text-center text-center">
                  <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold ">
                    The First Chat-Based Instant Hiring App for Recruiters, HR
                    Leaders and Business Owners in Bangladesh.
                  </h1>
                  <p className="text-[20px] mt-5">
                    Our Advanced Technology Simplifies Recruitment, Providing
                    Efficient and Effective Results. Join our Verified Community
                    of Recruiters and Candidatess for Instant Hiring Success.
                    Say Goodbye to Traditional Hiring and Hello to <span className="text-[#0077B5]">Bringin</span>.
                  </p>
                </div>
                <div className="lg:flex-none md:flex-none flex lg:justify-start md:justify-center justify-center">
                  <div className="flex mt-10">
                    <div className="">
                      <form>
                        <div className="lg:flex md:flex gap-5">

                          <div >
                            <label
                              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                              Search
                            </label>
                            <div className="relative">
                              <div className="absolute text-[15px] pt-[17px] left-0 flex items-center pl-3 pointer-events-none text-[#C7C8C9]">
                                <p className="">+880 ।</p>
                              </div>
                              <input
                               type="tel"
                               maxLength="10"
                               value={phoneNumber}
                               onChange={handleInputChange}
                               onBlur={handleBlur}
                                className="rounded placeholder:text-[#C7C8C9] placeholder:text-[15px] h-[55px]  lg:w-[356px]  md:w-[356px] w-full  px-[75px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] input "
                                placeholder="Enter 10 digit mobile number"
                                required
                              />
                            </div>
                          </div>
                          <button type="submit" className="text-white lg:text-[20px] md:text-[18px] text-[16px] font-semibold  bg-[#0077B5] lg:mt-0 md:mt-0 mt-7 lg:ml-0 md:ml-0 ml-[100px] lg:w-[158px] md:w-[150px] lg:h-[55px] md:h-[50px] w-[120px] h-[40px] rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">

                            Register Now

                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='lg:flex-none md:flex-none flex lg:justify-start md:justify-center justify-center'>
                  <div className="flex lg:gap-24 md:gap-20 gap-7 mt-10">
                    <div className="">
                      <h1 className=" text-[25px] text-[#0077B5] lg:ml-12 md:ml-10 ml-5">10K+</h1>
                      <p className="lg:text-[20px] md:text-[18px] text-[16px]">Verified Recruiters</p>
                    </div>

                    <div>
                      <h1 className=" text-[25px]  text-[#0077B5] lg:ml-10 md:ml-10 ml-5">80K+</h1>
                      <p className="lg:text-[20px] md:text-[18px] text-[16px]" >Verified Seeker</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
