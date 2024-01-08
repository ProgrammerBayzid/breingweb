import { NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import "@fontsource/dm-sans"; // Defaults to weight 400

import App from "../../App.css";
import useAuth from "../RecruterPrivetRoute/Context/useAuth";
const Header = ({ closeModal }) => {
  const recruter = useAuth();

  console.log(recruter);
  const nabnar = (
    <div className="flex gap-[80px] App items-center">
      <div>
        <div className="flex gap-x-[30px] ">
          <p>
            <NavLink
              to="/in"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-medium text-[#FFFFFF] " +
                  (!isActive
                    ? " text-[18px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                    : "text-[18px] font-medium text-[#FFFFFF]  ")
                );
              }}
            >
              Home
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/recruiters"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-medium text-[#FFFFFF] " +
                  (!isActive
                    ? " text-[18px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                    : "text-[18px] font-medium text-[#FFFFFF]  ")
                );
              }}
            >
              Recruiters
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/job-seekers"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-medium text-[#FFFFFF] " +
                  (!isActive
                    ? " text-[18px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                    : "text-[18px] font-medium text-[#FFFFFF]  ")
                );
              }}
            >
              Job seekers
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/about-us"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-medium text-[#FFFFFF] " +
                  (!isActive
                    ? " text-[18px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                    : "text-[18px] font-medium text-[#FFFFFF]  ")
                );
              }}
            >
              About us
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/blog"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-medium text-[#FFFFFF] " +
                  (!isActive
                    ? " text-[18px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                    : "text-[18px] font-medium text-[#FFFFFF]  ")
                );
              }}
            >
              Blogs
            </NavLink>
          </p>
        
          {recruter.recruter === null ? (
            <p>
              <NavLink
                to="/recruiters-login"
                className={({ isActive }) => {
                  return (
                    "text-[18px] font-medium text-[#FFFFFF] " +
                    (!isActive
                      ? " text-[18px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                      : "text-[18px] font-medium text-[#FFFFFF]  ")
                  );
                }}
              >
                Recruiter Login
              </NavLink>
            </p>
          ) : (
            <>
              {recruter?.recruter?.other?.profile_verify_type === 1 ? (
                <button className=" ">
                  <NavLink
                    to="/dashboard/recruiter/"
                    className={({ isActive }) => {
                      return (
                        "text-[18px] font-medium text-[#FFFFFF] " +
                        (!isActive
                          ? " text-[18px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                          : "text-[18px] font-medium text-[#FFFFFF]  ")
                      );
                    }}
                  >
                    Me
                  </NavLink>
                </button>
              ) : (
                <button className=" ">
                  <NavLink
                    to="/verify-company"
                    className={({ isActive }) => {
                      return (
                        "text-[18px] font-medium text-[#FFFFFF] " +
                        (!isActive
                          ? " text-[18px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                          : "text-[18px] font-medium text-[#FFFFFF]  ")
                      );
                    }}
                  >
                    Me
                  </NavLink>
                </button>
              )}
            </>
          )}

          <button onClick={() => closeModal(true)} className="">
            <p className=" text-[18px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF] ">
              Download App
            </p>
          </button>
        </div>
      </div>
    </div>
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const clos = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#1C4B81] App lg:h-[75px] h-[42px]">
      <div
        id=""
        className="App   fixed pulsew	bottom-7 right-5 lg:bottom-7 lg:right-10 z-50 flex items-center justify-center"
      >
        <a
          href="https://wa.me/+8801756175141?text=Hi..."
          target="_blank"
          id=""
          className=""
        >
          <img src="/images/whatsapp-logo.png" className="w-[60px] h-[60px]" />
        </a>
      </div>
      {/* pc navber */}
      <div className="lg:block md:hidden hidden ">
        <div className=" mx-[40px]">
          <div className="flex h-[80px] justify-between   items-center  ">
            <div>
              <NavLink to="/">
                <img
                  loading="lazy"
                  src="/images/navlogo.svg"
                  className="w-[86px] h-[36px]"
                  alt=""
                />
              </NavLink>
            </div>
            <div>{nabnar}</div>
          </div>
        </div>
      </div>

      {/* tab navbar */}
      <div className=" hidden lg:hidden md:block relative">
        <div className="mx-[10px] ">
          <div className="flex h-[55px] items-center justify-between ">
            <div>
              <NavLink to="/">
                <img
                  loading="lazy"
                  className="w-[150px] h-[50px]"
                  src="/images/navlogo.svg"
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              <button
                onClick={toggleNavbar}
                className="text-black focus:outline-none"
              >
                <svg
                  className="h-9 w-9 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5.5A.75.75 0 013.75 12h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12.75zM3.75 18a.75.75 0 100 1.5h16.5a.75.75 0 100-1.5H3.75z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[230px]  rounded-b-[15px]  mt-  z-50 bg-white absolute ${
            isOpen
              ? "block  opacity-100 scale-100"
              : "hidden opacity-0 scale-55 transform"
          }`}
        >
          <div>
            <div className="text-center gap-x-1 ">
              <p className="mt-1">
                <NavLink
                  to="/in"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[12px] font-bold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 " +
                      (!isActive
                        ? "text-[12px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px] hover:py-1 hover:px-2 border border-white rounded rounded-[7px] py-1 px-2 transition-all duration-300"
                        : "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 transition-all duration-300 ")
                    );
                  }}
                >
                  Home
                </NavLink>
              </p>
              <p className="mt-1">
                <NavLink
                  to="/recruiters"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 " +
                      (!isActive
                        ? "text-[12px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px] hover:py-1 hover:px-2 border border-white rounded rounded-[7px] py-1 px-2"
                        : "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 ")
                    );
                  }}
                >
                  Recruiters
                </NavLink>
              </p>
              <p className="mt-1">
                <NavLink
                  to="/job-seekers"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 mt-2" +
                      (!isActive
                        ? "text-[12px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px] mt-2 hover:py-1 hover:px-2 border border-white rounded rounded-[7px] py-1 px-2"
                        : "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 mt-2")
                    );
                  }}
                >
                  Job seekers
                </NavLink>
              </p>
              <p className="mt-1">
                <NavLink
                  to="/about-us"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 " +
                      (!isActive
                        ? "text-[12px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px]  hover:py-1 hover:px-2 border border-white rounded rounded-[7px] py-1 px-2"
                        : "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 ")
                    );
                  }}
                >
                  About us
                </NavLink>
              </p>
              <p className="mt-1">
                <NavLink
                  to="/blog"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 " +
                      (!isActive
                        ? "text-[12px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px]  hover:py-1 hover:px-2 border border-white rounded rounded-[7px] py-1 px-2"
                        : "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 ")
                    );
                  }}
                >
                  Blogs
                </NavLink>
              </p>
            </div>
            <div>
              <div className=" text-center">
                {recruter.recruter !== null ? (
                  <>
                    {recruter?.recruter?.other?.profile_verify_type === 1 ? (
                      <button className="mt-1">
                        <NavLink
                          to="/dashboard/recruiter/"
                          onClick={clos}
                          className={({ isActive }) => {
                            return (
                              "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 " +
                              (!isActive
                                ? "text-[12px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px]  hover:py-1 hover:px-2 border border-white rounded rounded-[7px] py-1 px-2"
                                : "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 ")
                            );
                          }}
                        >
                          Me
                        </NavLink>
                      </button>
                    ) : (
                      <button className="mt-1">
                        <NavLink
                          to="verify-company"
                          onClick={clos}
                          className={({ isActive }) => {
                            return (
                              "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 " +
                              (!isActive
                                ? "text-[12px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px]  hover:py-1 hover:px-2 border border-white rounded rounded-[7px] py-1 px-2"
                                : "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 ")
                            );
                          }}
                        >
                          Me
                        </NavLink>
                      </button>
                    )}
                  </>
                ) : (
                  <button className="mt-1">
                    <NavLink
                      to="/recruiters-login"
                      onClick={clos}
                      className={({ isActive }) => {
                        return (
                          "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 " +
                          (!isActive
                            ? "text-[12px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px]  hover:py-1 hover:px-2 border border-white rounded rounded-[7px] py-1 px-2"
                            : "text-[12px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-1 px-2 ")
                        );
                      }}
                    >
                      Recruiter Login
                    </NavLink>
                  </button>
                )}
                <br />
                <button onClick={() => closeModal(true)} className="mt-2">
                  <p className=" border border-[#57849c] rounded rounded-[5px]  bg-[#0077B5] py-[3px] px-2 text-[12px] font-semibold text-white">
                    Download App
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile navbar */}

      <div className=" block lg:hidden md:hidden relative">
        <div className="mx-[10px] ">
          <div className="flex items-center justify-between pt-[7px]">
            <div>
              <NavLink to="/">
                <img
                  loading="lazy"
                  className="w-[58px] h-[24px]"
                  src="/images/navlogo.svg"
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              <button
                onClick={toggleNavbar}
                className="text-black focus:outline-none"
              >
               <img
                  loading="lazy"
                  className="w-[30px] h-[24px]"
                  src="/images/toggleNavbar.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[230px]  rounded-b-[15px]  mt-  z-50 bg-[#1C4B81] absolute ${
            isOpen
              ? "block  opacity-100 scale-100"
              : "hidden opacity-0 scale-55 transform"
          }`}
        >
          <div>
            <div className="text-center gap-x-1 ">
              <p className="mt-1">
                <NavLink
                  to="/in"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[15px] font-medium text-[#FFFFFF] " +
                      (!isActive
                        ? " text-[15px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                        : "text-[15px] font-medium text-[#FFFFFF]  ")
                    );
                  }}
                >
                  Home
                </NavLink>
              </p>
              <p className="mt-1">
                <NavLink
                  to="/recruiters"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[15px] font-medium text-[#FFFFFF] " +
                      (!isActive
                        ? " text-[15px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                        : "text-[15px] font-medium text-[#FFFFFF]  ")
                    );
                  }}
                >
                  Recruiters
                </NavLink>
              </p>
              <p className="mt-1">
                <NavLink
                  to="/job-seekers"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[15px] font-medium text-[#FFFFFF] " +
                      (!isActive
                        ? " text-[15px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                        : "text-[15px] font-medium text-[#FFFFFF]  ")
                    );
                  }}
                >
                  Job seekers
                </NavLink>
              </p>
              <p className="mt-1">
                <NavLink
                  to="/about-us"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[15px] font-medium text-[#FFFFFF] " +
                      (!isActive
                        ? " text-[15px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                        : "text-[15px] font-medium text-[#FFFFFF]  ")
                    );
                  }}
                >
                  About us
                </NavLink>
              </p>
              <p className="mt-1">
                <NavLink
                  to="/blog"
                  onClick={clos}
                  className={({ isActive }) => {
                    return (
                      "text-[15px] font-medium text-[#FFFFFF] " +
                      (!isActive
                        ? " text-[15px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                        : "text-[15px] font-medium text-[#FFFFFF]  ")
                    );
                  }}
                >
                  Blogs
                </NavLink>
              </p>
            </div>
            <div className="text-center">
            {recruter.recruter === null ? (
            <p>
              <NavLink
                to="/recruiters-login"
                className={({ isActive }) => {
                  return (
                    "text-[15px] font-medium text-[#FFFFFF] " +
                    (!isActive
                      ? " text-[15px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                      : "text-[15px] font-medium text-[#FFFFFF]  ")
                  );
                }}
              >
                Recruiter Login
              </NavLink>
            </p>
          ) : (
            <>
              {recruter?.recruter?.other?.profile_verify_type === 1 ? (
                <button className=" ">
                  <NavLink
                    to="/dashboard/recruiter/"
                    className={({ isActive }) => {
                      return (
                        "text-[15px] font-medium text-[#FFFFFF] " +
                        (!isActive
                          ? " text-[15px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                          : "text-[15px] font-medium text-[#FFFFFF]  ")
                      );
                    }}
                  >
                    Me
                  </NavLink>
                </button>
              ) : (
                <button className=" ">
                  <NavLink
                    to="/verify-company"
                    className={({ isActive }) => {
                      return (
                        "text-[15px] font-medium text-[#FFFFFF] " +
                        (!isActive
                          ? " text-[15px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF]  "
                          : "text-[15px] font-medium text-[#FFFFFF]  ")
                      );
                    }}
                  >
                    Me
                  </NavLink>
                </button>
              )}
            </>
          )}

          <button onClick={() => closeModal(true)} className="">
            <p className=" text-[15px] font-medium  text-[#FFFFFF] text-opacity-60 hover:text-[#FFFFFF] ">
              Download App
            </p>
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
