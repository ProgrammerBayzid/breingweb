import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import AppLinkModal from "../ShereComponent/AppLinkModal";
import "../../App.css";

const Recruiterlogin = () => {
  useTitle("Recruiters login - Bringin");
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleAgreeClick = () => {
    setAgreed(true);
  };

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

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://rsapp.bringin.io/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: phoneNumber,
          isRecruiter: 0,
        }),
      });
      console.log("OTP GET");
      if (response.ok) {
        setMessage("OTP sent successfully!");
        setPhoneNumber("");
        localStorage.setItem("number", JSON.stringify(phoneNumber));
        const u = localStorage.getItem("number");
        // console.log(u);
        navigate("/verify");
      } else {
        setMessage("Error sending OTP. Please try again later.");
      }
    } catch (err) {
      setMessage("Error sending OTP. Please try again later.");
    }
  };

  console.log(message);

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
        <div className="relative bg-[url(/src/bgimages/RecruiterLoginbg.png)] bg-contain	 bg- bg-no-repeat">
          <div className="w-full lg:h-[630px]">
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
                <div className="lg:w-[459px] lg:h-[293px] w-full border border-[2px] rounded rounded-[10px] lg:p-7 md:p-7 p-5">
                  <h1 className="lg:text-[22px] md:text-[20px] text-[18px] font-semibold mb-5">
                    Verify your phone number
                  </h1>

                  <div className="mb-5">
                    <form onSubmit={handleRegisterSubmit}>
                      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
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
                          // onBlur={handleBlur}
                          className="focus:outline-none  border border-[2px] rounded rounded-[7px] input p-2 w-full mb-4 pl-[75px] placeholder:text-[#C7C8C9] placeholder:text-[14px] lg:placeholder:text-[16px] md:placeholder:text-[16px]"
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>

                      <div className="flex gap-2 mb-5">
                        <input className="mb-5" type="checkbox"  checked={agreed}
          onChange={() => setAgreed(!agreed)} />
                        <p className="text-[14px]">
                          I agree to the{" "}
                          <Link to="/privacypolicy">
                            <span className="text-[#0077B5]">
                              Bringin’s Privacy Policy
                            </span>
                          </Link>{" "}
                          and{" "}
                          <Link to="/terms&conditions">
                            <span className="text-[#0077B5]">
                              Terms & Conditions
                            </span>
                          </Link>
                        </p>
                      </div>

                      <button
                        type="submit"
                        onClick={handleAgreeClick}
                        disabled={!agreed}
                        className={ agreed ?"lg:w-[400px] md:w-[365px] w-[330px] h-[45px] bg-[#F2F2F2] text-[18px] font-semibold hover:bg-[#0077B5] hover:text-white rounded" : "lg:w-[400px] md:w-[365px] w-[330px] h-[45px] bg-[#F2F2F2] text-[18px] font-semibold hover:bg-red-500 hover:text-white rounded"}
                      >
                        Login
                      </button>
                    </form>
                    {message && <p>{message}</p>}
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
      <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal>
    </div>
  );
};

export default Recruiterlogin;
