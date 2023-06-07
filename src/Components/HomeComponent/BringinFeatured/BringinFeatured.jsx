


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

export default function App() {



  const [bl, setbl] = useState([]);

  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/bringinfeatured")
      .then((res) => res.json())
      .then((data) => {
        setbl(data);
      });
  }, []);






  return (
    <>

    <h1 className="lg:text-[50px] md:text-[50px] text-[30px] text-center font-semibold lg:mb-16 md:mb-16 mb-7 ">
    <span className="text-[#0077B5]">Bringin</span> featured on
          </h1>
      <Swiper
       slidesPerView={1}
       spaceBetween={10}
       pagination={{
        type: "fraction",

      }}
       autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}

       breakpoints={{
         640: {
           slidesPerView: 1,
           spaceBetween: 20,
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 40,
         },
         1024: {
           slidesPerView: 3,
           spaceBetween: 50,
         },
       }}
       navigation={true}
       modules={[Pagination, Navigation, Autoplay]}
        className="lg:w-[990px] md:w-[790px] mx-auto w-[350px] mySwiper"
      >
      

{bl.map((slide)=>{
     return(
      <div key={slide._id} className="my-24">
                <SwiperSlide>

         <a href={slide.link} target="_blank" >
                <div>
                    <h1 className="text-[25px] font-semibold mb-4 ml-12">
                      {slide.name}
                    </h1>
                    <div className="card w-[220px] h-[275px] bg-[#0077B5]">
                      <div className="ml-[19px] mt-[11px]">
                        <div className="w-[275px] h-[255px] bg-white rounded shadow-xl ">
                          <div className="card-body items-center text-center">
                            <img
                            
                            alt=""
                              src={slide.img}
                              className="mt-[px] w-[230px] h-[50px] rounded "
                            ></img>
                            <div className="w-[220px] h-[2px] bg-[#0077B5] mt-5"></div>
                          </div>
                          <div>
                            <p className="px-5">{slide.about}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
          </a>     


                </SwiperSlide>

      </div>
     )
    })
  }

        
      </Swiper>
     
    </>
  );
}
