import { Link } from "react-router-dom";
import find from '../../../assets/homeimg/find.svg'

 

const Find = () => {
  return (
    <div className=" mx-auto   mt-5 lg:mb-0  md:mb-0 mb-16 ">
      <div className="hero  bg-white justify-center">
        <div className="flex lg:gap-10 md:gap-10  ">
       <div className="lg:w-1/2 md:w-1/2">
       <div className="hidden lg:block md:block">
           
           <img
           
            alt=""
           src={find} 
  

></img>
     </div>
       </div>
          <div className="lg:w-1/2 md:w-1/2 lg:text-start md:text-start text-center">
            <h1 className="lg:text-[35px] md:text-[29px] text-[30px] lg:mt-10 md:mt-4 mt-1  font-semibold">
              Find the AI-Matching Best Relevant Candidates in Your City without
              any Consultant.{" "}
            </h1>
            <Link to='/recruiters-login'>
            
            <div className="card-actions lg:ml-20 md:ml-20   mt-5 lg:justify-start md:justify-start justify-center">
              <button className="lg:w-[220px] md:w-[160px] lg:h-[60px] md:h-[50px] h-[40px] w-[150px] bg-[#0077B5] shadow-lg rounded lg:text-[20px] md:text-[18] text-[16px]  font-semibold text-white px-1">
                Join as Recruiter
              </button>
            </div>
            </Link>
          </div>

          
        </div>
      </div>
     
    </div>
  );
};

export default Find;
