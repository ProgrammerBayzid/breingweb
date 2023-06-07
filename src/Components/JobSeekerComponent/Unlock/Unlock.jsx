import Group from '../../../assets/jobseeker/Group 11952.svg'
import sa from "../../../assets/modal/Group 11827.svg";

const Unlock = () => {
  return (
    <div>
      <div>
        <div className="lg:h-[576px] md:h-[400px] h-[510px] bg-[#E6F1F8] lg:px-10 p-3">
          <div className="flex justify-between">
            <div className="lg:w-2/3 lg:text-start md:text-center text-center">
              <div className="lg:mt-[60px] mt-[20px]  ">
                <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold text-black  ">
                  Unlock the Full Potential of Your Hiring Process with
                  AI-Technology that Brings Fairness, Accuracy & Speed to Your
                  Talent Acquisition Strategy.
                </h1>
                <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold lg:mt-12 text-black">
                  Download the <span className="text-[#0077B5]">Bringin</span>{" "}
                  App Now.{" "}
                </h1>

                <div className="card-actions lg:justify-start md:justify-center justify-center lg:mt-7 md:mt-5 mt-2">
                  <>
                    <label
                      htmlFor="my-modal-9"
                      className="lg:w-[220px] md:w-[120px] w-[120px] lg:h-[60px] md:h-[50px] h-[40px] cursor-pointer bg-[#0077B5] shadow-sm rounded lg:text-[20px] md:text-[18] text-[18px] lg:font-semibold md:font-semibold text-white px-2"
                    >
                      <p className="text-center lg:py-4 md:py-3 py-2">
                        Download
                      </p>
                    </label>
                  </>
                </div>
              </div>
            </div>

            <div className="  hidden lg:block md:hidden">
              <img
              
                
                alt=""
                src={Group}
                className=" lg:mt-[80px] lg:w-[359px] lg:h-[484px]"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div>
        <input type="checkbox" id="my-modal-9" className="modal-toggle" />
        <div className="modal w-full ">
          <div className="bg-white rounded-lg relative  lg:w-[850px]  lg:h-[530px] md:w-[750px] md:h-[550px] w-full h-full">
            <label
              htmlFor="my-modal-9"
              className="cursor-pointer text-[25px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div className="">
              <div className="flex justify-center mt-16">
                <div className="lg:flex md:flex gap-5">
                  <form>
                    <label
                      for="search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute pt-[15px] left-0 flex items-center pl-3 pointer-events-none text-[#C7C8C9]">
                        <p className="">+880 ।</p>
                      </div>
                      <input
                        type="text"
                        name="number"
                        className=" input rounded placeholder:text-[#C7C8C9] h-[55px]  lg:w-[356px]  md:w-[356px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[75px] placeholder:text-[15px] lg:placeholder:text-[16px] md:placeholder:text-[16px]"
                        placeholder="Enter 10 digit mobile number"
                        required
                      />
                    </div>
                  </form>
                  <div className="lg:ml-0 md:ml-0 ml-[95px] lg:mt-0 md:mt-0 mt-[30px]">
                    <div className="w-[152px] h-[53px] bg-[#0077B5] text-white  shadow-md rounded-md cursor-pointer">
                      <p className=" text-center lg:text-[20px] md:lg:text-[20px] text-[20px] font-medium  py-[11px] ">
                        Get The Link
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-center mt-7 text-[25px] font-medium">or</h1>
              <h1 className="text-center mt-7 text-[25px] font-medium">
                Scan the QR code below to download the
                <span className="text-[#0077B5]"> bringin app</span>
              </h1>

              <div className="flex  justify-center mt-7">
                <div>
                  <img className="color-red" src={sa} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
