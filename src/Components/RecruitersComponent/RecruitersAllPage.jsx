import { Helmet } from "react-helmet";
import RAdvanced from "./RAdvanced";
import RFeatures from "./RFeatures";
import RecruiterHero from "./RecruiterHero";
import Recruiterbringinworks from "./Recruiterbringinworks";
import { useEffect } from "react";

const RecruitersAllPage = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1556748687572177";
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
        <title>
          Chat directly with the job seekers, take instant in-app interviews,
          and get your desired candidates instantly | Unbolt Chat Based Hiring
          App{" "}
        </title>
        <meta
          name="description"
          content="Streamline hiring with Unbolt - Instant Hiring App, video interviews, and verified talent. A specialized hiring platform for SMEs and Startups."
        />
        <link rel="canonical" href="http://unbolt.co/recruiters" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KKFH10XGFV"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKFH10XGFV');
          `}
        </script>
      </Helmet>
      <RecruiterHero></RecruiterHero>
      <Recruiterbringinworks></Recruiterbringinworks>
      <RAdvanced></RAdvanced>
      {/* <RFaq></RFaq> */}
      <RFeatures></RFeatures>
    </div>
  );
};

export default RecruitersAllPage;
