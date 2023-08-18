import t from '../../../assets/guidline/Group 12092.svg'


const HowWeDo = () => {
  return (
    <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  ">
      <div className='ml-4'>
        <div className="flex gap-5 pb-5 mt-2  ">
          <img src={t} className="w-[17px] h-[16px] rounded mt-2" />
          <p className="text-[20px] text-[#646668] ">
            <span className="font-medium text-black"> Attend Interviews from Home</span>{" "}
            <br></br>A Recruiter can take instant interviews via chat and
            in-built video calls. The app provides an easy and hassle-free way
            to communicate between job seekers & recruiters and saves their time
            and energy.
          </p>
        </div>
        <div className="flex gap-5 pb-5 mt-2  ">
          <img src={t} className="w-[17px] h-[16px] rounded mt-2" />
          <p className="text-[20px] text-[#646668] ">
            <span className="font-medium text-black"> Get Hired Instantly</span> <br></br>
            After a chat & video call interview If a candidate is selected by
            the recruiter & he/she can get hired instantly from the bringin
            platform.{" "}
          </p>
        </div>
        <div className="flex gap-5 pb-5 mt-2  ">
          <img src={t} className="w-[17px] h-[16px] rounded mt-2" />
          <p className="text-[20px] text-[#646668] ">
            <span className="font-medium text-black"> Keep Your Profile Updated</span>{" "}
            <br></br>
            It's essential to keep your profile updated with your latest work
            experience, educational qualifications, and skills. This will help
            the app filter the right job openings for you and increase your
            chances of getting hired.{" "}
          </p>
        </div>
        <div className="flex gap-5 pb-5 mt-2  ">
          <img src={t} className="w-[17px] h-[16px] rounded mt-2" />
          <p className="text-[20px] text-[#646668] ">
            <span className="font-medium text-black"> Be Professional</span> <br></br>
            When using the app, it's crucial to maintain professionalism
            throughout the job search, chat and interview process. Always
            respond promptly, be polite, and show genuine interest in the job
            and company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
