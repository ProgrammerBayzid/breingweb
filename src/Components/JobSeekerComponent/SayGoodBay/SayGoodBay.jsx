import say from '../../../assets/jobseeker/Second Section Photos (1).svg'
import sa from "../../../assets/modal/Group 11827.svg";

const SayGoodBay = () => {
  return (
    <div>
      <div className="hero py-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
         
          loading = 'lazy'
          alt=""
          
          src={say} className="lg:w-[700px] lg:h-[467px]"></img>
          <div className="s">
            <div className=" lg:text-start md:text-center text-center">
              <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold">
                Say Goodbye to the Complicated Hiring Process & Install{" "}
                <span className="text-[#0077B5]">Bringin</span>
              </h1>
              <p className="py-3 text-[20px] leading-[25px]">
                Empower your job search with <span className="text-[#0077B5]">Bringin</span>, the innovative and secure
                instant chat-based hiring platform.
              </p>
              <p className="text-[20px] leading-[25px]">
                Connect directly with verified recruiters, eliminate the hassle
                of intermediaries, and find your dream job with ease and privacy
                protection.
              </p>
              <div className="card-actions  mt-7">
              <label
              htmlFor="my-modal-6"
              className="bg-[#0077B5] text-white lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-center pt-3  lg:w-[158px] md:w-[150px] lg:h-[55px] md:h-[50px] w-[120px] h-[40px] rounded cursor-pointer">

Get Hired
              
              </label>
                  <p className="text-white lg:text-[20px] md:text-[18px] text-[16px] font-semibold">
                   
                  </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal w-full ">
          <div className="bg-white rounded-lg relative  lg:w-[850px]  lg:h-[530px] md:w-[750px] md:h-[550px] w-full h-full">
            <label
              htmlFor="my-modal-6"
              className="cursor-pointer text-[25px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div className="">
              <div className="flex justify-center mt-16">
                <div className="lg:flex md:flex gap-5">
                  <form>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute pt-[17px] text-[15px] left-0 flex items-center pl-3 pointer-events-none text-[#C7C8C9]">
                        <p className="">+880 ।</p>
                      </div>
                      <input
                        type="text"
                        name="number"
                        className=" input rounded  placeholder:text-[#C7C8C9] h-[55px]  lg:w-[356px]  md:w-[356px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[75px] placeholder:text-[15px] lg:placeholder:text-[15px] md:placeholder:text-[16px]"
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

export default SayGoodBay;
