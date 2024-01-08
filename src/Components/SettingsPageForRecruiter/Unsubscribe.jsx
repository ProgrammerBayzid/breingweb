import { Link } from "react-router-dom";


const Unsubscribe = () => {
    return (
        <div className="bg-white md:bg-gray-100 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[674px] mb-40">
                <div className="w-[640px] h-[125px] shadow-lg border border-1">
                    <p className="ms-4 my-2 font-semibold text-[#212427] text-[17px] font-inter">Your Current Active Package</p>
                    <div className="flex">
                        <p className="mb-2 ms-4 inline-flex text-[#212427] text-[16px] font-inter ">Silver <li className="ms-4 text-[#212427] text-[16px] font-inter ">20 Chats Per Day</li></p>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex ms-4 bg-[#00A0DC] bg-opacity-20">
                            <img className="-mt-1 ms-3" src="/images/RI-icons/taka.svg" alt="" />
                            <button className="w-[75px] h-[28px] text-[14px] font-inter">1499 BDT</button>
                        </div>
                        <div className="flex">
                            <img className="-mt-1 -me-9" src="/images/RI-icons/calender.svg" alt="" />
                            <button className="w-[100px] h-[28px] bg-[#00A0DC] bg-opacity-20 mx-4 text-[14px] font-inter">1 Month</button>
                        </div>
                    </div>
                </div>
                <div className="w-[606px] h-[251px] mx-auto mt-12">
                    <img className="mx-auto" src="/images/RI-icons/cancel-subscription.svg" alt="" />
                    <h1 className="text-[#212427E5] text-opacity-90 text-[18px] text-center px-28 font-semibold font-inter mt-6">Are you sure you want to cancel your subscription?</h1>
                    <p className="text-center text-[#212427] text-opacity-60 text-[16px] font-inter mt-6">If you decide to cancel your subscription, please note that once it expires, you will no longer have access to the chat feature included in the package.</p>
                    <Link to="/dashboard/recruiter/profile/">
                    <button className="w-[120px] h-[38px] bg-[#00A0DC] ms-44 mt-6 text-white me-6 text-[16px] font-inter">Go Back</button>
                    </Link>
                    <Link to="/cancel-subscription-successful">
                    <button className="w-[120px] h-[38px] text-[#00A0DC]  text-[16px] font-inter  border border-1 p-2 border-[#00A0DC]">Unsubscribe</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Unsubscribe;