import { Link } from "react-router-dom";

const SingleJob = ({job}) => {
  const {industryname, _id} = job;
  
    return (
        <div >
        <Link to={`/cetagory/${_id}`}>
          <div className="card lg:w-[200px] md:w-[200px] w-[160px]  h-[130px] bg-white shadow-[0_8px_60px_rgb(0,0,0,0.1)] relative rounded rounded-[15px]">
            <div className=" py-5 px-5">
              <div className="lg:w-[170px] md:w-[200px] w-[160px]  h-[110px]">
                <h2 className="lg:text-[18px] text-[#373A3D] md:text-[18px] text-[14px] leading-[22px] ">
               
                  {industryname.split('/').join(' / ')}
                </h2>
                <p className="lg:text-[15px] text-[#7A7C7D] md:text-[15px] text-[14px]  absolute bottom-4">
                  90+ candidatess
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default SingleJob;