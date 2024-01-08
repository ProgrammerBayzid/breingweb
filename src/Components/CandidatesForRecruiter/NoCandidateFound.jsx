import picture from "../../../public/images/RI-icons/No-rejected-candidate.png";

const NoCandidateFound = () => {
  
    return (
        <div className="w-[700px] h-[445px] bg-white flex flex-col  justify-center items-center">
        <img src={picture} alt="" />
        <p className="mt-4 font-inter">There are no candidates</p>
    </div> 
        
    );
};

export default NoCandidateFound;