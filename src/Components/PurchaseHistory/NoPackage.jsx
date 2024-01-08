import no from "../../../public/images/RI-icons/Group.png";

const NoPackage = () => {
    return (
        <div className="bg-white md:bg-gray-100 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[568px] mb-40 mt-8">
                <div className="w-[477px] h-[174px] mx-auto mt-32">
                    <img className="mx-auto" src={no} alt="Cancel" />
                    <p className="font-inter text-center font-normal text-[#212427] text-opacity-90 text-[16px] mt-8">Opps! You didn't purchased any plan yet! </p>
                    <button className="text-[#1C4B81] w-[152px] h-[38px] font-semibold text-[16px] border border-1 border-[#1C4B81] rounded-[20px] mt-4 mx-[160px]">Purchase a Plan</button>
                </div>
            </div>
        </div>
    );
};

export default NoPackage;