import Hero from './Hero/Hero'
import Join from './Join/Join'
import Enterprise from './Enterprise/Enterprise'
import Stay from './Stay/Stay'
import EnterpriseHiring from './EnterpriseHiring';
import AppLogo from '../App/AppLogo';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
const Enterpris = () => {
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
                <title>Enterprise hiring solutions | Unbolt Chat Based Hiring App </title>
                <meta name="description" content="We’re committed to revolutionizing the hiring process through our AI-powered  Unbolt: Chat Based Hiring App and discover top talent effortlessly." />
                <link rel="canonical" href="http://unbolt.co/enterprise-hiring" />
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
            <Hero></Hero>
            <Join></Join>
            <EnterpriseHiring></EnterpriseHiring>
            <Enterprise></Enterprise>
            <Stay></Stay>
            <div className='flex justify-center mt-5 lg:mt-10'>
           <AppLogo></AppLogo>
           </div>
        </div>
    );
};

export default Enterpris;