import { Link } from "react-router-dom";


const CancelSubscriptionSuccessful = () => {
    return (
        <div className="fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
        <div className="bg-white mx-auto rounded-lg w-[475px] h-[187px] -mt-28">
            <div className="flex flex-col justify-center items-center py-8">
                <p className="text-[#212427] text-opacity-80 text-[16px] text-center px-5 font-inter">
                    Your subscription has been successfully canceled. Please be aware that access to services and features will cease upon the expiration of your subscription.
                    </p>
                    <div className="text-center py-5">
                        <Link to="/dashboard/recruiter/profile/">
                        <button className="bg-[#00A0DC] w-[147px] h-[32px] rounded-md text-white text-[16px] font-inter">Okay</button>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default CancelSubscriptionSuccessful;