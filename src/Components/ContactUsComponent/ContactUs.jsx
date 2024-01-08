import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ContactUs = () => {
  const [refresh, setRefresh] = useState(true);
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message,setMessage]=useState("")

  const addIndustry = (data, e) => {
    // console.log(data);
    const industrydata = {
      email: data.email,
      about: data.about,
    };

    fetch("https://rsapp.unbolt.co/web_contact", {
      method: "POST",
      headers: {
        "content-type": "application/json", 
      },
      body: JSON.stringify(industrydata),
    })
      .then((res) => res.json())
      .then((result) => {
        setRefresh(!refresh);
        setMessage("Successful Send!")
        e.target.reset();
        console.log(result);
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact us | Unbolt Chat Based Hiring App </title>
        <meta
          name="description"
          content="Connect with us effortlessly through our Contact Us page. Reach out to Unbolt anytime for your inquiries and support."
        />
        <link rel="canonical" href="http://unbolt.co/contactus" />
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
      <div>
        <div className="relative lg:bg-[url(/src/bgimages/ContactUsbg.png)] bg-contain	  bg-no-repeat">
          <div className="lg:mx-[40px] mx-[10px]">
            <div className="lg:h-[1000px] ">
              <div className="lg:w-[507px] lg:w-[510px]   rounded rounded-[5px] lg:p-10 p-2 lg:mb-0 mb-10">
                <h1 className="text-[#004162] lg:text-[24px] text-[20px] font-semibold lg:my-4 my-2">
                  How can we help you?
                </h1>
                <form onSubmit={handleSubmit(addIndustry)}>
                  <div className="lg:w-[507px] lg:h-[462px] lg:p-[33px] p-[7px] bg-white">
                    <p className="text-[16px] font-semibold text-[#454545] mb-2">
                      Your Email
                    </p>

                    <div>
                      <input
                        placeholder="jakariahn@yahoo.com"
                        type="text"
                        {...register("email", {
                          required: "  email is Required",
                        })}
                        className="focus:outline-none pl-5 lg:w-[437px] lg:h-[43px] w-full h-[38px] border border-[#7B7B7B] border-[0.5px] rounded rounded-[5px] mb-2"
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <p className="text-[12px] text-opacity-80 text-[#454545] mb-5">
                      Please, enter the email address where you wish to receive
                      our answer.
                    </p>

                    <textarea
                      type="text"
                      {...register("about", {
                        required: "  about is Required",
                      })}
                      placeholder="Write us a message "
                      className=" focus:outline-none lg:w-[437px] lg:h-[196px] w-full h-[108px] border border-[0.5px] border-[#7B7B7B] pl-5 pt-4 rounded rounded-[5px]"
                    />
                    {errors.message && (
                      <p className="text-red-500">{errors.message}</p>
                    )}

                    <div className="flex justify-center mt-5">
                      <button
                        type="submit"
                        className="text-[18px] text-white bg-[#0077B5] w-[125px] h-[50px] flex items-center  justify-center rounded rounded-[5px]"
                      >
                        <LazyLoadImage 
                          className="w-[22px] h-[22px] mr-2"
                          src="/images/cemail.png"
                          effect="blur"

                        />
                        Send
                      </button>
                    </div>
                    <p className="text-center text-[13px] mt-2">{message}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
