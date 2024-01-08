import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const VerifyCompanyDocuments = () => {
    const handleRefresh = () => {
        if(recruter?.other?.profile_verify_type===1){
            navigate("/dashboard/recruiter/")
        }else{

            window.location.reload();
        }
    };
    const navigate = useNavigate();
    const [recruter, setrecruter] = useState([]);
    const [token, setToken] = useState(""); // State to store the token
  
    useEffect(() => {
      // Retrieve the token from localStorage
      const storedToken = localStorage.getItem("token");
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
  
      console.log(stringWithoutQuotes); // Replace "yourTokenKey" with the actual key you used to store the token
  
      if (stringWithoutQuotes) {
        // If a token is found in localStorage, set it in the component's state
        setToken(stringWithoutQuotes);
      }
  
      fetch("https://rsapp.unbolt.co/recruiters_profile", {
        headers: {
          Authorization: `Bearer ${token}`, // Use the token in the Authorization header
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setrecruter(data);
          console.log(data);
        });
    }, [token]);

    const handleGoBack = () => {
        window.history.back(); // This will navigate back one step in the browser's history
      };

    return (
        <div className="font-inter bg-white md:bg-gray-100 flex justify-center">
            <div className="font-inter bg-white py-6 px-4 md:p-6 rounded-lg shadow-md w-[336px] h-[700px] md:w-[700px] md:h-[624px] md:mt-8 mb-40 hidden lg:block">
                <div className='flex justify-between'>
                    <div>
                        <img onClick={handleGoBack} src='/images/RI-icons/RI-arrow-left.svg' className='w-[16px] h-[16px]' />
                    </div>
                    <div className="font-inter w-[260px] h-[69px] md:w-[378px] md:h-[51px] mx-auto">
                        <h2 className="font-inter text-[#454545] text-[22px] font-semibold  ms-10 md:mx-20">Under Verification</h2>
                        <p className='ps-7 md:ps-0 md:pb-6 md:ms-8 text-[#212427] text-opacity-60 text-[16px]'><small>You have submitted your documents <span className="font-inter mx-16 md:mx-0">successfully.</span></small></p>
                    </div>
                </div>

                <div className="font-inter pt-6 pb-10 mx-64 md:mx-64 w-[240px] h-202px] md:w-[100px] md:[h-100px]">
                    <img className="font-inter -ms-36 md:mx-auto mt-2" src="/images/RI-icons/verify-docs.svg" alt="" />
                </div>
                <div className="font-inter w-[310px] h-[59px] mx-auto">
                    <p className="font-inter text-[#212427] text-opacity-80 pb-2">Estimated audit completion time will be...</p>
                    <div className="font-inter flex justify-between">
                        <p className="font-inter text-[#212427] font-bold">09:30 PM</p>
                        <button type="button" className='btn bg-[#0077B5] w-[81px] h-[30px] rounded text-white' onClick={handleRefresh}>Refresh</button>
                    </div>
                </div>
                <div className="font-inter w-[330px] h-[76px] md:w-[623px] md:h-[38px] text-[16px] text-[#212427] text-opacity-60 pt-20 mx-auto">    
                <p className="font-inter mt-44 md:mt-0">80% of recruiters will be verified by maximum 30 minutes. The verification process during non-working time may be delayed up to maximum of 12 hours.</p>
                </div>
            </div>
            {/* <div>
                Mobile Responsive
            </div> */}
            <div className="font-inter block lg:hidden">

            </div>
        </div>
    );
};

export default VerifyCompanyDocuments;