import { Link } from "react-router-dom";
import pic from "../../../public/images/RI-icons/taka.png";
import image from "../../../public/images/RI-icons/clock.png";

const UpgradePackage = () => {
    return (
        <div className="font-inter bg-white md:bg-gray-100 flex justify-center">
            <div className="font-inter bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[512px] mb-40">
                <p className="font-inter ms-4 my-2 font-semibold text-[18px]">Your Current Active Package</p>
                <div className="font-inter w-[436px] h-[119px] border border-1 rounded-3xl shadow-lg ms-2 p-4 mt-6">
                    <div className="font-inter flex gap-16">
                        <p className="font-inter font-semibold mb-1 inline-flex text-[16px]">30 Chats Daily</p>
                        <div className="flex gap-1">
                            <img className="w-[10px] h-[12px] mt-1" src={pic} alt="" />
                            <p  className="font-inter font-semibold text-[16px]">
                                550
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 font-normal text-[14px]">
                        <img className="w-[13px] h-[13px] mt-1" src={image} alt="" />
                        <p>
                            7 Days Validity
                        </p>
                    </div>
                    <div className="flex gap-6 font-light text-[14px] mt-3">
                        <p>
                            Purchased on: 16-Nov-2023
                        </p>
                        <p>
                            Expired on: 22-Nov-2023
                        </p>
                    </div>
                </div>
                <div className="font-inter flex gap-x-[30px] w-[640px] h-[99px] mx-auto mt-8 ms-2">
                    <div className="border border-2 rounded-lg shadow-lg w-[105px] h-[60px] pt-1 text-center">
                        <p className="text-[#212427] text-[16px] font-bold">
                            34
                        </p>
                        <p className="text-[#212427] text-opacity-60 text-[16px] font-normal">
                        Daily Chats
                        </p>
                    </div>
                    <div className="border border-2 rounded-lg shadow-lg w-[105px] h-[60px] pt-1 text-center">
                        <p className="text-[#212427] text-[16px] font-bold">
                        30
                        </p>
                        <p className="text-[#212427] text-opacity-60 text-[16px] font-normal">
                        Today Sent
                        </p>
                    </div>
                    <div className="border border-2 rounded-lg shadow-lg w-[162px] h-[60px] pt-1 text-center">
                        <p className="text-[#212427] text-[16px] font-bold">
                        04
                        </p>
                        <p className="text-[#212427] text-opacity-60 text-[16px] font-normal">
                        Remaining Chats
                        </p>
                    </div>
                </div>
                <Link to="/dashboard/recruiter/purchase/purchase-package-modal">
                    <button className="font-inter w-[178px] h-[38px] text-[#1C4B81] font-medium text-[16px] border border-[0.3px] p-2 -mt-2 border-[#1C4B81] rounded-3xl ms-[180px]">Upgrade Package</button>
                </Link>
            </div>
        </div>
    );
};

export default UpgradePackage;