import { useEffect, useState } from "react";

const ManageJobRepostModal = ({
  setRepostJobModal,
  rePostJob,
  job_status,
  setloding,
  setjobPost,
  jobStatuse,
}) => {
  const [message, setMessage] = useState("");

  const { _id } = rePostJob;
  console.log(_id);
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken.replace(/"/g, ""));
    }
  }, []);

  const onSubmit = () => {
    const postData = {
      job_status_type: 1,
    };
    console.log(postData);
    if (!token) {
      setMessage("Authentication token missing.");
      return;
    }

    fetch(`https://rsapp.unbolt.co/job_post_update?jobid=${_id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.text(); // Read the response as text
      })
      .then((result) => {
        console.log("Response Body:", result); // Log the response body
        setRepostJobModal(false);

        setloding(true); // Set loading to true to show the loading spinner.
        return fetch(`https://rsapp.unbolt.co/job_post?type=${jobStatuse}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      })
      .then((res) => res.json())
      .then((data) => {
        setjobPost(data);
        setloding(false); // Set loading to false after the data is fetched.
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
      });
  };

  return (
    <div className="fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
      <div className="w-[380px] h-[240px] bg-white rounded-[20px]  px-[40px] flex items-center">
        <div>
          <div className="flex justify-center mb-5">
            <img src="/images/manageJobrepostIcon.svg" />
          </div>
          <div className="mb-5">
            <p className="text-[16px] font-normal text-[#212427] text-opacity-80 text-center">
              Are you sure you want to Repost The Job?
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setRepostJobModal(false)}
              className="w-[124px] h-[40px] bg-[#EBEBEB] text-[18px] font-semibold text-[#212427] rounded-[7px]"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="w-[124px] h-[40px] bg-[#0077B5] text-[18px] font-semibold text-white rounded-[7px]"
            >
              Repost
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageJobRepostModal;
