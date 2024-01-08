import { Link, useNavigate } from "react-router-dom";
import a from "../../../public/images/RI-icons/VP.png";
import b from "../../../public/images/RI-icons/switch-profile.png";
import c from "../../../public/images/RI-icons/settings.png";
import d from "../../../public/images/RI-icons/my-purchase.png";
import e from "../../../public/images/RI-icons/log-out.png";


const RecruiterPerSonalDashboard = ({ setMyProfile,recruter }) => {
  const location = useNavigate();

  const mmm = () => {
    location("/dashboard/recruiter");
    setMyProfile(false);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    location("/recruiters-login");
     window.location.reload();
  };

  return (
    <div onClick={()=>setMyProfile(false)} className="fixed inset-0 w-full h-full bg-[#090808] bg-opacity-70 App">
      <div className="font-inter flex justify-end md:m-2 text-[#212427]">
        <div className="font-inter bg-white rounded-lg pb-2 mt-[50px] me-[25px] md:w-[249px] md:h-[315px]">
          <div className="font-inter flex justify-center items-center gap-4">

            <img onClick={mmm}
              className="font-inter  w-[52px] h-[52px] rounded-full cursor-pointer"
              src={a}
              src={`https://rsapp.unbolt.co/${recruter?.image}`}
              alt=""
            />

            <div>
              <p onClick={mmm} className="font-inter text-[#454545] font-semibold text-[16px] pt-3 cursor-pointer">
                {recruter?.firstname}{" "}{recruter?.lastname} 
              </p>

              <p className="font-inter text-[#212427] text-opacity-80 text-[12px]">
                {recruter?.designation} 
              </p>
              <p className="font-inter text-[#212427] text-opacity-80 text-[12px]">
                {recruter?.companyname?.legal_name}
              </p>
            </div>
          </div>
          <div className="font-inter border border-b border-[#212427] border-opacity-10 w-[219px] mx-auto my-4">
          </div>
          <div>
            <div className="font-inter flex gap-3 ps-6">
              <img className="font-inter w-[28px] h-[28px] cursor-pointer" src={b} alt="" />
              <div>
                <p className="font-inter text-[#212427] text-[16px] cursor-pointer">Switch Profile</p>
                <p className="font-inter text-[#212427] text-opacity-80 text-[12px] cursor-pointer">Switch to Job Seeker</p>
              </div>
            </div>
            <Link to="/dashboard/recruiter/profile">
              <div className="font-inter flex gap-3 mt-4 mb-5 px-6">
                <img className="font-inter w-[28px] h-[28px] cursor-pointer" src={c} alt="" />
                <p className="font-inter text-[#212427] text-[16px] cursor-pointer">Settings</p>
              </div>
            </Link>
            <Link to="/dashboard/recruiter/purchase">
              <div className="font-inter flex gap-3 px-6">
                <img className="font-inter w-[28px] h-[28px] cursor-pointer" src={d} alt="" />
                <p className="font-inter text-[#212427] text-[16px] cursor-pointer">My Purchase</p>
              </div>
            </Link>
            
              <div onClick={clearLocalStorage} className="font-inter flex gap-3 mt-5 px-6">
                <img className="font-inter w-[28px] h-[28px] cursor-pointer" src={e} alt="" />
                <p className="font-inter text-[#212427] text-[16px] cursor-pointer">Log Out</p>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterPerSonalDashboard;