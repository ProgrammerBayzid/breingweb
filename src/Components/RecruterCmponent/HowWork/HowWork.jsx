import r1 from '../../../assets/recruiters/Recruiter HIW.svg'
import r2 from '../../../assets/recruiters/Recruiter Works.svg'

const HowWork = () => {
  return (
    <div className="flex justify-center">
      <div>
      <h1 className="text-center lg:text-[40px] md:text-[38px] text-[30px] font-semibold mb-[40px]">How It Works</h1>

<div className="flex justify-center" >
<img
      
      alt="" src={r2} className="lg:block md:block hidden rounded"/>
      <img
      
      alt="" src={r1} className="lg:hidden md:hidden block rounded-md rounded"/>

  {/* <div className="bg-[#0077B5]">
    <div className=" gap-10 mt-32  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto px-5">
      <div className="w-full  ">
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

      <div className="w-full  ">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            src="/Artboard 381 (2).png"
            height={150}
            ={150}
            className=" "
          ></img>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Free Job Post
          </h5>
        </div>
      </div>
      <div className="w-full  ">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            src="/Artboard 381 copy 2.png"
            height={150}
            ={150}
            className=" "
          ></img>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Get Relevant candidates
          </h5>
        </div>
      </div>
    </div>
  </div> */}
</div>
      </div>
    </div>
  );
};

export default HowWork;
