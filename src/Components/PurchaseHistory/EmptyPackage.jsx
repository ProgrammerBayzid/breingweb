import empty from "../../../public/images/RI-icons/package.png";

const EmptyPackage = () => {
    return (
        <div className="bg-white md:bg-gray-100 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[397px] mb-40 mt-8">
                <div className="w-[330px] h-[205px] mx-auto">
                    <img className="mx-auto mt-20" src={empty} alt="Cancel" />
                    <p className="text-center text-[#212427] text-opacity-90 text-[16px] font-normal font-inter mt-10">Opps! You didn't purchased any plan yet!  <span className="text-[#0077B5] cursor-pointer">Click here </span>to purchase a plan & start hiring.</p>
                    <button className="text-[#1C4B81] w-[152px] h-[38px] font-semibold text-[16px] border border-1 border-[#1C4B81] rounded-[20px] mt-4 mx-[90px]">Purchase a Plan</button>
                </div>
            </div>
        </div>
    );
};

export default EmptyPackage;