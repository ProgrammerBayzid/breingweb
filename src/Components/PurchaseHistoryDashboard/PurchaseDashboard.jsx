import a from "../../../public/images/RI-icons/active-buy-package.png";
import a1 from "../../../public/images/RI-icons/buy-package.png";
import b from "../../../public/images/RI-icons/active-my-package.png";
import b1 from "../../../public/images/RI-icons/my-package.png";
import c from "../../../public/images/RI-icons/active-purchase-history.png";
import c1 from "../../../public/images/RI-icons/purchase-history.png";
import c0 from "../../../public/images/RI-icons/active-route.png";
import { Link, useLocation } from "react-router-dom";


const PurchaseDashboard = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="font-inter bg-white md:bg-gray-100 flex">
            <div className="font-inter bg-white py-6 ps-8 pe-2 rounded-lg shadow-md md:w-[300px] md:h-[397px] mb-40 text-[#212427]">
                <div className="font-inter mx-auto text-[13px] mb-4 ">
                    <p className="font-inter text-[#212427] py-1 font-semibold text-[22px]">Purchase History</p>
                </div>
                <div>
                    <Link to="/dashboard/recruiter/purchase/">
                        <div className=
                        {`font-inter flex flex-row ${isActive("/dashboard/recruiter/purchase/") ? "font-inter cursor-pointer text-[#00A0DC] text-[16px]" : "text-[#212427]"}`}
                        >
                            
                            <img
                                    src={isActive("/dashboard/recruiter/purchase/") ? b : b1}
                                    className={`w-[17px] h-[19px] me-3 mt-1 cursor-pointer ${isActive("/dashboard/recruiter/purchase/") ? "text-[#0077B5]" : ""}`}
                                />
                            <p className="font-inter cursor-pointer">My Package</p>
                            <img
                                src={isActive("/dashboard/recruiter/purchase/") ? c0 : "/images/RI-icons/RI-arrow-right.svg"}
                                className={`w-${isActive("/dashboard/recruiter/purchase/") ? '8' : '8'} h-[16px] mt-1 ms-[120px] cursor-pointer ${isActive("/dashboard/recruiter/purchase/") ? "cursor-pointer font-semibold" : ""}`}
                            />
                        </div>
                    </Link>
                    <Link to="/dashboard/recruiter/purchase/payment-history">
                        <div className=
                        {`font-inter flex flex-row my-1 ${isActive("/dashboard/recruiter/purchase/payment-history") ? "font-inter cursor-pointer text-[#00A0DC] text-[16px]" : "text-[#212427]"}`}
                        >
                            
                            <img
                                    src={isActive("/dashboard/recruiter/purchase/payment-history") ? c : c1}
                                    className={`w-[17px] h-[19px] me-3 mt-4 cursor-pointer ${isActive("/dashboard/recruiter/purchase/") ? "text-[#0077B5]" : ""}`}
                                />
                            <p className="font-inter my-4">Payment History</p>
                            <img
                                src={isActive("/dashboard/recruiter/purchase/payment-history") ? c0 : "/images/RI-icons/RI-arrow-right.svg"}
                                className={`w-${isActive("/dashboard/recruiter/purchase/payment-history") ? '8' : '8'} h-[16px] mt-5 ms-[85px] cursor-pointer ${isActive("/dashboard/recruiter/purchase/payment-history") ? "cursor-pointer font-semibold" : ""}`}
                            />
                        </div>
                    </Link>
                    <Link to="/dashboard/recruiter/purchase/buy-package">
                        <div className=
                        {`font-inter flex flex-row ${isActive("/dashboard/recruiter/purchase/buy-package") ? "font-inter cursor-pointer text-[#00A0DC] text-[16px]" : "text-[#212427]"}`}
                        >
                            
                            <img
                                    src={isActive("/dashboard/recruiter/purchase/buy-package") ? a : a1}
                                    className={`w-[17px] h-[19px] me-3 mt-1 cursor-pointer ${isActive("/dashboard/recruiter/purchase/") ? "text-[#0077B5]" : ""}`}
                                />
                            <p className="font-inter cursor-pointer">Buy Package</p>
                            
                            <img
                                src={isActive("/dashboard/recruiter/purchase/buy-package") ? c0 : "/images/RI-icons/RI-arrow-right.svg"}
                                className={`w-${isActive("/dashboard/recruiter/purchase/buy-package") ? '8' : '8'} h-[16px] mt-1 ms-[110px] cursor-pointer ${isActive("/dashboard/recruiter/purchase/buy-package") ? "cursor-pointer font-semibold" : ""}`}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PurchaseDashboard;



