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
