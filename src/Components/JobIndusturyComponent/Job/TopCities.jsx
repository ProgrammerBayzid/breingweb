import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";

const TopCities = () => {
  const [cities, setcities] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  useEffect(() => {
    
    const script = document.createElement("script");

     
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1556748687572177";
    script.async = true;
    script.crossOrigin = "anonymous";

     document.head.appendChild(script);

     return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    fetch("https://rsapp.unbolt.co/admin/location")
      .then((res) => res.json())
      .then((data) => {
        setcities(data);
        setIsLoding(true)
      });
  }, []);

  console.log(cities);
  if (isLoding === false) {
    return <Spinner></Spinner>;
  }


  return (
    <div className="flex justify-center">
      <div>
        <div>
          <div className="mt-[68px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:mb-20 md:mb-20 mb-4">
            <div className="lg:mb-[46px] md:mb-[40px] mb-[30px]">
              <h1 className="text-[40px] font-medium text-center">
                Top Cities
              </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-[35px] md:gap-[30px] gap-2 justify-center">
              {cities.length > 0 && cities.map((b) => 
              <div key={b._id}>
                  <Link to={`/candidates-division/${b.name}`}>
                  <div className="">
                        <div className="mx-auto">
                        <LazyLoadImage
              effect= "blur"
                            alt="bringin image"
                            src={b.img}
                            className="mt-[15px]  w-[150px] lg:w-[200px] md:w-[175px]  lg:h-[175px] rounded rounded-[20px] "
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
              )}

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCities;
