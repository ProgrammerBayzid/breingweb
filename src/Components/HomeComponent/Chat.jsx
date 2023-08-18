import { useState } from "react";

const Chat = () => {
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

  //   console.log(phoneNumber);

  const handleAppLinkSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/app_link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: phoneNumber,
        }),
      });
      console.log("App Link GET");
      if (response.ok) {
        setMessage("Successfully Share the link via SMS");
        setPhoneNumber("");
        localStorage.setItem("number", JSON.stringify(phoneNumber));
        const u = localStorage.getItem("number");
        console.log(u);
        event.target.reset();
      } else {
        setMessage("Error sending App Link. Please try again later.");
      }
    } catch (err) {
      setMessage("Error sending App Link. Please try again later.");
    }
  };

  console.log(message);
  return (
    <div className=" lg:mx-[40px] mx-[10px] md:mx-[10px]">
      <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:h-[460px] rounded rounded-[10px] lg:mt-[90px] md:mt-[90px] mt-[50px] p-2">
        <div className="lg:flex lg:flex-row-reverse lg:justify-around  items-center  ">
          <div>
            <img className="lg:w-[450px] " src="./images/chat.png" alt="" />
          </div>
          <div className=" lg:flex-none md:flex-none flex justify-center">
            <div className="text-left lg:pt-0 md:pt-[30px] pt-[10px] ">
              <h1 className="lg:text-[34px] text-[#023C5B] md:text-[32px] lg:text-start md:text-start text-center  text-[22px] lg:w-[500px] font-bold lg:mt-0 md:mt-0 ">
                Chat Directly with Recruiters & Get Hired Instantly.
              </h1>
              <div className="py-6 ">
                <div className="lg:flex-none md:flex-none flex justify-center lg:justify-start md:justify-start">
                  <div className="lg:flex md:flex gap-5">
                    <form
                      className="lg:ml-0 md:ml-0 mx-[10px] lg:flex md:flex gap-5"
                      onSubmit={handleAppLinkSubmit}
                    >
                      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                      </label>
                      <div className="relative lg:ml-0 md:ml-[25px]">
                        <div className="absolute lg:pt-[15px] md:pt-[15px] pt-[11px] left-0 flex items-center pl-5 pointer-events-none">
                          <p className="text-[#787878]  text-[15px]">+880 ।</p>
                        </div>
                        <input
                          type="tel"
                          maxLength="10"
                          value={phoneNumber}
                          onChange={handleInputChange}
                          // onBlur={handleBlur}
                          className=" placeholder:text-[#C7C8C9] lg:h-[50px] md:h-[50px] h-[40px] placeholder:text-[14px] lg:placeholder:text-[15px] md:placeholder:text-[15px] lg:w-[356px]  md:w-[356px] w-full  rounded px-[75px] focus:outline-none  input shadow-[rgba(0,_0,_0,_0.24)_0px_2.5px_5px]"
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>
                      <div
                       
                        className="hidden lg:block md:block     "
                      >
                        <button
                          type="submit"
                          className="bg-[#0077B5]  text-[15px] font-medium  w-[123px] h-[50px] text-white rounded rounded-[8px] "
                        >
                          Get App
                        </button>
                      </div>

                      <div className=" lg:hiddin md:hidden lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">
                        <button
                          type="submit"
                          className="bg-[#0077B5] block  w-[122px] h-[40px] text-white rounded rounded-[8px] lg:mt-0 md:mt-0 mt-[18px]"
                        >
                          Get App
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {message ? (
                  <p className=" lg:text-start md:text-start text-center text-[14px] lg:w-3/5 md:w-3/5 w- mt-4 font-normals lg:ml-0 md:ml-[25px] mx-[10px] ">
                    {" "}
                    Successfully Share the link via SMS
                  </p>
                ) : (
                  <p className="lg:text-start md:text-start text-center text-[14px] lg:w-3/5 md:w-3/5  mt-4 font-normals lg:ml-0 md:ml-[25px] mx-[10px] ">
                    We will send you a download link via SMS. Click the link to
                    download the app and install now.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
