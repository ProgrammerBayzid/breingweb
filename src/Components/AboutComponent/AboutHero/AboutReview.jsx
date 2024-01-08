import { createRef, useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutReview = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null, // Remove the default previous arrow
    nextArrow: null, // Remove the default next arrow
  };

  const sliderRef = createRef();

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  if (isLoding === false) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="mt-10 lg:mx-[40px] md:mx-[10px] mx-[10px]">
        <div className="bg-[#E1F6FC] lg:h-[345px] h-[450px] relative    rounded rounded-[10px]   ">
          <div>
            <div>
              <div>
                <div className=" lg:pt-[70px] pt-[30px] lg:ml-[210px] md:ml-[210px]">
                  <Slider ref={sliderRef} {...settings}>
                    {blogs.map((card, index) => (
                      <div key={index} className="card ">
                        <div className="lg:w-[900px] w-[350px]">
                          <div className="lg:flex  gap-[50px] items-center ">
                            <div className="mb-3 lg:flex-none md:flex-none flex justify-center ">
                              <LazyLoadComponent
                                className="w-[200px] h-[200px] rounded rounded-full "
                                src={card.LazyLoadComponent}
                                effect="blur"
                              />
                            </div>
                            <div>
                              <p className="lg:text-[32px] md:text-[18px] text-[18px] font-bold text-[#023C5B] lg:text-start text-center">
                                {card.about}
                              </p>
                              <p className="lg:text-[22px] text-[#212427] text-[18px] font-medium my-3 lg:text-start text-center">
                                {card.name},{" "}
                                <span className="lg:text-[22px] text-[#53595D] text-[18px] font-medium lg:text-start text-center">
                                  {card.designation}
                                </span>{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="flex hidden lg:block justify-center lg:absolute lg:bottom-[20px] lg:right-[50px]">
                  <div>
                    <div className="">
                      <div className="flex justify-between items-center">
                        <div>
                          <button onClick={prevSlide}>
                            <LazyLoadComponent
                              alt="bringin image"
                              src="images/about/Group 11884.svg"
                              className="w-[25px] h-[25px] transform -scale-x-100"
                              effect="blur"
                            />
                          </button>
                          <button className="ml-[15px]" onClick={nextSlide}>
                            <LazyLoadComponent
                              alt="bringin image"
                              effect="blur"
                              src="images/about/Group 11884.svg"
                              className="w-[25px] h-[25px]"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center block lg:hidden">
                  <div>
                    <div className="">
                      <div className="flex justify-between items-center">
                        <div>
                          <button onClick={prevSlide}>
                            <LazyLoadComponent
                              alt="bringin image"
                              effect="blur"
                              src="images/about/Group 11884.svg"
                              className="w-[25px] h-[25px] transform -scale-x-100"
                            />
                          </button>
                          <button className="ml-[15px]" onClick={nextSlide}>
                            <LazyLoadComponent
                              alt="bringin image"
                              effect="blur"
                              src="images/about/Group 11884.svg"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutReview;
