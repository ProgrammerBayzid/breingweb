import taka from "../../../public/images/RI-icons/taka.png";
import clock from "../../../public/images/RI-icons/clock.png";
import { useState } from 'react';

const SinglePackage = ({packageData, buyPackage}) => {
    const {amount, chat, currency, createdAt, duration_time, name, updatedAt,suggestname} = packageData;

    const [isPurchased, setIsPurchased] = useState(false);

    const handlePurchaseClick = () => {
        if (!isPurchased) {
          setIsPurchased(true);
          console.log(packageData);
        }
      };
    

    return (
        <div>
            <p className="font-inter mt-6 mb-2 ps-2 font-medium text-[17px]">{suggestname}</p>
                <div className="font-inter border border-1 rounded-lg pt-2 my-1 w-[405px] h-[104px] shadow-lg ps-2">
                    <div className="font-inter -ms-6">
                        <div className="font-inter ms-4">
                            <div className="font-inter flex gap-[180px]">
                                <p className="font-inter font-semibold text-[16px] ms-4">{chat} Chats Daily</p>
                                <div className="flex gap-1">
                                    <img className="w-[10px] h-[12px] mt-1 font-medium text-[16px]" src={taka} alt="" />
                                    <p>
                                        {amount}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1 ms-4 mt-1">
                                <img className="w-[13px] h-[13px] mt-1" src={clock} alt="" />
                                <p className="font-normal text-[14px]">
                                    {duration_time} Days Validity
                                </p>
                            </div>
                            <div className="flex gap-[45px] mt-4">
                                <p className="ms-4 font-normal text-[12px] text-[#212427] text-opacity-60">
                                    Including SC, SD & VAT.
                                </p>
                                <button
        className={`font-inter w-[113px] h-[30px] rounded-2xl font-semibold text-[14px] ms-20 -mt-3 text-white cursor-pointer ${
          isPurchased ? 'bg-[#0077B5]' : 'bg-[#10AC4B]'
        }`}
        onClick={handlePurchaseClick}
      >
        {isPurchased ? 'Purchased' : 'Purchase Now'}
      </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SinglePackage;