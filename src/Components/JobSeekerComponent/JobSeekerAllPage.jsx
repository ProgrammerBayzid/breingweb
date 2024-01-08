import { Helmet } from "react-helmet";
import Advanced from "./Advanced";
import Features from "./Features";
import JobSekkerHero from "./JobSekkerHero";
import JobSekkerbringinworks from "./JobSekkerbringinworks";
import { useEffect } from "react";

const JobSeekerAllPage = () => {
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
                <title>Chat directly with the recruiters, and get your dream job instantly based on your experiences, locations, and expected salary | Unbolt Chat Based Hiring App </title>
                <meta name="description" content="Discover advanced AI matching job recommendations at Unbolt - Instant Hiring App. Connecting directly with job recruiters in Bangladesh." />
                <link rel="canonical" href="http://unbolt.co/job-seekers " />
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
            <JobSekkerHero></JobSekkerHero>
            <JobSekkerbringinworks></JobSekkerbringinworks>
            <Advanced></Advanced>
            <Features></Features>
        </div>
    );
};

export default JobSeekerAllPage;