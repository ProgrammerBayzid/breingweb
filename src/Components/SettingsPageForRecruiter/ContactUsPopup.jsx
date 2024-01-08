
const ContactUsPopup = () => {
    
    const handleGoBack = () => {
        window.history.back(); // This will navigate back one step in the browser's history
      };

    return (
        <div className="fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
            <div className="mx-auto rounded-lg w-[460px] h-[236px] -mt-[100px] md:w-[460px] md:h-[236px]">
                <div className="w-[457px] h-[258px] mx-auto py-8 text-white">
                    <p onClick={handleGoBack} className="hidden md:block cursor-pointer mt-1 text-end">✕</p>
                    <div className="flex flex-col gap-4 mt-10">
                        <div className="w-[457px] h-[60px] mx-auto border border-1 rounded-md bg-[#FFFFFF]">
                            <div className="flex justify-between py-4 px-6 font-semibold">
                                <p className="text-[#454545] text-[18px] font-inter">WhatsApp</p>
                                <p className="text-[#0077B5] text-[18px] font-inter">+88 01756175141</p>
                            </div>
                        </div>
                        <div className="w-[457px] h-[60px] mx-auto border border-1 rounded-md bg-[#FFFFFF]">
                            <div className="flex justify-between py-4 px-6 font-semibold">
                                <p className="text-[#454545] text-[18px] font-inter">Mobile</p>
                                <p className="text-[#0077B5] text-[18px] font-inter">+88 01756175141</p>
                            </div>
                        </div>
                        <div className="w-[457px] h-[60px] mx-auto border border-1 rounded-md bg-[#FFFFFF]">
                            <div className="flex justify-between py-4 px-6 font-semibold">
                                <p className="text-[#454545] text-[18px] font-inter">Email</p>
                                <p className="text-[#0077B5] text-[18px] font-inter">hello@unbolt.co</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPopup;