import { useState } from "react";

const RecruiterHero = () => {
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
    <div className="relative bg-[url(/src/bgimages/rbg.png)] bg-auto	 bg-center-top bg-no-repeat">
      <div className="lg:h-[520px]">
        <div className="	 lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:mx-[40px] md:mx-[10px] mx-[10px] ">
          <div className=" lg:mt-[60px] md:mt-[40px]  h-[250px] lg:ml-0 md:ml-0 ml-16">
            <img
              className="  lg:w-[500px] lg:h-[500px] w-[250px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
              src="./images/rh.png"
              alt=""
            />
          </div>
          <div className="lg:text-start md:text-start text-center lg:w-2/3 md:w-2/3 lg:mt-[60px] md:mt-[40px] mt-[40px] py-2">
            <h1 className="lg:text-[37px] text-[22px] md:text-[24px] font-bold text-[#023C5B]">
              Bringin is an app based hiring platform aims to introduce the
              concept of direct hiring in Bangladesh.
            </h1>
            <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
              Introducing the pioneering chat-based instant hiring app tailored
              for Recruiters, HR Leaders, Business Owners, CTOs & CEOs. This
              innovative platform enables recruiters to engage in direct
              conversations with job seekers, seamlessly conduct in-app video
              call interviews, and expedite the hiring process with instant
              decisions.
            </p>
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
                    <div className="relative lg:ml-0 md:ml-[0px]">
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
                    <div className="hidden lg:block md:block     ">
                      <button
                        type="submit"
                        className="bg-[#0077B5]  text-[15px] font-medium  w-[143px] h-[50px] text-white rounded rounded-[8px] "
                      >
                        Register Now{" "}
                      </button>
                    </div>

                    <div className=" lg:hiddin md:hidden lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">
                      <button
                        type="submit"
                        className="bg-[#0077B5] block  w-[142px] h-[40px] text-white rounded rounded-[8px] lg:mt-0 md:mt-0 mt-[18px]"
                      >
                        Register Now{" "}
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
                <p className="lg:text-start md:text-start text-center text-[14px] lg:w-3/5 md:w-3/5  mt-4 font-normals lg:ml-0 md:ml-[25px] mx-[10px] "></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterHero;
