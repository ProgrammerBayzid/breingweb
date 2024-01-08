import { Link } from "react-router-dom";

const NormalFooter = () => {
    return (
        <div>
            <div className="lg:h-[140px] h-[320px] bg-[#252525]  text-white ">
          <div className="flex justify-center lg:mt- pt-10 ">
            <div className="lg:text-start text-center">
              <div className="lg:flex  md:flex gap-x-3 items-center">
                <p className="text-[16px] font-medium ">Enterprise solutions</p>{" "}
                <p className="hidden lg:block md:hidden">|</p>
                <div>
                  <div className="lg:flex gap-x-3 items-center">
                    <Link
                      to="/pricing"
                      className="link link-hover text-[17px] text-[#005085] "
                    >
                      <p className="lg:mb-0 md:mb-0 mb-2 text-white">Pricing</p>
                    </Link>
                    <p className="hidden lg:block md:hidden">|</p>
                    <Link
                      to="/guidelines-seekers"
                      className="link link-hover text-[17px] text-[#005085] "
                    >
                      <p className="lg:mb-0 md:mb-0 mb-2 text-white">
                        Guideline
                      </p>
                    </Link>
                    <p className="hidden lg:block md:hidden">|</p>
                    <Link
                      to="/privacypolicy"
                      className="link link-hover text-[17px] text-[#005085] "
                    >
                      <p className="lg:mb-0 md:mb-0 mb-2 text-white">
                        Privacy policy
                      </p>
                    </Link>
                    <p className="hidden lg:block md:hidden">|</p>
                    <Link
                      to="/terms&conditions"
                      className="link link-hover text-[17px] text-[#005085] "
                    >
                      <p className="lg:mb-0 md:mb-0 mb-2 text-white">
                        Terms & conditions
                      </p>
                    </Link>
                    {/* <p className="hidden lg:block md:hidden">|</p> */}
                    {/* <Link
                      to="/terms&conditions"
                      className="link link-hover text-[17px] text-[#005085] "
                    >
                      <p className="lg:mb-0 md:mb-0 mb-2 text-white">
                        Cancellation & refund policy
                      </p>
                    </Link> */}
                  </div>
                </div>
                <img
                  loading="lazy"
                  className="w-[2px] h-[20px] hidden lg:block md:hidden"
                  alt="bringin image"
                  src="/images/liner.png"
                />
              </div>
            </div>
          </div>
          <p className="text-[15px] font-medium text-center mt-7 ">
            © Copyright Bringin Technologies Limited. All Rights Reserved.
          </p>
        </div>
        </div>
    );
};

export default NormalFooter;
