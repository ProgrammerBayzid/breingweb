import { Link } from "react-router-dom";
import job from '../../assets/logo/job.svg'
import location from '../../assets/logo/locetion.svg'
import d from '../../assets/candidate/Group 11727.svg'
import p from '../../assets/candidate/Group 10464.svg'
const Singlecandidate = ({singlecanditade}) => {
    return (
        <div>
             <div className="lg:w-[845px] lg:h-[243px] shadow-md px-7 py-7 mb-10 ">
             
             <div className="flex gap-5">
             <div className=" lg:ml-5  md:ml-[35px] ml-[35px]">
                  <div>
                    <img
                      
                       
                       alt=""

                    
                      src={p}
                      className=" rounded w-24 ml-7"
                    ></img>
                  </div>
                  <Link to='/profile'>
                  <div className="rounded rounded-full border-[1px] border border-black  h-12 w-36 mt-7">
                    <h1 className="text-center mt-[12px] text-[16px] font-semibold text-black">
                      View Profile
                    </h1>
                  </div>
                  </Link>
                </div>
             <div>
             <h1 className="text-[20px] font-semibold flex">
                  
                  <div className="flex ">
                    <p>{singlecanditade.candidate_details.first_name} </p>
                    <img
                    alt=""
                    src="/Ellipse 153.svg" className="px-[5px]" />
                  </div>{" "}
                  <p>Flutter Developer</p>
                </h1>
                <div className=" lg:flex justity-between ">
                  <div className="">
                    <div>
                      <div className="flex gap-4 mt-[7px]">
                        <div className="bg-[#DAEEE8]  rounded ">
                          <p className="px-2 py-1 text-[#5C6565] text-[16px] ">
                            Diploma
                          </p>
                        </div>
                        <div className="bg-[#DAEEE8]  rounded ">
                          <p className="px-2 py-1 text-[#5C6565] text-[16px]">
                            Fresher
                          </p>
                        </div>
                        <div className="bg-[#DAEEE8]  rounded ">
                          <p className="px-2 py-1 text-[#5C6565] text-[16px]">
                            20-25K BDT
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[20px] flex gap-2">
                      <div>
                        {" "}
                        <img
                        
                        
                        alt=""
                          src={job}
                          className=" rounded w-[18px] h-[19px] mt-[2px]"
                        ></img>
                      </div>
                      <div className="">
                        <h1 className="text-[17px] font-medium">
                          Bringin Technologies Ltd.
                        </h1>
                        <p className="text-[#5C6565]">Jan 2023 - March 2023</p>
                      </div>
                    </div>
                  <div className="">
                  <div className=" flex gap-2 items-center mt-[20px]">
                      <div>
                        {" "}
                        <img
                        
                        
                        alt=""
                          src={location}
                          className=" rounded w-[18px] h-[19px] "
                        ></img>
                      </div>
                      <div>
                        <h1 className="text-[17px] font-medium">Uttara, Dhaka</h1>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="">
                    <div className="lg:ml-12 flex gap-2 lg:mt-16 mb-10">
                      <div>
                        <img
                        
                         
                         alt=""
  
                          src={d}
                          className=" rounded w-[23px] h-[24px] "
                        ></img>
                      </div>
                      <div className="">
                        <h1 className="text-[15px] font-medium">
                          Dhaka Polytechnic CSE
                        </h1>
                        <p>Jan 2023 - March 2023</p>
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

export default Singlecandidate;

