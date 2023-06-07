import s from '../../../assets/enterprices/698a5572-0f56-48ec-bac3-00fa9a9f8aa0.svg'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <img
          
           
alt=""
            src={s}
            className=" lg:w-[596px] lg:h-[409px] md:w-[536px] md:h-[359px] rounded-lg lg:mb-16"
          />
          
          <div className="lg:text-start md:text-center text-center">
            <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold">
              Need Large-Scale <span className="text-[#0077B5]">Hiring</span>{" "}
              Requirements?
            </h1>
            <div className="py-6 text-[20px] text-[#666666] lg:w-5/6">
            <p >
              Bringin's Enterprise Hiring Services provide recruiters with a
              dedicated professional to help fill numerous positions quickly and
              grow their teams. The service uses AI technology and customized
              recommendations to create a highly skilled workforce.
            
            </p>

            <p className='text-[#666666]'>
                It streamlines the hiring process and meets all recruitment
                needs promptly and efficiently. With Bringin's Enterprise Hiring
                Services, recruiters can enjoy a tailored and effective approach
                to recruitment, ensuring success in a fast-paced business
                environment.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
