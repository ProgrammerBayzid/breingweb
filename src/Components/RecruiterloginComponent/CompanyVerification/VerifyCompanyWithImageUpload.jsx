import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyCompanyWithImageUpload = () => {
  const handleGoBack = () => {
    window.history.back(); // This will navigate back one step in the browser's history
  };

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
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
console.log(token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an asynchronous request to get the token from localStorage
        const receivedToken = localStorage.getItem("token");
        const tokenWithoutQuotes = receivedToken.replace(/"/g, "");

        // Simulate asynchronous operation by adding a delay (optional)
        // Replace this with your actual asynchronous operation
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Update the component state with the received token
        setToken(tokenWithoutQuotes);
        setLoading(false); // Set loading to false once the token is retrieved
      } catch (error) {
        console.error('Error fetching token:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("image", file);
    // const token = localStorage.getItem("token");
    // const tokenWithoutQuotes = token.replace(/"/g, "");

    axios
      .post("https://rsapp.unbolt.co/company_verify", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
        // You can handle the response as needed
        navigate("/recruiter-identity-verification");
      })
      .catch((error) => {
        console.error("Image upload failed:", error);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="font-inter bg-white  p-6 rounded-lg shadow-md w-[330px] md:w-[700px]  md:mt-8 mb-40">
        <div className="flex justify-between">
          <div>
            <img
              onClick={handleGoBack}
              src="/images/RI-icons/RI-arrow-left.svg"
              className="w-[16px] h-[16px]"
            />
          </div>
          <div>
            <button className="btn bg-[#0077B5] w-[105px] h-[28px] rounded-lg text-white">
              Need Help?
            </button>
          </div>
        </div>
        <h2 className="font-inter text-[#454545] text-[22px] font-semibold mt-4">
          Verify your company
        </h2>
        <p className="pb-4 text-[#212427] text-opacity-60 text-[16px]">
          <small>
            Upload one of the below documents to verify your company.
          </small>
        </p>
        <div className="font-inter space-y-2 w-[338px] h-[100px] text-[16px] text-[#212427]">
          <ol>
            <li>1. Certificate of Incorporation</li>
            <li>2. BIN Certificate</li>
            <li>3. Trade License</li>
            <li>4. Any Other Authorized Documents</li>
          </ol>
        </div>
      
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
          <div className="font-inter pt-3 pb-12 mt-4 outline-[#002994] w-[240px] h-auto md:w-[320px] md:h-auto mx-auto">
            <div className="font-inter flex flex-col items-center justify-center border border-dashed border-2 border-opacity-80 border-[#002994] md:w-[320px] md:h-[241px] mx-10 md:ms-4">
              <img
                className="font-inter w-[240px] h-[100px] md:w-[271px] md:h-[231px] my-4 md:mt-[105px]"
                src={selectedImage || "/images/RI-icons/upload-pic.svg"}
                alt=""
              />
              <button
                onClick={handleButtonClick}
                className="font-inter btn w-[111px] h-[40px] mt-[0px] lg:mt-[20px] md:mx-auto mb-10"
              >
                <img
                  className="font-inter mx-auto"
                  src="/images/RI-icons/re-upload-pic.svg"
                  alt=""
                />
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              name="image" // Set the name attribute to match the fieldname expected by the server
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        )}
        <div className="font-inter -mx-4 md:mx-auto ">
          <p className="font-inter text-[#212427] text-opacity-60 text-[16px] py-5">
            <span className="font-inter font-bold">Note:</span> Please check
            your email and website domain properly which matches with company's
            official name. If the domain doesn’t match, it might not pass the
            verification process.
          </p>
          <div>
            <button
              type="button"
              onClick={handleUpload}
              className="font-inter btn bg-[#0077B5] bg-opacity-40 hover:bg-[#0077B5] w-[330px] md:w-[640px] h-[48px] -ms-2 md:mx-auto rounded-lg text-white text-[18px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCompanyWithImageUpload;
