import img1 from "../../../public/images/RI-icons/bkash.png";
import img2 from "../../../public/images/RI-icons/nagad.png";
import img3 from "../../../public/images/RI-icons/visa.png";
import img4 from "../../../public/images/RI-icons/card.png";
import img5 from "../../../public/images/RI-icons/blue-box.png";
import img11 from "../../../public/images/RI-icons/nagad-light.png";
import img12 from "../../../public/images/RI-icons/visa-light.png";
import img13 from "../../../public/images/RI-icons/card-light.png";
import img14 from "../../../public/images/RI-icons/blue-box-light.png";
import img6 from "../../../public/images/RI-icons/taka.png";
import img7 from "../../../public/images/RI-icons/done.png";
import img8 from "../../../public/images/RI-icons/circle.png";
import { Link } from "react-router-dom";

const ChoosePaymentMethod = () => {
    return (
        <div className="bg-white md:bg-gray-100 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[616px] mb-40 font-inter">
               <p className="font-semibold text-[#212427] text-[18px]">
               Choose Payment Method
               </p>
               <div className="flex justify-between items-center border border-1 rounded-lg shadow-lg py-1 px-3 my-4 w-[640px] h-[56px]">
                <img className="w-[80px] h-[37px]" src={img1} alt="" />
                <img className="w-[22px] h-[22px]" src={img7} alt="" />
               </div>
               <div className="flex justify-between items-center border border-1 rounded-lg shadow-lg py-1 px-3 my-4 w-[640px] h-[56px]">
                <img className="w-[67px] h-[30px]" src={img11} alt="" />
                <img className="w-[22px] h-[22px]" src={img8} alt="" />
               </div>
               <div className="flex  items-center border border-1 rounded-lg shadow-lg py-1 ps-3 my-4 w-[640px] h-[56px]">
                <img className="w-[46px] h-[14px]" src={img12} alt="" />
                <img className="w-[38px] h-[30px] mx-4" src={img13} alt="" />
                <img className="w-[29px] h-[30px]" src={img14} alt="" />
                <p className="text-[#9F9F9F] text-[16px] font-normal ms-4">
                Other Cards & MFS
                </p>
                <img className="w-[22px] h-[22px] ms-[285px]" src={img8} alt="" />
               </div>
               <div>
                <p className="text-[#000000] text-[16px] mt-10 font-semibold">
                Package Details
                </p>
                <div className="flex justify-between font-normal text-[16px] mt-3 pe-4">
                    <p>
                    Daily Chats
                    </p>
                    <p>
                    30
                    </p>
                </div>
                <div className="flex justify-between font-normal text-[16px] my-1 pe-4">
                    <p>
                    Validity Days
                    </p>
                    <p>
                    07
                    </p>
                </div>
                <div className="flex justify-between font-normal text-[16px] mt-5 pe-3">
                    <p>
                    Package Price
                    </p>
                    <div className="flex gap-1">
                        <img className="w-[10px] h-[12px] mt-1" src={img6} alt="" />
                    <p>
                    550
                    </p>
                    </div>
                </div>
                <p className="text-[#212427] text-opacity-60 font-normal text-[8px]">
                Including SC, SD & VAT.
                </p>
               </div>
               <p className="font-inter mt-16 w-[640px] font-medium text-[14px]">Please read our
                    <Link to="/dashboard/recruiter/purchase/privacy">
                        <span className="font-inter text-[#0077B5] text-opacity-90"> Privacy Policy </span>
                    </Link>
                    and
                    <Link to="/dashboard/recruiter/purchase/terms">
                        <span className="font-inter text-[#0077B5] text-opacity-90"> Terms & Conditions </span>
                    </Link>
                    before purchase a package.</p>
                    <button className="bg-[#0077B5] font-medium mt-3 text-[18px] text-white w-[640px] h-[48px] rounded-lg">
                    Continue
                    </button>
            </div>
        </div>
    );
};

export default ChoosePaymentMethod;