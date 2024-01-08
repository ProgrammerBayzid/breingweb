
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Join = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleInputChange = (e) => {
    const inputNumber = e.target.value.replace(/\D/g, "").replace(/^0+/, ""); // Remove non-digit characters
    setPhoneNumber(inputNumber);
  };

  const handleBlur = () => {
    if (phoneNumber.length < 10) {
      console.log("Phone number is too short");
    } else {
      setPhoneNumber(`0${phoneNumber}`);
    }
  };

  

  console.log(phoneNumber);

  // const handleRegisterSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch("https://rsapp.unbolt.co/singup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         number: phoneNumber,
  //         isRecruiter: 1,
  //       }),
  //     });
  //     console.log("OTP GET");
  //     if (response.ok) {
  //       setMessage("OTP sent successfully!");
  //       setPhoneNumber("");
  //       localStorage.setItem("number", JSON.stringify(phoneNumber));
  //       const u = localStorage.getItem("number");
  //       console.log(u);
  //       navigate("/verifications");
  //     } else {
  //       setMessage("Error sending OTP. Please try again later.");
  //     }
  //   } catch (err) {
  //     setMessage("Error sending OTP. Please try again later.");
  //   }
  // };
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
  return (
    

    <div className="relative lg:bg-[url(/src/bgimages/jebg.png)] bg-contain	 bg-center bg-no-repeat">
      <div className="lg:mx-[40px] md:mx-[10px] mx-[10px] lg:mt-[100px] lg:h-[550px]">
        <div className="flex justify-center 	 ">
          <div className=" lg:mt-[20px] md:mt-[50px]">
            <div className="lg:w-[536px] lg:h-[272px] w-[370px] md:w-[470px] rounded rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="py-7">
            <div>
                <h1 className="lg:text-[40px] md:text-[35px] text-[30px] font-semibold text-center">
                  Join Now as Recruiter
                </h1>
                <p className="text-center">
                  Save your time and build the best team.{" "}
                </p>
              </div>
              <div className="flex justify-center mt-[10px]">
                <div className="py-4 mx-auto">
                  <div className="lg:flex">
                    <form
                      onSubmit={handleRegisterSubmit}
                      className="lg:flex md:flex gap-5"
                    >
                      <div className="relative  lg:ml-0 md:ml-0 lg:ml-[20px]">
                        <div className="absolute pt-[15px] text-[12px] left-0 flex items-center pl-3 pointer-events-none">
                          <p className="text-[#C7C8C9]">+880 ।</p>
                        </div>
                        <input
                          type="tel"
                          maxLength="10"
                          value={phoneNumber}
                          onChange={handleInputChange}
                          // onBlur={handleBlur}
                          className="focus:outline-none  placeholder:text-[#C7C8C9] text-[12px] h-[45px]  lg:w-[270px]  md:w-[250px] w-full rounded pl-[60px]  input shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>

                      <div className="lg:mt-0 md:mt-0 mt-4  hidden   lg:block md:block ">
                        <button
                          type="submit"
                          className="  text-[14px] font-medium   w-[130px] h-[45px] bg-[#0077B5] text-white  shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md"
                        >
                          Register Now
                        </button>
                      </div>
                      <div className="lg:mt-0 md:mt-0 mt-4 block lg:hidden md:hidden flex justify-center">
                        <button
                          type="submit"
                          className="  text-[12px] font-medium   w-[100px] h-[35px] bg-[#0077B5] text-white  shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md"
                        >
                          Register Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <p className="text-[12px] text-center mt-[20px]">
                We will send you an OTP, Please enter the OTP to create
                recruiter profile.{" "}
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
