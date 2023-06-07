import useTitle from "../../hooks/useTitle";
import AppLogo from "../App/AppLogo";
import dot from '../../assets/privicy/Ellipse 207.svg'
const PrivacyPolicy = () => {
  useTitle('Privacy Policy - Bringin')

  return (
    <div className="my-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="lg:mx-12">
        <h1 className="text-[40px] text-center font-semibold mb-7">
          Privacy Policy
        </h1>

        <p className=" my-7  px-5 font-medium text-[21px] text-[#333333]">
        Before accessing or using the Platform, please ensure that you have read and understood our Privacy Policy.
        </p>
        <p className="font-semibold my-7 px-5 text-[23px] text-[#333333]">
        1. Information We Collect{" "}
        </p>
        <div className="lg:px-5 px-5">
          <div className="mt-7">
            <div className="mb-7">
              <p className="font-semibold text-[21px]">
              A) Information We Collect Through Website:
              </p>
              <p className="text-[#6A6A6A] text-[21px] font-medium">
              We collect all the information you provide while creating your account, as well as other information that your browser sends whenever you visit our Platform. This information may include your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Platform that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
              </p>
            </div>
            <div className="mb-7">
              <p className="font-semibold text-[21px]">
              B) Information We Collect Through Mobile App Permission:              </p>
              <p className="text-[#6A6A6A] text-[21px] font-medium">
              Like our website, we collect all the information you provide on your profile or while creating your account, as well as other permissions that you grant us:
              </p>
            </div>

            <div className="mb-7">
              <p className="font-semibold text-[21px]">
                Location:{" "}
                <span className="text-[#6A6A6A] text-[21px] font-medium">
                If you allow us, we collect your location information so that you can easily find your desired jobs or candidates in your desired location.
                </span>
              </p>
            </div>
            <div className="mb-7">
              <p className="font-semibold text-[21px]">
                Camera:{" "}
                <span className="text-[#6A6A6A] text-[21px] font-medium">
                If you allow us, this enables you to give direct interviews via video call.
                </span>
              </p>
            </div>

            <div className="mb-7">
              <p className="font-semibold text-[21px]">
              Microphone:
                <span className="text-[#6A6A6A] text-[21px] font-medium">
                If you allow us, this enables you to communicate with recruiters/candidates.
                </span>
              </p>
            </div>
            <div className="mb-7">
              <p className="font-semibold text-[21px]">
                Contacts:
                <span className="text-[#6A6A6A] text-[21px] font-medium">
                If you allow us, we can help you invite your friends through SMS or WhatsApp.
                </span>
              </p>
            </div>
            <div className="mb-7">
              <p className="font-semibold text-[21px]">
              Storage:
                <span className="text-[#6A6A6A] text-[21px] font-medium">
                If you allow us, this enables you to upload your resume, profile picture, and all other documents needed for your profile.


                </span>
              </p>
            </div>

            <p className="font-semibold text-[24px] mb-4">

            2. How We Use Your Information            </p>
            <p className=" font-medium text-[24px] mb-7">
            We use the information we collect in various ways, including:            </p>
            <div className="flex gap-4 items-center mb-7">
              <div>
                <img
                  
                  
                  alt=""
                  src={dot}
                  className=""
                ></img>
              </div>
              <div>
                <p className=" text-[#6A6A6A] text-[21px] font-medium">
                Provide, operate, and maintain our application.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center mb-7">
              <div>
                <img
                  
                  
                  alt=""
                  src={dot}
                  className=""
                ></img>
              </div>
              <div>
                <p className=" text-[#6A6A6A] text-[21px] font-medium">
                  {" "}
                  Improve, personalize, and expand our application.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center mb-7">
              <div>
                <img
                  
                  
                  alt=""
                  src={dot}
                  className=""
                ></img>
              </div>
              <div>
                <p className=" text-[#6A6A6A] text-[21px] font-medium">
                Understand and analyze how you use our application.                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center mb-7">
              <div>
                <img
                  
                  
                  alt=""
                  src={dot}
                  className=""
                ></img>
              </div>
              <div>
                <p className=" text-[#6A6A6A] text-[21px] font-medium">
                  {" "}
                  Develop new products, services, features, and functionality.                </p>
              </div>
            </div>
            <div className="flex gap-4  mb-7">
              <div>
                <img
                 
                  alt=""
                  src={dot}
                  className="mt-3 w-4"
                ></img>
              </div>
              <div>
                <p className=" text-[#6A6A6A] text-[21px] font-medium">
                  {" "}
                  Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center mb-7">
              <div>
                <img
                  
                  
                  alt=""
                  src={dot}
                  className=""
                ></img>
              </div>
              <div>
                <p className=" text-[#6A6A6A] text-[21px] font-medium">
                Send you emails.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center mb-7">
              <div>
                <img
                  
                  
                  alt=""
                  src={dot}
                  className=""
                ></img>
              </div>
              <div>
                <p className=" text-[#6A6A6A] text-[21px] font-medium">
                Find and prevent fraud.
                </p>
              </div>
            </div>

            <p className="font-semibold text-[24px] mb-7">
            3. Third-Party Services, Tools and SDKs We Used            </p>

            <div className="mb-7">
              <p className="font-semibold text-[21px]">
                
A)  Payment Gateway: {" "}
                <span className="text-[#6A6A6A] text-[21px] font-medium">
                We use this service to help you accept digital payments and deliver the best payment solutions.
                </span>
              </p>
            </div>

            <div className="mb-7">
              <p className="font-semibold text-[21px]">
              B) Firebase SDK: {" "}
                <span className="text-[#6A6A6A] text-[21px] font-medium">
                We use this to help our web and app to grow.
                </span>
              </p>
            </div>

            <div className="mb-7">
              <p className="font-semibold text-[21px]">
              C) Agora Video SDK:{" "}
                <span className="text-[#6A6A6A] text-[21px] font-medium">
                We use this to help you connect with recruiters/candidates via video call.
                </span>
              </p>
            </div>

            <div className="mb-7">
              <p className="font-semibold text-[21px]">
              D) Sendbird:{" "}
                <span className="text-[#6A6A6A] text-[21px] font-medium">
                We use this to make your message conversations better.
                </span>
              </p>
            </div>

            <div className="mb-7">
              <p className="font-semibold text-[24px]">
              4. Third-Party Privacy Policies              </p>
              <p className="mb-7 text-[#6A6A6A] text-[21px] font-medium">
              Our Privacy Policy does not apply to other advertisers or websites. Thus, we advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. This may include their practices and instructions on how to opt-out of certain options.<br></br>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found on the browsers' respective websites.
              </p>
            </div>

            <div className="mb-7">
              <p className="font-semibold text-[24px] mb-4">
              5. How Long We Keep Your Personal Data              </p>
              <p className="text-[#6A6A6A] text-[21px] font-medium">
              We will only keep your personal data as long as necessary to provide you the service on our platform. Afterward, we will retain your information as necessary to comply with legal, accounting, or policy requirements.
              </p>
            </div>

            <div className="mb-7">
              <p className="font-semibold text-[24px] mb-4">
              6. Procedures for Personal Information Disclosure              </p>
              <p className="text-[#6A6A6A] text-[21px] font-medium">
              The Company does not provide any of your Personal Information to any third party or advertiser. We restrict access to your Personal Information to only those who we believe reasonably need to provide you a job. We do not disclose your personal data to anyone or third party. We may disclose or provide aggregated and anonymous information and analytics about the users of our websites and services to third parties. Before we do so, we will make sure that such information does not identify you.
              </p>
            </div>

            <div className="mb-7">
              <p className="font-semibold text-[24px] mb-4">
              7. Modification of Privacy Policy              </p>
              <p className="text-[#6A6A6A] text-[21px] font-medium">
              Bringin reserves the right to modify or change the present Privacy Policy without prior notice. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective.
              </p>
            </div>

            <div className="my-10">
              <p className=" font-medium text-[21px] font-medium">
                If you have any more questions about bringin terms and condition
                please contact us at{" "}
                <span className="text-[#0077B5] font-semibold">
                  hello@bringin.io
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
           <AppLogo></AppLogo>
           </div>
    </div>
  );
};

export default PrivacyPolicy;
