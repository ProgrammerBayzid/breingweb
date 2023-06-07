import { useLoaderData } from "react-router-dom";
import p from '../../assets/candidate/Group 10464.svg'
import job from '../../assets/logo/job.svg'
import location from '../../assets/logo/locetion.svg'
import sa from '../../assets/modal/Group 11827.svg'
import AppLogo from "../App/AppLogo";
import useTitle from "../../hooks/useTitle";
 import y from '../../assets/profile/Years.svg'
 import d from '../../assets/profile/Mass.svg'
 import a from '../../assets/profile/Location.svg'
 import l from '../../assets/profile/Years.svg'
 import dot from '../../assets/profile/Ellipse 153.svg'
const Profile = () => {
  useTitle('Profile - Bringin')

  // const profile = useLoaderData();
  


  return (
    <div className="my-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
       <div className="lg:block md:block hidden">
         <div className="flex justify-center mt-[66px] ">
              <div>
               <div className="lg:w-[720px] h-[60px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
               <form className="flex items-center ">
                  <div className="">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                        <img
                      
                       alt=""
                        src={job} />
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className="   text-sm rounded-l-lg block  pl-[64px] pt-1.5   lg:w-[286px] h-[60px] placeholder:text-[18px] outline-none"
                        placeholder="Candidate Skills"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                        <img
                      
                       alt=""
                        src={location} />
                      </div>
                      <input
                        type="text"
                        id="location"
                        className="  text-sm outline-2 outline-none
                        block  pl-[64px] pt-1.5 placeholder:text-[18px]  lg:w-[286px] h-[59px]"
                        placeholder="Location"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <button className="w-[154px] rounded-r-lg h-[60px] bg-[#0077B5] text-[20px] font-semibold text-white">Start Hiring</button>
                  </div>
                </form>
               </div>
              </div>
            </div>
         </div>

         <div className="lg:hodden md:hidden block">
         <div className="flex justify-center mt-[46px] ">
              <div>
              <form className=" items-center ">
                  <div className="">
                    <div className="relative w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                        <img
                      
                       alt=""
                        src={job} />
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className=" border in text-sm rounded-lg block mb-7 pl-[64px] pt-1.5   lg:w-[286px] h-[60px] input placeholder:text-[18px] outline-none"
                        placeholder="Candidate Skills"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-[30px] pointer-events-none">
                        <img
                      
                       alt=""
                        src={location} />
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className="  text-sm rounded-lg border mb-5 block  pl-[64px] pt-1.5 placeholder:text-[18px] input lg:w-[286px] h-[59px] outline-none"
                        placeholder="Location"
                        required
                      />
                    </div>
                  </div>
                  <div className="lg:ml-0 md:ml-0 ml-[70px]">
                    <button className="w-[120px] rounded-lg h-[40px] bg-[#0077B5] text-[16px] font-semibold text-white">Start Hiring</button>
                  </div>
                </form>
              </div>
            </div>
         </div>
      <div>
        <div>
          <h1 className="text-center lg:text-[22px] md:text-[20px] text-[20px]  font-semibold mt-[50px]">
          Hire the Best Flutter Developer Professionals across Bangladesh            </h1>
        </div>

        <div className="my-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 ">
            <div className="lg:col-span-2   mx-auto ">
              <div className="lg:w-[833px] md:w-[600px] w-[320px] lg:h-[650px] shadow-md p-7 gradient">
                <div>
              <div className="mb-4">
              
              </div>
                  <div className="lg:flex lg:flex-cols-2 gap-10 items-center">
                  <div className="lg:mt-0 md:mt-4 mt-4">
                      <img
                   
                       alt=""
                        src={p} className="w-24" />
                    </div>
                    <div>
                    <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-semibold flex gap-1 mb-2 ">
                        <div className="flex gap-1">
                          <p>Razu Ahmed </p>
                          <img
                      
                       alt=""
                       src={dot} className="w-1" />
                        </div>{" "}
                        <p>Flutter Developer</p>
                      </h1>
                      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-y-2 mt-2">
                        <div className="flex gap-2">
                          <img
                      
                       alt=""
                        src={y} className="w-5 h-5" />
                          <p>2 Years</p>
                        </div>
                        <div className="flex gap-2">
                          <img
                      
                       alt=""
                        src={d} className="w-5 h-5" />
                          <p>MMS</p>
                        </div>
                        <div className="flex gap-2">
                          <img
                      
                       alt=""
                        src={a} className="w-5 h-5" />
                          <p>27 Years</p>
                        </div>
                        <div className="flex gap-2">
                          <img
                      
                       alt=""
                        src={l} className="w-5 h-5" />
                          <p>Uttara, Dhaka</p>
                        </div>
                      </div>
                    </div>
                   
                  </div>

                  <div>
                    <h1 className="font-semibold text-[20px] lg:my-0 md:my-4 my-4">About me</h1>
                    <p>
                      The traditional hiring process is such a long way to
                      finalize candidatess with a lot of steps the reason
                      thousands of applications in each job post, expensive job
                      advertising, and collecting CVs. Bringin allows recruiters
                      to post a free job circular just in 5 minutes & without
                      any limitations. AI technology helps recruiters to find
                      the best candidates based on their skills, experiences,
                      locations & activities. Recruiters can chat directly with
                      job seekers and take instant video call interviews or
                      schedule without any middleman/ consultants with 100%
                      privacy protection.
                    </p>
                  </div>

                  <div className="flex gap-5 mt-10">
                    <div className=" bg-[#C2DFEF] px-3 py-1 rounded rounded-md">
                      <p>Flutter</p>
                    </div>
                    <div className=" bg-[#C2DFEF] px-3 py-1 rounded rounded-md">
                      <p>IOS</p>
                    </div>
                    <div className=" bg-[#C2DFEF] px-3 py-1 rounded rounded-md">
                      <p>Android</p>
                    </div>
                  </div>

                  <div className="">
                    <h1 className="font-semibold text-[20px] mt-7 mb-4">
                      Career Preferences
                    </h1>
                    <div className="lg:flex flex-cols-2 gap-24">
                      <div>
                        <p className="font-semibold opacity-50">
                          Techpnology & Engineering
                        </p>
                        <p className="opacity-50">
                          Design/Animation/Mobile App <br></br> Development/Data
                          Analytics
                        </p>
                      </div>
                      <div>
                        <p className="opacity-50">30-40k TPM</p>
                        <p className="opacity-50">Uttara, Dhaka</p>
                      </div>
                    </div>
                    <div className="lg:flex flex-cols-2 gap-24 mt-7">
                      <div>
                        <p className="font-semibold opacity-25">
                          Internet, IT & Online
                        </p>
                        <p className="opacity-25">Any Categories</p>
                      </div>
                      <div>
                        <p className="lg:flex justify-end opacity-25">
                          40-50k TPM
                        </p>
                        <p className="opacity-25">Anywhere in Bangladesh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[833px] md:w-[600px] w-[320px] lg:h-[228px] shadow-md p-7 mb-10 bg-[#0077B5]">
                <p className="text-center text-[30px] font-semibold mb-7 text-white">
                  Find Your next candidatess
                </p>
                <label
                 htmlFor="my-modal-8"
                >

                <div className="h-[65px] w-[207px] bg-white text-[20px] font-semibold mx-auto rounded cursor-pointer">
                  <p className="text-center pt-4 text-[#0077B5]  ">
                    Download App
                  </p>
                </div>
                </label>
              </div>
            </div>

            <div className="lg:ml-0 md:mx-auto mx-auto ">
              <div className="">
                <div className="lg:w-[412px] md:w-[400px] w-[320px] lg:h-[825px]  shadow-md py-5 ">
                  <div>
                    <h1 className="text-center font-semibold text-[20px]">
                      Let's Simplify the Hiring Process
                    </h1>
                    <p className="text-center">Register as recruiter.</p>
                  </div>
                  <div className="p-5 mt-7">
                    <from>
                      <input
                        type="text"
                        name="name"
                        className="placeholder:text-[#C7C8C9] h-[55px]     w-full rounded px-5 input input-bordered mb-[25px]"
                        placeholder="Name"
                      />

                      <div className="relative">
                        <div className="absolute pt-[16px] left-0 flex items-center pl-5 pointer-events-none">
                          <p className="text-[#C7C8C9]">+880  ।</p>
                        </div>
                        <input
                          type="text"
                          name="number"
                          className="placeholder:text-[#C7C8C9] h-[55px]   w-full rounded px-[68px] pl-[80px] input input-bordered mb-[25px]"
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>
                      <input
                        type="text"
                        name="email"
                        className="placeholder:text-[#C7C8C9] h-[55px]     w-full rounded px-5 input input-bordered mb-[25px]"
                        placeholder="Official email"
                      />

                      <input
                        type="text"
                        name="Company"
                        className="placeholder:text-[#C7C8C9] h-[55px]     w-full rounded px-5 input input-bordered mb-[25px]"
                        placeholder="Company name"
                      />
                      <input
                        type="text"
                        name="Designation"
                        className="placeholder:text-[#C7C8C9] h-[55px]     w-full rounded px-5 input input-bordered mb-[px]"
                        placeholder="Designation"
                      />

                      <div className="flex gap-2 mb-[25px] px-3 mt-5">
                        <input type="checkbox" />
                        <p className="text-[15px] mt-">
                          I would like to get notifications via whatsApp.
                        </p>
                      </div>

                      <button
                        className="lg:w-[372px] w-[280px] h-[60px] bg-[#F2F2F2] font-semibold font-semibold hover:bg-[#0077B5] hover:text-white rounded text-center"
                        type="submit"
                      >
                        Submit
                      </button>
                    </from>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-8" className="modal-toggle" />
        <div className="modal w-full ">
          <div className="bg-white rounded-lg relative  lg:w-[850px] lg:h-[530px] md:w-[750px] md:h-[550px] w-full h-full">
            <label
              htmlFor="my-modal-8"
              className="cursor-pointer text-[25px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div className="">
              <div className="flex justify-center mt-16">
                <div className="flex gap-5">
                  <form>
                    <label
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute pt-[15px] left-0 flex items-center pl-3 pointer-events-none text-[#C7C8C9]">
                        <p className="">+880 ।</p>
                      </div>
                      <input
                        type="text"
                        name="number"
                        className=" input rounded text-[15px] placeholder:text-[#C7C8C9] h-[55px]  lg:w-[356px]  md:w-[356px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[75px]"
                        placeholder="Enter 10 digit mobile number"
                        required
                      />
                    </div>
                  </form>
                  <div className="w-[152px] h-[53px] bg-[#0077B5] text-white  shadow-md rounded-md cursor-pointer">
                    <p className=" text-center lg:text-[20px] md:text-[20px] text-[10px] font-medium  py-[11px] ">
                     Get The Link
                    </p>
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
                  <img
                 
                  alt=""
                  src={sa} />
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
           <AppLogo></AppLogo>
           </div>
    </div>
  );
};

export default Profile;
