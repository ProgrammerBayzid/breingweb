import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const RecruterFooter = () => {
  return (
    <div className="bg-white w-full py-3 ">
      <div className="flex justify-center ">
        <div className="lg:text-start text-center">
          <div className="lg:flex lg:flex-row-reverse  md:flex md:flex-row-reverse lg:gap-x-3 items-center hidden lg:block ">
            <div>
              <div className="lg:flex lg:gap-x-3 items-center">
                <Link
                  to="/privacypolicy"
                  className="link link-hover text-[17px] text-[#005085] "
                >
                  <p className="lg:mb-0 md:mb-0 ">Privacy policy</p>
                </Link>
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  className="w-[2px] h-[20px] hidden lg:block md:hidden"
                  alt="bringin image"
                  src="/images/liner.png"
                />
                <Link
                  to="/terms&conditions"
                  className="link link-hover text-[17px] text-[#005085] "
                >
                  <p className="lg:mb-0 md:mb-0 ">Terms & conditions</p>
                </Link>
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  className="w-[2px] h-[20px] hidden lg:block md:hidden"
                  alt="bringin image"
                  src="/images/liner.png"
                />
                <Link
                  to="/pricing"
                  className="link link-hover text-[17px] text-[#005085] "
                >
                  <p className="lg:mb-0 md:mb-0 ">Pricing</p>
                </Link>
              </div>
            </div>
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              className="w-[2px] h-[20px] hidden lg:block md:hidden"
              alt="bringin image"
              src="/images/liner.png"
            />
            <p className="text-[16px] font-medium text-[#212427]">
              © Copyright Bringin Technologies Limited. All Rights Reserved.
            </p>
          </div>
          <div className=" flex justify-center block lg:hidden md:hidden mt-7">
            <div>
              <div className=" items-center">
                <Link
                  to="/privacypolicy"
                  className="link link-hover text-[17px] text-[#005085] mb-[30px]"
                >
                  <p className=" ">Privacy policy</p>
                </Link>
                
                <Link
                  to="/terms&conditions"
                  className="link link-hover text-[17px] text-[#005085] mb-[30px]"
                >
                  <p className="">Terms & conditions</p>
                </Link>
                
                <Link
                  to="/pricing"
                  className="link link-hover text-[17px] text-[#005085] mb-[30px]"
                >
                  <p className="">Pricing</p>
                </Link>
              </div>
            <p className="text-[16px] font-medium text-[#212427]">
              © Copyright Bringin Technologies Limited. All Rights Reserved.
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruterFooter;
