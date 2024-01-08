import icon1 from "../../../public/images/RI-icons/unbolt.png";
import icon2 from "../../../public/images/RI-icons/download.png";

const PaymentReceipt = () => {
    return (
        <div className="font-inter bg-white md:bg-gray-100 flex justify-center">
            <div className="font-inter bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[830px] mb-40">
                <div className="font-inter my-auto ms-2">
                    <div className="font-inter ">
                        <img className="font-inter mx-auto mt-6 mb-6 w-[110px] h-[45px]" src={icon1} alt="" />
                    </div>
                </div>
                <div className="font-inter bg-[#1C4B81] w-[198px] h-[40px] rounded-2xl py-2 ms-[230px] text-center text-[18px] text-white font-semibold">Payment Receipt</div>
                <div className="font-inter flex justify-between">
                    <div className="font-inter my-4">
                        <div className="font-inter font-semibold text-[16px] text-[#212427] mt-2">Billing Information</div>
                        <div className="font-inter font-normal text-[#212427] text-[16px]">
                            <span className="font-inter font-medium text-[#212427] text-[16px]">Name:</span> Rony Hosen Sarker
                            </div>
                        <div className="font-inter font-normal text-[#212427] text-[16px]">
                            <span className="font-inter font-medium text-[#212427] text-[16px]">Mobile:</span> +88 01788026837
                            </div>
                        <div className="font-inter font-normal text-[#212427] text-[16px]">
                            <span className="font-inter font-medium text-[#212427] text-[16px]">Email:</span> rony@bringin.io
                            </div>
                    </div>
                    <button className="font-inter bg-[#1C4B81] text-white w-[50px] h-[40px] mt-4 text-[16px] font-medium rounded-2xl">
                        Paid
                        </button>
                </div>
                <div className="font-inter text-[#212427] my-2">
                    <div className="font-inter inline-flex text-left gap-[284px] ps-6 bg-[#F2F0F5] font-medium text-[#212427] text-[16px] pb-8 pt-2 border border-b-0 w-[640px] h-[20px]">
                        <span className="font-inter font-medium text-[#212427] text-[16px]">Description</span> 
                        Amount
                        </div>
                    <div className="font-inter  font-normal text-[#212427] text-[16px] inline-flex text-left gap-[300px] ps-6 bg-[#F2F0F5] pb-8 pt-2 border border-b-0 w-[640px] h-[20px]">
                        <span className="font-inter -me-12">
                        7 Days Package
                            </span>
                            <span className="font-inter text-[14px]">৳550</span>
                            </div>
                    <div className="font-inter inline-flex text-left gap-[295px] ps-10 bg-[#F2F0F5] pb-8 pt-2 border border-b-0 w-[640px] h-[20px]">
                        <span className="font-inter -ms-4">Discount</span> 
                        <span className="font-inter ms-3 text-[14px]">৳0.00</span>
                        </div>
                    {/* <div className="font-inter inline-flex text-left gap-[272px] ps-10 bg-[#F2F0F5] pb-8 pt-2 border border-b-0 w-[640px] h-[20px] text-[14px]">
                        <span className="font-inter -ms-4 text-[16px] ">SC, SD & VAT</span>
                        ৳0.00
                         </div> */}
                    <div className="font-inter inline-flex text-left gap-[305px] ps-[35px] font-semibold bg-[#F2F0F5] pb-8 pt-2 border border-b-0  w-[640px] h-[20px]">
                        <span className="font-inter -ms-3 text-[14px] ">Total Paid</span> 
                        <span className="font-inter ms-1 text-[14px]">৳550</span>
                        </div>
                </div>
                <div className="font-inter my-6 text-[#212427]">
                    <div className="font-inter inline-flex gap-[125px] w-[640px] h-[19px]">
                        <span className="font-inter font-medium text-[16px]">Gateway Trx ID
                        <span className="font-inter ms-[44px]">:</span>
                        </span> 
                        <span className="-ms-[92px] font-normal text-[16px]">BGT112020221115163783</span>
                        </div>
                    <div className="font-inter inline-flex gap-[96px] w-[640px] h-[19px] my-1">
                        <span className="font-inter font-medium text-[16px]">Payment Method
                        <span className="font-inter ms-[30px]">:</span>
                        </span> 
                        <span className="font-inter -ms-16 font-normal text-[16px]">MFS, bKash</span>
                        </div>
                    <div className="font-inter inline-flex gap-24 w-[640px] h-[19px]">
                        <span className="font-inter font-medium text-[16px]">Receipt No
                        <span className="font-inter ms-[78px]">:</span>
                        </span> 
                        <span className="font-inter -ms-16 font-normal text-[16px]">0123456</span>
                        </div>
                    <div className="font-inter inline-flex gap-[127px] w-[640px] h-[19px] mt-1">
                        <span className="font-inter font-medium text-[16px]">Payment Date <span className="font-inter ms-[50px]">:</span> 
                        </span> 
                        <span className="font-inter -ms-24 font-normal text-[16px]">15-04-2023</span>
                        </div>
                </div>
                <div className="font-normal text-[16px] text-[#212427]">
                    <span className="font-inter text-[16px] font-medium text-[#212427] mt-6">Notes: </span>
                     To learn more about our payment policies, please 
                     <span className="font-inter text-[#0077B5] cursor-pointer"> click here </span>
                      and refer to the "Package Deals" section.
                      </div>
                <div className="font-inter mx-48 mt-10">
                    <button className="font-inter inline-flex gap-2 border border-1 rounded-lg p-2 text-[#212427] text-opacity-90">
                        <img src={icon2} alt="" /> Download Receipt as PDF
                        </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentReceipt;