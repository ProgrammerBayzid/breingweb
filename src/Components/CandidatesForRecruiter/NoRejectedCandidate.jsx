import {  BsPlus } from "react-icons/bs";
import jobs from "../../../public/images/RI-icons/No-rejected-candidate.png";

const NoRejectedCandidate = () => {
    return (
        <div className="font-inter bg-white md:bg-gray-100 flex justify-center">
            <div className="font-inter py-6 rounded-lg md:w-[700px] md:h-[674px] mb-40">
                <div className="font-inter flex flex-row gap-4">
                    <div>
                        <div className="font-inter w-[700px] h-[39px] text-[16px] grid md:grid-cols-4 bg-white mb-1 rounded-md">
                            <div className='text-[#212427] text-opacity-70 my-2 flex flex-row gap-36'>
                                <p className="ms-6 font-inter">All</p>
                                <p className="text-[#0077B5] text-opacity-60 font-inter">Opening</p>
                                <p className="">Closed</p>
                                <p className="">Rejected</p>
                                <p className="font-inter ms-6">All</p>
                                <p className="font-inter text-[#0077B5] text-opacity-60">Opening</p>
                                <p className="font-inter ">Closed</p>
                                <p className="font-inter ">Rejected</p>
                            </div>
                        </div>
                        <div className="font-inter w-[700px] h-[445px] bg-white flex flex-col  justify-center items-center">
                            <img src={jobs} alt="" />
                            <p className="font-inter mt-4">There are no rejected candidates</p>
                        </div>                        
                    </div>
                    <div className="font-inter flex flex-col">
                        <div className="font-inter w-[263px] h-[204px] bg-white rounded-md">
                            <div className="font-inter flex flex-row">
                                <p className="font-inter p-4 text-[#212427] text-opacity-70">
                                    <p className="font-inter px-1">Candidates for You</p>
                                    <p className="font-inter px-1 my-2">Flutter Developer</p>
                                    <p className="font-inter px-1">Full Stack Engineer</p>
                                    <p className="font-inter px-1 my-2">Machine Learning</p>
                                    <button className="font-inter border border-2 rounded-2xl inline-flex gap-1 mt-1 px-4">Add More <BsPlus className="font-inter mt-1"/></button>
                                </p>
                            </div>
                        </div>
                        <div className="font-inter w-[263px] h-[165px] mt-5 bg-white rounded-md p-4">
                            <p>Profile Setup:</p>
                            <div className="font-inter flex justify-between pe-6 text-[#212427] text-opacity-90">Your profile has 3 areas for improvement.
                                <img src="/images/RI-icons/right-arrow.svg" className='w-[18px] h-[12px] rounded-full bg-slate-300 text-[#FFFFFF] cursor-pointer mt-2' />
                            </div>
                            <div className="font-inter w-[151px] h-[52px] flex gap-6 mt-2">
                                <img src="/images/RI-icons/percentage-circle.svg" alt="" />
                                <img src="/images/RI-icons/Job Profile.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoRejectedCandidate;