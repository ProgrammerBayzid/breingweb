import GuidlineHero from "./GuidlineHero/GuidlineHero";
import CarearAdvice from "./CarearAdvice/CarearAdvice";

import BestService from "./BestService/BestService";
import useTitle from "../../hooks/useTitle";
import AppLogo from "../App/AppLogo";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Guidline = () => {
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
    <div>
      
      <Helmet>
                <meta charSet="utf-8" />
                <title>Guidelines for Job Seekers | Unbolt Chat Based Hiring App </title>
                <meta name="description" content="Explore our comprehensive guidelines page for an in-depth understanding of our platform. Ensure a smooth journey on Unbolt, your instant hiring companion." />
                <link rel="canonical" href="http://unbolt.co/guidelines-seekers" />
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
      <GuidlineHero></GuidlineHero>
      {/* <HowWeDo></HowWeDo> */}
      <BestService></BestService>
      {/* <Counter></Counter> */}
      <CarearAdvice></CarearAdvice>
      <div className="flex justify-center mt-10">
        <AppLogo></AppLogo>
      </div>
    </div>
  );
};

export default Guidline;
