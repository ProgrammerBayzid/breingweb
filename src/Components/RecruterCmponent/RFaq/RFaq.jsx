import { useState } from "react";
import SingalFaq from "./SingalFaq";

const RFaq = () => {

  const [open, setOpen]=useState(false)

  const toggle = index =>{
    if(open === index){
      return setOpen(null)
    }
   setOpen(index)
  } 

const faqdata=[
  {
    title:"How bringin is different from other traditional job portals?",
    des:"The traditional hiring process is such a long way to finalize candidatess with a lot of steps the reason thousands of applications in each job post, expensive job advertising, and collecting CVs.Bringin allows recruiters to post a free job circular just in 5 minutes & without any limitations. AI technology helps recruiters to find the best candidates based on their skills, experiences, locations & activities. Recruiters can chat directly with job seekers and take instant video call interviews or schedule without any middleman/ consultants with 100% privacy protection."
  },
  {
    title:"When recruiters can post multiple jobs for free and verify their accounts?",
    des:"Bringin has made the verification system for a recruiter very simple, reliable & easy. When registering at bringin just using a mobile number a recruiter will be asked to get verified by uploading an ID Card/ offer or appointment letter/ Visiting Card/ Trade License/ company domain email or any other authorized documentsAfter the successful verification, a recruiter will be eligible to post multiple jobs totally free at bringin platform without any limitations."
  },
  {
    title:"How recruiters can hire the best candidates from bringin?",
    des:"Bringin offers both Web & Mobile Applications to the respective recruiters for their hiring needs. AI algorithm helps to segregate the best candidates in the recruiter’s feed according to the job description and demand. Targeting on the top listed candidates recruiters can connect directly and start hiring easily with very simple steps."
  },
  {
    title:"Does bringin offer any enterprise hiring solutions & how it works?",
    des:"Yes, in order to serve the best to our respective recruiters bringin offers Enterprise Hiring Solutions. Based on your multiple requirements we have a dedicated enterprise hiring team who are experts to segregate & personalize the best fit using the AI algorithm. For any kind of query regarding enterprise hiring solutions, please feel free to mail us at hello@bringin.io or whatsapp us at +880  । 1756175141"
  },

]


  return (
    <div className=" my-10">
        <div><h1 className="lg:text-[38px] md:text-[35px] text-[30px] font-semibold text-center mb-5">FAQs</h1></div>
    


<div className="">
  {
    faqdata.map((data,index)=>{
      return <SingalFaq
      key={index}
      open={index === open}
      title={data.title}
      des={data.des}
      toggle={()=>toggle(index)}
      
      />
    })
  }
</div>

    </div>
  );
};

export default RFaq;
