import { useState } from "react";
import sa from "../../assets/modal/Group 11827.png";
import a from "../../assets/modal/ai.svg";

const AppLinkModal = ({visible, closeModal}) => {
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
      } else {
        setMessage("Error sending App Link. Please try again later.");
      }
    } catch (err) {
      setMessage("Error sending App Link. Please try again later.");
    }
  };

  console.log(message);


if(!visible) return null

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-40 backdrop-blur-[10px]">
      <div  className="">
        <div className=" w-full ">
          <div className=" lg:w-[850px] bg-white lg:h-[560px] md:w-[750px] relative md:h-[550px] w-[330px] h-[450px] flex justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:p-0 md:p-0 p-2">
          <label onClick={()=>closeModal(false)}  className="cursor-pointer text-[25px] absolute right-4 top-2 text-black">
              ✕
            </label>
            <div>
           
            <div className=" lg:mt-0 md:mt-0 mt-5">
            
              <div className="flex justify-center">
                <div>
                  <form
                    className="lg:flex md:flex gap-5"
                    onSubmit={handleAppLinkSubmit}
                  >
                    <div>
                      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute pt-[17px] text-[15px] left-0 flex items-center pl-3 pointer-events-none text-[#C7C8C9]">
                          <p className="">+880 ।</p>
                        </div>
                        <input
                          type="tel"
                          maxLength="10"
                          value={phoneNumber}
                          onChange={handleInputChange}
                          // onBlur={handleBlur}
                          className=" focus:outline-none  rounded  placeholder:text-[#C7C8C9] h-[55px]  lg:w-[356px]  md:w-[356px] w-[300px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[75px] placeholder:text-[15px] lg:placeholder:text-[15px] md:placeholder:text-[16px]"
                          placeholder="Enter 10 digit mobile number"
                          required
                        />
                      </div>
                      <p className="mt-3">{message}</p>
                    </div>
                    <div className="lg:ml-0 md:ml-0 ml-[90px] lg:mt-0 md:mt-0 mt-[20px]">
                      <button
                        type="submit"
                        className="lg:w-[152px] md:h-[53px] md:w-[152px] md:h-[53px] w-[120px] h-[40px] bg-[#0077B5] text-white  shadow-md rounded-md "
                      >
                        <p className=" text-center lg:text-[20px] md:lg:text-[20px] text-[14px] font-medium  py-[11px] ">
                          Get The Link
                        </p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <h1 className="text-center lg:mt-7 lg:text-[25px] text-[15px] font-medium">or</h1>
              <h1 className="text-center lg:mt-7 lg:text-[25px] text-[15px] font-medium">
                Scan the QR code below to download the
                <span className="text-[#0077B5]"> bringin app</span>
              </h1>

              <div className="flex  justify-center mt-7">
                <div className="flex gap-7">
                  <img className="lg:w-[200px] md:w-[200px] w-[170px] color-red shadow-xl" src={sa} />
                  <img className=" mt-24 color-red" src={a} />
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

export default AppLinkModal;
