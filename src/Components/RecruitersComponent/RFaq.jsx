import { useState } from "react";
import SingalFaq from "./SingalFaq";

const RFaq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const faqdata = [
    {
      title: "How Unbolt is different from other traditional job portals?",
      des: "The traditional hiring process is such a long way to finalize candidates with a lot of steps the reason thousands of applications in each job post, expensive job advertising, and collecting CVs. Unbolt allows recruiters to post a free job circular just in 5 minutes & without any limitations. AI technology helps recruiters to find the best candidates based on their skills, experiences, locations & activities. Recruiters can chat directly with job seekers and take instant video call interviews or schedule without any middleman / consultants with 100% privacy protection.",
    },
    {
      title:
        "When recruiters can post multiple jobs for free and verify their accounts?",
      des: "Unbolt has made the verification system for a recruiter very simple, reliable & easy. When registering at Unbolt just using a mobile number a recruiter will be asked to get verified by uploading an ID Card / offer or appointment letter / Visiting Card / Trade License / company domain email or any other authorized documents After the successful verification, a recruiter will be eligible to post multiple jobs totally free at Unbolt platform without any limitations.",
    },
    {
      title: "How recruiters can hire the best candidates from Unbolt?",
      des: "Unbolt offers Mobile Applications to the respective recruiters for their hiring needs. AI algorithm helps to segregate the best candidate in the recruiters feed according to the job description and demand. Targeting on the top listed candidate recruiters can connect directly and start hiring easily with very simple steps.",
    },
    {
      title:
        "Does Unbolt offer any enterprise hiring solutions & how it works?",
      des: "Yes, in order to serve the best to our respective recruiters Unbolt offers Enterprise Hiring Solutions. Based on your multiple requirements we have a dedicated enterprise hiring team who are experts to segregate & personalize the best fit using the AI algorithm. For any kind of query regarding enterprise hiring solutions, please feel free to mail us at hello@unbolt.co or whatsapp us at +880 1756175141",
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

export default RFaq;
