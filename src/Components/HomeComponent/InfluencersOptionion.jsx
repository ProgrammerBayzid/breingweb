import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

export default function InfluencersOptionion() {
  const [bl, setbl] = useState([]);

  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/influencers")
      .then((res) => res.json())
      .then((data) => {
        setbl(data);
      });
  }, []);

  return (
    <div
    className="relative bg-[url(/src/bgimages/ibg.png)] bg-auto	 bg-bottom bg-no-repeat"     
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="lg:w-[990px]  md:w-[790px] mx-auto w-[350px] lg:h-[550px] md:h-[570px] h-[940px] mySwiper"
      >
        {bl.map((slide) => {
          return (
            <div key={slide._id} className="">
              <SwiperSlide>
                <div className=" lg:w-[800px] lg:ml-[100px]  md:ml-[110px] ml-[34px] md:w-[575px] w-[280px] bg-white lg:border-4 lg:border-[#A6DEF3] lg:border rounded rounded-[10px]   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_10px]">
                  <div className="p-7">
                    <div>
                      <div className=" lg:flex md:flex gap-7 ">
                        <div className="">
                          <img
                            className=" lg:rounded lg:rounded-2xl rounded rounded-[10px] lg:w-[222px] lg:h-[299px] "
                            alt="photo"
                            src={slide.img}
                          />
                        </div>
                        <div className="lg:w-2/3 md:w-2/3">
                          <div>
                            <h2 className="card text-[20px] font-semibold mt-2 lg:ml-0 md:ml-0 ml-[60px]">
                              {slide.name}
                            </h2>
                            <p className="text-[18px] lg:ml-0 md:ml-0  ml-[90px]">
                              {slide.role}
                            </p>

                            <p className="text-black lg:text-[17px] md:text-[16px] text-[15px] mt-5">
                              {slide.about}
                            </p>
                            <div className="flex justify-end mt-5">
                              <div className="flex gap-x-3">
                               <div className="mr-1">
                               <a href={slide.fb} target="_blank">
                                  {" "}
                                  <img
                                    alt="bringin image"
                                    src="./images/homeimg/Facebook.svg"
                                  />
                                </a>
                               </div>
                                <div className="pr-1">
                                <a href={slide.li} target="_blank">
                                  {" "}
                                  <img
                                    alt=""
                                    src="./images/LinkedIn.svg"
                                  />
                                </a>
                                </div>
                                <div>
                                <a href={slide.yt} target="_blank">
                                  {" "}
                                  <img
                                    alt="bringin image"
                                    src="./images/homeimg/Frame 10349.svg"
                                  />
                                </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
