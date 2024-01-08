import { useEffect, useState } from "react";

const ManageJopDeleteModal = ({ setdeletepostJobModal, deletePostJob,  job_status, setloding , setjobPost}) => {
  const [message, setMessage] = useState("");

  const { _id } = deletePostJob;
  console.log(_id);
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken.replace(/"/g, ""));
    }
  }, []);
  const handleDelete = () => {
    if (!token) {
      setMessage("Authentication token missing.");
      return;
    }
  
    fetch(`https://rsapp.unbolt.co/job_post_update?jobid=${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setMessage("Resource deleted successfully.");
          setdeletepostJobModal(false);
  
          setloding(true); // Set loading to true to show the loading spinner.
          return fetch(`https://rsapp.unbolt.co/job_post?type=${jobStatuse}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else if (response.status === 401) {
          setMessage("Unauthorized: Token invalid or expired.");
          throw new Error("Unauthorized");
        } else {
          setMessage("Failed to delete resource.");
          throw new Error("Failed to delete");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setjobPost(data);
        setloding(false); // Set loading to false after the data is fetched.
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred while processing your request.");
      });
  };
  

  return (
    <div className="fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
      <div className="w-[380px] h-[240px] bg-white rounded-[20px]  px-[40px] flex items-center">
        <div>
          <div className="flex justify-center mb-5">
            <img src="/images/manageJobDeleteIcon.svg" />
          </div>
          <div className="mb-5">
            <p className="text-[16px] font-normal text-[#212427] text-opacity-80 text-center">
              Are you sure you want to delete permanently?
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setdeletepostJobModal(false)}
              className="w-[124px] h-[40px] bg-[#EBEBEB] text-[18px] font-semibold text-[#212427] rounded-[7px]"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="w-[124px] h-[40px] bg-[#ED4545] text-[18px] font-semibold text-white rounded-[7px]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageJopDeleteModal;
