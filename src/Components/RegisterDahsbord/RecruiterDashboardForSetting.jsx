import { Link, useLocation } from "react-router-dom";
import image1 from "../../../public/images/RI-icons/active-notification.png";
import image11 from "../../../public/images/RI-icons/notification.png";
import image0 from "../../../public/images/RI-icons/active-route.png";
import image2 from "../../../public/images/RI-icons/active-privacy.png";
import image22 from "../../../public/images/RI-icons/privacy.png";
import image3 from "../../../public/images/RI-icons/active-terms.png";
import image33 from "../../../public/images/RI-icons/terms.png";
import image4 from "../../../public/images/RI-icons/active-about.png";
import image44 from "../../../public/images/RI-icons/about.png";
import image5 from "../../../public/images/RI-icons/active-delete.png";
import image55 from "../../../public/images/RI-icons/delete-account.png";
import image6 from "../../../public/images/RI-icons/active-cancel.png";
import image66 from "../../../public/images/RI-icons/cancel.png";


const RecruiterDashboardForSetting = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };


    return (
        <div className="font-inter bg-white md:bg-gray-100 flex ">
            <div className="font-inter bg-white  rounded-lg shadow-md  md:w-[300px] md:h-[397px] pb-2 ps-3">
                <div className="font-inter mx-auto text-[13px]">
                    <p className="font-inter text-[#454545] text-[24px] font-semibold px-6 pt-8 pb-4">Settings</p>


                    <Link to="/dashboard/recruiter/profile/">
                        <div className={`font-inter flex justify-between px-6 pt-5 ${isActive("/dashboard/recruiter/profile/") ? "font-inter cursor-pointer text-[#0077B5] text-[16px] font-medium" : "text-[#212427]"}`}>

                            <div className="font-inter flex gap-3">

                                <img
                                    src={isActive("/dashboard/recruiter/profile/") ? image1 : image11}
                                    className={`w-[19px] h-[19px] mt-[3px] cursor-pointer ${isActive("/dashboard/recruiter/profile/") ? "text-[#0077B5]" : ""}`}
                                />

                                <p
                                    className="font-inter cursor-pointer text-[16px] font-medium"
                                >
                                    Notifications
                                </p>
                            </div>
                            <img
                                src={isActive("/dashboard/recruiter/profile/") ? image0 : "/images/RI-icons/RI-arrow-right.svg"}
                                className={`w-${isActive("") ? '8' : '8'} h-[16px] mt-[3px] left-[4px] cursor-pointer ${isActive("") ? "cursor-pointer font-medium" : ""}`}
                            />
                        </div>
                    </Link>
                    <Link to="/dashboard/recruiter/profile/privacy">
                        <div className={`font-inter flex justify-between px-6 pt-7 ${isActive("/dashboard/recruiter/profile/privacy") ? "font-inter cursor-pointer text-[#0077B5] text-[16px] font-medium" : "text-[#212427]"}`}>
                            <div className="font-inter flex gap-3">

                                <img
                                    src={isActive("/dashboard/recruiter/profile/privacy") ? image2 : image22}
                                    className={`w-[19px] h-[19px] mt-[3px] cursor-pointer ${isActive("") ? "text-[#0077B5]" : ""}`}
                                />
                                <p
                                    className="font-inter cursor-pointer text-[16px] font-medium"
                                >
                                    Privacy Policy
                                </p>
                            </div>
                            <img
                                src={isActive("/dashboard/recruiter/profile/privacy") ? image0 : "/images/RI-icons/RI-arrow-right.svg"}
                                className={`w-${isActive("/dashboard/recruiter/profile/privacy") ? '8' : '8'} h-[16px] mt-[1px] left-[4px] cursor-pointer ${isActive("") ? "cursor-pointer font-medium" : ""}`}
                            />
                        </div>
                    </Link>
                    <Link to="/dashboard/recruiter/profile/terms">
                        <div className={`font-inter flex justify-between px-6 pt-7 ${isActive("/dashboard/recruiter/profile/terms") ? "font-inter cursor-pointer text-[#0077B5] text-[16px] font-medium" : "text-[#212427]"}`}>
                            <div className="font-inter flex gap-3">

                                <img
                                    src={isActive("/dashboard/recruiter/profile/terms") ? image3 : image33}
                                    className={`w-[19px] h-[19px] mt-[2px] cursor-pointer ${isActive("") ? "text-[#0077B5]" : ""}`}
                                />
                                <p
                                    className="font-inter cursor-pointer text-[16px] font-medium"
                                >
                                    Terms & Conditions
                                </p>
                            </div>
                            <img
                                src={isActive("/dashboard/recruiter/profile/terms") ? image0 : "/images/RI-icons/RI-arrow-right.svg"}
                                className={`w-${isActive("/dashboard/recruiter/profile/terms") ? '8' : '8'} h-[16px] mt-1 left-[4px] cursor-pointer ${isActive("") ? "cursor-pointer font-medium" : ""}`}
                            />
                        </div>
                    </Link>
                    <Link to="/dashboard/recruiter/profile/about">
                        <div className={`font-inter flex justify-between px-6 pt-7 ${isActive("/dashboard/recruiter/profile/about") ? "font-inter cursor-pointer text-[#0077B5] text-[16px] font-medium" : "text-[#212427]"}`}>
                            <div className="font-inter flex gap-3">
                                <img
                                    src={isActive("/dashboard/recruiter/profile/about") ? image4 : image44}
                                    className={`w-[19px] h-[19px] mt-[3px] cursor-pointer ${isActive("") ? "text-[#0077B5]" : ""}`}
                                />
                                <p
                                    className="font-inter cursor-pointer text-[16px] font-medium"
                                >
                                    About
                                </p>
                            </div>
                            <img
                                src={isActive("/dashboard/recruiter/profile/about") ? image0 : "/images/RI-icons/RI-arrow-right.svg"}
                                className={`w-${isActive("/dashboard/recruiter/profile/about") ? '8' : '8'} h-[16px] mt-1 left-[4px] cursor-pointer ${isActive("") ? "cursor-pointer font-medium" : ""}`}
                            />
                        </div>
                    </Link>
                    <Link to="/dashboard/recruiter/profile/delete-modal">
                        <div className={`font-inter flex justify-between px-6 pt-7 ${isActive("/dashboard/recruiter/profile/delete-modal") ? "font-inter cursor-pointer text-[#0077B5] text-[16px] font-medium" : "text-[#212427]"}`}>
                            <div className="font-inter flex gap-3">
                                <img
                                    src={isActive("/dashboard/recruiter/profile/delete-modal") ? image5 : image55}
                                    className={`w-[19px] h-[19px] mt-[0px] cursor-pointer ${isActive("") ? "text-[#0077B5]" : ""}`}
                                />
                                <p
                                    className="font-inter cursor-pointer text-[16px] font-medium"
                                >
                                    Delete Account
                                </p>
                            </div>
                            <img
                                src={isActive("/dashboard/recruiter/profile/delete-modal") ? image0 : "/images/RI-icons/RI-arrow-right.svg"}
                                className={`w-${isActive("/dashboard/recruiter/profile/delete-modal") ? '8' : '8'} h-[16px] mt-[2px] left-[4px] cursor-pointer ${isActive("") ? "cursor-pointer font-medium" : ""}`}
                            />
                        </div>
                    </Link>
                    
                    {/* <Link to="/dashboard/recruiter/profile/unsubscribe">
                        <div className=
                            {`font-inter flex justify-between px-6 pt-6 ${isActive("/dashboard/recruiter/profile/unsubscribe") ? "font-inter cursor-pointer text-[#0077B5] text-[16px] font-medium" : "text-[#212427]"}`}
                        >
                            <div className="font-inter flex gap-2">


                                <img
                                    src={isActive("/dashboard/recruiter/profile/unsubscribe") ? image6 : image66}
                                    className={`w-[19px] h-[19px] cursor-pointer ${isActive("") ? "text-[#0077B5]" : ""}`}
                                />

                                <p
                                    className="font-inter cursor-pointer text-[16px] font-medium"
                                >
                                    Cancel Subscriptions
                                </p>
                            </div>
                            <img
                                src={isActive("/dashboard/recruiter/profile/unsubscribe") ? image0 : "/images/RI-icons/RI-arrow-right.svg"}
                                className={`w-${isActive("/dashboard/recruiter/profile/unsubscribe") ? '8' : '8'} h-[16px] mt-1 left-[4px] cursor-pointer ${isActive("") ? "cursor-pointer font-medium" : ""}`}
                            />


                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default RecruiterDashboardForSetting;