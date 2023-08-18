const Hero = () => {
  return (
    <div className="relative lg:bg-[url(/src/bgimages/Enterprise_Hiring_Backgroun.png)] bg-contain	 bg-right-top bg-no-repeat ">
      <div className="lg:h-[500px]">
        <div className="	 lg:flex lg:flex-row-reverse lg:justify-between  md:flex md:flex-row-reverse md:justify-between lg:mx-[40px] md:mx-[10px] mx-[10px] pb-2">
          <div className=" lg:mt-[60px] md:mt-[40px]  h-[220px] lg:ml-0 md:ml-0 ml-16">
            <img
              className="  lg:w-[490px] lg:h-[345px] w-[250px] md:w-[350px] lg:pt-0 md:pt-0 pt-4 "
              src="./images/enterprices/Enterprise Hiring_Hero.png"
              alt=""
            />
          </div>
          <div className="lg:text-start md:text-start text-center lg:w-2/3 md:w-1/2 lg:mt-[60px] md:mt-[40px] mt-1 py-2 lg:mr-5">
            <h1 className="lg:text-[37px] text-[22px] md:text-[24px] font-bold text-[#023C5B]">
              Need large-scale hiring requirements?
            </h1>
            <p className="text-[#212427] text-opacity-90  lg:text-start md:text-start text-center mt-[25px] text-[19px] text-[#212427] ">
              We are thrilled to announce a new and exciting opportunity for our
              valued recruiters at Bringin. We’re committed to revolutionizing
              the hiring process through our AI-powered chat-based instant
              hiring app. Our dedication to innovation and excellence has led us
              to expand our offerings to accommodate even larger scale hiring
              requirements.
              <p className="mt-7">
                If you have clients or partners with substantial hiring needs,
                we are here to support you. Our platform's advanced
                capabilities, coupled with your expertise, can lead to
                successful and efficient large-scale hiring projects. Whether
                it's finding talent for a growing company, a seasonal influx, or
                any other significant hiring demand, Bringin has the tools and
                resources to make it happen.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
