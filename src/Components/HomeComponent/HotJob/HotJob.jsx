import { Link } from "react-router-dom";
import hotFindmore from '../../../assets/homeimg/hotFindmore.svg'

 
const HotJob = () => {
  return (
    <div className=" flex justify-center">
      <div>
        <div className="mt-[67px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="mb-[46px]  ">
            <h1 className=" lg:text-[40px] md:text-[40px] text-[30px]  font-semibold  text-center">
            Hot Job Categories            </h1>
          </div>
          <div className=" lg:ml-0 md:ml-2 ml-3">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-[30px] md:gap-[30px] gap-[20px]  justify-center">
              <Link href="/catagory">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] relative h-[130px] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]">
                  <div className="py-5 px-7">
                    <h2 className="lg:text-[20px] md:text-[20px] text-[14px] leading-[22px]">
                      IT Engineering
                    </h2>
                    <p className="lg:text-[16px] md:text-[16px] text-[#7A7C7D] text-[14px] absolute bottom-4">
                      120+ candidatess
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/catagory">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] relative  h-[130px] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]">
                  <div className="py-5 px-7">
                    <h2 className="lg:text-[20px] md:text-[20px] text-[14px] leading-[22px]">
                      Operations
                    </h2>
                    <p className="lg:text-[16px] md:text-[16px] text-[#7A7C7D] text-[14px] absolute bottom-4 ">
                      90+ candidatess
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/catagory">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] relative  h-[130px] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]">
                  <div className="py-5 px-7">
                    <h2 className="lg:text-[20px] md:text-[20px] text-[14px] leading-[22px]">
                      Marketing
                    </h2>
                    <p className="lg:text-[16px] md:text-[16px] text-[#7A7C7D] text-[14px] absolute bottom-4 ">
                      80+ candidatess
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/catagory">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px] relative  h-[130px] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]">
                  <div className="py-5 px-7">
                    <h2 className="lg:text-[20px] md:text-[20px] text-[14px] leading-[22px]">
                      Sales & BD
                    </h2>
                    <p className="lg:text-[16px] md:text-[16px] text-[#7A7C7D] text-[14px] absolute bottom-4 ">
                      95+ candidatess
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/jobindustry">
                <div className="card lg:w-[200px] md:w-[200px] w-[160px]  h-[130px] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)]">
                  <div className="lg:flex md:flex gap-5  my-auto items-center lg:pl-[35px] md:pl-[35px] pl-[45px]">
                    <img
                      src={hotFindmore}
                      className="lg:w-[20px] md:w-[20] w-[18px] rounded lg:ml-0 md:ml-1 ml-[22px]"
                    ></img>

                    <h2 className=" lg:text-[20px] md:text-[20px] text-[14px]">
                      Find More
                    </h2>
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

export default HotJob;
