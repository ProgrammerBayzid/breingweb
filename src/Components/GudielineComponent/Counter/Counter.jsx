const Counter = () => {
  return (
    
     <div className="mx-auto ">

        <div className=" gap-10 mt-32 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto px-5 lg:h-[240px] bg-[#E6F1F8] content-center">
          <div className="w-full  ">
            <div className="flex flex-col items-center">
              <h1 className="text-[42px] font-semibold">80,000+</h1>
              <h1>_ _____</h1>
              <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white pt-5">
              Job Seeker
              </h5>
            </div>
          </div>
          <div className="w-full  ">
            <div className="flex flex-col items-center">
              <h1 className="text-[42px] font-semibold">10,000+</h1>
              <h1>_ _____</h1>
              <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white pt-5">
              Verified Recruiters
              </h5>
            </div>
          </div>
          <div className="w-full  ">
            <div className="flex flex-col items-center ">
              <h1 className="text-[42px] font-semibold">100+</h1>
              <h1>_ _____</h1>
              <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white pt-5">
              Daily Job Post
              </h5>
            </div>
          </div>
        </div>
     </div>
     
  );
};

export default Counter;
