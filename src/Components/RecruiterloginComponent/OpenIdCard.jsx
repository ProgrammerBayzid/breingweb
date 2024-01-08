import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OpenIdCard = ({ setIdCardOpen }) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedImage);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFile(file);
    }
  };
  const handleUpload = () => {
    if (selectedFile) {
      uploadImage(selectedFile);
    } else {
      alert("Please select a file to upload.");
    }
  };
  const navigate = useNavigate();

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("type", "3");
    const token = localStorage.getItem("token");
    const tokenWithoutQuotes = token.replace(/"/g, "");

    axios
      .post("https://rsapp.unbolt.co/profile_verify", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${tokenWithoutQuotes}`,
        },
      })
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
        // You can handle the response as needed
        navigate("/verify-company-documents");
      })
      .catch((error) => {
        console.error("Image upload failed:", error);
      });
  };
  return (
    <div className="font-inter fixed inset-0 bg-[#090808] bg-opacity-70 flex justify-center items-center z-40 App">
      <div className="font-inter bg-white relative w-[350px] h-[500px] lg:w-[700px] lg:h-[481px] lg:p-0 md:p-0 p-2 rounded-[10px]">
        <div className="font-inter flex justify-between w-[305px] h-[66px] md:w-[641px] md:h-[48px] md:ps-8 md:py-5">
          <div>
            <p className="font-inter text-[20px] font-bold mb-2">
              Upload Company ID Card
            </p>
            <p className="font-inter text-[#212427] text-[16px] text-opacity-60 w-[334px] md:w-[558px] h-[38px] md:pe-4">
              Click below button to upload your ID Card issued which by your
              company.
            </p>
          </div>
          <p
            className="font-inter cursor-pointer -ms-4 md:-me-9"
            onClick={() => setIdCardOpen(false)}
          >
            ✕
          </p>
        </div>
        <form>
          {selectedImage === null ? (
            <div className="font-inter pt-5 pb-2 mt-16 outline-[#002994] w-[240px] h-202px] md:w-[320px] md:h-[241px] mx-auto">
              <div className="font-inter flex flex-col items-center justify-center border border-dashed border-2 border-opacity-80 border-[#002994] md:w-[240px] md:h-[202px] mx-10">
                <img
                  className="font-inter w-[55px] h-[48px] my-4"
                  src={selectedImage || "/images/RI-icons/upload-pic.svg"}
                  alt=""
                />
                <button
                  type="button"
                  className="font-inter btn w-[111px] h-[40px] mt-[20px] mb-4 md:mt-[40px] md:mx-auto border border-[#0077B5] text-[14px] text-[#0077B5] rounded-2xl"
                  onClick={handleButtonClick}
                >
                  <img
                    className="font-inter mx-auto"
                    src="/images/RI-icons/upload.svg"
                    alt=""
                  />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  name="image" // Set the name attribute to match the fieldname expected by the server
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
          ) : (
            <div className="font-inter pt-5 pb-2 mt-16 outline-[#002994]  md:w-[320px]  mx-auto relative">
              <div className="font-inter flex flex-col items-center justify-center border border-dashed border-2 border-opacity-80 border-[#002994] md:w-[240px] md:h-[202px] mx-10">
                <img
                  className="font-inter md:w-[235px] md:h-[190px] my-4"
                  src={selectedImage || "/images/RI-icons/upload-pic.svg"}
                  alt=""
                />
              </div>
              <div className="absolute inset-x-0 top-[160px] ml-[95px]">
                <button
                  onClick={handleButtonClick}
                  className="font-inter mt-3  h-[40px]  md:mx-auto "
                >
                  <img
                    className="font-inter mx-auto"
                    src="/images/RI-icons/re-upload-pic.svg"
                    alt=""
                  />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  name="image" // Set the name attribute to match the fieldname expected by the server
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          )}
          {/* <div className="font-inter pt-5 pb-2 mt-16 outline-[#002994] w-[240px] h-202px] md:w-[320px] md:h-[241px] mx-auto">
            <div className="font-inter flex flex-col items-center justify-center border border-dashed border-2 border-opacity-80 border-[#002994] md:w-[240px] md:h-[202px] mx-10">
              <img
                className="font-inter w-[55px] h-[48px] my-4"
                src={selectedImage || "/images/RI-icons/upload-pic.svg"}
                alt=""
              />
              <button
                type="button"
                className="font-inter btn w-[111px] h-[40px] mt-[20px] mb-4 md:mt-[40px] md:mx-auto border border-[#0077B5] text-[14px] text-[#0077B5] rounded-2xl"
                onClick={handleButtonClick}
              >
                <img
                  className="font-inter mx-auto"
                  src="/images/RI-icons/upload.svg"
                  alt=""
                />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                name="image" // Set the name attribute to match the fieldname expected by the server
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div> */}
          <div className="font-inter mx-7">
            <button
              type="button"
              onClick={handleUpload}
              className="font-inter btn bg-[#0077B5] bg-opacity-40 hover:bg-[#0077B5] w-[330px] md:w-[640px] h-[48px] mt-[100px] md:mt-[70px] -mx-6 md:mx-auto rounded-lg text-white text-[18px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OpenIdCard;
