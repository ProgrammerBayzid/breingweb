import { Helmet } from "react-helmet";
import useTitle from "../../hooks/useTitle";
import AppLogo from "../App/AppLogo";
import Jobs from "../JobIndusturyComponent/Job/jobs";
import TopCities from "../JobIndusturyComponent/Job/TopCities";

const JobIndustury = () => {
    useTitle('Job Categories - Bringin')

    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Job Industrys | Unbolt Chat Based Hiring App </title>
                <meta name="description" content=" At Unbolt-instant hiring app, Both Job Seekers and Recruiters can chat directly, also can attend instant in-app video call interviews and get hired instantly." />
                <link rel="canonical" href="http://unbolt.co" />
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
            <Jobs></Jobs>
            <TopCities></TopCities>
            <div className='flex justify-center lg:mt-10 md:mt-7 mt-2'>
           <AppLogo></AppLogo>
           </div>
        </div>
    );
};

export default JobIndustury;