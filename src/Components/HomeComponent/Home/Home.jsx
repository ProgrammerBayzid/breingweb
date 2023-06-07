import Hero from '../Hero/Hero'
import HomeDownlode from '../HomeDownlode/HomeDownlode'
import HotJob from '../HotJob/HotJob'
import TopClint from '../TopClint/TopClint'
import Business from '../Business/Business'
import ChatDirect from '../ChatDirect/ChatDirect'
import BringinFeatured from '../BringinFeatured/BringinFeatured'
import Inhedar from '../InfluencersOptionion/Inhedar'
import InfluencersOptionion from '../InfluencersOptionion/InfluencersOptionion'
import Find from '../Find/Find'


const Home = () => {
    return (
        <div>
             <Hero></Hero>
            <HomeDownlode></HomeDownlode>
            <HotJob></HotJob>
            <TopClint></TopClint>
            <Business></Business>
            <ChatDirect></ChatDirect>
            <BringinFeatured></BringinFeatured>
           <div className="">
           <Inhedar></Inhedar>
           </div>
            <InfluencersOptionion></InfluencersOptionion>
            <Find></Find>
        </div>
    );
};

export default Home;