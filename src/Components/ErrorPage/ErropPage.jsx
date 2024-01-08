import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
const ErropPage = () => {
  return (
    <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-24">
      <div className="lg:flex md:flex justify-between">
        <div className="lg:text-start md:text-start text-center">
          <h1 className="text-[#00344F] text-[42px] font-medium">
            Page Not Found
          </h1>
          <h4 className="text-[]16px] text-[#646668] my-[15px]">
            We are sorry, the page you requested <br></br>could not be found.
            please go back to the <br></br> home page or contact us at{" "}
            <p className="text-[#0077B5]">hello@unbolt.co</p>
          </h4>
          <Link to='/'><button className="btn">BACK TO HOME</button></Link>
        </div>
        <div>
        <LazyLoadImage
              effect= "blur" alt="bringin image" src="/images/commonlogo/error.svg" />
        </div>
      </div>
    </div>
  );
};

export default ErropPage;
