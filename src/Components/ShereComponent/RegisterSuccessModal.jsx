import { Link } from "react-router-dom";
import AppLogo from "../App/AppLogo";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const RegisterSuccessModal = ({ rvisible, rcloseModal }) => {
  if (!rvisible) return null;
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-40 backdrop-blur-[10px]">
      <div className="">
        <div className=" w-full ">
          <div className="bg-white lg:w-[850px]  lg:h-[560px] md:w-[750px] relative md:h-[550px] w-full h-full flex justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div>
              <div className=" ">
                <button
                  onClick={() => rcloseModal(false)}
                  className="cursor-pointer text-[25px] absolute right-4 top-2 text-black"
                >
                  ✕
                </button>
                <div className="">
                  <div className="">
                    <div>
                      <div className="mt-[30px]">
                        <h1 className="text-center text-[27px] font-semibold">
                          Congratulations! You’re
                        </h1>
                        <h1 className="text-center text-[27px] font-semibold">
                          successfully registered as Recruiter.
                        </h1>
                        <p className="text-[22px] font-small text-center text-[#454545]">
                          We will get in touch within 30 minutes.
                        </p>
                      </div>
                      <div className="flex justify-center my-[30px]">
                          <LazyLoadImage
              effect= "blur"
                          alt="bringin image"
                          src="/images/modal/Frame.svg"
                          className=""
                        />
                      </div>
                      <div className="mb-[5px]">
                        <h1 className="text-[27px] text-center">
                          Meanwhile,{" "}
                          <span className="text-[27px] font-semibold">
                            download the app!
                          </span>
                        <span className="text-[27px] text-center">
                          {" "}
                          & start instant hiring.{" "}
                        </span>
                        </h1>
                      </div>
                      <div className=" lg:block md:hidden hidden ">
                  <div className="flex justify-center mt-7">
                    <LazyLoadImage
              effect= "blur"
              className=" w-[283px] h-[42px]"
              src="/src/bgimages/playstorelogo.png"
            />
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

export default RegisterSuccessModal;


<div>
<div className="mt-[30px]">
  <h1 className="text-center text-[27px] font-semibold">
    Congratulations! You’re
  </h1>
  <h1 className="text-center text-[27px] font-semibold">
    successfully registered as Recruiter.
  </h1>
  <p className="text-[22px] font-small text-center text-[#454545]">
    We will get in touch within 30 minutes.
  </p>
</div>
<div className="flex justify-center my-[30px]">
    <LazyLoadImage
              effect= "blur"
    alt="bringin image"
    src="/images/modal/Frame.svg"
    className=""
  />
</div>
<div className="mb-[5px]">
  <h1 className="text-[27px] text-center">
    Meanwhile,{" "}
    <span className="text-[27px] font-semibold">
      download the app!
    </span>
  </h1>
  <h1 className="text-[27px] text-center">
    {" "}
    & start instant hiring.{" "}
  </h1>
</div>
<div className="flex justify-center  lg:block md:hidden hidden ">
  <AppLogo></AppLogo>
</div>
</div>