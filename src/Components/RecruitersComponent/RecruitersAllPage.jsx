import RAdvanced from "./RAdvanced";
import RFeatures from "./RFeatures";
// import RFaq from "./RFaq";
import RecruiterHero from "./RecruiterHero";
import Recruiterbringinworks from "./Recruiterbringinworks";

const RecruitersAllPage = () => {
    return (
        <div>
            <RecruiterHero></RecruiterHero>
            <Recruiterbringinworks></Recruiterbringinworks>
            <RAdvanced></RAdvanced>
            {/* <RFaq></RFaq> */}
            <RFeatures></RFeatures>
        </div>
    );
};

export default RecruitersAllPage;