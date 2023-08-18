import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <section className=" hidden lg:block  ">
        <div className="lg:h-[450px]    ">
          <div className="lg:mx-[40px] mx-[10px] md:mx-[10px] mt-[130px]">
            <div className=" flex gap-[200px]  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <div className="">
                <img
                  alt="bringin image"
                  src="/images/navlogo.svg"
                  className="cursor-pointer w-[220px]"
                ></img>
               

                <div className="mt-10">
                  <div className="flex items-center gap-2 mb-4">
                    <img
                      alt="bringin image"
                      src="/images/email.png"
                      className="w-[20px] h-auto "
                    ></img>
                    <p className="text-[17px] text-[#005085] ml-1 font-[400px]">
                      hello@bringin.io
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 mb-4">
                    <img
                      alt="bringin image"
                      src="/images/whatsup.png"
                      className="w-[20px] h-auto"
                    ></img>
                    <p className="text-[17px] text-[#005085] font-[400px]">
                      +8801756175141
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 ">
                    <img
                      alt="bringin image"
                      src="/images/location.png"
                      className="w-[23px] h-auto"
                    ></img>
                    <p className="text-[17px] text-[#005085] font-[400px]">
                      Plot 25, Road 04, Sector 10,
                    </p>
                  </div>
                  <p className="text-[17px] text-[#005085] font-[400px] text-start ml-[30px]">
                    Uttara, Dhaka
                  </p>
                </div>
              </div>
              <div>
                <div className="flex gap-[50px]">
                  <div className=" ">
                    <span className="text-[20px] text-[#212427] font-bold  text-center  mb-[16px]">
                      Recruiters{" "}
                    </span>
                    <p className="my-[5px]">
                      <Link
                        to="/pricing"
                        className="link link-hover text-[18px] text-[#005085] text-center mb-2"
                      >
                        Pricing
                      </Link>
                    </p>
                    <p className="my-[5px]">
                      <Link
                        to="/enterprisesolutions"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
Enterprise solutions
                      </Link>
                    </p>
                    <p className="my-[5px]">
                      <Link
                        to="/recruitersfaq"
                        className="link link-hover text-[18px] text-[#005085]"
                      >
                        FAQs
                      </Link>
                    </p>
                  </div>

                  <div className=" ">
                    <span className="text-[20px] text-[#212427] font-bold  mb-[16px]">
                      Job seekers
                    </span>
                    <p className="my-[5px]">
                      <Link
                        to="/guideline"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        Guideline
                      </Link>
                    </p>
                    <p className="my-[5px]">
                      <Link
                        to="/jobseekersfaq"
                        className="link link-hover text-[18px] text-[#005085]"
                      >
                        FAQs
                      </Link>
                    </p>
                  </div>

                  <div className="">
                    <span className="text-[20px] text-[#212427] font-bold  mb-[16px]">
                      Bringin
                    </span>
                    <p className="my-[5px]">
                      <Link
                        to="/home"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        Home
                      </Link>
                    </p>
                    <p className="my-[5px]">
                      <Link
                        to="/aboutus"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        About us{" "}
                      </Link>
                    </p>
                   
                    <p className="my-[5px]">
                      <Link
                        to="/blogs"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        Blogs
                      </Link>
                    </p>
                   
                    <p className="my-[5px]">
                      <Link
                        to="/privacypolicy"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        Privacy policy
                      </Link>
                    </p>
                    <p className="my-[5px]">
                      <Link
                        to="/terms&conditions"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        Terms & conditions
                      </Link>
                    </p>
                    <p className="my-[5px]">
                      <Link
                        to="/cancellation&pefundpolicy"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        Cancellation & refund policy
                      </Link>
                    </p>
                    <p className="my-[5px]">
                      <Link
                        to="/Contactus"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
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
                        href="https://www.linkedin.com/company/bringinapp"
                        target="_blank"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        LinkedIn
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.facebook.com/bringin.io"
                        target="_blank"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        Facebook
                      </a>
                    </p>

                    <p>
                      <a
                        href="https://www.youtube.com/@Bringinapp"
                        target="_blank"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        Youtube
                      </a>
                    </p>

                    <p>
                      <a
                        href="https://twitter.com/bringinapp"
                        target="_blank"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
                      >
                        Twitter
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.instagram.com/bringin.io/"
                        target="_blank"
                        className="link link-hover text-[18px] text-[#005085] mb-2"
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
              <img className="w-[900px] flex mx-auto" src="/images/pay.png" />
            </div>
            <div className="h-[2px] bg-white mt-10 mx-[55px] ">

            </div>
            <p className="text-center lg:text-[20px] text-white mt-2 ">
            © Copyright Bringin Technologies Limited. All Rights Reserved.       
                 </p>
           </div>
          </div>
        </div>
      </section>
      <section className="  block lg:hidden  ">
        <div className="lg:h-[400px]  mt-[70px]  ">
          <div>
            <div className=" lg:mx-[40px] mx-[10px] md:mx-[10px]">
              <div className="">
                <div className=" flex justify-center  lg:ml-0">
                  <div>
                  <img
                    alt="bringin image"
                    src="/images/navlogo.svg"
                    className="cursor-pointer w-[250px]"
                  ></img>
                
                  </div>
                </div>
                <div className="mt-7 ">
                  <div className="flex items-center gap-2  justify-center mb-4">
                    <img
                      alt="bringin image"
                      src="/images/email.png"
                      className="w-[20px] h-auto "
                    ></img>
                    <p className="text-[17px] text-[#005085] ml-3">
                      hello@bringin.io
                    </p>
                  </div>
                  <div className="flex  items-center gap-2 mt-2  justify-center mb-4">
                    <img
                      alt="bringin image"
                      src="/images/whatsup.png"
                      className="w-[20px] h-auto"
                    ></img>
                    <p className="text-[17px] text-[#005085]">+8801756175141</p>
                  </div>
                  <div className="flex justify-center  gap-2 mt-2 mb-4">
                    <img
                      alt="bringin image"
                      src="/images/location.png"
                      className="w-[23px] h-[23px] mt-1"
                    ></img>
                    <p className="text-[17px] text-[#005085] ">
                      Plot 25, Road 04, Sector 10, <br></br> Uttara, Dhaka
                    </p>
                  </div>
                </div>

              </div>
              <div className="text-center">
                <div className="mt-10">
                  <p className="text-[20px]   text-center text-[#005085] font-semibold mb-4 ">
                    Recruiters{" "}
                  </p>
                  <Link
                    to="/pricing"
                    className="link link-hover  text-[18px] text-[#005085] text-center "
                  >
                    <p className="mb-3">Pricing</p>
                  </Link>
                  <Link
                    to="/enterprisesolutions"
                    className="text-center link link-hover text-[18px] text-[#005085] "
                  >
                    <p className="mb-3"> Enterprise solutions</p>
                  </Link>
                  <Link
                    to="/recruitersfaq"
                    className="link link-hover text-[18px] text-[#005085]"
                  >
                    <p className="mb-3">FAQs</p>
                  </Link>
                </div>
                <div className="  ">
                  <p className="text-[20px] text-center  text-[#005085] font-semibold mb-4">
                    Job seekers
                  </p>
                  <Link
                    to="/guideline"
                    className="link link-hover text-[18px] text-[#005085] "
                  >
                    <p className="mb-3">Guideline</p>
                  </Link>
                  <Link
                    to="/jobseekersfaq"
                    className="link link-hover text-[18px] text-[#005085]"
                  >
                    <p className="mb-4">FAQs</p>
                  </Link>
                </div>
                <div className="">
                  <p className="text-[20px] text-center text-[#005085] font-semibold mb-4">
                    Bringin
                  </p>
                  <Link
                    to="/home"
                    className="link link-hover text-[18px] text-[#005085] "
                  >
                    <p className="mb-3">Home</p>
                  </Link>
                  <Link
                    to="/aboutus"
                    className="link link-hover text-[18px] text-[#005085] mb-3"
                  >
                    <p className=""></p>About us{" "}
                  </Link>
                 
                  <Link
                    to="/blogs"
                    className="link link-hover text-[18px] text-[#005085] "
                  >
                    <p className="my-3">Blogs</p>
                  </Link>
                 
                 
                  <Link
                    to="/privacypolicy"
                    className="link link-hover text-[18px] text-[#005085] "
                  >
                    <p className="mb-3">Privacy policy</p>
                  </Link>
                  
                  <Link
                    to="/terms&conditions"
                    className="link link-hover text-[18px] text-[#005085] "
                  >
                    <p className="mb-3">Terms & conditions</p>
                  </Link>
                  <Link
                    to="/terms&conditions"
                    className="link link-hover text-[18px] text-[#005085] "
                  >
                    <p className="mb-4">Cancellation & refund policy</p>
                  </Link>
                  <Link
                    to="/ContactUs"
                    className="link link-hover text-[18px] text-[#005085] "
                  >
                    <p className="my-3">Contact us</p>
                  </Link>
                </div>
                <div className=" ">
                  <p className="text-[20px]  text-[#005085] font-semibold mb-4">
                    Follow us
                  </p>

                  <a
                    href="https://www.linkedin.com/company/bringinapp"
                    className="link link-hover  text-center text-[18px] text-[#005085] "
                  >
                    <p className="text-center mb-3">LinkedIn</p>
                  </a>
                  <a
                    href="https://www.facebook.com/bringin.io"
                    className="link link-hover  text-center  text-[18px] text-[#005085] text-center "
                  >
                    <p className="mb-3">Facebook</p>
                  </a>
                  <a
                    href="https://www.youtube.com/@Bringinapp"
                    className="link link-hover  text-center  text-[18px] text-[#005085] "
                  >
                    <p className="mb-3">Youtube</p>
                  </a>
                  <a
                    href="https://twitter.com/bringinapp  "
                    className="link link-hover  text-center   text-[18px] text-[#005085] "
                  >
                    <p className="mb-3">Twitter</p>
                  </a>
                  <a
                    href="https://www.instagram.com/bringin.io/"
                    className="link link-hover  text-center   flex justify-center text-[18px] text-[#005085] "
                  >
                    <p className="mb-3">Instagram</p>
                  </a>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="bg-[#004D80] lg:h-[250px] md:h-[250px] h-[150px] ">
           <div className="mt-[70px]">
           <div className="lg:pt-[50px] md:pt-[50px] pt-[30px]">
              <img className="lg:w-0 md:w-[600px] w-[350px] flex mx-auto" src="/images/pay.png" />
            </div>
            <div className="h-[2px] bg-white md:mt-10 lg:mt-0 mt-2  lg:mx-[55px] md:mx-[55px] mx-2 ">

            </div>
            <p className="text-center lg:text-[20px] text-white mt-2 ">
            © Copyright Bringin Technologies Limited. All Rights Reserved.
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
