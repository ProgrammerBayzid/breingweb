const ContactUs = () => {
  // useTitle('Contact-us - Bringin')

  return (
    <div>
      <div>
        <div className="relative lg:bg-[url(/src/bgimages/ContactUsbg.png)] bg-contain	  bg-no-repeat">
          <div className="lg:mx-[40px] mx-[10px]">
            <div className="lg:h-[1000px] ">
              <div className="lg:w-[507px] lg:w-[510px]   rounded rounded-[5px] lg:p-10 p-2">
                <h1 className="text-[#004162] lg:text-[24px] text-[20px] font-semibold my-4">
                  How can we help you?
                </h1>
                <div className="lg:w-[507px] lg:h-[462px] p-[33px] bg-white">
                  <p className="text-[16px] font-semibold text-[#454545] mb-2">
                    Your Email
                  </p>

                  <div>
                    <input
                      placeholder="jakariahn@yahoo.com"
                      className="focus:outline-none pl-5 lg:w-[437px] lg:h-[43px] border border-[#7B7B7B] border-[0.5px] rounded rounded-[5px] mb-2"
                    />
                  </div>

                  <p className="text-[12px] text-opacity-80 text-[#454545] mb-5">
                    Please, enter the email address where you wish to receive
                    our answer.
                  </p>

                  <textarea
                    placeholder="Write us a message "
                    className=" focus:outline-none lg:w-[437px] lg:h-[196px] border border-[0.5px] border-[#7B7B7B] pl-5 pt-4 rounded rounded-[5px]"
                  />

                  <div className="flex justify-center mt-5">
                    <button className="text-[18px] text-white bg-[#0077B5] w-[125px] h-[50px] flex items-center gap-x-2 justify-center rounded rounded-[5px]">
                      <img
                        className="w-[22px] h-[22px]"
                        src="/images/cemail.png"
                      />
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
