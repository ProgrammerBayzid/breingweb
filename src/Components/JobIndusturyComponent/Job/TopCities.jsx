import { Link } from "react-router-dom";
// import my from "../../../assets/cityimg/Mymensing Mask.svg";
import da from "../../../assets/cityimg/Dhaka Mask group.svg";
// import ca from "../../../assets/cityimg/Chittagong mask.svg";
// import ka from "../../../assets/cityimg/Khulna Mask.svg";
// import ra from "../../../assets/cityimg/Rajshahi Mask.svg";
// import sy from "../../../assets/cityimg/nilotpal-kalita-pJHaHQJ0PPk-unsplash 1.svg";
// import ba from "../../../assets/cityimg/Mask group.svg";
// import ras from "../../../assets/cityimg/Rangpur Mask.svg";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";

const TopCities = () => {
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

  console.log(cities);
  if (isLoding === false) {
    return <Spinner></Spinner>;
  }


  return (
    <div className="flex justify-center">
      <div>
        <div>
          <div className="mt-[68px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-20">
            <div className="mb-[46px]">
              <h1 className="text-[40px] font-medium text-center">
                Top Cities
              </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-[35px] md:gap-[30px] gap-2 justify-center">
              {cities.length > 0 && cities.map((b) => 
              <div key={b._id}>
                  <Link to={`/candidate/${b._id}`}>
                  <div className="">
                        <div className="mx-auto">
                          <img
                            alt="bringin image"
                            src={b.img}
                            className="mt-[15px]  w-[150px] lg:w-[200px] md:w-[175px]  lg:h-[175px] rounded rounded-[20px] "
                          ></img>
                        </div>
                        <div className="mt-3 items-center text-center">
                          <h2 className=" lg:text-[22px] md:text-[20px] text-[14px] text-[#023C5B] font-semibold">
                            {b.citiesName}
                          </h2>
                        </div>
                      </div>
                </Link>
              </div>
              )}

              {/* <Link href="/candidates">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] lg:h-[200px] md:h-[200px] h-[145px] bg-base-100 shadow-[0_8px_60px_rgb(0,0,0,0.1)] rounded rounded-[35px] ">
                  <div className="mx-auto">
                    <img
                      alt="bringin image"
                      src={ca}
                      className="mt-[15px]  w-[150px] lg:w-[175px] md:w-[175px]  lg:h-[127px] rounded  rounded-[20px]"
                    ></img>
                  </div>
                  <div className="mt-3 items-center text-center">
                    <h2 className=" lg:text-[20px] md:text-[20px] text-[14px]">
                      Chittagong
                    </h2>
                  </div>
                </div>
              </Link>
              <Link href="/candidates">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] lg:h-[200px] md:h-[200px] h-[145px] bg-base-100 shadow-[0_8px_60px_rgb(0,0,0,0.1)] rounded rounded-[35px] ">
                  <div className="mx-auto">
                    <img
                      alt="bringin image"
                      src={ka}
                      className="mt-[15px]  w-[150px] lg:w-[175px] md:w-[175px]  lg:h-[127px] rounded  rounded-[20px]"
                    ></img>
                  </div>
                  <div className="mt-3 items-center text-center">
                    <h2 className=" lg:text-[20px] md:text-[20px] text-[14px]">
                      Khulna
                    </h2>
                  </div>
                </div>
              </Link>

              <Link href="/candidates">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] lg:h-[200px] md:h-[200px] h-[145px] bg-base-100 shadow-[0_8px_60px_rgb(0,0,0,0.1)] rounded rounded-[35px] ">
                  <div className="mx-auto">
                    <img
                      alt="bringin image"
                      src={ra}
                      className="mt-[15px]  w-[150px] lg:w-[175px] md:w-[175px]  lg:h-[127px] rounded  rounded-[20px]"
                    ></img>
                  </div>
                  <div className=" mt-3  text-center">
                    <h2 className="lg:text-[20px] md:text-[20px] text-[14px] ">
                      Rajshahi
                    </h2>
                  </div>
                </div>
              </Link>
              <Link href="/candidates">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] lg:h-[200px] md:h-[200px] h-[145px] bg-base-100 shadow-[0_8px_60px_rgb(0,0,0,0.1)] rounded rounded-[35px] ">
                  <div className="mx-auto">
                    <img
                      alt="bringin image"
                      src={my}
                      className="mt-[15px]  w-[150px] lg:w-[175px] md:w-[175px]  lg:h-[127px] rounded  rounded-[20px]"
                    ></img>
                  </div>
                  <div className="mt-3 items-center text-center">
                    <h2 className=" lg:text-[20px] md:text-[20px] text-[14px]">
                      Mymensingh
                    </h2>
                  </div>
                </div>
              </Link>
              <Link href="/candidates">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] lg:h-[200px] md:h-[200px] h-[145px] bg-base-100 shadow-[0_8px_60px_rgb(0,0,0,0.1)] rounded rounded-[35px] ">
                  <div className="mx-auto">
                    <img
                      alt="bringin image"
                      src={sy}
                      className="mt-[15px]  w-[150px] lg:w-[175px] md:w-[175px]  lg:h-[127px] rounded  rounded-[20px]"
                    ></img>
                  </div>
                  <div className="mt-3 items-center text-center">
                    <h2 className=" lg:text-[20px] md:text-[20px] text-[14px]">
                      Sylhet
                    </h2>
                  </div>
                </div>
              </Link>
              <Link href="/candidates">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] lg:h-[200px] md:h-[200px] h-[145px] bg-base-100 shadow-[0_8px_60px_rgb(0,0,0,0.1)] rounded rounded-[35px] ">
                  <div className="mx-auto">
                    <img
                      alt="bringin image"
                      src={ba}
                      className="mt-[15px]  w-[150px] lg:w-[175px] md:w-[175px]  lg:h-[127px] rounded  rounded-[20px]"
                    ></img>
                  </div>
                  <div className="mt-3 items-center text-center">
                    <h2 className=" lg:text-[20px] md:text-[20px] text-[14px]">
                      Barishal
                    </h2>
                  </div>
                </div>
              </Link>
              <Link href="/candidates">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] lg:h-[200px] md:h-[200px] h-[145px] bg-base-100 shadow-[0_8px_60px_rgb(0,0,0,0.1)] rounded rounded-[35px]">
                  <div className="mx-auto">
                    <img
                      alt="bringin image"
                      src={ras}
                      className="mt-[15px]  w-[150px] lg:w-[175px] md:w-[175px]  lg:h-[127px] rounded  rounded-[20px]"
                    ></img>
                  </div>
                  <div className="mt-3 items-center text-center">
                    <h2 className=" lg:text-[20px] md:text-[20px] text-[14px]">
                      Rangpur
                    </h2>
                  </div>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCities;
