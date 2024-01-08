import pic from "../../../public/images/RI-icons/company-name.png";
const About = () => {
    return (
        <div className="bg-white md:bg-gray-100 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[674px] mb-40">
                <div className="my-auto ms-2">
                    <img className="mx-auto my-6 w-[60px] h-[60px]" src={pic} alt="" />
                    <p className="mx-auto font-semibold text-[#212427] text-opacity-90 text-[18px] font-inter w-[280px] h-[22px]">Unbolt: Chat Based Hiring App</p>
                    <div className='md:w-[640px] md:h-[95px]'>
                        <div className="flex justify-between mt-12">
                            <p className="text-[#212427] text-[16px] font-inter ps-2">WhatsApp</p>
                            <p className='text-[#212427] text-[16px] font-inter text-justify'>+88 01756175141</p>
                        </div>
                        <a href="https://wa.me/qr/QUAS4SAGXT7DK1" className="text-[#0077B5] text-[16px] ms-[364px] font-inter mt-2">https://wa.me/qr/QUAS4SAGXT7DK1</a>
                        <div className="flex justify-between my-3">
                            <p className="text-[#212427] text-[16px] font-inter ps-2">Email</p>
                            <p className="text-end text-[#0077B5] text-[16px] font-inter ">hello@unbolt.co</p>
                        </div>
                    </div>
                    <p className="pt-16 text-[#212427] text-opacity-80 text-[16px] font-inter  pe-6 text-justify">Bringin Technologies Limited started it’s journey on June 2023, is an AI-powered first chat-based instant hiring app which has specially designed for the Startups and SMEs in Bangladesh.</p>
                    
                    <div className="flex gap-3 mt-4">
                        <div className="w-[200px] h-[300px]">
                            <img src="/images/RI-icons/about.svg" alt="" />
                        </div>
                        <p className="text-[#212427] text-opacity-80 text-[16px] font-inter my-4 pe-10 text-justify">The application aims to streamline the hiring process by providing a quick efficient way for companies to connect with job seekers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;