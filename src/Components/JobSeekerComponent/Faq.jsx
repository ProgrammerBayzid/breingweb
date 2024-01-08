import { useState } from "react";
import SingalFaq from "./SingalFaq";

const Faq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const faqdata = [
    {
      title: "Is the Unbolt app free for job seekers?",
      des: "Unbolt is completely free for job seekers. We allow job seekers to create profiles, chat directly with recruiters and attend video call interviews from anywhere without any charges.",
    },
    {
      title:
        "        How do I upload a resume at Unbolt app & is it mandatory for job seekers?    ",
      des: "Job Seekers can upload their resumes when they register on the Unbolt app. This will help them show their profile complete and recommend them to potential recruiters.",
    },
    {
      title:
        "        Is Unbolt secure for job seekers, is there any chances to be deceived?    ",
      des: "At Unbolt, all the recruiters who can post jobs are 100% verified. Unbolt never allows any agency or consultant to be a recruiter so there is no chance to get scammed or spammed from this platform.",
    },
    {
      title:
        "        Does Unbolt allow job seekers to connect directly with Recruiters?    ",
      des: "The Unbolt App always allows a job seeker to connect directly with the Decision-Makers, Founders, HR Managers, and Recruiters which is completely free, and get feedback instantly without any limitations. Job Seekers also allow attending in-app video interviews.",
    },
  ];

  return (
    <div>
      <div className=" lg:mx-[40px] md:mx-[10px] mx-[10px]">
        <div>
          <h1 className="lg:text-[38px] md:text-[35px] text-[30px] font-semibold text-center mb-5">
            FAQs
          </h1>
        </div>

        <div className="">
          {faqdata.map((data, index) => {
                    const isLastItem = index === faqdata.length - 1;

            return (
              <div
                key={index}
                className={`lg:w-[980px] mx-auto mb-3 rounded pr-4 ${
                  isLastItem ? '' : 'border-b-[0.2px] border-[#BCBDBE]'
                }`}
              >
                <SingalFaq
                  key={index}
                  open={index === open}
                  title={data.title}
                  des={data.des}
                  toggle={() => toggle(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
