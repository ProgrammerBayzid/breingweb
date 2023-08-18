import { useLoaderData } from "react-router-dom";
import AppLogo from "../App/AppLogo";
import useTitle from "../../hooks/useTitle";
import l from "../../assets/profile/Age.svg";
import dot from "../../assets/profile/Ellipse 153.svg";
import SearchComponent from "../SearchComponent/SearchComponent";
const Profile = () => {
  useTitle("Profile - Bringin");

  const profile = useLoaderData();

  console.log(profile);
  const {
    userid,
    workexperience,
    education,
    skill,
    protfoliolink,
    about,
    careerPreference,
  } = profile;
  const first = careerPreference[0];
  const ins = first.category[0];
  console.log(ins);

  return (
    <div className="my-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="relative bg-[url(/src/bgimages/candidateupbg.png)] bg-contain	 bg-right bg-no-repeat  pb-[100px]">
        <p className="text-white text-[1px]">k</p>

        <SearchComponent></SearchComponent>

        <div>
          <h1 className="text-center lg:text-[36px] md:text-[30px] text-[20px] text-[#023C5B]  font-semibold mt-[50px]">
            Hire the Best{" "}
            {first?.functionalarea?.functionalname
              ? first?.functionalarea?.functionalname
              : "null"}{" "}
            Professionals across Bangladesh{" "}
          </h1>
        </div>
      </div>
      <div>
        <div className="my-">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 ">
            <div className="lg:col-span-2   mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
              <div className="relative bg-[url(/src/bgimages/Gradientp.png)] bg-auto	 bg-right-top bg-no-repeat">
                <div className="lg:w-[833px] md:w-[600px] w-[330px] lg:h-[650px] shadow- lg:p-7 p-2 ">
                  <div>
                    <div className="mb-4"></div>
                    <div className="lg:flex lg:flex-cols-2 gap-10 items-center">
                      <div className="lg:mt-0 md:mt-4 mt-4">
                        <img
                          alt="bringin image"
                          src="/images/candidate/Group 10464.svg"
                          className="lg:w-24 w-[50px]"
                        />
                      </div>
                      <div>
                        <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-semibold flex gap-1 mb-2 mt-2 ">
                          <div className="flex gap-1 items-center">
                            <p>
                              {" "}
                              {userid?.fastname
                                ? userid?.fastname
                                : "No Name"}{" "}
                              {userid?.lastname ? userid?.lastname : "No Name"}{" "}
                            </p>
                            <img
                              alt="bringin image"
                              src={dot}
                              className="w-1"
                            />
                          </div>{" "}
                          {workexperience?.map((w) => (
                            <p key={w._id}>
                              {w?.designation
                                ? w?.designation
                                : ""}
                            </p>
                          ))}
                        </h1>
                        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-y-2 gap-x-5 mt-2">
                          <div className="flex gap-2">
                            <img
                              alt="bringin image"
                              src="/images/profile/Years.svg"
                              className="w-5 h-5"
                            />
                            <p>{userid?.experiencedlevel?.name}</p>
                          </div>
                          <div className="flex gap-2">
                            <img
                              alt="bringin image"
                              src="/images/profile/Mass.svg"
                              className="w-5 h-5"
                            />

                            {education?.map((e) => (
                              <p key={e._id} className="">
                                {e?.digree?.name
                                  ? e?.digree?.name
                                  : ""}
                              </p>
                            ))}
                          </div>
                        
                          <div className="flex gap-2">
                            <img
                              alt="bringin image"
                              src="/images/profile/Age.svg"
                              className="w-5 h-5"
                            />
                            <p>
                            {userid?.deatofbirth
                                ? userid?.deatofbirth.slice(0, 9)
                                : ""}
                            </p>
                          </div>

                          <div className="flex gap-2">
                            <img
                              alt="bringin image"
                              src="/images/profile/Location.svg"
                              className="w-5 h-5"
                            />
                            <p className="">
                              {" "}

                              {first?.division?.divisionname
                                ? first?.division?.divisionname
                                : ""}
                              
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h1 className="font-semibold text-[20px] lg:mt-3 md:my-4 my-4">
                        About me
                      </h1>
                      <p>{about?.about ? about?.about : "..........."}</p>
                    </div>
                    <div className="flex gap-5 mt-10">
                      {careerPreference.map((c) => (
                        <div
                          key={c._id}
                          className=" bg-[#C2DFEF] px-3 py-1 rounded rounded-md"
                        >
                          <p>
                            {c?.functionalarea?.functionalname
                              ? c?.functionalarea?.functionalname
                              : ""}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="">
                      <h1 className="font-semibold text-[20px] mt-7 mb-4">
                        Career Preferences
                      </h1>
                      <div className="lg:flex flex-cols-2 gap-24">
                        <div>
                          <p className="font-semibold opacity-50">
                            {ins?.industryid?.industryname}
                          </p>
                          {first?.category.map((c) => (
                            <p key={c._id} className="opacity-50">
                              {c?.categoryname ? c?.categoryname : ""}
                            </p>
                          ))}
                        </div>
                        <div>
                          <p className="opacity-50">
                            {profile?.careerPreference[0]?.salaray?.min_salary
                              ?.salary
                              ? profile?.careerPreference[0]?.salaray
                                  ?.min_salary?.salary
                              : "00"}
                            {profile?.careerPreference[0]?.salaray?.min_salary
                              ?.salary == "Negotiable"
                              ? ""
                              : "-"}
                            {profile?.careerPreference[0]?.salaray?.max_salary
                              ?.salary == "Negotiable"
                              ? ""
                              : profile?.careerPreference[0]?.salaray
                                  ?.max_salary?.salary}
                            {profile?.careerPreference[0]?.salaray?.min_salary
                              ?.salary == "Negotiable"
                              ? ""
                              : "K"}{" "}
                            {profile?.careerPreference[0]?.salaray?.min_salary
                              ?.salary == "Negotiable"
                              ? ""
                              : "BDT"}
                          </p>
                          <p className="opacity-50">
                            {first?.division?.divisionname
                              ? first?.division?.divisionname
                              : ""}
                          </p>
                        </div>
                      </div>
                      <div className="lg:flex flex-cols-2 gap-24 mt-7">
                        <div>
                          <p className="font-semibold opacity-25">
                            {ins?.industryid?.industryname}
                          </p>
                          <p className="opacity-25">Any Categories</p>
                        </div>
                        <div>
                          <p className="lg:flex justify-end opacity-25">
                            {profile?.careerPreference[0]?.salaray?.min_salary
                              ?.salary
                              ? profile?.careerPreference[0]?.salaray
                                  ?.min_salary?.salary
                              : "00"}
                            {profile?.careerPreference[0]?.salaray?.min_salary
                              ?.salary == "Negotiable"
                              ? ""
                              : "-"}
                            {profile?.careerPreference[0]?.salaray?.max_salary
                              ?.salary == "Negotiable"
                              ? ""
                              : profile?.careerPreference[0]?.salaray
                                  ?.max_salary?.salary}
                            {profile?.careerPreference[0]?.salaray?.min_salary
                              ?.salary == "Negotiable"
                              ? ""
                              : "K"}{" "}
                            {profile?.careerPreference[0]?.salaray?.min_salary
                              ?.salary == "Negotiable"
                              ? ""
                              : "BDT"}
                          </p>
                          <p className="opacity-25">Anywhere in Bangladesh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:bg-[url(/src/bgimages/profiledownbg.png)] bg-cover	 bg-right bg-no-repeat bg-[#EEFCFE]">
                <div className="lg:w-[833px] md:w-[600px] w-[320px] lg:h-[258px]  p-7    ">
                  <div>
                    <p className="text-[#023C5B] text-[30px] font-medium mb-7 ">
                      To chat with your future employees
                      <p className="text-[30px] text-[#005085] font-semibold mb-7">
                        Download Bringin App Now.
                      </p>
                    </p>
                   
                  
        <div className="flex gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.bringin.io" target="_blank">
            <img
              className="lg:w-[130px] lg:h-[42px] w-[233px] h-[40px]  md:h-[62px]"
              src="/images/playstore.png"
            />
          </a>

          <a href="">
            <img
              className="lg:w-[130px] lg:h-[42px] w-[233px] h-[40px]  md:h-[62px]"
              src="/images/appstore.png"
            />
          </a>
        </div>
     
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:ml-0 md:mx-auto mx-auto ">
              <div className="">
                <div className="lg:w-[400px] md:w-[400px] w-[320px] lg:h-[825px]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-5 ">
                  <div>
                    <h1 className="text-center font-semibold text-[20px]">
                      Let's Simplify the Hiring Process
                    </h1>
                    <p className="text-center text-[#454545]">Register as recruiter.</p>
                  </div>
                  <div className="px-7 mt-3">
                    <from>
                      <input
                        type="text"
                        name="name"
                        className="placeholder:text-[#C7C8C9] h-[45px]     w-full rounded px-5 border border-[2px] my-2  focus:outline-none mb-[px]"
                        placeholder="Name"
                      />

                      <div className="relative my-2">
                        <div className="absolute pt-[11px] left-0 flex items-center pl-5 pointer-events-none">
                          <p className="text-[#C7C8C9]">+880 ।</p>
                        </div>
                        <input
                          type="text"
                          name="number"
                          className="placeholder:text-[#C7C8C9] placeholder:text-[15px] h-[45px]   w-full rounded  pl-[72px] pl-[80px]  border border-[2px]  focus:outline-none mb-[px]"
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>
                      <input
                        type="text"
                        name="email"
                        className="placeholder:text-[#C7C8C9] placeholder:text-[15px] h-[45px]     w-full rounded px-5 border border-[2px] my-2  focus:outline-none mb-[px]"
                        placeholder="Official email"
                      />

                      <input
                        type="text"
                        name="Company"
                        className="placeholder:text-[#C7C8C9] placeholder:text-[15px] h-[45px]     w-full rounded px-5 border border-[2px] my-2  focus:outline-none mb-[px]"
                        placeholder="Company name"
                      />
                      <input
                        type="text"
                        name="Designation"
                        className="placeholder:text-[#C7C8C9] placeholder:text-[15px]    h-[45px]    w-full rounded px-5 border border-[2px] my-2  focus:outline-none mb-[px]"
                        placeholder="Designation"
                      />

                      <div className="flex gap-2 mb-[25px] px-3 mt-5">
                        <input type="checkbox" />
                        <p className="text-[15px] text-[#454545] mt-">
                          I would like to get notifications via whatsApp.
                        </p>
                      </div>

                      <button
                        className="lg:w-[343px] w-[280px] h-[50px] bg-[#F2F2F2] font-semibold font-semibold hover:bg-[#0077B5] hover:text-white rounded text-center "
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

      {/* <input type="checkbox" id="my-modal-8" className="modal-toggle" />
      <div className="modal w-full ">
        <div className="bg-white rounded-lg relative  lg:w-[850px] lg:h-[530px] md:w-[750px] md:h-[450px] w-full h-full">
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
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute pt-[15px] left-0 flex items-center pl-3 pointer-events-none text-[#C7C8C9]">
                      <p className="">+880 ।</p>
                    </div>
                    <input
                      type="text"
                      name="number"
                      className=" input rounded text-[15px] placeholder:text-[#C7C8C9] h-[45px]  lg:w-[356px]  md:w-[356px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[75px]"
                      placeholder="Enter 10 digit mobile number"
                      required
                    />
                  </div>
                </form>
                <div className="w-[152px] h-[53px] bg-[#0077B5] text-white  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-md cursor-pointer">
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
                <img alt="bringin image" src={sa} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
     
    </div>
  );
};

export default Profile;
