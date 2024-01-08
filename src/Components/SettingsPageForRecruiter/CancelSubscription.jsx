

const CancelSubscription = () => {
    return (
        <div className="bg-white md:bg-gray-100 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[674px] mb-40">
                <div className="w-[477px] h-[174px] mx-auto mt-44">
                    <img className="mx-auto" src="/images/RI-icons/cancel-subscription.svg" alt="Cancel" />
                    <p className="text-center text-[#212427] text-opacity-80 text-[16px] font-inter mt-10">We regret to inform you that there are no premium packages associated with your account for cancellation.</p>
                </div>
            </div>
        </div>
    );
};

export default CancelSubscription;