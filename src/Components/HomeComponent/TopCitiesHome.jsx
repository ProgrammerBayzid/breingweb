import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const TopCitiesHome = () => {
  const [cities, setcities] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin/location")
      .then((res) => res.json())
      .then((data) => {
        setcities(data);
        setIsLoding(true);
      });
  }, []);

  const four = cities.slice(0, 4);
  console.log(four);
    if (isLoding === false) {
      return <Spinner></Spinner>;
    }

  return (
    <div className="relative lg:mx-[40px] mx-[10px] md:mx-[10px]">
      <div>
        <div>
          <div className="lg:mt-[78px]  md:mt-[78px]  mt-[30px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="mb-[15px] lg:mb-[45px] md:mb-[40px]">
              <h1 className=" text-center lg:text-[38px]  md:text-[32px] text-[22px] font-bold text-[#023C5B]">
                Top cities
              </h1>
              <div className="hidden lg:block md:block">
                <Link to="/top-cities">
                  <button className="absolute   top-4 right-0  text-[16px] font-medium text-[#023C5B] border rounded rounded-[10px]  w-[60px] h-[35px] hover:bg-[#0077B5] hover:text-white">
                    More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-[35px] md:gap-[30px] gap-2 justify-center">
                {four.length > 0 &&
                  four.map((b) => (
                    <div key={b._id}>
                      <Link to={`/candidates-division/${b.name}`}>
                        <div className="">
                          <div className="mx-auto">
                          <LazyLoadImage
              effect= "blur"
                              alt="bringin image"
                              src={b.img}
                              loading="lazy"
                              className="mt-[15px]  w-[150px] lg:h-[150px] lg:w-[200px] md:w-[175px] md:h-[175px]  lg:h-[175px] rounded rounded-[20px] "
                            ></LazyLoadImage>
                          </div>
                          <div className="mt-3 items-center text-center">
                            <h2 className=" lg:text-[22px] md:text-[20px] text-[14px] text-[#023C5B] font-semibold">
                              {b.name}
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            <div className="block lg:hidden md:hidden lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center mg:mt-0 md:mt-0 mt-7">
              <Link to="/top-cities">
                <button className=" text-[16px] font-medium text-[#023C5B] border rounded rounded-[10px]  w-[100px] h-[35px] hover:bg-[#0077B5] hover:text-white">
                  More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCitiesHome;
