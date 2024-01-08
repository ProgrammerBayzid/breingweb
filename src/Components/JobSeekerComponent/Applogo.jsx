import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Applogo = () => {
  return (
    <div>
      <div className="flex justify-center my-24">
        <div className="flex gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.bringin.io" target="_blank">
          <LazyLoadImage
              effect= "blur"
              className="lg:w-[200px] lg:h-[62px] w-[130px] h-[32px] md:w-[200px] md:h-[62px]"
              src="/images/playstore.png"
            />
          </a>

          <a href="https://apps.apple.com/app/bringin-instant-hiring-app/id6463415765"  target="_blank">
          <LazyLoadImage
              effect= "blur"
              className="lg:w-[200px] lg:h-[62px] w-[130px] h-[32px] md:w-[200px] md:h-[62px]"
              src="/images/appstore.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Applogo;
