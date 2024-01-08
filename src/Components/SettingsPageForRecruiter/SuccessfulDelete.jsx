import pic from "../../../public/images/RI-icons/ok-done.png";

const SuccessfulDelete = () => {
    return (
        <div className="fixed inset-0 bg-[#090808] bg-opacity-20 flex justify-center items-center z-40 App">
        <div className="bg-white mx-auto rounded-lg w-[555px] h-[357px] md:w-[555px] md:h-[357px] -mt-16">
            <div className="flex flex-col justify-center items-center my-24 pb-8">
                <img className="w-[60px] h-[60px] mx-auto" src={pic} alt="" />
                <p className="text-[#212427] text-[22px] text-center py-5 font-semibold font-inter">Successfully Deleted</p>
            </div>
        </div>
    </div>
    );
};

export default SuccessfulDelete;