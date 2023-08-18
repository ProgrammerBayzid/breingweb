import { useState } from "react";
// import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import AppLinkModal from "../AppLinkModal";
const Verify = () => {
  useTitle("Verify - Bringin");

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
      isrecruiter: 0,
    };
    console.log(data);
    try {
      const response = await fetch("https://rsapp.bringin.io/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          setMessage("Verify successfully!");
          navigate("/register");
          console.log(result);
          localStorage.setItem("token", JSON.stringify(result.token));
          // const u = localStorage.getItem("user");
          // console.log(u);
        });

      // console.log("OTP GET");
      // if (response.ok) {
      //   setMessage("Verify successfully!");
      //   navigate("/register");
      //   console.log(response);

      //   localStorage.setItem("user", JSON.stringify());
      //   const u = localStorage.getItem("user");
      //   console.log(u);

      // } else  if (response.status === 400) {
      //   setMessage("Error Verify. Please try again later.");
      //   console.log(response);
      // }
    } catch (err) {
      setMessage("Error Verify. Please try again later.");
    }
  };

  const [cmessage, setcMessage] = useState("");

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://rsapp.bringin.io/singup", {
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
        // console.log(u);
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

  const [openModal, closeModal] = useState(false);

  const nabnar = (
    <div className="flex gap-[80px] App">
      <div>
        <div className="flex "></div>
      </div>

      <div>
        <div className="flex gap-[21px]">
          <p>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-bold text-[#031C44] border border-[#57849c] rounded rounded-[10px] py-2 px-3 " +
                  (!isActive
                    ? "text-[18px] font-bold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[10px] hover:py-2 hover:px-3 border border-white rounded rounded-[10px] py-2 px-3"
                    : "text-[18px] font-bold text-[#031C44] border border-[#57849c] rounded rounded-[10px] py-2 px-3 ")
                );
              }}
            >
              Home
            </NavLink>
          </p>
          <button className=" ">
            <NavLink
              to="/recruiterslogin"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-bold text-[#031C44] border border-[#57849c] rounded rounded-[10px] py-2 px-3 " +
                  (!isActive
                    ? "text-[18px] font-bold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[10px] hover:py-2 hover:px-3 border border-white rounded rounded-[10px] py-2 px-3"
                    : "text-[18px] font-bold text-[#031C44] border border-[#57849c] rounded rounded-[10px] py-2 px-3 ")
                );
              }}
            >
              Recruiter Login
            </NavLink>
          </button>
          <button onClick={() => closeModal(true)} className="">
            <NavLink className="btn border border-[#57849c] rounded rounded-[5px]  bg-[#0077B5] py-2 px-3 text-[18px] font-bold text-white">
              Download App
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );

  const mnavbar = (
    <ul className="flex items-center">
      <li className="">
        <Menu as="div" className="relative inline-block ">
          <div>
            <Menu.Button className="inline-flex  ">
              <img
                alt="bringin image"
                src="/images/Sidebar.svg"
                className="w-[28px] h-[17px] cursor-pointer"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute z-50 right-[-7px] mt-4 w-[410px]  rounded-xl  shadow-lg bg-white border border-white">
              <div className="  my-2">
                <div className="flex flex-col gap-1 ">
                  <div className="w-[410px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/"
                        className={({ isActive }) => {
                          return (
                            "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[10px] " +
                            (!isActive
                              ? " text-black text-[18px] border-white border py-[4px] px-3 hover:border-[#57849c]  hover:border hover:py-[4px]  hover:px-3  hover:rounded-[10px]"
                              : "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[10px]")
                          );
                        }}
                      >
                        <p>Home</p>
                      </NavLink>
                    </Menu.Item>
                  </div>

                  <div className="w-[410px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/recruiterslogin"
                        className={({ isActive }) => {
                          return (
                            "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[10px] " +
                            (!isActive
                              ? " text-black text-[18px] border-white border py-[4px] px-3 hover:border-[#57849c]  hover:border hover:py-[4px]  hover:px-3  hover:rounded-[10px]"
                              : "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[10px]")
                          );
                        }}
                      >
                        Recruiter Login
                      </NavLink>
                    </Menu.Item>
                  </div>
                  <div className="w-[410px] mb-5 flex justify-center">
                    <Menu.Item>
                      <div>
                        <label
                          onClick={() => closeModal(true)}
                          className="py-[7px]   px-3  text-white  text-[18px]  border-[#57849c] bg-[#0077B5]  rounded rounded-[10px]  cursor-pointer"
                        >
                          {" "}
                          Download App
                        </label>
                      </div>
                    </Menu.Item>
                  </div>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    </ul>
  );

  const tnavbar = (
    <ul className="flex items-center">
      <li className="">
        <Menu as="div" className="relative inline-block ">
          <div>
            <Menu.Button className="inline-flex  ">
              <img
                alt="bringin image"
                src="/images/Sidebar.svg"
                className="w-[28px] h-[17px] cursor-pointer mx-3"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-50 absolute right-[-8px] mt-2 w-[830px]  rounded-xl  shadow-lg bg-white border border-white	">
              <div className="py-1 text-center my-4">
                <div className="flex flex-col gap-3 ">
                  <div className="w-[830px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/"
                        className={({ isActive }) => {
                          return (
                            "text-black text-[18px]  border-[#57849c] border  py-[5px] px-3   py-[5px]  px-3 rounded-[10px] " +
                            (!isActive
                              ? "text-black text-[18px]  hover:border-[#57849c] border border-white py-[5px] px-3   hover:border hover:py-[5px]  hover:px-3  hover:rounded-[10px] "
                              : "text-black text-[18px]  border-[#57849c] border  py-[5px] px-3   py-[5px]  px-3 rounded-[10px] ")
                          );
                        }}
                      >
                        <p className="">Home</p>
                      </NavLink>
                    </Menu.Item>
                  </div>

                  <div className="w-[830px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/recruiterslogin"
                        className={({ isActive }) => {
                          return (
                            "text-black text-[18px]  border-[#57849c] border  py-[5px] px-3   py-[5px]  px-3 rounded-[10px] " +
                            (!isActive
                              ? "text-black text-[18px]  hover:border-[#57849c] border border-white py-[5px] px-3   hover:border hover:py-[5px]  hover:px-3  hover:rounded-[10px] "
                              : "text-black text-[18px]  border-[#57849c] border  py-[5px] px-3   py-[5px]  px-3 rounded-[10px] ")
                          );
                        }}
                      >
                        Recruiter Login
                      </NavLink>
                    </Menu.Item>
                  </div>
                  <div className="w-[830px] flex justify-center">
                    <Menu.Item>
                      <div>
                        <label
                          onClick={() => closeModal(true)}
                          className="py-[10px]  px-3 text-white  text-[18px]  border-[#0077B5] bg-[#0077B5]  rounded rounded-[10px] mx-3 cursor-pointer"
                        >
                          {" "}
                          Download App
                        </label>
                      </div>
                    </Menu.Item>
                  </div>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    </ul>
  );
  return (
    <div>
      <div>
        <div>
          <div className="relative lg:bg-[url(/src/bgimages/RecruiterLoginbg.png)] bg-contain	 bg- bg-no-repeat">
            <div className="w-full lg:h-[630px] ">
              <div>
                {/* pc navber */}
                <div className="lg:block md:hidden hidden">
                  <div className=" mx-[40px]">
                    <div className="flex h-[95px] justify-between   items-center  ">
                      <div>
                        <NavLink to="/">
                          <img src="/images/navlogo.svg" alt="" />
                        </NavLink>
                      </div>
                      <div>{nabnar}</div>
                    </div>
                  </div>
                </div>

                {/* tab navbar */}
                <div className="hidden md:block lg:hidden">
                  <div className="  mx-[10px] ">
                    <div className="flex h-[95px] items-center justify-between">
                      <div>
                        <NavLink to="/">
                          <img
                            className="w-[200px]"
                            src="/images/navlogo.svg"
                            alt=""
                          />
                        </NavLink>
                      </div>
                      <div>{tnavbar}</div>
                    </div>
                  </div>
                </div>

                {/* mobile navbar */}

                <div className=" block lg:hidden md:hidden">
                  <div className="mx-[10px]">
                    <div className="flex h-[55px] items-center justify-between">
                      <div>
                        <NavLink to="/">
                          <img
                            className="w-[150px]"
                            src="/images/navlogo.svg"
                            alt=""
                          />
                        </NavLink>
                      </div>
                      <div>{mnavbar}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex  justify-around  mt-[40px]">
              <div className=" hidden lg:block md:block ">
                <img
                  alt="bringin image"
                  src="/images/Photo.png"
                  className="w-[360px] h-[444px] "
                />
              </div>
                <div className="">
                  <div className="lg:w-[479px] lg:h-[329px] border bprder-[3px] rounded rounded-[10px] p-10">
                    <h1 className="lg:text-[22px] md:text-[20px] text-[18px] font-semibold mb-2">
                      Enter verification code
                    </h1>
                    <p className="text-[14px]">
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
                                  className="focus:outline-none  border bprder-[3px] rounded pl-[27px] w-[55px] h-[45px] mb-4 "
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div className=" mb-5 ">
                          <p className="text-[14px]">Don't get code?</p>
                          <p>
                            <>
                              <span
                                onClick={handleRegisterSubmit}
                                className="text-[#0077B5] text-[14px] cursor-pointer"
                              >
                                Resend Code
                              </span>
                            </>
                          </p>
                          <p>{cmessage}</p>
                        </div>
                        <button
                          type="submit"
                          className="lg:w-[400px] w-[330px] h-[45px] bg-[#F2F2F2] text-[18px] font-semibold hover:bg-[#0077B5] hover:text-white rounded"
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
        <div className="flex justify-center my-5">
        <div className="lg:text-start text-center">
          <div className="lg:flex lg:flex-row-reverse  md:flex md:flex-row-reverse gap-x-3 items-center">
            <div>
              <div className="lg:flex gap-x-3 items-center">
                <Link
                  to="/privacypolicy"
                  className="link link-hover text-[18px] text-[#005085] "
                >
                  <p className="lg:mb-0 md:mb-0 mb-2">Privacy policy</p>
                </Link>
                <img
                  className="w-[2px] h-[20px] hidden lg:block md:hidden"
                  alt="bringin image"
                  src="/images/liner.png"
                />
                <Link
                  to="/terms&conditions"
                  className="link link-hover text-[18px] text-[#005085] "
                >
                  <p className="lg:mb-0 md:mb-0 mb-2">Terms & conditions</p>
                </Link>
                <img
                  className="w-[2px] h-[20px] hidden lg:block md:hidden"
                  alt="bringin image"
                  src="/images/liner.png"
                />
                <Link
                  to="/terms&conditions"
                  className="link link-hover text-[18px] text-[#005085] "
                >
                  <p className="lg:mb-0 md:mb-0 mb-2">
                    Cancellation & refund policy
                  </p>
                </Link>
              </div>
            </div>
            <img
              className="w-[2px] h-[20px] hidden lg:block md:hidden"
              alt="bringin image"
              src="/images/liner.png"
            />
            <p className="text-[16px] font-medium">
              © Copyright Bringin Technologies Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
        <AppLinkModal
          visible={openModal}
          closeModal={closeModal}
        ></AppLinkModal>
      </div>
    </div>
  );
};

export default Verify;
