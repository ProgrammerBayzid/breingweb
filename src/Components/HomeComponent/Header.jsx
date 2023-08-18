import { NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import AppLinkModal from "../ShereComponent/AppLinkModal";
import "../../App.css";
const Header = () => {
  const [openModal, closeModal] = useState(false);

  const nabnar = (
    <div className="flex gap-[80px] App">
      <div>
        <div className="flex ">
          <p>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 " +
                  (!isActive
                    ? "text-[18px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px] hover:py-2 hover:px-3 border border-white rounded rounded-[7px] py-2 px-3"
                    : "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 ")
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
                  "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 " +
                  (!isActive
                    ? "text-[18px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px] hover:py-2 hover:px-3 border border-white rounded rounded-[7px] py-2 px-3"
                    : "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 ")
                );
              }}
            >
              Recruiters
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/jobseekers"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 " +
                  (!isActive
                    ? "text-[18px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px] hover:py-2 hover:px-3 border border-white rounded rounded-[7px] py-2 px-3"
                    : "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 ")
                );
              }}
            >
              Job seekers
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 " +
                  (!isActive
                    ? "text-[18px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px] hover:py-2 hover:px-3 border border-white rounded rounded-[7px] py-2 px-3"
                    : "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 ")
                );
              }}
            >
              About us
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/blogs"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 " +
                  (!isActive
                    ? "text-[18px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px] hover:py-2 hover:px-3 border border-white rounded rounded-[7px] py-2 px-3"
                    : "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 ")
                );
              }}
            >
              Blogs
            </NavLink>
          </p>
        </div>
      </div>

      <div>
        <div className="flex gap-[21px]">
          <button className=" ">
            <NavLink
              to="/recruiterslogin"
              className={({ isActive }) => {
                return (
                  "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 " +
                  (!isActive
                    ? "text-[18px] font-semibold text-[#031C44] hover:border hover:border-[#57849c] hover:rounded hover:rounded-[7px] hover:py-2 hover:px-3 border border-white rounded rounded-[7px] py-2 px-3"
                    : "text-[18px] font-semibold text-[#031C44] border border-[#57849c] rounded rounded-[7px] py-2 px-3 ")
                );
              }}
            >
              Recruiter Login
            </NavLink>
          </button>
          <button onClick={() => closeModal(true)} className="">
            <NavLink className=" border border-[#57849c] rounded rounded-[5px]  bg-[#0077B5] py-2 px-3 text-[18px] font-semibold text-white">
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
                      <NavLink to="/"
                      
                      className={({ isActive }) => {
                        return (
                          "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[7px] " +
                          (!isActive
                            ? " text-black text-[18px] border-white border py-[4px] px-3 hover:border-[#57849c]  hover:border hover:py-[4px]  hover:px-3  hover:rounded-[7px]"
                            : "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[7px]")
                        );
                      }}
                      >
                        <p
                        >
                          Home
                        </p>
                      </NavLink>
                    </Menu.Item>
                  </div>
                  <div className="w-[410px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/recruiters"
                        className={({ isActive }) => {
                          return (
                            "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[7px] " +
                            (!isActive
                              ? " text-black text-[18px]  border-white border py-[4px] px-3  hover:border-[#57849c]  hover:border hover:py-[4px]  hover:px-3  hover:rounded-[7px]"
                              : "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[7px]")
                          );
                        }}
                      >
                        Recruiters
                      </NavLink>
                    </Menu.Item>
                  </div>
                  <div className="w-[410px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/jobseekers"
                        className={({ isActive }) => {
                          return (
                            "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[7px] " +
                            (!isActive
                              ? " text-black text-[18px]  border-white border py-[4px] px-3  hover:border-[#57849c]  hover:border hover:py-[4px]  hover:px-3  hover:rounded-[7px]"
                              : "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[7px]")
                          );
                        }}
                      >
                        Job seekers
                      </NavLink>
                    </Menu.Item>
                  </div>
                  <div className="w-[410px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/blogs"
                        className={({ isActive }) => {
                          return (
                            "text-black text-[18px]  border-[#57849c] border py-[3px]  px-3  rounded-[7px] " +
                            (!isActive
                              ? " text-black text-[18px]  border-white border py-[3px] px-2  hover:border-[#57849c]  hover:border hover:py-[3px]  hover:px-3  hover:rounded-[7px] lg:hidden md:hidden"
                              : "text-black text-[18px]  border-[#57849c] border py-[3px]  px-3  rounded-[7px]")
                          );
                        }}
                      >
                        Blogs
                      </NavLink>
                    </Menu.Item>
                  </div>
                  <div className="w-[410px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/aboutus"
                        className={({ isActive }) => {
                          return (
                            "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[7px] " +
                            (!isActive
                              ? " text-black text-[18px]   border-white border py-[4px] px-3  hover:border-[#57849c]  hover:border hover:py-[4px]  hover:px-3  hover:rounded-[7px] lg:hidden md:hidden"
                              : "text-black text-[18px]  border-[#57849c] border py-[4px]  px-3  rounded-[7px]")
                          );
                        }}
                      >
                        About us
                      </NavLink>
                    </Menu.Item>
                  </div>
                  <div className="w-[410px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/recruiterslogin"
                        className={({ isActive }) => {
                          return (
                            " mb-3  py-[5px]  px-3  text-[18px] text-[#031C44] rounded border border-[#57849c]  rounded-[7px]    hover:text-white  hover:bg-[#0077B5]" +
                            (!isActive
                              ? "hover:text-white  hover:bg-[#0077B5] mb-3  py-[5px]  px-3  text-[18px] text-[#031C44] rounded border border-[#57849c]  rounded-[7px] "
                              : "mb-3  py-[5px]  px-3  text-[18px] text-white rounded border bg-[#0077B5] border-[#57849c]  rounded-[7px] ")
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
                          className="py-[7px]   px-3  text-white  text-[18px]  border-[#57849c] bg-[#0077B5]  rounded rounded-[7px]  cursor-pointer"
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
                            "text-black text-[18px]  border-[#57849c] border  py-[5px] px-3   py-[5px]  px-3 rounded-[7px] " +
                            (!isActive
                              ? "text-black text-[18px]  hover:border-[#57849c] border border-white py-[5px] px-3   hover:border hover:py-[5px]  hover:px-3  hover:rounded-[7px] "
                              : "text-black text-[18px]  border-[#57849c] border  py-[5px] px-3   py-[5px]  px-3 rounded-[7px] ")
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
                        to="/recruiters"
                        className={({ isActive }) => {
                          return (
                            "text-black  text-[18px]  border-[#57849c]   border  py-[5px]  px-3  rounded-[7px] " +
                            (!isActive
                              ? "text-black border border-white py-[5px] px-3 text-[18px]  hover:border-[#57849c]   hover:border hover:py-[5px]  hover:px-3  hover:rounded-[7px]"
                              : "text-black  text-[18px]  border-[#57849c]   border  py-[5px]  px-3  rounded-[7px] ")
                          );
                        }}
                      >
                        Recruiters
                      </NavLink>
                    </Menu.Item>
                  </div>
                  <div className="w-[830px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/jobseekers"
                        className={({ isActive }) => {
                          return (
                            "text-black  text-[18px]  border-[#57849c]   border  py-[5px]  px-3  rounded-[7px] " +
                            (!isActive
                              ? " text-black text-[18px] border border-white py-[5px] px-3  hover:border-[#0077B5]  hover:border hover:py-[5px]  hover:px-3  hover:rounded-[7px]"
                              : "text-black  text-[18px]  border-[#57849c]   border  py-[5px]  px-3  rounded-[7px] ")
                          );
                        }}
                      >
                        Job seekers
                      </NavLink>
                    </Menu.Item>
                  </div>
                  <div className="w-[830px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/blogs"
                        className={({ isActive }) => {
                          return (
                            "text-black  text-[18px]  border-[#57849c]   border  py-[5px]  px-3  rounded-[7px] " +
                            (!isActive
                              ? " text-black text-[18px] border border-white py-[5px] px-3  hover:border-[#0077B5]  hover:border hover:py-[5px]  hover:px-3  hover:rounded-[7px] "
                              : "text-black  text-[18px]  border-[#57849c]   border  py-[5px]  px-3  rounded-[7px] ")
                          );
                        }}
                      >
                        Blogs
                      </NavLink>
                    </Menu.Item>
                  </div>

                  <div className="w-[830px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/aboutus"
                        className={({ isActive }) => {
                          return (
                            "text-black  text-[18px]  border-[#57849c]   border  py-[5px]  px-3  rounded-[7px] " +
                            (!isActive
                              ? " text-black text-[18px] border border-white py-[5px] px-3  hover:border-[#0077B5]  hover:border hover:py-[5px]  hover:px-3  hover:rounded-[7px] "
                              : "text-black  text-[18px]  border-[#57849c]   border  py-[5px]  px-3  rounded-[7px] ")
                          );
                        }}
                      >
                        About us
                      </NavLink>
                    </Menu.Item>
                  </div>

                  <div className="w-[830px] flex justify-center">
                    <Menu.Item>
                      <NavLink
                        to="/recruiterslogin"
                        className={({ isActive }) => {
                          return (
                            "  py-[5px]  px-3  text-[18px] mb-3  rounded border border-[#0077B5]  rounded-[7px]  mb-4" +
                            (!isActive
                              ? "  py-[5px]  px-3  text-[18px] mb-3 text-[#0077B5] hover:text-white hover:bg-[#0077B5] rounded border border-[#0077B5]  rounded-[7px]  mb-4"
                              : "  py-[5px]  px-3  text-[18px] mb-3 text-white bg-[#0077B5] rounded border border-[#0077B5]  rounded-[7px]  mb-4")
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
                          className="py-[10px]  px-3 text-white  text-[18px]  border-[#0077B5] bg-[#0077B5]  rounded rounded-[7px] mx-3 cursor-pointer"
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
    <div className="bg-white">
      {/* pc navber */}
      <div className="lg:block md:hidden hidden ">
        <div className=" mx-[40px]">
          <div className="flex h-[95px] justify-between   items-center  ">
            <div>
            <NavLink to="/" >


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
            <NavLink to="/" >

              <img className="w-[200px]" src="/images/navlogo.svg" alt="" />
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
            <NavLink to="/" >

              <img className="w-[150px]" src="/images/navlogo.svg" alt="" />
            </NavLink>
            </div>
            <div>{mnavbar}</div>
          </div>
        </div>
      </div>
      <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal>
    </div>
  );
};

export default Header;
