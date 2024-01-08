

const OpenWithoutWorkMail = () => {
  return (
    <div className="font-inter fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
    <div className="font-inter bg-white relative w-[350px] h-[500px] lg:w-[700px] lg:h-[481px] lg:p-0 md:p-0 p-2 rounded-[10px]">
      <div className="font-inter flex justify-between w-[305px] h-[66px] md:w-[641px] md:h-[48px] md:ps-6 md:py-5">
        <div>
          <p className="font-inter text-[20px] font-bold mb-2">Verify with work email</p>
          <p className="font-inter text-[#212427] text-[16px] text-opacity-60">Click below to enter your work email which was provided by your company domain.</p>
        </div>
        <p className="font-inter cursor-pointer -me-7 md:-me-9" onClick={() => setWorkMailOpen(false)}>✕</p>
      </div>
      <div className="font-inter relative w-full mb-1 mx-5">
        <div className="font-inter mt-8 md:mt-12 ms-0 me:4 md:me-6 md:ms-8" >
          <input
            className="font-inter focus:outline-none input ps-2 w-full -ms-6 md:-ms-8 md:-mx-2 mb-[5px] h-[44px] border-[2px] text-[#212427] text-opacity-60"
            placeholder="Enter your work e-mail"
          />
        </div>
        <img
          src="/images/RI-icons/Tick mark.svg"
          className="font-inter absolute inset-y-0 right-8 md:right-16 top-1/2 transform -translate-y-1/2 h-[16px] w-[16px] "
        />
      </div>
      <div className="font-inter w-[330px] md:w-[626px] h-[67px] md:mx-6 mt-7">
        <p className="font-inter mb-1 text-[#212427] text-[16px] text-opacity-60 font-bold">Authorization Request!</p>
        <p className="font-inter text-[#212427] text-[16px] text-opacity-60">To proceed with the verification process, kindly use your company email. Please note that free email addresses are not accepted.</p>
      </div>
      <div className="font-inter mx-7">
        <button className='btn bg-[#0077B5] w-[330px] md:w-[640px] h-[48px] mt-[190px] md:mt-[170px] -mx-6 md:mx-auto rounded-lg text-white text-[18px]'>Submit</button>
      </div>
    </div>
  </div>
  );
};

export default OpenWithoutWorkMail;