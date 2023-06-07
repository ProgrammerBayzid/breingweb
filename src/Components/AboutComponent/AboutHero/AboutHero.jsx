import { useEffect, useState } from "react";
import i1 from "../../../assets/about/Group 11884.svg";
import k from "../../../assets/about/Group 387.svg";
import h from "../../../assets/about/Mask group.svg";
import m1 from "../../../assets/about/Mask group (1).svg";
import m2 from "../../../assets/about/Mask group (2).svg";
import sa from "../../../assets/modal/Group 11827.svg";

import App from "../../../App.css";
import AppLogo from "../../App/AppLogo";

import useTitle from "../../../hooks/useTitle";
import Spinner from "../../Spinner/Spinner";
import { Link } from "react-router-dom";

const AboutHero = (props) => {
  useTitle("About Us - Bringin");
  const [slideIndex, setSlideIndex] = useState(1);
  // const length = Data.length;
  const [blogs, setBlogs] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setIsLoding(true);
        setBlogs(data);
      });
  }, []);
  const prevClickHandler = () => {
    slideIndex === 1
      ? setSlideIndex(blogs.length)
      : setSlideIndex(slideIndex - 1);
  };

  const nextClickHandler = () => {
    slideIndex === blogs.length
      ? setSlideIndex(1)
      : setSlideIndex(slideIndex + 1);
  };

  if (isLoding === false) {
    return <Spinner></Spinner>;
  }

  return (
    <div className=" mx-auto App">
      <h1 className="text-center mt-[25px] lg:text-[42px] md;text-[35px] text-[30px] font-semibold">
        About <span className="text-[#00A0DC]">Bringin</span>
      </h1>
      <div className="hero lg:py-5 md:py-16 py-5 lg:text-start md:text-center text-center">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img
            src={h}
            alt=""
            className="lg:w-[600px] lg:h-[530px]  md:h-[400px] md:w-[600px] rounded-lg mb- "
          ></img>
          <div className="lg:ml-10">
            <div>
              <h1 className="lg:text-[40px] md:text-[30px] text-[25px] font-semibold">
                WHO WE ARE?
              </h1>
              <p className="py-3 text-[20px] text-[#7A7C7D]">
                Bringin Technologies Limited started it’s journey on September
                2022, is an AI-powered first chat-based instant hiring app which
                has specially designed for the startups and SMEs in Bangladesh.
                The application aims to streamline the hiring process by
                providing a quick efficient way for companies to connect with
                job seekers.
              </p>
              <p className="text-[20px] text-[#7A7C7D]">
                The application aims to streamline the hiring process by
                providing a quick efficient way for companies to connect with
                job seekers.
              </p>
            </div>
            <div className="card-actions lg:justify-start justify-center mt-10">
             <Link to='/recruiters-login' >

             <button className="bg-[#00A0DC] lg:w-[158px] md:w-[150px] lg:h-[55px] md:h-[50px] w-[120px] h-[40px] rounded">
                <p className="text-white lg:text-[20px] md:text-[18px] text-[16px] font-semibold">
                  {" "}
                  Hire Now
                </p>
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero lg:py-20 md:py-10 py-5">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="flex gap-5 lg:w-1/2">
            <img
              alt=""
              src={m1}
              className="mt-[px]  lg:w-[289px] lg:h-[289px] md:w-[300px] ounded rounded-lg  "
            ></img>

            <img
              alt=""
              src={m2}
              className="mt-[px]  lg:w-[289px] lg:h-[289px] md:w-[300px] ounded rounded-lg   hidden sm:block"
            ></img>
          </div>
          <div className="lg:w-1/2 lg:text-start md:text-center text-center">
            <p className="mb-14 text-[22px] text-[#7A7C7D]">
              By using AI technology, Bringin is able to match job seekers with
              relevant job opportunities, saving time and resources for both the
              employer and the candidatess. Additionally, the chat-based
              interface allows for easy communication and collaboration between
              both parties.
            </p>
            <p className=" text-[22px] text-[#7A7C7D]">
              Overall, Bringin is an innovative solution for the companies
              looking to hire quickly and efficiently in Bangladesh.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:block md:block hidden mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:my-[150px] md:my-[70px] my-[30px] ">
        <div className="lg:flex md:flex  lg:justify-around md:justify-around  lg:ml-0 md:ml-0 ml-[60px]   ">
          <div>
            <div className="text-center lg:mb-0 md:mb-0 mb-10">
              <p className="lg:text-[40px] md:text-[40px] text-[24px] ">15K</p>
              <p className="lg:text-[15px] md:text-[15] text-[14px] lg:font-medium md:font-medium  font-light	">
                Jobs Added
              </p>
            </div>
          </div>
          <div className="text-center lg:mb-0 md:mb-0 mb-10">
            <p className="lg:text-[40px] md:text-[40px] text-[24px] ">15K</p>
            <p className="lg:text-[15px] md:text-[15] text-[14px] lg:font-medium md:font-medium  font-light	">
              Active Users
            </p>
          </div>
          <div className="text-center">
            <p className="lg:text-[40px] md:text-[40px] text-[24px] ">9K</p>
            <p className="lg:text-[15px] md:text-[15px] text-[14px] lg:font-medium md:font-medium font-light">
              Positions Matched
            </p>
          </div>
        </div>
        <div className="lg:mr-0 md:mr-0 mr-24">
          <div className="flex lg:mt-10 md:mt-0 mt-0  lg:rotate-0 md:rotate-0  rotate-90">
            <div className="flex ml-5">
              <div className="lg:ml-[160px] ml-[20px] md:ml-[90px]">
                <img alt="" src={k} className=" w-[20px] " />
              </div>
              <div className="h-[1px] lg:w-[400px] md:w-[240px] w-[80px] bg-[#00A0DC] mt-[10px]"></div>
            </div>
            <div className="flex">
              <div>
                <img alt="" src={k} className=" w-[20px] " />
              </div>
              <div className="h-[1px] lg:w-[420px] w-[100px] md:w-[250px] bg-[#00A0DC] mt-[10px] "></div>
            </div>
            <div className="flex">
              <div>
                <img alt="" src={k} className="ml- w-[20px] " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-14 mb-5">
        <div className="lg:hidden md:hidden block flex ">
          <div className=" mt-5">
            <div className="  ">
              <div className=" ">
                <div className="">
                  <img alt="" src={k} className=" w-[15px] " />
                </div>
                <div className="w-[0.4px]  h-[80px] bg-[#A8D7BB] ml-[7px]"></div>
              </div>
              <div className="">
                <div>
                  <img alt="" src={k} className=" w-[15px] " />
                </div>
                <div className="w-[0.4px] h-[80px]  bg-[#A8D7BB] ml-[7px] "></div>
              </div>
              <div className="">
                <div>
                  <img alt="" src={k} className=" w-[15px] " />
                </div>
              </div>
            </div>
          </div>

          <div className=" ml-[60px]   ">
            <div>
              <div className="text-center  mb-[40px]">
                <p className="lg:text-[40px] md:text-[40px] text-[24px] ">
                  15K
                </p>
                <p className="lg:text-[15px] md:text-[15] text-[14px] lg:font-medium md:font-medium  font-light	">
                  Jobs Added
                </p>
              </div>
            </div>
            <div className="text-center  mb-[40px]">
              <p className="lg:text-[40px] md:text-[40px] text-[24px] ">15K</p>
              <p className="lg:text-[15px] md:text-[15] text-[14px] lg:font-medium md:font-medium  font-light	">
                Active Users
              </p>
            </div>
            <div className="text-center">
              <p className="lg:text-[40px] md:text-[40px] text-[24px] ">9K</p>
              <p className="lg:text-[15px] md:text-[15px] text-[14px] lg:font-medium md:font-medium font-light">
                Positions Matched
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero lg:h-[468px] bg-[#CCE4F0] lg:mt-0 md:mt-0 mt-0 w-full">
        <div className="hero-content text-center">
          <div className="">
            <div>
              <h1 className="lg:text-[40px] md:text-[30px] text-[25px] font-semibold">
                Find your next opportunity with ease using Bringin
              </h1>
              <p className="text-[#545E63] text-center lg:px-36 lg:text-[27px] md:text-[25px] text-[20px]">
                The AI-driven first chat-based hiring app in Bangladesh.
                Experience instant & comfortable hiring, connecting top talents
                with right job. Start your journey to success now.
              </p>
            </div>

            <div className="hero-content gap-10 mt-10 ">
              <div className="">
                <label
                  htmlFor="my-modal-9"
                  className="lg:w-[207px] md:w-[180px] px-[25px] py-[20px] w-[120px] bg-white lg:h-[65px] md:h-[53px] h-[40px] text-black lg:text-[23px] md:text-[20px] text-[14px] text-[#00A0DC] font-semibold  rounded-md cursor-pointer"
                >
                  {" "}
                  Download App
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero lg:py-20 md:py-16 py-5 p-2">
        {blogs.map((da, i) => (
          <div
            key={da._i}
            className={slideIndex === i + 1 ? "slide active" : "slide"}
          >
            <div className="hero-content  flex-col lg:flex-row gap-24 app__slider">
              <img
                src={da.img}
                alt=""
                className="mt-[px]  lg:w-[540px] md:w-[500px] md:h-[500px] lg:h-[418px] ounded rounded-lg"
              ></img>

              <div className=" lg:w-1/2 md:w-2/3">
                <div className="">
                  <div>
                    <div className="pb-6 lg:text-[30px] md:text-[25px] text-[20px] flex">
                      <div>
                        <p> {da.about} </p>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-7 border-t-2"></hr>
                  <div>
                    <div className="">
                      <div className="flex justify-between items-center">
                        <div>
                          <h1 className="text-[25px] ">{da.name}</h1>
                          <h1 className="text-[#7A7C7D]">{da.designation}</h1>
                        </div>

                        <div>
                          <button onClick={prevClickHandler}>
                            <img
                              alt=""
                              src={i1}
                              className="w-[28px] h-[28px] transform -scale-x-100"
                            />
                          </button>
                          <button
                            className="ml-[15px]"
                            onClick={nextClickHandler}
                          >
                            <img
                              alt=""
                              src={i1}
                              className="w-[28px] h-[28px]"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <AppLogo></AppLogo>
      </div>

      <div>
        <input type="checkbox" id="my-modal-9" className="modal-toggle" />
        <div className="modal w-full ">
          <div className="bg-white rounded-lg relative  lg:w-[850px]  lg:h-[530px] md:w-[750px] md:h-[550px] w-full h-full">
            <label
              htmlFor="my-modal-9"
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

export default AboutHero;
