import chat from '../../../assets/homeimg/Group 12094.svg'
import sa from '../../../assets/modal/Group 11827.svg'

const ChatDirect = () => {
  return (
    <div className=" ">
      <div className="hero lg:my-20 md:my-20 my-20  bg-white ">
        <div className="flex lg:gap-10 md:gap-10 flex  ">
          <div className="lg:w-1/2 md:w-1/2 lg:text-start md:text-start text-center  lg:pl-[100px] md:pl-[60px]">
            <h1 className="lg:text-[35px] md:text-[29px] text-[30px] lg:mt-10 md:mt-4 mt-1  font-bold">
              Chat Directly with the Recruiters & Get Hired Instantly.
            </h1>
            <div className="card-actions lg:mt-10 md:mt-7 mt-3 lg:ml-20 md:ml-16 lg:justify-start md:justify-start justify-center">
              <label
                htmlFor="my-modal-4"
                className="lg:w-[220px] md:w-[190px] lg:h-[60px] md:h-[50px] h-[40px]  bg-[#0077B5] shadow-lg rounded lg:text-[20px] md:text-[18] text-[16px] font-bold text-white px-3 text-center lg:py-4 md:py-3 py-[6px] cursor-pointer"
              >
                Download App Now
              </label>
            </div>{" "}
          </div>
          <div className=" md:w-1/2 lg:w-1/2">
            <div className="md:block lg:block hidden ">
              <img
             
              alt=""
              src={chat} className=" rounded"></img>
            </div>
          </div>
        </div>
      </div>
      <div>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal w-full ">
          <div className="bg-white rounded-lg relative  lg:w-[850px]  lg:h-[530px] md:w-[750px] md:h-[550px] w-full h-full">
            <label
              htmlFor="my-modal-4"
              className="cursor-pointer text-[25px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div className="">
              <div className="flex justify-center mt-16">
                <div className="lg:flex md:flex gap-5">
                  <form>
                    <label
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute pt-[17px] left-0 flex items-center pl-3 pointer-events-none text-[#C7C8C9]">
                        <p className="">+880 ।</p>
                      </div>
                      <input
                        type="text"
                        name="number"
                        className=" input rounded placeholder:text-[#C7C8C9] h-[55px]  lg:w-[356px]  md:w-[356px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[75px] placeholder:text-[15px] lg:placeholder:text-[15px] md:placeholder:text-[16px]"
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

              <div className="flex gap-7 justify-center mt-7">
                <div>
                  <img src={sa} />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDirect;
