 import group from '../../../assets/jobseeker/Group 12089.svg'
const JobSeeker = () => {
  return (
    <div>
      <div>
        <div className="hero  py-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
           
             loading = 'lazy'
             alt=""
            
            src={group}  className="lg:w-[390px] lg:h-[473px] md:w-[350px] md:h-[450px] w-[320px] h-[340px]"></img>
            <div>
              <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold lg:text-start md:text-center text-center">
                Connecting Drectly with Job Seekers and Recruiters in
                Bangladesh.
              </h1>
              <div className="lg:flex-none md:flex-none flex lg:justify-start md:justify-center justify-center">
                <div className="flex mt-10 ">
                  <div>
                    <form>
                      <div className="lg:flex md:flex gap-5">
                        <div>
                          <label
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                          >
                            Search
                          </label>
                          <div className="relative">
                            <div className="absolute pt-[17px] text-[15px] left-0 flex items-center pl-3 pointer-events-none  text-[#C7C8C9]">
                              <p className="">+880 ।</p>
                            </div>
                            <input
                              type="text"
                              name="number"
                              className=" input rounded placeholder:text-[#C7C8C9] placeholder:text-[15px]   h-[55px]  lg:w-[356px]  md:w-[356px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[75px]"
                              placeholder="Enter 10 digit mobile number"
                              required
                            />
                          </div>
                        </div>
                        <button className="text-white lg:text-[20px] md:text-[18px] text-[16px] font-semibold bg-[#0077B5] lg:w-[158px] md:w-[150px] lg:h-[55px] md:h-[50px] w-[120px] h-[40px] lg:mt-0 md:mt-0 mt-7 lg:ml-0 md:ml-0 ml-[100px] rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                          Get App
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="lg:flex-none md:flex-none flex lg:justify-start md:justify-center justify-center ">
                <div className="flex lg:gap-24 md:gap-20 gap-7 mt-10">
                  <div className="">
                    <h1 className="lg:text-[25px] md:text-[25px] text-[25px] text-[#0077B5] lg:ml-12 md:ml-10 ml-5">
                      10K+
                    </h1>
                    <p className="lg:text-[20px] md:text-[18px] text-[16px]">
                      Verified Recruiters
                    </p>
                  </div>

                  <div>
                    <h1 className="lg:text-[25px] md:text-[25px] text-[25px]  text-[#0077B5] lg:ml-10 md:ml-10 ml-5">
                      80K+
                    </h1>
                    <p className="lg:text-[20px] md:text-[18px] text-[16px]">
                      Verified Seeker
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
