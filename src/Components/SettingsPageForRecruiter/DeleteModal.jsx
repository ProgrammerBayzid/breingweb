import pic from "../../../public/images/RI-icons/delete.png";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessfulDelete from "./SuccessfulDelete";
import axios from "axios";

const DeleteModal = () => {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCancel = () => {
    navigate("/dashboard/recruiter/profile/");
  };

  const logoutsucces = () => {
    navigate("/");
    setShowSuccessMessage(false);
    window.location.reload();
    
  };

  const [response, setResponse] = useState(null);
  console.log(response);
  const handleDelete = async () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      try {
        const response = await axios.delete(
          "https://rsapp.unbolt.co/recruiter_delete",
          {
            headers: {
              Authorization: `Bearer ${stringWithoutQuotes}`,
            },
          }
        );
        if (response.status === 200) {
          setResponse("Recruiter data deleted successfully.");
          setShowSuccessMessage(true);
          localStorage.clear();
          // Call logoutsucces function after 3 seconds
          setTimeout(logoutsucces, 1000);
        } else {
          setResponse("Failed to delete recruiter data. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting recruiter data:", error);
        setResponse("Error deleting recruiter data");
      }
    } else {
      setResponse("Token not found. Please log in.");
    }
  };

  return (
    <div className="fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
      <div className="bg-white mx-auto rounded-lg w-[460px] h-[236px] md:w-[555px] md:h-[357px] -mt-16">
        <p
          onClick={handleCancel}
          className="cursor-pointer font-inter text-right px-3 pt-2"
        >
          ✕
        </p>
        <div className="mx-auto pb-8">
          <img className="w-[70px] h-[70px] mx-auto" src={pic} alt="" />
          <p className="text-[#212427] text-[22px] text-center py-3 font-semibold font-inter">
            Confirm Deletion
          </p>
          <p className="font-inter text-center text-[#767676] pb-3 px-12 text-[16px]">
            By proceeding, you will lose access to all of your entire data and
            active subscriptions. <br /> This action cannot be undone!
          </p>
          <div className="text-center py-3">
            <button
              onClick={handleDelete}
              className="bg-[#C71014] w-[486px] h-[36px] rounded-md text-white text-[16px] font-inter"
            >
              Delete
            </button>
          </div>
          <p
            onClick={handleCancel}
            className="font-inter text-center cursor-pointer"
          >
            Cancel
          </p>
        </div>
        {showSuccessMessage ? <SuccessfulDelete /> : null}
      </div>
    </div>
  );
};

export default DeleteModal;
