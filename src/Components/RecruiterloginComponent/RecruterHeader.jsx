
// export default RecruterHeader;
import { NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import "@fontsource/dm-sans"; // Defaults to weight 400

const RecruterHeader = ({ closeModal }) => {
  
  const nabnar = (
    <div className="flex gap-[80px]  items-center">
     

      <div>
        <div className="flex gap-[21px] items-center">
   
          
          <button onClick={() => closeModal(true)} className="">
            <p className=" border border-[#57849c] rounded rounded-[5px]  bg-[#0077B5] py-[5px] px-3 text-[18px] font-medium text-white">
              Download App
            </p>
          </button>
        </div>
      </div>
    </div>
  );

 

  const tnavbar = (
    <ul className="flex items-center">
      <li className="">
        <Menu as="div" className="relative inline-block ">
          <div>
            <Menu.Button className="inline-flex  ">
              <img
                loading="lazy"
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
                        to="/in"
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
                        to="/recruiters-login"
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const clos = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white App">
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
                  className="w-[200px] h-[50px]"
                  alt=""
                />
              </NavLink>
            </div>
            <div>{nabnar}</div>
          </div>
        </div>
      </div>

      {/* tab navbar */}
      <div className="hidden md:block lg:hidden">
        <div className="  mx-[10px] ">
          <div className="flex h-[55px] items-center justify-between">
            <div>
              <NavLink to="/">
                <img
                  loading="lazy"
                  className="w-[200px] h-[45px]"
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

      <div className=" block lg:hidden md:hidden relative">
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
                  className="h-6 w-6 fill-current"
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
            isOpen ? "block  opacity-100 scale-100" : "hidden opacity-0 scale-55 transform"
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
            </div>
            <div>
              <div className=" text-center">
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
    </div>
  );
};

export default RecruterHeader;

