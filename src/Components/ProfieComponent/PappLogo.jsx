import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const PappLogo = () => {
    return (
        <div className="px-2">
        <div className="">
          <div>
            <div className="flex justify-center my-5">
            <LazyLoadImage
              effect= "blur"
                className="lg:w-[433px] lg:h-[62px] w-[233px] h-[32px] md:w-[433px] md:h-[62px]"
                src="/images/applogo.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default PappLogo;