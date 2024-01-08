import AppLogo from "../../App/AppLogo";
import AppLinkModal from "../../ShereComponent/AppLinkModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AboutReview from "./AboutReview";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AboutHero = () => {

  return (
    <div className=" mx-auto App ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About us | Unbolt Chat Based Hiring App </title>
        <meta
          name="description"
          content="Unbolt Chat Based Hiring App  designed for the startups and SMEs in Bangladesh. Connecting job seekers directly with startup founders, making hiring easier."
        />
        <link rel="canonical" href="http://unbolt.co/about-us " />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KKFH10XGFV"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKFH10XGFV');
          `}
        </script>
      </Helmet>
      <h1 className="text-center mt-[25px] lg:text-[42px] md;text-[35px] text-[30px] font-bold text-[#023C5B] ">
        About us
      </h1>

      <div className="relative lg:bg-[url(/src/bgimages/hotjobhome.png)] bg-auto	 bg-center bg-no-repeat">
        <div className="lg:h-[583px]">
          <div className="	 lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:mx-[40px] md:mx-[10px] mx-[10px] lg:gap-x-[60px]">
            <div className=" lg:mt-[60px] md:mt-[40px]  lg:h-[250px] lg:ml-0 md:ml-0 ml-0 lg:flex-none md:flex-none flex justify-center">
              <LazyLoadImage
                loading="lazy"
                className="  lg:w-[600px] lg:h-[357px] w-[330px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
                src="/images/about/abh.png"
                effect="blur"
                alt=""
              />
            </div>
            <div className="lg:text-start md:text-start text-center lg:w-1/2 md:w-1/2 lg:mt-[60px] md:mt-[40px] mt-4 py-2">
              <h1 className="lg:text-[37px] text-[22px] md:text-[24px] font-bold text-[#023C5B]">
                Who we are
              </h1>
              <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
                Unbolt a brand of Bringin Technologies Ltd.
                started its journey on April 2023, is an AI-powered first
                 Unbolt: Chat Based Hiring App which has specially designed for
                the startups and SMEs in Bangladesh.
                <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427]  my-7">
                  The application aims to streamline the hiring process by
                  providing a quick efficient way for companies to connect with
                  job seekers.
                </p>
              </p>
              <Link to="/recruiters-login">
                <div className="mt-[33px] lg:flex-none md:flex-none flex lg:justify-start md:justify-start justify-center">
                  <button className="bg-[#0077B5] font-bold w-[155px] h-[40px] text-white rounded rounded-[3px] text-[20px]">
                    Get Started
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal> */}
      </div>

      <div className="mt-10">
        <div className="relative lg:bg-[url(/src/bgimages/abg1.png)] bg-contain	 bg-center bg-no-repeat">
          <div className="lg:h-[550px] flex items-center">
            <div className="	 lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:mx-[40px] md:mx-[10px] mx-[10px] ">
              <div className=" lg:mt-[75px] md:mt-[40px]  lg:ml-0 md:ml-0 ml-16">
                <LazyLoadImage
                  loading="lazy"
                  className="  lg:w-[450px] lg:h-[400px] w-[250px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
                  src="/images/aim2.png"
                  alt=""
                  effect="blur"
                />
              </div>
              <div className="lg:text-start md:text-start text-center lg:w-1/2 md:w-1/2 lg:mt-[120px] md:mt-[40px] mt-4 py-2">
                <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
                  By using AI technology, Unbolt is able to match job seekers
                  with relevant job opportunities, saving time and resources for
                  both the employer and the candidates. Additionally, the
                  chat-based interface allows for easy communication and
                  collaboration between both parties.
                  <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427]  my-7">
                    Overall, Unbolt is an innovative solution for the companies
                    looking to hire quickly and efficiently in Bangladesh.
                  </p>
                </p>
              </div>
            </div>
          </div>
          {/* <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal> */}
        </div>
      </div>

      <div>
        <AboutReview></AboutReview>
      </div>

      <div className="mt-10">
        <div className="relative lg:bg-[url(/src/bgimages/abg2.png)] bg-contain	 bg-center bg-no-repeat">
          <div className="lg:h-[550px] flex items-center">
            <div className="	 lg:flex lg:flex-row-reverse lg:justify-between md:flex md:flex-row-reverse md:justify-between lg:mx-[40px] md:mx-[10px] mx-[10px] ">
              <div className=" lg:mt-[47px] md:mt-[40px]  lg:ml-0 md:ml-0 ml-0 lg:flex-none md:flex-none flex justify-center">
                <LazyLoadImage
                  loading="lazy"
                  className="  lg:w-[450px] lg:h-[400px] w-[250px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
                  src="/images/about/abf.png"
                  effect="blur"
                  alt=""
                />
              </div>
              <div className="lg:text-start md:text-start text-center lg:w-1/2 md:w-1/2 lg:mt-[140px] md:mt-[40px] mt-4 py-2">
                <h1 className="lg:text-[37px] text-[22px] md:text-[24px] font-bold text-[#023C5B]">
                  Find your next opportunity with ease using Unbolt
                </h1>
                <p className="lg:text-start md:text-start text-center mt-[25px] text-[20px] text-[#212427] ">
                  The AI-driven first chat-based hiring app in Bangladesh.
                  Experience instant & comfortable hiring, connecting top
                  talents with right job. Start your journey to success now.
                </p>
              </div>
            </div>
          </div>
          {/* <AppLinkModal visible={openModal} closeModal={closeModal}></AppLinkModal> */}
        </div>
      </div>

      <div className="flex justify-center mt-5 lg:mt-10">
        <AppLogo></AppLogo>
      </div>
      <div>
        <AppLinkModal></AppLinkModal>
      </div>
    </div>
  );
};

export default AboutHero;
