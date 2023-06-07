import { Link } from 'react-router-dom';
import f from '../../../assets/recruiters/male-business-leader-browsing-online-resources-using-gadgets 1.svg'

const FindRelevent = () => {
    return (
        <div>
        <div className="hero py-20">
          <div className="hero-content  flex-col lg:flex-row-reverse">
          <img
           
           alt=''
                src={f}
                
                className="lg:w-[700px] md:w-[700px] lg:h-[467px] md:h-[467px] "
              ></img>
            <div className="lg:text-start md:text-center text-center ">
              <div>
              <h1 className="lg:text-[42px] md:text-[35px] text-[30px] font-semibold">Find AI-Driven Relevant Candidates in Your Town.</h1>
              </div>
             <div>
             <p className="py-2 text-[20px]">
              <span className="text-[#0077B5] leading-[22px]">Bringin</span> revolutionizes the recruitment process by enabling recruiters to directly connect and communicate with candidatess through instant video call interviews, all while preserving their privacy.The AI-technology utilized by <span className="text-[#0077B5]">Bringin</span> accurately matches candidatess to job openings based on their skills, experiences, and location preferences. 

             </p>
             </div>
             <div>
             <p className='text-[20px] leading-[22px]'>
              Say goodbye to middlemen and consultants and streamline your hiring process with <span className="text-[#0077B5]">Bringin</span>.               </p>
             </div>
              <div className="card-actions  mt-10">
             <Link to='/recruiters-login'>
             <button className="text-white lg:text-[20px] md:text-[18px] text-[16px] font-semibold bg-[#0077B5] lg:w-[158px] md:w-[150px] lg:h-[55px] md:h-[50px] w-[120px] h-[40px] rounded">
                        Hired Now
                      </button>     
             </Link>
             
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FindRelevent;