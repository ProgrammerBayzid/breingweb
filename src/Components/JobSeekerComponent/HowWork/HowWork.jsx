import h1 from '../../../assets/jobseeker/Frame 10345.svg'
import h2 from '../../../assets/jobseeker/Frame 10345 (1).svg'

const HowWork = () => {
  return (
    <div>
      <h1 className="text-center lg:text-[40px] md:text-[38px] text-[30px] font-semibold mb-[40px]">How It Works</h1>
    <div className="flex justify-center">

      <img
    
      alt="" src={h1} className="lg:block md:block hidden rounded"/>
      <img
   
      alt="" src={h2} className="lg:hidden md:hidden block rounded-md rounded"/>
      
      
      
      {/* <div className="mt-32">
        <div className="">
          <h1 className="text-center text-[35px] font-semibold">How It Works</h1>
        </div>
        <div className="bg-[#0077B5]">
          <div className=" gap-10 mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto px-5">
            <div className="w-full     rounded-lg 0">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  src="/Artboard 381.png"
                  height={150}
                  ={150}
                  className=" "
                ></img>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Create a Profile
                </h5>
              </div>
            </div>

            <div className="w-full     rounded-lg 0">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  src="/Chat directly & get response.png"
                  height={150}
                  ={150}
                  className=" "
                ></img>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Chat Directly with the Recruiters
                </h5>
              </div>
            </div>
            <div className="w-full     rounded-lg 0">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  src="/Instant Hire.png"
                  height={150}
                  ={150}
                  className=" "
                ></img>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Get Hired Instantly
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  );
};

export default HowWork;
