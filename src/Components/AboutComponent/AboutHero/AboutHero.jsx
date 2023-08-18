import { useEffect, useState } from "react";
import i1 from "../../../assets/about/Group 11884.svg";


import App from "../../../App.css";
import AppLogo from "../../App/AppLogo";

import useTitle from "../../../hooks/useTitle";
import Spinner from "../../Spinner/Spinner";
import { Link } from "react-router-dom";
import AppLinkModal from "../../ShereComponent/AppLinkModal";

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
    <div className=" mx-auto App ">
      <h1 className="text-center mt-[25px] lg:text-[42px] md;text-[35px] text-[30px] font-bold text-[#023C5B] ">
        About us
      </h1>

      <div className="relative lg:bg-[url(/src/bgimages/hotjobhome.png)] bg-auto	 bg-center bg-no-repeat">
        <div className="lg:h-[583px]">
          <div className="	 lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:mx-[40px] md:mx-[10px] mx-[10px] lg:gap-x-[60px]">
            <div className=" lg:mt-[60px] md:mt-[40px]  lg:h-[250px] lg:ml-0 md:ml-0 ml-16">
              <img
                className="  lg:w-[600px] lg:h-[357px] w-[250px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
                src="./images/about/abh.png"
                alt=""
              />
            </div>
            <div className="lg:text-start md:text-start text-center lg:w-1/2 md:w-1/2 lg:mt-[60px] md:mt-[40px] mt-4 py-2">
              <h1 className="lg:text-[37px] text-[22px] md:text-[24px] font-bold text-[#023C5B]">
                Who we are
              </h1>
              <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
                Bringin Technologies Limited started it’s journey on April 2023,
                is an AI-powered first chat-based instant hiring app which has
                specially designed for the startups and SMEs in Bangladesh.
                <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427]  my-7">
                  The application aims to streamline the hiring process by
                  providing a quick efficient way for companies to connect with
                  job seekers.
                </p>
              </p>
              <div className="mt-[33px] lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">
                <button className="bg-[#0077B5] font-bold w-[155px] h-[40px] text-white rounded rounded-[3px] text-[20px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal> */}
      </div>

      <div className="mt-10">
        <div className="relative lg:bg-[url(/src/bgimages/abg1.png)] bg-contain	 bg-center bg-no-repeat">
          <div className="lg:h-[550px] flex items-center">
            <div className="	 lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:mx-[40px] md:mx-[10px] mx-[10px] ">
              <div className=" lg:mt-[75px] md:mt-[40px]  lg:ml-0 md:ml-0 ml-16">
                <img
                  className="  lg:w-[450px] lg:h-[400px] w-[250px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
                  src="/images/aim2.png"
                  alt=""
                />
              </div>
              <div className="lg:text-start md:text-start text-center lg:w-1/2 md:w-1/2 lg:mt-[120px] md:mt-[40px] mt-4 py-2">
                <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
                  By using AI technology, Bringin is able to match job seekers
                  with relevant job opportunities, saving time and resources for
                  both the employer and the candidates. Additionally, the
                  chat-based interface allows for easy communication and
                  collaboration between both parties.
                  <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427]  my-7">
                    Overall, Bringin is an innovative solution for the companies
                    looking to hire quickly and efficiently in Bangladesh.
                  </p>
                </p>
              </div>
            </div>
          </div>
          {/* <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal> */}
        </div>
      </div>

      <div className="mt-10 lg:mx-[40px] md:mx-[10px] mx-[10px]">
        <div className="bg-[#E1F6FC] lg:h-[345px] h-[450px] relative w-full flex  justify-center rounded rounded-[10px]  items-center ">
          {blogs.map((da, i) => (
            <div
              key={da._i}
              className={slideIndex === i + 1 ? "slide active" : "slide"}
            >
              <div className="lg:w-[900px] w-[350px]  app ">
                <div className="lg:flex  gap-[50px] items-center ">
                  <div className="mb-3 lg:flex-none md:flex-none flex justify-center ">
                    <img
                      className="w-[200px] h-[200px] rounded rounded-full "
                      src={da.img}
                    />
                  </div>

                  <div>
                    <p className="lg:text-[32px] md:text-[18px] text-[18px] font-bold text-[#023C5B] lg:text-start text-center">
                      {da.about}
                    </p>
                    <p className="lg:text-[22px] text-[#212427] text-[18px] font-medium my-3 lg:text-start text-center">
                      {da.name},{" "}
                      <span className="lg:text-[22px] text-[#53595D] text-[18px] font-medium lg:text-start text-center">
                        {da.designation}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center block lg:hidden">
                <div>
                  <div className="">
                    <div className="flex justify-between items-center">
                      <div>
                        <button onClick={prevClickHandler}>
                          <img
                            alt="bringin image"
                            src={i1}
                            className="w-[25px] h-[25px] transform -scale-x-100"
                          />
                        </button>
                        <button
                          className="ml-[15px]"
                          onClick={nextClickHandler}
                        >
                          <img
                            alt="bringin image"
                            src={i1}
                            className="w-[25px] h-[25px]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex hidden lg:block justify-center lg:absolute lg:bottom-[20px] lg:right-[50px]">
                <div>
                  <div className="">
                    <div className="flex justify-between items-center">
                      <div>
                        <button onClick={prevClickHandler}>
                          <img
                            alt="bringin image"
                            src={i1}
                            className="w-[25px] h-[25px] transform -scale-x-100"
                          />
                        </button>
                        <button
                          className="ml-[15px]"
                          onClick={nextClickHandler}
                        >
                          <img
                            alt="bringin image"
                            src={i1}
                            className="w-[25px] h-[25px]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="relative lg:bg-[url(/src/bgimages/abg2.png)] bg-contain	 bg-center bg-no-repeat">
          <div className="lg:h-[550px] flex items-center">
            <div className="	 lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:mx-[40px] md:mx-[10px] mx-[10px] ">
              <div className=" lg:mt-[47px] md:mt-[40px]  lg:ml-0 md:ml-0 ml-16">
                <img
                  className="  lg:w-[450px] lg:h-[400px] w-[250px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
                  src="/images/about/abf.png"
                  alt=""
                />
              </div>
              <div className="lg:text-start md:text-start text-center lg:w-1/2 md:w-1/2 lg:mt-[140px] md:mt-[40px] mt-4 py-2">
                <h1 className="lg:text-[37px] text-[22px] md:text-[24px] font-bold text-[#023C5B]">
                  Find your next opportunity with ease using Bringin
                </h1>
                <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
                  The AI-driven first chat-based hiring app in Bangladesh.
                  Experience instant & comfortable hiring, connecting top
                  talents with right job. Start your journey to success now.
                </p>
              </div>
            </div>
          </div>
          {/* <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal> */}
        </div>
      </div>

      {/* <div className=" lg:py-20 md:py-16 py-20 px-5  lg:px-16 md:px-20">
        {blogs.map((da, i) => (
          <div
            key={da._i}
            className={slideIndex === i + 1 ? "slide active" : "slide"}
          >
            <div className=" px-2 lg:flex items-center gap-24 app__slider  lg:mx-[180px] ">
              <img
                src={da.img}
                alt="bringin image"
                className="md:ml-14  lg:w-[500px] md:w-[500px] md:h-[500px] lg:h-[418px] ounded rounded-lg"
              ></img>

              <div className=" mt-7">
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
                              alt="bringin image"
                              src={i1}
                              className="w-[28px] h-[28px] transform -scale-x-100"
                            />
                          </button>
                          <button
                            className="ml-[15px]"
                            onClick={nextClickHandler}
                          >
                            <img
                              alt="bringin image"
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
      </div> */}
      <div className="flex justify-center mt-10">
        <AppLogo></AppLogo>
      </div>
      <div>
        <AppLinkModal></AppLinkModal>
      </div>
    </div>
  );
};

export default AboutHero;
