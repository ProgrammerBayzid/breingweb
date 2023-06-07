import iphone from '../../../assets/homeimg/downlodePhoneBar.svg'
const HomeDownlode = () => {
  return (
    <div className="mx-auto ">
      <div className="mt-">
      <div className="  block lg:hidden md:hidden  ">
            <div className=" ml-[140px] mt-4">
            <img
           
            alt=""
                  src={iphone}
                  className="h-[180px] "
                ></img>
            </div>
            </div>
        <div className=" bg-[#E6FBF5] w-full lg:h-[510px] md:h-[516px] ">
          <div className="flex  justify-around items-center">
            
            <div className="  hidden lg:block  relative mt-[522px]">
            <div className="sm:w-[500px] lg:w-[700px] ">
            <img
            
            alt=""
                  src={iphone}
                  className="h-[540px] absolute bottom-0"
                ></img>
            </div>
            </div>
           
            <div className="text-center lg:text-left lg:pt-0 md:pt-[150px]">
              <h1 className="lg:text-[40px] md:text-[40px] lg:text-[35px] md:text-[35px] text-[30px] text-black font-semibold lg:mt-0 md:mt-0 mt-5">
                Download the <span className="text-[#0077B5]">Bringin</span> App
              </h1>
              <div className="py-6">
                <div className="flex">
                  <div className="lg:flex md:flex gap-5">
                    <form className="lg:ml-0 md:ml-0 mx-[10px]">
                      <label
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Search
                      </label>
                      <div className="relative lg:ml-0 md:ml-[40px]">
                        <div className="absolute pt-[18px] left-0 flex items-center pl-5 pointer-events-none">
                          <p className="text-[#C7C8C9]  text-[15px]">+880  ।</p>
                        </div>
                        <input
                          type="text"
                          name="number"
                          className="placeholder:text-[#C7C8C9] h-[55px] placeholder:text-[15px] lg:placeholder:text-[15px] md:placeholder:text-[16px] lg:w-[356px]  md:w-[356px] w-full rounded px-[75px]   input shadow-[rgba(0,_0,_0,_0.24)_0px_2.5px_5px]"
                          placeholder="Enter 10 digit mobile number"
                          
                        />
                      </div>
                    </form>
                    <div className="hidden lg:block md:block w-[122px] h-[55px] bg-[#0077B5] lg:ml-0 md:ml-0 ml-[130px]  lg:mt-0 md:mt-0 mt-[10px] shadow-md rounded-md cursor-pointer">
                      <p className=" text-center text-[20px] text-white font-semibold  pt-[13px] ">
                        Get App
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] lg:w-3/5 md:w-3/5 w- mt-4 font-normals lg:ml-0 md:ml-[25px] mx-[10px] ">
                  We will send you a download link via SMS. Click the link to
                  download the app and install now.
                </p>
                <div className="w-[122px] block lg:hiddin md:hidden h-[55px] bg-[#0077B5] lg:ml-0 md:ml-0 ml-[130px]  lg:mt-0 md:mt-0 mt-[10px] shadow-md rounded-md cursor-pointer">
                      <p className=" text-center  text-white text-[20px] font-semibold  pt-[13px] ">
                        Get App
                      </p>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDownlode;
