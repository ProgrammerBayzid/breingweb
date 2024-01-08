
import { Helmet } from 'react-helmet';
import AppLogo from '../App/AppLogo';
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const RefundCancellationPolicy = () => {
  useEffect(() => {
    
    const script = document.createElement("script");

     
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1556748687572177";
    script.async = true;
    script.crossOrigin = "anonymous";

     document.head.appendChild(script);

     return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className=' lg:my-[70px] my-[20px] lg:mx-[40px] md:mx-[10px] mx-[10px]'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Read our cancellation & refund policy | Unbolt Chat Based Hiring App </title>
                <meta name="description" content="Understanding our cancellation and refund policy. Stay informed about the process on Unbolt, your instant hiring companion." />
                <link rel="canonical" href="http://unbolt.co/cancellation-and-refund-policy" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-KKFH10XGFV"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKFH10XGFV');
          `}
        </script>
            </Helmet>
      <div className='lg:mx-16'>
        <div>
        <h1 className="text-center text-[#023C5B] font-semibold	text-[#4D5052] lg:text-[40px] md:text-[30px] text-[25px] mb-7">
        Cancellation & Refund Policy
        </h1>
        </div>
        <div className="mb-7">
          <p className="font-semibold text-[#4D5052] text-[23px]">1. Cancellation Policy</p>
          <p className="text-[#6A6A6A] text-[20px] ">
            We understand that circumstances may change, and you may need to
            cancel your subscription with Unbolt. Therefore, we have
            implemented a cancellation policy to ensure a smooth process for our
            users.
          </p>
        </div>
        <div className="mb-7">
          <p className="   text-[#6A6A6A] text-[20px] ">
            <span className="font-semibold text-[23px] text-[#4D5052] ">
             A) Subscription Cancellation:
            </span>{" "}
            You have the freedom to cancel your subscription with Unbolt at any
            time and switch back to the free model. To initiate the
            cancellation, please follow the steps outlined below:
          </p>
          <div className="flex gap-2  my-2">
            <div>
                    <LazyLoadImage
              effect= "blur" alt="Unbolt image" src="/images/privicy/Ellipse 207.svg" className="mt-3"></LazyLoadImage>
            </div>
            <div>
              <p className=" text-[#6A6A6A] text-[20px]">
                {" "}
                Log in to your Unbolt account.
              </p>
            </div>
          </div>
          <div className="flex gap-2  my-2">
            <div>
                    <LazyLoadImage
              effect= "blur" alt="Unbolt image" src="/images/privicy/Ellipse 207.svg" className="mt-3"></LazyLoadImage>
            </div>
            <div>
              <p className=" text-[#6A6A6A] text-[20px] ">
                {" "}
                Go to the Account Settings or Subscription section.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-2  my-2">
            <div>
                    <LazyLoadImage
              effect= "blur" alt="Unbolt image" src="/images/privicy/Ellipse 207.svg" className="mt-3"></LazyLoadImage>
            </div>
            <div>
              <p className=" text-[#6A6A6A] text-[20px] ">
                {" "}
                Locate the cancellation option and follow the provided
                instructions.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-7">
          <p className="   text-[#6A6A6A] text-[20px] ">
            <span className="font-semibold text-[#4D5052] text-[23px] ">
              B) Effect of Cancellation:
            </span>{" "}
            Upon canceling your subscription, the following effects will take
            place:
          </p>
          <div className="flex gap-2  my-2">
            <div>
                    <LazyLoadImage
              effect= "blur" alt="Unbolt image" src="/images/privicy/Ellipse 207.svg" className="mt-3"></LazyLoadImage>
            </div>
            <div>
              <p className=" text-[#6A6A6A] text-[20px] ">
                {" "}
                Your subscription will be terminated immediately.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-2  my-2">
            <div>
                    <LazyLoadImage
              effect= "blur" alt="Unbolt image" src="/images/privicy/Ellipse 207.svg" className="mt-3"></LazyLoadImage>
            </div>
            <div>
              <p className=" text-[#6A6A6A] text-[20px] ">
                {" "}
                You will no longer have access to the premium features
                associated with your subscription plan.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-2  my-2">
            <div>
                    <LazyLoadImage
              effect= "blur" alt="Unbolt image" src="/images/privicy/Ellipse 207.svg" className="mt-3"></LazyLoadImage>
            </div>
            <div>
              <p className=" text-[#6A6A6A] text-[20px] ">
                {" "}
                Any remaining chat initiations or benefits provided by the
                subscription plan will cease.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-7">
          <p className="   text-[#6A6A6A] text-[20px] ">
            <span className="font-semibold text-[#4D5052] text-[23px] ">
              C) Reverting to Free Model:
            </span>{" "}
            After canceling your subscription, you will automatically revert to
            the free model offered by Unbolt. As a Job Seeker or Recruiter, you
            can continue to enjoy our services free of charge what we offered
            usually. However, certain limitations and restrictions may apply to
            the features and benefits available in the free model.
          </p>
        </div>

        <div className="mb-7">
          <p className="   text-[#6A6A6A] text-[20px] ">
            <span className="font-semibold text-[#4D5052] text-[23px] ">
              D) Modification or Termination of Cancellation Policy:
            </span>{" "}
            Unbolt reserves the right to modify or terminate the cancellation
            policy at any time. In the event of any changes, we will notify
            users through our website, app notifications, whatsapp or other
            appropriate communication channels.
          </p>
          <p className="text-[#6A6A6A] text-[20px] mt-7">
            For further assistance or inquiries regarding subscription
            cancellation, please contact our support team. Please note that this
            cancellation policy is subject to the Terms and Conditions outlined
            on our website and may be updated or revised as necessary. It is
            your responsibility to review and comply with the latest version of
            our cancellation policy.
          </p>
        </div>

        <div className="mb-7">
          <p className="font-semibold text-[#4D5052] text-[23px]">
            2. Refund Policy of Bringin Technologies Limited
          </p>
          <p className="text-[#6A6A6A] text-[20px] ">
            At Unbolt, we strive to provide a seamless and satisfactory
            experience to all our users. However, please note that our refund
            policy for the subscription model is as follows:
          </p>
        </div>

        <div className="mb-7">
          <p className="   text-[#6A6A6A] text-[20px] ">
            <span className="font-semibold text-[#4D5052] text-[23px] ">
              A) Digital Offering and Refund Eligibility:
            </span>{" "}
            The subscription model offered by Unbolt is a digital service. Once
            the payment for the subscription has been completed, Unbolt
            generally does not provide refunds unless specific circumstances
            arise.
          </p>
        </div>

        <div className="mb-7">
          <p className="   text-[#6A6A6A] text-[20px] ">
            <span className="font-semibold text-[#4D5052] text-[23px] ">
              B) Refund Requests:
            </span>{" "}
            Refund requests will only be considered under the following
            conditions;
          </p>
          <div className="flex gap-2  my-2">
            <div>
                    <LazyLoadImage
              effect= "blur" alt="Unbolt image" src="/images/privicy/Ellipse 207.svg" className="mt-3 w-5"></LazyLoadImage>
            </div>
            <div className=''>
              <p className=" ">
                {" "}
                <span className='text-[#373A3D] text-[#4D5052] text-[20px] font-semibold'>

                Platform Failure:
                </span>
                <span className="text-[#6A6A6A] text-[20px]">
                  {" "}
                  If, after exercising due diligence, it is determined that the
                  subscription service cannot be utilized due to a platform
                  failure or technical issue on Unbolt's part, the user may be
                  eligible for a refund. In such cases, the user should reach
                  out to our customer support team to initiate the refund
                  process.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-7">
          <p className="   text-[#6A6A6A] text-[20px] ">
            <span className="font-semibold text-[#4D5052] text-[23px] ">
              C) Non-Refundable Situations:
            </span>{" "}
            Please be aware that refunds will not be issued in the following
            situations;
          </p>
          <div className="flex gap-2  my-2">
            <div>
                    <LazyLoadImage
              effect= "blur" alt="Unbolt image" src="/images/privicy/Ellipse 207.svg" className="mt-3 w-2"></LazyLoadImage>
            </div>
            <div>
              <p >
                {" "}
                <span className=" text-[#373A3D] text-[#4D5052] text-[23px] font-semibold">

                Inappropriate Behavior:
                </span>
                <span className="text-[#6A6A6A] text-[20px] ">
                  {" "}
                  If a user's account is closed due to inappropriate behavior on
                  Unbolt's platform, no refund will be provided.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-7">
          <p className="   text-[#6A6A6A] text-[20px] ">
            <span className="font-semibold text-[#4D5052] text-[23px] ">
            Contacting Customer Support:
            </span>{" "}
            If you have any concerns or objections regarding the subscription or
            refund, we encourage you to contact Unbolt's customer support team.
            Our team will be available to address your queries and assist you in
            the best possible way.
          </p>
          <div className="flex gap-2  my-2">
            <div>
              <p className="text-[#6A6A6A] text-[20px] mt-5">
                Please note that this refund policy is subject to the Terms and
                Conditions outlined on our website. Unbolt reserves the right
                to modify or amend the refund policy at any time. Any updates or
                changes to the refund policy will be communicated through our
                website or other appropriate channels. If you have any further
                questions or require assistance, please don't hesitate to reach
                out to our customer support team. It is important to review and
                comply with the latest version of our refund policy as stated on
                our website.
              </p>
            </div>
          </div>
        </div>
      </div>
     <div className='flex justify-center '>
     <AppLogo></AppLogo>
     </div>
    </div>
  );
};

export default RefundCancellationPolicy;
