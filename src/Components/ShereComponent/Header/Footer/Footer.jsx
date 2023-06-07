import { Link } from "react-router-dom";
import f from '../../../../assets/logo/flogo.png'
import p from '../../../../assets/logo/Group 12079.svg'
import Group from '../../../../assets/logo/Group.svg'
import Vector from '../../../../assets/logo/Vector.svg'


const Footer = () => {
  return (
    <section>
    <section className="mx-auto hidden lg:block  ">
      <div className="lg:h-[400px] p-10 bg-[#0077B5] text-center ">
        <div>
          <footer className="footer mx-auto">
            <div className="lg:ml-12">
              <img
              alt=""
                src={f}
             
                className="cursor-pointer w-[250px]"
              ></img>
              <p className="text-[20px] text-white">Instant Chat - Hire Direct</p>

              <div className="mt-10">
                <div className="flex items-center gap-2]">
                  <img  alt="" src={Group} className="w-[20px] h-auto "></img>
                  <p className="text-[20px] text-white ml-3">hello@bringin.io</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <img  alt="" src={Vector} className="w-[20px] h-auto"></img>
                  <p className="text-[20px] text-white ">+8801756175141</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[20px] text-white font-medium ">Get the App</p>

                <div className="flex justify-center">
                  <img  alt="" src={p} className="w-[50px] h-[50px]"></img>

                </div>
              </div>
            </div>
            <div className=" ">
              <span className="text-[20px] text-white text-center text-white font-semibold mb-[16px]">
                Recruiters{" "}
              </span>
              <Link to='/pricing' className="link link-hover text-[18px] text-white text-center mb-2">
              
              Pricing
              </Link>
              <Link to="/enterprise-solutions" className="link link-hover text-[18px] text-white mb-2">
                Enterprise Solutions
              </Link>
              <Link to="/recruiters-faq" className="link link-hover text-[18px] text-white">FAQ</Link>
            </div>
            <div className="  sm:mx-0">
              <span className="text-[20px] text-white text-white font-semibold mb-[16px]">
                Job Seekers
              </span>
              <Link to="/guideline" className="link link-hover text-[18px] text-white mb-2">Guideline</Link>
              <Link to="/job-seekers-faq" className="link link-hover text-[18px] text-white">FAQ</Link>
            </div>
            <div className=" sm:mx-0">
              <span className="text-[20px] text-white text-white font-semibold mb-[16px]">
                Bringin
              </span>
              <a href="/about-us" className="link link-hover text-[18px] text-white mb-2">About Us </a>
              <Link to="/home" className="link link-hover text-[18px] text-white mb-2">Home</Link>
              <Link to="/blogs" className="link link-hover text-[18px] text-white mb-2">Blogs</Link>
              <Link to="/privacy-policy" className="link link-hover text-[18px] text-white mb-2">Privacy Policy</Link>
              <Link to="/terms-&-condition" className="link link-hover text-[18px] text-white mb-2">Terms & Condition</Link>
            </div>
            <div className=" sm:mx-0">
              <span className="text-[20px] text-white text-white font-semibold mb-[16px]">
                Follow Us
              </span>
              <a href="https://www.linkedin.com/company/bringinapp" target="_blank" className="link link-hover text-[18px] text-white mb-2">LinkedIn</a>
              <a href="https://www.facebook.com/bringin.io" target="_blank" className="link link-hover text-[18px] text-white mb-2">Facebook</a>
              <a href="https://www.youtube.com/@Bringinapp" target="_blank" className="link link-hover text-[18px] text-white mb-2">Youtube</a>
              <a href="https://twitter.com/bringinapp" target="_blank" className="link link-hover text-[18px] text-white mb-2">Twitter</a>
              <a href="https://www.instagram.com/bringin.io/" target="_blank" className="link link-hover text-[18px] text-white mb-2">Instagram</a>
            </div>
          </footer>
          <div>
            {" "}
            <p className="flex justify-center lg:text-[20px] text-white text-white">
              © Bringin Technologies Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="  block lg:hidden  ">
      <div className="lg:h-[400px] p-10 bg-[#0077B5] ">
        <div>
          <div className=" ">
            <div className="">
           <div className="ml-[40px] md:ml-[270px] lg:ml-0">
           <img
           alt=""
                src={f}
               
                className="cursor-pointer w-[250px]"
              ></img>
              <p className="text-[20px] text-white">Instant Chat - Hire Direct</p>

           </div>
              <div className="mt-10 ">
                <div className="flex items-center gap-2] ml-[70px] md:ml-[270px] lg:ml-0">
                  <img  alt="" src={Group} className="w-[20px] h-auto "></img>
                  <p className="text-[20px] text-white ml-3">hello@bringin.io</p>
                </div>
                <div className="flex items-center gap-2 mt-2 ml-[70px] md:ml-[270px] lg:ml-0">
                  <img  alt="" src={Vector} className="w-[20px] h-auto"></img>
                  <p className="text-[20px] text-white">+8801756175141</p>
                </div>
              </div>

              <div className="mt-10 ">
                <p className="text-[20px] font-medium text-center text-white">Get the App</p>

                <div className="flex justify-center">
                  <img  alt="" src={p} className="w-[34px] h-[40px]"></img>

                </div>
              </div>
            </div>
          <div className="text-center">
          <div className="mt-10">
              <p className="text-[20px]   text-center text-white font-semibold mb-4 ">
                Recruiters{" "}
              </p>
              <Link href='/pricing' className="link link-hover  text-[18px] text-white text-center mb-2">
              
              <p className="mb-1">Pricing</p>
              </Link>
              <Link href="/enterprise-solutions" className="text-center link link-hover text-[18px] text-white mb-2">
             <p className="mb-1">   Enterprise Solutions</p>
              </Link>
              <Link href="/recruiters-faq" className="link link-hover text-[18px] text-white"><p className="mb-1">FAQ</p></Link>
            </div>
            <div className="  ">
              <p className="text-[20px] text-center  text-white font-semibold mb-4">
                Job Seekers
              </p>
              <Link href="/guideline" className="link link-hover text-[18px] text-white mb-2"><p className="mb-1">Guideline</p></Link>
              <Link href="/job-seekers-faq" className="link link-hover text-[18px] text-white"><p className="mb-4">FAQ</p></Link>
            </div>
            <div className=" sm:mx-0">
              <p className="text-[20px] text-center text-white font-semibold mb-4">
                Bringin
              </p>
              <Link href="/about-us" className="link link-hover text-[18px] text-white mb-2"><p className="mb-1"></p>About Us </Link>
              <Link href="/home" className="link link-hover text-[18px] text-white mb-2"><p className="mb-1">Home</p></Link>
              <Link href="/blogs" className="link link-hover text-[18px] text-white mb-2"><p className="mb-1">Blogs</p></Link>
              <Link href="/how-it-works" className="link link-hover text-[18px] text-white mb-2"><p className="mb-1">How It Works</p></Link>
              <Link href="/privacy-policy" className="link link-hover text-[18px] text-white mb-2"><p className="mb-1">Privacy Policy</p></Link>
              <Link href="/terms-&-condition" className="link link-hover text-[18px] text-white mb-2"><p className="mb-4">Terms & Condition</p></Link>
            </div>
            <div className=" ">
              <p className="text-[20px]  text-white font-semibold mb-4">
                Follow Us
              </p>
            

              <a href="https://www.linkedin.com/company/bringinapp" className="link link-hover  text-center text-[18px] text-white "><p className="text-center">LinkedIn</p></a> 
              <a href="https://www.facebook.com/bringin.io" className="link link-hover  text-center  text-[18px] text-white text-center "><p className="mb-1">Facebook</p></a>
              <a href="https://www.youtube.com/@Bringinapp" className="link link-hover  text-center  text-[18px] text-white "><p className="mb-1">Youtube</p></a>
              <a href="https://www.instagram.com/bringin.io/" className="link link-hover  text-center   text-[18px] text-white "><p className="mb-1">Twitter</p></a>
              <a href="https://twitter.com/bringinapp" className="link link-hover  text-center   flex justify-center text-[18px] text-white "><p className="mb-3">Instagram</p></a>
            </div>
          </div>
          </div>
          <div>
            {" "}
            <p className="text-center text-[18px] text-white ">
              © Bringin Technologies Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Footer;
