import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import bringinlogo from "../../../../assets/logo/bringinlogo.svg";
import Sidebar from "../../../../assets/logo/Sidebar.svg";
import sa from "../../../../assets/modal/Group 11827.svg";
import whatsapp from "../../../../assets/commonlogo/whatsapp.png";
import App from "../../../../App.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const menuItems = (
    <>
      <ul className="flex flex-col font-medium  md:flex-row items-center  py-[25px] App">
        <li className="lg:mb-o md:mb-0 mb-3 ">
          <NavLink
            className="text-black lg:text-[20px] border-[#0077B5]  hover:border-b-4 lg:px-5 lg:py-[25px]"
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li className="lg:mb-o md:mb-0 mb-3">
          <NavLink
            className=" text-black lg:text-[20px] border-[#0077B5]  hover:border-b-4 lg:px-5 lg:py-[25px] "
            to="/recruiters"
          >
            Recruiters
          </NavLink>
        </li>
        <li className="lg:mb-o md:mb-0 mb-3">
          <NavLink
            className=" text-black lg:text-[20px] border-[#0077B5]  hover:border-b-4 lg:px-5 lg:py-[25px] "
            to="/job-seekers"
          >
            Job Seekers
          </NavLink>
        </li>
        <li className="lg:mb-o md:mb-0 mb-3">
          <NavLink
            className="text-black lg:text-[20px] border-[#0077B5]  hover:border-b-4 lg:px-5 lg:py-[25px] lg:hidden md:hidden "
            to="/blogs"
          >
            Blogs
          </NavLink>
        </li>
        <li className="lg:mb-o md:mb-0 mb-7">
          <NavLink
            className="text-black lg:text-[20px] border-[#0077B5]  hover:border-b-4 lg:px-5 lg:py-[25px] lg:hidden md:hidden "
            to="/about-us"
          >
            About Us
          </NavLink>
        </li>
        <li className="lg:mb-o md:mb-0 mb-7">
          <NavLink
            className="py-2 px-4  lg:text-[20px] text-[#0077B5] rounded border border-[#0077B5]  rounded-full mx-3 "
            to="recruiters-login"
          >
            Recruiter Login
          </NavLink>
        </li>
        <li className="lg:mb-o md:mb-0 mb-2">
          <div>
            <label
              htmlFor="my-modal-2"
              className="py-[10px]  lg:px-5 text-white  lg:text-[20px] border-[#0077B5] bg-[#0077B5]  rounded rounded-full mx-3 cursor-pointer"
            >
              {" "}
              Download App
            </label>
          </div>
        </li>

        <li className="mt-1 lg:block md:block hidden">
          <ul className="flex items-center">
            <li className="">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full ">
                    <img
                      alt=""
                      src={Sidebar}
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
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[170px] h-[180px] rounded-bl-3xl  shadow-lg bg-white ">
                    <div className="py-1  pl-[40px] my-12">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/blogs"
                            className={classNames(" text-black text-[18px]")}
                          >
                            Blogs
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/about-us"
                            className={classNames(
                              "text-black lg:text-[18px] ",
                              "block  mt-[27px]"
                            )}
                          >
                            About Us
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );

  return (
    <div className="App sticky top-0 z-40 App">
      <div className="  ">
        <nav className="bg-white App shadow-[1px_1px_10px_2px_rgb(245,244,244)]   shadow lg:py-0 md:py-2 py-2">
          <div className="lg:mr-7 md:mr-2 mr-2 flex flex-wrap items-center justify-between ">
            <Link to="/">
              <img
                src={bringinlogo}
                alt=""
                className="lg:ml-[45px] md:ml-[30px] ml-[10px]  "
              ></img>
            </Link>
            {/* mobile drop-down  */}
            <div className="lg:hidden md:hidden block ">
              <ul className="flex items-center">
                <li className="">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full ">
                        <img
                          alt=""
                          src={Sidebar}
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-5 w-[400px] rounded-bl-3xl  shadow-lg bg-white border border-white">
                        <div className=" text-center my-7">
                          <div className="flex flex-col gap-3 ">
                            <div className="w-[400px] flex justify-center">
                              <Menu.Item>
                                <NavLink to="/">
                                  <p
                                    className={`   text-black text-[18px]  border-[#0077B5] mb-3 hover:border-b-4  `}
                                  >
                                    Home
                                  </p>
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[400px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="/recruiters"
                                  className={`text-black text-[18px] mb-3 border-[#0077B5]  hover:border-b-4  `}
                                >
                                  Recruiters
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[400px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="/job-seekers"
                                  className={` text-black text-[18px] mb-3 border-[#0077B5]  hover:border-b-4 `}
                                >
                                  Job Seekers
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[400px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="/blogs"
                                  className={`  text-black text-[18px] mb-3 border-[#0077B5]  hover:border-b-4 lg:hidden md:hidden`}
                                >
                                  Blogs
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[400px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="/about-us"
                                  className={` text-black text-[18px] mb-3 border-[#0077B5]  hover:border-b-4 lg:hidden md:hidden`}
                                >
                                  About Us
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[400px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="recruiters-login"
                                  className=" mb-5 py-[10px]  px-5  text-[18px] text-[#0077B5] rounded border border-[#0077B5]  rounded-full  "
                                >
                                  Recruiter Login
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[400px] flex justify-center">
                              <Menu.Item>
                                <div>
                                  <label
                                    htmlFor="my-modal-3"
                                    className="py-[10px]  px-5  text-black  text-[18px]  border-[#0077B5] bg-[#0077B5]  rounded rounded-full  cursor-pointer"
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
            </div>

            {/* tab drop-down  */}
            <div className="lg:hidden md:block hidden">
              <ul className="flex items-center">
                <li className="">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full ">
                        <img
                          alt=""
                          src={Sidebar}
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-5 w-[830px]  rounded-bl-3xl  shadow-lg bg-white border border-white	">
                        <div className="py-1 text-center my-7">
                          <div className="flex flex-col gap-3 ">
                            <div className="w-[830px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="/"
                                  className={`  text-black text-[20px] mb-3  border-[#0077B5]   `}
                                >
                                  <p className="">Home</p>
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[830px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="/recruiters"
                                  className={` text-black text-[20px] mb-3 border-[#0077B5]  hover:border-b-4 `}
                                >
                                  Recruiters
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[830px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="/job-seekers"
                                  className={`  text-black text-[20px] mb-3 border-[#0077B5]  hover:border-b-4  `}
                                >
                                  Job Seekers
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[830px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="/blogs"
                                  className={`text-black text-[20px] mb-3 border-[#0077B5]  hover:border-b-4   `}
                                >
                                  Blogs
                                </NavLink>
                              </Menu.Item>
                            </div>

                            <div className="w-[830px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="/about-us"
                                  className={` text-black text-[20px] mb-3 border-[#0077B5]  hover:border-b-4   `}
                                >
                                  About Us
                                </NavLink>
                              </Menu.Item>
                            </div>

                            <div className="w-[830px] flex justify-center">
                              <Menu.Item>
                                <NavLink
                                  to="recruiters-login"
                                  className="  py-[10px]  px-5  text-[20px] mb-5 text-[#0077B5] rounded border border-[#0077B5]  rounded-full  mb-4"
                                >
                                  Recruiter Login
                                </NavLink>
                              </Menu.Item>
                            </div>
                            <div className="w-[830px] flex justify-center">
                              <Menu.Item>
                                <div>
                                  <label
                                    htmlFor="my-modal-3"
                                    className="py-[10px]  px-5 text-black  text-[20px] mb-3 border-[#0077B5] bg-[#0077B5]  rounded rounded-full mx-3 cursor-pointer"
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
            </div>

            <div className="hidden w-full lg:block  md:w-auto  ">
              {menuItems}
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-end mr-10">
        <div className=" fixed	lg:bottom-[100px] md:bottom-[100px] bottom-[350px]">
          <a href="https://wa.me/+8801756175141?text=Hii..." target="_blank">
            <img alt="" className="w-[55px] h-[55px]  " src={whatsapp}></img>
          </a>
        </div>
      </div>
      <div>
        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <div className="modal w-full ">
          <div className="bg-white rounded-lg relative  lg:w-[850px]  lg:h-[530px] md:w-[750px] md:h-[550px] w-full h-full">
            <label
              htmlFor="my-modal-2"
              className="cursor-pointer text-[25px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div className="">
              <div className="flex justify-center mt-16">
                <div className="lg:flex md:flex gap-5">
                  <form>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute pt-[17px] text-[15px] left-0 flex items-center pl-3 pointer-events-none text-[#C7C8C9]">
                        <p className="">+880 ।</p>
                      </div>
                      <input
                        type="text"
                        name="number"
                        className=" input rounded  placeholder:text-[#C7C8C9] h-[55px]  lg:w-[356px]  md:w-[356px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[75px] placeholder:text-[15px] lg:placeholder:text-[15px] md:placeholder:text-[16px]"
                        placeholder="Enter 10 digit mobile number"
                        required
                      />
                    </div>
                  </form>
                  <div className="lg:ml-0 md:ml-0 ml-[95px] lg:mt-0 md:mt-0 mt-[30px]">
                    <div className="w-[152px] h-[53px] bg-[#0077B5] text-white  shadow-md rounded-md cursor-pointer">
                      <p className=" text-center lg:text-[20px] md:lg:text-[20px] text-[20px] font-medium  py-[11px] ">
                        Get The Link
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-center mt-7 text-[25px] font-medium">or</h1>
              <h1 className="text-center mt-7 text-[25px] font-medium">
                Scan the QR code below to download the
                <span className="text-[#0077B5]"> bringin app</span>
              </h1>

              <div className="flex  justify-center mt-7">
                <div>
                  <img className="color-red" src={sa} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
