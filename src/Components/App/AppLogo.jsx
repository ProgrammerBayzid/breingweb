import { LazyLoadComponent } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const AppLogo = () => {
  return (
    <div className="px-2">
      <div className="flex justify-center  my-5">
        <div className="flex gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.bringin.io"
            target="_blank"
          >
            <LazyLoadComponent
              loading="lazy"
              className="lg:w-[200px] lg:h-[62px] w-[130px] h-[38px] md:w-[200px] md:h-[62px]"
                 effect="blur" src="/images/playstore.png"
            />
          </a>

          <a href="https://apps.apple.com/app/bringin-instant-hiring-app/id6463415765"   target="_blank">
            <LazyLoadComponent
              loading="lazy"
              className="lg:w-[200px] lg:h-[62px] w-[130px] h-[38px] md:w-[200px] md:h-[62px]"
                 effect="blur" src="/images/appstore.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppLogo;
