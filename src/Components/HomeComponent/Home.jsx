import { Helmet } from "react-helmet";
import SearchComponent from "../SearchComponent/SearchComponent";
import Businesses from "./Businesses";
import BussnessesTitale from "./BussnessesTitale";
import Chat from "./Chat";
import Hero from "./Hero";
import HotJobHome from "./HotJobHome";
import InfluencersOptionion from "./InfluencersOptionion";
import Inhedar from "./Inhedar";
import TJob from "./TJob";
import ThousandsofApplicants from "./ThousandsofApplicants";
import TopCitiesHome from "./TopCitiesHome";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Unbolt is an AI-powered first Chat Based Hiring App for Startups &
          SMEs in Bangladesh | Unbolt Chat Based Hiring App{" "}
        </title>
        <meta
          name="description"
          content="Unbolt offers a unique platform for job seekers and recruiters to connect through direct chat and in-app video call interviews, leading to instant hiring."
        />
        <link rel="canonical" href="http://unbolt.io/in" />

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

      <Hero></Hero>
      <SearchComponent></SearchComponent>
      <div className="">
        <Chat></Chat>
        <HotJobHome></HotJobHome>
        <TopCitiesHome></TopCitiesHome>
        <BussnessesTitale></BussnessesTitale>
        <Businesses></Businesses>
        <TJob></TJob>
        <Inhedar></Inhedar>
        <InfluencersOptionion></InfluencersOptionion>
        <ThousandsofApplicants></ThousandsofApplicants>
      </div>
    </div>
  );
};

export default Home;
