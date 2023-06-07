import { Link } from "react-router-dom";
import hotFindmore from "../../../assets/homeimg/hotFindmore.svg";
import da from "../../../assets/homeimg/Dhaka Mask group.svg";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";

const TopClint = () => {
  const [cities, setcities] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    fetch("https://bringinserver-v1.vercel.app/cities")
      .then((res) => res.json())
      .then((data) => {
        setcities(data);
        setIsLoding(true)
      });
  }, []);

  const four = cities.slice(0,4)
  console.log(four);
  if (isLoding === false) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="flex justify-center">
      <div>
        <div>
          <div className="mt-[68px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-20">
            <div className="mb-[46px]">
              <h1 className="lg:text-[40px] md:text-[40px] text-[30px]  font-semibold  text-center">
                Top Cities
              </h1>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 lg:gap-[35px] md:gap-[30px] gap-2 justify-center">
              {four.length > 0 &&
                four.map((b) => (
                  <div key={b._id}>
                    <Link to={`/candidate/${b._id}`}>
                      <div className="card  lg:w-[200px] md:w-[200px] w-[160px] lg:h-[200px] md:h-[200px] h-[145px] bg-base-100 shadow-[0_8px_60px_rgb(0,0,0,0.1)] rounded rounded-[35px] ">
                        <div className="mx-auto">
                          <img
                            alt=""
                            src={b.img}
                            className="mt-[15px]  w-[150px] lg:w-[175px] md:w-[175px]  lg:h-[127px] rounded rounded-[20px]"
                          ></img>
                        </div>
                        <div className="mt-3 items-center text-center">
                          <h2 className=" lg:text-[20px] md:text-[20px] text-[14px]">
                            {b.citiesName}
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              <Link to="/top-cities">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] lg:h-[200px] md:h-[200px] h-[145px] bg-base-100 shadow-[0_8px_60px_rgb(0,0,0,0.1)] rounded rounded-[35px]  justify-center">
                  <div className=" items-center text-center mt-5 mb-5">
                    <h2 className="lg:text-[20px] md:text-[23px] text-[14px]">
                      Explore More
                    </h2>
                  </div>
                  <div className="mx-auto">
                    <img
                      alt=""
                      src={hotFindmore}
                      className=" rounded lg:w-[30px] md:w-[30] w-[25px]"
                    ></img>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopClint;
