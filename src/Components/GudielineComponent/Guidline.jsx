import GuidlineHero from "./GuidlineHero/GuidlineHero";
import CarearAdvice from "./CarearAdvice/CarearAdvice";
import Counter from "./Counter/Counter";
import HowWeDo from "./HowWeDo/HowWeDo";
import BestService from "./BestService/BestService";
import useTitle from "../../hooks/useTitle";
import AppLogo from "../App/AppLogo";

const Guidline = () => {
  useTitle('Guideline - Bringin ')

  return (
    <div>
      <GuidlineHero></GuidlineHero>
      {/* <HowWeDo></HowWeDo> */}
      <BestService></BestService>
      {/* <Counter></Counter> */}
      <CarearAdvice></CarearAdvice>
      <div className='flex justify-center mt-10'>
           <AppLogo></AppLogo>
           </div>
    </div>
  );
};

export default Guidline;
