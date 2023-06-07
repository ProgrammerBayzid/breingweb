import FindRelevent from '../FindRelevent/FindRelevent';
import Hero from '../Hero/Hero'
import HowWork from '../HowWork/HowWork'
import Streamline from '../Streamline/Streamline'
import RFaq from '../RFaq/RFaq'
import RFeatures from '../RFeatures/RFeatures';
import AppLogo from '../../App/AppLogo';
import useTitle from '../../../hooks/useTitle';

const Recruter = () => {
    useTitle('Instant Hiring App for Recruiters')

    return (
        <div>
            <Hero></Hero>
            <HowWork></HowWork>
            <FindRelevent></FindRelevent>
            <Streamline></Streamline>
            <RFaq></RFaq>
            <RFeatures></RFeatures>
           <div className='flex justify-center mt-10'>
           <AppLogo></AppLogo>
           </div>
        </div>
    );
};

export default Recruter;