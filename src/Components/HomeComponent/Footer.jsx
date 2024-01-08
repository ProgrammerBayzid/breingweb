import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Footer = () => {
  return (
    <section>
      <section className=" hidden lg:block  ">
        <div className="lg:h-[450px]    ">
          <div className="lg:mx-[40px] mx-[10px] md:mx-[10px] mt-[80px]">
            <div className=" flex gap-[200px]  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <div className="">
                <LazyLoadImage
                  effect="blur"
                  alt="bringin image"
                  loading="lazy"
                  src="/images/navlogo.svg"
                  className="cursor-pointer w-[134px] h-[56px] mb-2 "
                ></LazyLoadImage>

                <div className="">
                  <div className="flex items-center gap-2 mb-4">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      loading="lazy"
                      src="/images/email.png"
                      className="w-[20px] h-[20px] h-auto "
                    ></LazyLoadImage>
                    <p className="text-[17px] text-[#005085] ml-1 font-[400px]  ">
                    hello@unbolt.co
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 mb-4">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      loading="lazy"
                      src="/images/whatsup.png"
                      className="w-[20px] h-[20px] h-auto"
                    ></LazyLoadImage>
                    <p className="text-[17px] text-[#005085] font-[400px]  ">
                      +8801756175141
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 ">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      loading="lazy"
                      src="/images/location.png"
                      className="w-[23px] h-[23px]  h-auto"
                    ></LazyLoadImage>
                    <p className="text-[17px] text-[#005085] font-[400px]  ">
                      Plot 25, Road 04, Sector 10,
                    </p>
                  </div>
                  <p className="text-[17px] text-[#005085] font-[400px] text-start ml-[30px]  ">
                    Uttara, Dhaka
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex gap-[50px]">
                  <div className=" ">
                    <span className="text-[20px] text-[#212427] font-bold  text-center  mb-[16px]">
                      Recruiters{" "}
                    </span>
                    <p className="my-[7px]">
                      <Link
                        to="/pricing"
                        className="link link-hover text-[19px] text-[#005085] text-center mb-2  "
                      >
                        Pricing
                      </Link>
                    </p>
                    <p className="my-[7px]">
                      <Link
                        to="/enterprise-hiring"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Enterprise solutions
                      </Link>
                    </p>
                    <p className="my-[7px]">
                      <Link
                        to="/recruiters-faqs"
                        className="link link-hover text-[19px] text-[#005085]"
                      >
                        FAQs
                      </Link>
                    </p>
                  </div>

                  <div className=" ">
                    <span className="text-[20px] text-[#212427] font-bold  mb-[16px]">
                      Job seekers
                    </span>
                    <p className="my-[7px]">
                      <Link
                        to="/guidelines-seekers"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Guideline
                      </Link>
                    </p>
                    <p className="my-[7px]">
                      <Link
                        to="/job-seekers-faqs"
                        className="link link-hover text-[19px] text-[#005085]  "
                      >
                        FAQs
                      </Link>
                    </p>
                  </div>

                  <div className="">
                    <span className="text-[20px] text-[#212427] font-bold  mb-[16px] ">
                      Unbolt
                    </span>
                    <p className="my-[7px]">
                      <Link
                        to="/in"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Home
                      </Link>
                    </p>
                    <p className="my-[7px]">
                      <Link
                        to="/about-us"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        About us{" "}
                      </Link>
                    </p>

                    <p className="my-[7px]">
                      <Link
                        to="/blog"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Blogs
                      </Link>
                    </p>

                    <p className="my-[7px]">
                      <Link
                        to="/privacy-policy"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Privacy policy
                      </Link>
                    </p>
                    <p className="my-[7px]">
                      <Link
                        to="/terms-and-conditions"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Terms & conditions
                      </Link>
                    </p>
                    <p className="my-[7px]">
                      <Link
                        to="/cancellation-and-refund-policy"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Cancellation & refund policy
                      </Link>
                    </p>
                    <p className="my-[7px]">
                      <Link
                        to="/contactus"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Contact us
                      </Link>
                    </p>
                  </div>

                  <div className="">
                    <span className="text-[20px] text-[#212427] font-bold  mb-[16px]">
                      Follow us
                    </span>
                    <p>
                      <a
                        href="https://www.linkedin.com/company/unboltapp/"
                        target="_blank"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        LinkedIn
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.facebook.com/unboltapp/"
                        target="_blank"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Facebook
                      </a>
                    </p>

                    <p>
                      <a
                        href="https://www.youtube.com/@Unboltapp"
                        target="_blank"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Youtube
                      </a>
                    </p>

                    <p>
                      <a
                        href="https://www.twitter.com/unboltapp/"
                        target="_blank"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Twitter
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.instagram.com/unboltapp/"
                        target="_blank"
                        className="link link-hover text-[19px] text-[#005085] mb-2  "
                      >
                        Instagram
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#004D80] h-[250px]">
            <div className="mt-[70px]">
              <div className="pt-[50px]">
                <div className="h-[80px] bg-[#004D80] flex justify-center">
                  <div className="flex items-center gap-x-10">
                    <div>
                      <LazyLoadImage
                        effect="blur"
                        className="h-[95px] w-[115px]"
                        src="/images/DRSwdisclaimer.png"
                      />
                    </div>
                    <div>
                      <p className="text-[26px] font-semibold text-white">
                        Secure Payment
                      </p>
                    </div>
                    <div>
                      <LazyLoadImage
                        effect="blur"
                        className="h-[67px] w-[558px]"
                        src="/images/FOOTER-aamarPay.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[2px] bg-white mt-10 mx-[55px] "></div>
              <p className="text-center lg:text-[19px] text-white mt-2 font-medium">
                © Copyright Bringin Technologies Limited. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="  block lg:hidden  ">
        <div className="lg:h-[400px]  md:mt-[30px] mt-[15px]  ">
          <div>
            <div className=" lg:mx-[40px] mx-[10px] md:mx-[10px]">
              <div className="">
                <div className=" flex justify-center  lg:ml-0">
                  <div>
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      loading="lazy"
                      src="/images/navlogo.svg"
                      className="cursor-pointer w-[134px] h-[55px] "
                    ></LazyLoadImage>
                  </div>
                </div>
                <div className="mt- ">
                  <div className="flex items-center  justify-center mb-4">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      loading="lazy"
                      src="/images/email.png"
                      className="w-[20px] h-[20px] h-auto "
                    ></LazyLoadImage>
                    <p className="text-[18px] text-[#005085] ml-3  ">
                    hello@unbolt.co
                    </p>
                  </div>
                  <div className="flex  items-center  mt-2  justify-center mb-4">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      loading="lazy"
                      src="/images/whatsup.png"
                      className="w-[20px] h-[20px] h-auto mr-2"
                    ></LazyLoadImage>
                    <p className="text-[17px] text-[#005085]  ">
                      +8801756175141
                    </p>
                  </div>
                  <div className="flex justify-center  mt-2 mb-4">
                    <LazyLoadImage
                      effect="blur"
                      alt="bringin image"
                      loading="lazy"
                      src="/images/location.png"
                      className="w-[23px] h-[23px] mt-1"
                    ></LazyLoadImage>
                    <p className="text-[17px]   text-[#005085] ml-2">
                      Plot 25, Road 04,<br></br> Sector 10, Uttara, <br></br>{" "}
                      Dhaka
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="mt-10">
                  <p className="text-[19px]   text-center text-[#005085] font-semibold mb-4 ">
                    Recruiters{" "}
                  </p>
                  <Link
                    to="/pricing"
                    className="link link-hover       text-[19px] text-[#005085] text-center "
                  >
                    <p className="mb-3">Pricing</p>
                  </Link>
                  <Link
                    to="/enterprise-hiring"
                    className="text-center link link-hover      text-[19px] text-[#005085] "
                  >
                    <p className="mb-3"> Enterprise solutions</p>
                  </Link>
                  <Link
                    to="/recruiters-faqs"
                    className="link link-hover      text-[19px] text-[#005085]"
                  >
                    <p className="mb-3">FAQs</p>
                  </Link>
                </div>
                <div className="  ">
                  <p className="text-[19px] text-center  text-[#005085] font-semibold mb-4">
                    Job seekers
                  </p>
                  <Link
                    to="/guidelines-seekers"
                    className="link link-hover      text-[19px] text-[#005085] "
                  >
                    <p className="mb-3">Guideline</p>
                  </Link>
                  <Link
                    to="/jobseekersfaq"
                    className="link link-hover      text-[19px] text-[#005085]"
                  >
                    <p className="mb-4">FAQs</p>
                  </Link>
                </div>
                <div className="">
                  <p className="text-[19px] text-center text-[#005085] font-semibold mb-4">
                  Unbolt
                  </p>
                  <Link
                    to="/in"
                    className="link link-hover      text-[19px] text-[#005085] "
                  >
                    <p className="mb-3">Home</p>
                  </Link>
                  <Link
                    to="/aboutus"
                    className="link link-hover      text-[19px] text-[#005085] mb-3"
                  >
                    <p className=""></p>About us{" "}
                  </Link>

                  <Link
                    to="/blog"
                    className="link link-hover      text-[19px] text-[#005085] "
                  >
                    <p className="my-3">Blogs</p>
                  </Link>

                  <Link
                    to="/privacypolicy"
                    className="link link-hover      text-[19px] text-[#005085] "
                  >
                    <p className="mb-3">Privacy policy</p>
                  </Link>

                  <Link
                    to="/terms-and-conditions"
                    className="link link-hover      text-[19px] text-[#005085] "
                  >
                    <p className="mb-3">Terms & conditions</p>
                  </Link>
                  <Link
                    to="/cancellation-and-refund-policy"
                    className="link link-hover      text-[19px] text-[#005085] "
                  >
                    <p className="mb-4">Cancellation & refund policy</p>
                  </Link>
                  <Link
                    to="/contactus"
                    className="link link-hover      text-[19px] text-[#005085] "
                  >
                    <p className="my-3">Contact us</p>
                  </Link>
                </div>
                <div className=" ">
                  <p className="text-[19px]  text-[#005085] font-semibold mb-4">
                    Follow us
                  </p>

                  <a
                    href="https://www.linkedin.com/company/unboltapp/"
                    className="link link-hover       text-center text-[19px] text-[#005085] "
                  >
                    <p className="text-center mb-3">LinkedIn</p>
                  </a>
                  <a
                    href="https://www.facebook.com/unboltapp/"
                    className="link link-hover       text-center  text-[19px] text-[#005085] text-center "
                  >
                    <p className="mb-3">Facebook</p>
                  </a>
                  <a
                    href="https://www.youtube.com/@Unboltapp"
                    className="link link-hover       text-center  text-[19px] text-[#005085] "
                  >
                    <p className="mb-3">Youtube</p>
                  </a>
                  <a
                    href="https://www.twitter.com/unboltapp/  "
                    className="link link-hover       text-center   text-[19px] text-[#005085] "
                  >
                    <p className="mb-3">Twitter</p>
                  </a>
                  <a
                    href="https://www.instagram.com/unboltapp/"
                    className="link link-hover       text-center   flex justify-center text-[19px] text-[#005085] "
                  >
                    <p className="mb-3">Instagram</p>
                  </a>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="bg-[#004D80] lg:h-[250px] md:h-[250px] h-[250px] ">
                <div className="mt-[30px]">
                  <div className="lg:pt-[50px] md:pt-[50px] pt-[30px]">
                    <div className="h-[80px] bg-[#004D80] ">
                      <div className="">
                        <div className="flex justify-center">
                          <LazyLoadImage
                            effect="blur"
                            className="h-[65px] w-[75px]"
                            src="/images/DRSwdisclaimer.png"
                          />
                        </div>
                        <div className="flex justify-center mt-1">
                          <p className="text-[20px] font-bold text-white">
                            Secure Payment
                          </p>
                        </div>
                        <div className="flex justify-center mt-1">
                          <LazyLoadImage
                            effect="blur"
                            className="h-[50px] w-[350px]"
                            src="/images/FOOTER-aamarPay.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[2px] bg-white md:mt-10 lg:mt-0 mt-20  lg:mx-[55px] md:mx-[55px] mx-2 "></div>
                  <p className="text-center lg:text-[19px] text-white mt-2 ">
                    © Copyright Bringin Technologies Limited. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
