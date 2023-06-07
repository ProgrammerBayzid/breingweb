import t from "../../../assets/guidline/Group 12092.svg";
import g from "../../../assets/guidline/ec69a01b-f80b-446a-bc40-5506d36319d0 1.svg";
const GuidlineHero = () => {
  return (
    <div>
      <h1 className="font-semibold text-[42px] text-center mt-10">Guideline</h1>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={g}
            className="lg:w-[604px] md:w-[604px] lg:h-[577px] md:h-[557px] w-[350px] h-[400px] rounded-lg  lg:mb-20 md:mb-20 mb-5"
          />
          <div className="">
            <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold my-10 lg:text-start md:text-center text-center">
              Advise for Job Seekers
            </h1>

            <div>
              <div className="flex gap-5 pb-5 mt-2  ">
                <img src={t} className="w-[17px] h-[16px] rounded mt-2" />
                <p className="text-[20px] text-[#646668] ">
                  <span className="font-medium text-black"> Download the Bringin App</span>{" "}
                  <br></br>
                  The first step for a job seeker is to download the Bringin App
                  from the App Store or Google Play Store.
                </p>
              </div>
              <div className="flex gap-5 pb-5 mt-2  ">
                <img src={t} className="w-[17px] h-[16px] rounded mt-2" />
                <p className="text-[20px] text-[#646668]">
                  <span className="font-medium text-black"> Create a Profile</span>{" "}
                  <br></br>
                  Once the app is downloaded, the job seeker needs to create a
                  profile with their personal and professional details. This
                  includes their name, contact information, work experience,
                  educational qualifications, and skills.
                </p>
              </div>
              <div className="flex gap-5 pb-5 mt-2  ">
                <img src={t} className="w-[17px] h-[16px] rounded mt-2" />
                <p className="text-[20px] text-[#646668]">
                  <span className="font-medium text-black"> Get AI Matching Jobs</span>{" "}
                  <br></br>
                  After creating a profile, job seekers can browse through
                  available job openings on the app directly according to their
                  functional areas . The app uses AI technology to filter and
                  segregate expected job based on their qualifications and
                  experience, making it easier for job seekers to find the right
                  job.
                </p>
              </div>
              <div className="flex gap-5 pb-5 mt-2  ">
                <img src={t} className="w-[17px] h-[16px] rounded mt-2" />
                <p className="text-[20px] text-[#646668]">
                  <span className="font-medium text-black">
                    {" "}
                    Chat Directly with the Recruiters
                  </span>{" "}
                  <br></br>
                  Job seekers can chat directly with the recruiters through the
                  in-built chat app, they can also send their resumes and cover
                  letters to the right recruiters & get hired instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default GuidlineHero;
