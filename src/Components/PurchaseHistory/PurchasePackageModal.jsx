import { useNavigate } from "react-router-dom";
import taka from "../../../public/images/RI-icons/taka.png";
import clock from "../../../public/images/RI-icons/clock.png";


const PurchasePackageModal = () => {

    const navigate = useNavigate();

    const handlePopup = () => {
        navigate("/dashboard/recruiter/purchase")
    }

    return (
        <div className="font-inter fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App ">
            <div className="font-inter bg-white p-6 rounded-lg shadow-md md:w-[631px] md:h-[524px] my-40 text-[#212427] text-[16px]">
                <p className="font-inter ms-20 mb-2 ps-2 font-medium text-[17px]">Startups Choice</p>
                <div className="font-inter border border-1 rounded-lg pt-2 mb-1 w-[405px] h-[104px] shadow-lg mx-auto ps-2">
                    <div className="font-inter -ms-6">
                        <div className="font-inter ms-4">
                            <div className="font-inter flex gap-[180px]">
                                <p className="font-inter font-semibold text-[16px] ms-4">30 Chats Daily</p>
                                <div className="flex gap-1">
                                    <img className="w-[10px] h-[12px] mt-1 font-medium text-[16px]" src={taka} alt="" />
                                    <p>
                                        550
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1 ms-4 mt-1">
                                <img className="w-[13px] h-[13px] mt-1" src={clock} alt="" />
                                <p className="font-normal text-[14px]">
                                    7 Days Validity
                                </p>
                            </div>
                            <div className="flex gap-[45px] mt-4">
                                <p className="ms-4 font-normal text-[12px] text-[#212427] text-opacity-60">
                                    Including SC, SD & VAT.
                                </p>
                                <button className="font-inter bg-[#10AC4B] w-[113px] h-[30px] rounded-2xl font-semibold text-[14px] ms-20 -mt-3 text-white cursor-pointer">Purchase Now</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <p className="font-inter mt-6 mb-2 pt-1 ps-2 ms-20 font-medium text-[17px]">Recommended</p>
                <div className="font-inter border border-1 rounded-lg pt-2 mb-1 w-[405px] h-[104px] shadow-lg mx-auto ps-2">
                    <div className="font-inter -ms-6">
                        <div className="font-inter ms-4">
                            <div className="font-inter flex gap-[180px]">
                                <p className="font-inter font-semibold text-[16px] ms-4">50 Chats Daily</p>
                                <div className="flex gap-1">
                                    <img className="w-[10px] h-[12px] mt-1 font-medium text-[16px]" src={taka} alt="" />
                                    <p>
                                    1500
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1 ms-4 mt-1">
                                <img className="w-[13px] h-[13px] mt-1" src={clock} alt="" />
                                <p className="font-normal text-[14px]">
                                15 Days Validity
                                </p>
                            </div>
                            <div className="flex gap-[45px] mt-4">
                                <p className="ms-4 font-normal text-[12px] text-[#212427] text-opacity-60">
                                    Including SC, SD & VAT.
                                </p>
                                <button className="font-inter bg-[#10AC4B] w-[113px] h-[30px] rounded-2xl font-semibold text-[14px] ms-20 -mt-3 text-white cursor-pointer">Purchase Now</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <p className="font-inter ms-20 mt-6 mb-2 pt-1 ps-2 font-medium text-[17px]">Best Deal</p>
                <div className="font-inter border border-1 rounded-xl pt-2 mb-1 w-[405px] h-[104px] shadow-lg mx-auto ps-2">
                    <div className="font-inter -ms-6 ">
                        <div className="font-inter ms-4">
                            <div className="font-inter flex gap-[180px]">
                                <p className="font-inter font-semibold text-[16px] ms-4">100 Chats Daily</p>
                                <div className="flex gap-1">
                                    <img className="w-[10px] h-[12px] mt-1 font-medium text-[16px]" src={taka} alt="" />
                                    <p>
                                    4500
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1 ms-4 mt-1">
                                <img className="w-[13px] h-[13px] mt-1" src={clock} alt="" />
                                <p className="font-normal text-[14px]">
                                30 Days Validity
                                </p>
                            </div>
                            <div className="flex gap-[45px] mt-4">
                                <p className="ms-4 font-normal text-[12px] text-[#212427] text-opacity-60">
                                    Including SC, SD & VAT.
                                </p>
                                <button className="font-inter bg-[#10AC4B] w-[113px] h-[30px] rounded-2xl font-semibold text-[14px] ms-20 -mt-3 text-white cursor-pointer">Purchase Now</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <p onClick={handlePopup} className="cursor-pointer -mt-[550px]  text-white">✕</p>
        </div>
    );
};

export default PurchasePackageModal;