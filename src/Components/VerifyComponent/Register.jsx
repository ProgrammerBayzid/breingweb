 import Frame from '../../assets/login/Frame.svg'
import { Link } from "react-router-dom";
import Fram from '../../assets/modal/Frame.svg'
import AppLogo from '../App/AppLogo'
import useTitle from '../../hooks/useTitle';
const Register = () => {
  useTitle('Register - Bringin')

  return (
    <div className=" my-12 px-2  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="lg:flex md:flex   gap-20 ">
        <div className="hidden lg:block md:block">
          <img  alt="" src={Frame} className="w-[300px] mt-24" />
        </div>
        <div className="">
          <div className="lg:w-[513px] lg:h-[661px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-10">
            <div className="mb-5">
              <h1 className="text-[22px] font-semibold  text-center">
                Let's Simplify the Hiring Process
              </h1>
              <p className="text-center">Register as Recruiter.</p>
            </div>

            <div className="mb-5">
              <from>
                <input
                  placeholder="Name"
                  className="input-bordered input p-5 w-full mb-[25px]"
                />
                <div>
                  <label
                    for="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
               
                </div>{" "}
                <input
                  placeholder="Official email"
                  className="input-bordered input p-5 w-full mb-[25px]"
                />
                <input
                  placeholder="Company name"
                  className="input-bordered input p-5 w-full mb-[25px]"
                />
                <input
                  placeholder=" Designation"
                  className="input-bordered input p-3 w-full mb-"
                />
              </from>
            </div>

            <div className="flex gap-2 mb-5">
              <input type="checkbox" />
              <p className="text-[14px]">
                I would like to get notifications via whatsApp.{" "}
              </p>
            </div>
            <label htmlFor="my-modal-1">
              <p className="lg:w-[435px] md:w-[455px] w-[300px] h-[60px] bg-[#F2F2F2] text-[18px] font-semibold hover:bg-[#0077B5] hover:text-white rounded text-center pt-4">
                Submit
              </p>
            </label>
          </div>
        </div>
        <div className="  block lg:hidden md:hidden ">
          <img  alt="" src="/Frame.png" className="w-[300px] mt-24" />
        </div>
      </div>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal w-full ">
        <div className="bg-white rounded-lg relative  lg:w-[900px] lg:h-[515px] md:w-[900px] md:h-[515px] w-full h-[550px]">
          <label
            htmlFor="my-modal-1"
            className="cursor-pointer text-[25px] absolute right-4 top-2 text-black"
          >
          <Link to='/'>
          ✕
          </Link>
          </label>
          <div className="">
            <div>
              <div className="mt-[30px]">
                <h1 className="text-center text-[27px] font-semibold">Congratulations! You’re</h1>
                <h1 className="text-center text-[27px] font-semibold">successfully registered as Recruiter.</h1>
                <p className="text-[22px] font-small text-center text-[#454545]">We will get in touch within 30 minutes.</p>
              </div>
              <div className="flex justify-center my-[30px]">
                <img  alt="" src={Fram} className=""/>
              </div>
              <div className="mb-[5px]">
                <h1 className="text-[27px] text-center">Meanwhile, <span className="text-[27px] font-semibold">download the app!</span></h1>
                <h1 className="text-[27px] text-center"> & start instant hiring. </h1>
              </div>
              <div className="lg:w-[350px]  lg:ml-[300px] lg:block md:hidden hidden">
                <AppLogo></AppLogo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
