import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
        className="lg:w-[990px]  md:w-[790px] mx-auto w-[380px] lg:h-[550px] md:h-[570px] h-[940px] mySwiper"
      >
        {bl.map((slide) => {
          return (
            <div key={slide._id} className="">
              <SwiperSlide>
                <div className="lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">

                <div className=" lg:w-[820px] lg:ml-[90px]  md:ml-[110px] ml-0  md:w-[575px] w-[320px] bg-white lg:border-4 lg:border-[#A6DEF3] lg:border rounded lg:rounded-[60px] rounded-[20px]   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_10px] ">
                  <div className="lg:p-7 p-4">
                    <div>
                      <div className=" lg:flex md:flex gap-7 ">
                        <div className=" lg:flex-none md:flex-none flex justify-center">
                             <LazyLoadImage
              effect= "blur"
                            className=" lg:rounded lg:rounded-2xl rounded rounded-[10px] lg:w-[222px] lg:h-[300px] md:w-[185px] md:h-[250px] w-[240px] h-[300px] my-1"
                            alt="photo"
                            loading="lazy"
                            src={slide.img}
                            
                          />
                        </div>
                        <div className="lg:w-2/3 md:w-2/3">
                          <div>
                            <h2 className="card text-[20px] font-semibold mt- lg:ml-0 md:ml-0 text-center lg:text-start md:text-start">
                              {slide.name}
                            </h2>
                            <h2 className="text-[18px] lg:ml-0 md:ml-0  text-center lg:text-start md:text-start text-[#212427] font-medium">
                              {slide.role}
                            </h2>

                            <h3 className="text-[#212427]  lg:text-[18px] md:text-[16px] text-[15px] mt-3">
                              {slide.about}
                            </h3>
                            <div className="flex justify-end mt-5">
                              <div className="flex gap-x-5">
                               <div className="mr-1">
                               <a href={slide.fb} target="_blank">
                                  {" "}
                                     <LazyLoadImage
              effect= "blur"
                                    alt="bringin image"
                                    src="./images/homeimg/Facebook.svg"
                                    loading="lazy"

                                  />
                                </a>
                               </div>
                                <div className="pr-1">
                                <a href={slide.li} target="_blank">
                                  {" "}
                                     <LazyLoadImage
              effect= "blur"
                                    alt=""
                                    src="./images/LinkedIn.svg"
                                    loading="lazy"

                                  />
                                </a>
                                </div>
                                <div>
                                <a href={slide.yt} target="_blank">
                                  {" "}
                                     <LazyLoadImage
              effect= "blur"
                                    alt="bringin image"
                                    src="./images/homeimg/Frame 10349.svg"
                                    loading="lazy"

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
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
