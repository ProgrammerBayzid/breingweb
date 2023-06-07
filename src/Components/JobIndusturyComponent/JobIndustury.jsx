import useTitle from "../../hooks/useTitle";
import AppLogo from "../App/AppLogo";
import Jobs from "../JobIndusturyComponent/Job/jobs";
import TopCities from "../JobIndusturyComponent/Job/TopCities";

const JobIndustury = () => {
    useTitle('Job Industry Page - Bringin')

    return (
        <div>
            <Jobs></Jobs>
            <TopCities></TopCities>
            <div className='flex justify-center mt-10'>
           <AppLogo></AppLogo>
           </div>
        </div>
    );
};

export default JobIndustury;