import HowWork from "../HowWork/HowWork";
import SayGoodBay from "../SayGoodBay/SayGoodBay";
import JobSeeker from "../JobSeeker/JobSeeker";
import Unlock from "../Unlock/Unlock";
import Faq from "../Faq/Faq";
import OurFeatures from "../OurFeatures/OurFeatures";
import AppLogo from "../../App/AppLogo";
import useTitle from "../../../hooks/useTitle";

const Jobseeker = () => {
    useTitle('AI-Matching Jobs for Seekers')

    return (
        <div>
            <JobSeeker></JobSeeker>
            <HowWork></HowWork>
            <SayGoodBay></SayGoodBay>
            <Unlock></Unlock>
            <Faq></Faq>
            <OurFeatures></OurFeatures>
            <div className='flex justify-center mt-10'>
           <AppLogo></AppLogo>
           </div>
        </div>
    );
};

export default Jobseeker;