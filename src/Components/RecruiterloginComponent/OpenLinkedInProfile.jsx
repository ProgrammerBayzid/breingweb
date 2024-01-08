import { useState } from "react";
import { useForm } from "react-hook-form";


const OpenLinkedInProfile = ({ setLinkedInProfileOpen }) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const postData = {
      link: link,
    };
    console.log("Submitting data: ", postData);

    const token = localStorage.getItem("token");
    const tokenWithoutQuotes = token.replace(/"/g, "");

    fetch("https://rsapp.unbolt.co/profile_verify_link", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenWithoutQuotes}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.text();
      })
      .then((result) => {
        console.log("Response from server: ", result);
        try {
          const jsonResponse = JSON.parse(result);
          console.log("Parsed JSON response: ", jsonResponse);
        } catch (jsonError) {
          console.error("JSON Parsing Error:", jsonError);
        }
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
      });
  };
  const [link, setLink] = useState("");



  return (
    <div className="font-inter fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
      <div className="font-inter   bg-white  relative  w-[350px] h-[500px] lg:w-[700px] lg:h-[481px] lg:p-0 md:p-0 p-2 rounded-[10px]">
        <div className="font-inter flex justify-between w-[305px] h-[66px] md:w-[641px] md:h-[48px] md:ps-4 md:py-4">
          <div>
            <p className="font-inter text-[20px] font-bold mb-2">Verify with your LinkedIn Profile</p>
            <p className="font-inter text-[#212427] text-[16px] text-opacity-60">Click below to enter your LinkedIn profile username.</p>
          </div>
          <p className="font-inter cursor-pointer -me-7 md:-me-9" onClick={() => setLinkedInProfileOpen(false)}>✕</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-inter relative w-full mb-1 mx-5">
          <div className="font-inter mt-12 ms-0 me-2 md:ms-6" >
            <input
             value={link}
             onChange={(e) => setLink(e.target.value)}
              className="font-inter focus:outline-none input ps-2 w-full -ms-4 md:-ms-8 md:-mx-2 mb-[5px] h-[44px] border-[2px] text-[#212427] text-opacity-60"
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          <img
            src="/images/RI-icons/Tick mark.svg"
            className="font-inter absolute inset-y-0 right-12 top-1/2 transform -translate-y-1/2 h-[16px] w-[16px] "
          />
        </div>
        <div className="font-inter mx-6">
          <button type="submit" className='btn bg-[#0077B5] bg-opacity-40 hover:bg-[#0077B5] w-[330px] md:w-[640px] h-[48px] mt-[250px] -mx-6 md:mx-auto rounded-lg text-white text-[18px]'>Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default OpenLinkedInProfile;