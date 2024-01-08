import i1 from "../../../../public/images/RI-icons/left-arrow.png";
import i2 from "../../../../public/images/RI-icons/recruiter.png";
import i3 from "../../../../public/images/RI-icons/ok.png";
import pic from "../../../../public/images/RI-icons/right-arrow.png";
import { useEffect, useState } from "react";

import RegisterSuccessModal from "../RegisterSuccessModal";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useProfileData } from "../../ProfieComponent/ProfileDataProvider";
import "react-lazy-load-image-component/src/effects/blur.css";
import App from "../../../App.css";
import {  useNavigate } from "react-router-dom";
import { useRef } from "react";
import DefueltImageModal from "./DefueltImageModal";
import Spinner from "../../Spinner/Spinner";

const Register = () => {
  const [ropenModal, rcloseModal] = useState(false);

  const { profileData } = useProfileData();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [recruter, setrecruter] = useState([]);
  console.log(recruter);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to fetch the recruiter's profile
    const fetchRecruiterProfile = (token) => {
      fetch("https://rsapp.unbolt.co/recruiters_profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            console.log("error");
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setrecruter(data);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setIsLoading(false); // Mark the loading as complete
        });
    };

    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      fetchRecruiterProfile(stringWithoutQuotes);
    } else {
      setIsLoading(false);
    }
  }, []);
 

  useEffect(() => {
    // Assuming profileData and recruter are fetched asynchronously
    if (profileData && recruter) {
      // Set the default values here
      // setValue("image", (recruter && recruter?.image) || "");
      setValue(
        "firstname",
        profileData.firstname || (recruter && recruter?.firstname) || ""
      );
      setValue(
        "lastname",
        profileData?.lastname || (recruter && recruter?.lastname) || ""
      );
      setValue(
        "email",
        profileData?.email || (recruter && recruter?.email) || ""
      );
      setValue(
        "designation",
        profileData?.designation || (recruter && recruter?.designation) || ""
      );
      // Repeat this for other fields
    }
  }, [profileData, recruter]);

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);
  console.log(selectedImage);
  const handleButtonClick = () => {
    fileInputRef.current.click();
    toggleDrop();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // setSelectedDefaultFile(null);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const [isOpenf, setIsOpenf] = useState(false);
  const toggleDrop = () => {
    setIsOpenf(!isOpenf);
  };
  const [selectedDefaultFile, setSelectedDefaultFile] = useState(null); // New state for selected default file

  console.log(selectedDefaultFile);

  const [defultImageOpen, setdefultImageOpen] = useState(false);
const navigate = useNavigate() 
  const addRecruterData = (data, e) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("designation", data.designation);
    formData.append("email", data.email);
    formData.append("image", selectedFile); // Assuming data.image is an array of File objects

    const token = localStorage.getItem("token");
    const tokenWithoutQuotes = token.replace(/"/g, "");

    if (tokenWithoutQuotes) {
      fetch("https://rsapp.unbolt.co/recruiters_update", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenWithoutQuotes}`,
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          e.target.reset();
          console.log(result);
          rcloseModal(true);
          navigate("/register-your-company", { state: { companyName: data.companyname } })
        })
        .catch((error) => {
          console.error("Error uploading data:", error);
        });
    } else {
      console.log("Token not found in local storage");
    }
  };

  if (isLoading === true) {
    return (
      <div className=" h-screen">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <div className="App font-inter">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register as a Recruiter | Unbolt Chat Based Hiring App </title>
        <meta name="description" content="" />
        <link rel="canonical" href="http://unbolt.co/registration-recruiters" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KKFH10XGFV"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKFH10XGFV');
          `}
        </script>
      </Helmet>
      <div className="hidden lg:block">
        {/* <p>{profileData.firstname}</p> */}
        <div className="">
          <div className="w-full App mx-[10px]">
            <div></div>
            <div className="lg:flex md:flex  justify-center">
              <div className="pt-7 pb-20">
                <div className="lg:w-[700px] bg-white lg:h-auto  border border-[#212427] border-opacity-20  rounded rounded-[10px] p-7">
                  <div className="mb-2">
                    <h1 className="text-[22px] font-bold  text-center text-[#212427] text-opacity-70 ">
                      My Professional Profile as a Recruiter
                    </h1>
                    <p className="text-center text-[16px] text-[#212427]  font-normal">
                      Introduce Yourself to the Candidates
                    </p>
                  </div>

                  <div className="mb-5">
                    <form
                      onSubmit={handleSubmit(addRecruterData)}
                      encType="multipart/form-data"
                    >
                      <div className="mb-7">
                        <div className=" flex justify-center">
                          <div className="relative h-[82px] w-[82px]">
                            <img
                              onClick={toggleDrop}
                              src={ 
                                
                                selectedImage === null ? (selectedDefaultFile === null
                                  ? recruter?.image===null?"/images/recruterImage.svg"  : `https://rsapp.unbolt.co/${recruter?.image}`
                                  : selectedDefaultFile ||
                                    "/images/recruterImage.svg"): selectedImage ||
                                    "/images/recruterImage.svg"
                              }
                        
      
                              className="h-[82px] w-[82px] rounded rounded-full"
                            />
                            <img
                              onClick={toggleDrop}
                              className="absolute bottom-0 right-0 cursor-pointer"
                              src="/images/rcamera.svg"
                            />
                          </div>

                          <input
                            type="file"
                            ref={fileInputRef}
                            name="image"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                          />
                        </div>
                        <h1 className="text-center text-[14px] text-[#212427]  font-normal mt-3">
                        Upload a photo or select an avatar
                        </h1>
                        <div className="ml-[220px] absolute z-40">
                          {isOpenf && (
                            <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[210px] h-[160px] pb-3 pt-2  overflow-auto pl-5 pt-6 rounded-[10px]">
                              <p
                                onClick={handleButtonClick}
                                className="text-[#212427] cursor-pointer text-[16px] font-normal mb-4"
                              >
                                Upload From Gallery
                              </p>
                              <p
                                onClick={() => setdefultImageOpen(true)}
                                className="text-[#212427] cursor-pointer text-[16px] font-normal mb-4"
                              >
                                Select From Default
                              </p>
                              <p
                                onClick={toggleDrop}
                                className="text-[#212427] cursor-pointer text-[16px] font-normal mb-4"
                              >
                                Cancel
                              </p>
                            </div>
                          )}
                        </div>
                        {defultImageOpen && (
                          <DefueltImageModal
                            setSelectedDefaultFile={setSelectedDefaultFile}
                            setSelectedFile={setSelectedFile}
                            setSelectedImage={setSelectedImage}
                            setdefultImageOpen={setdefultImageOpen}
                            toggleDrop={toggleDrop}
                            defultImageOpen={defultImageOpen}
                          ></DefueltImageModal>
                        )}
                        <div></div>
                      </div>

                      <div className="mb-2 relative">
                        <h1 className=" text-[16px] text-[#212427]  font-light  mb-1">
                          First Name
                        </h1>
                        <input
                          placeholder="Fast Name"
                          type="text"
                          {...register("firstname", {
                            required: "firstname is Required",
                          })}
                          defaultValue={
                            profileData?.firstname ||
                            (recruter && recruter?.firstname) ||
                            ""
                          }
                          className="focus:outline-none placeholder:text-[#212427] border-opacity-80 rounded placeholder:text-opacity-70  input py-5 pb-5 ps-2 w-full mb-[5px] h-[44px] border border-[#212427] "
                        />
                        {errors.firstname && (
                          <p className="text-red-500">
                            {errors.firstname.message}
                          </p>
                        )}

                        {profileData?.firstname !== "" ||
                        (recruter && recruter?.firstname !== null) ? (
                          <>
                            <img
                              src="/images/inputtik.svg"
                              className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                            />
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="mb-2 relative">
                        <h1 className=" text-[16px] text-[#212427]  font-light mb-1">
                          Last Name
                        </h1>
                        <input
                          placeholder="Last name"
                          type="text"
                          {...register("lastname", {
                            required: "  lastname is Required",
                          })}
                          defaultValue={
                            profileData?.lastname ||
                            (recruter && recruter?.lastname) ||
                            ""
                          }
                          className="focus:outline-none placeholder:text-[#212427] border-opacity-80 rounded placeholder:text-opacity-70  input py-5 pb-5 ps-2 w-full mb-[5px] h-[44px] border border-[#212427] "
                        />
                        {profileData?.lastname !== "" ||
                        (recruter && recruter?.lastname !== null) ? (
                          <>
                            <img
                              src="/images/inputtik.svg"
                              className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                            />
                          </>
                        ) : (
                          <></>
                        )}
                        {errors.lastname && (
                          <p className="text-red-500">
                            {errors.lastname.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-2 relative">
                        <h1 className=" text-[16px] text-[#212427]  font-light mb-1">
                          Company Name
                        </h1>
                        
                          <input
                            placeholder="Company name"
                            type="text"
                            {...register("companyname", {
                              required: "companyname is Required",
                            })}
                            defaultValue={
                              profileData?.companyname ||
                              (recruter && recruter?.companyname?.legal_name)
                            }
                            className="focus:outline-none placeholder:text-[#212427] border-opacity-80 rounded placeholder:text-opacity-70  input py-5 pb-5 ps-2 w-full mb-[5px] h-[44px] border border-[#212427] "
                          />
                          {profileData?.companyname !== "" ||
                        (recruter && recruter?.companyname !== null) ? (
                          <>
                          <img className="w-[14px] h-[14px] ms-[615px] -mt-[30px]" src={pic} alt="" />
                          </>
                        ) : (
                          <></>
                        )}

                          {errors.companyname && (
                            <p className="text-red-500">
                              {errors.companyname.message}
                            </p>
                          )}
                        
                      </div>
                      <div className="mb-2 mt-6 relative">
                        <h1 className=" text-[16px] text-[#212427]  font-light mb-1">
                          Designation
                        </h1>
                        <input
                          placeholder=" Designation"
                          type="text"
                          {...register("designation", {
                            required: "  designation is Required",
                          })}
                          defaultValue={
                            profileData.designation ||
                            (recruter && recruter.designation) ||
                            ""
                          }
                          className="focus:outline-none placeholder:text-[#212427] border-opacity-80 rounded placeholder:text-opacity-70  input py-5 pb-5 ps-2 w-full mb-[5px] h-[45px] border border-[#212427] "
                        />
                        {profileData?.designation !== "" ||
                        (recruter && recruter?.designation !== null) ? (
                          <>
                            <img
                              src="/images/inputtik.svg"
                              className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                            />
                          </>
                        ) : (
                          <></>
                        )}
                        {errors.designation && (
                          <p className="text-red-500">
                            {errors.designation.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-2 relative">
                        <h1 className=" text-[16px] text-[#212427]  font-light mb-1">
                          Email Address
                        </h1>
                        <input
                          placeholder="Email Address"
                          type="text"
                          {...register("email", {
                            required: "  email is Required",
                          })}
                          defaultValue={
                            profileData.email ||
                            (recruter && recruter.email) ||
                            " "
                          }
                          className="focus:outline-none placeholder:text-[#212427] border-opacity-80 rounded placeholder:text-opacity-70  input py-5 pb-5 ps-2 w-full mb-[5px] h-[45px] border border-[#212427] "
                        />
                        {profileData?.email !== "" ||
                        (recruter && recruter?.email !== null) ? (
                          <>
                            <img
                              src="/images/inputtik.svg"
                              className="absolute  right-3 bottom-5    h-[15px] w-[15px] "
                            />
                          </>
                        ) : (
                          <></>
                        )}
                        {errors.email && (
                          <p className="text-red-500">{errors.email.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full h-[44px] bg-[#00A0DC] bg-opacity-40 text-[18px] mt-5 font-semibold hover:bg-[#0077B5] hover:text-white rounded text-center "
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive */}

      <div className="flex justify-center block lg:hidden bg-white">
        <div>
          <div className="mx-[10px] w-[360px]">
            <img
              className="w-[24px] h-[24px] -ms-10 cursor-pointer"
              src={i1}
              alt=""
            />
            <div>
              <p className="text-[#212427] text-[22px] text-center font-semibold w-[244px] h-[49px] mx-auto -mt-6">
                My Professional Profile as a Recruiter
              </p>
              <p className="text-[#212427] text-[16px] text-center mt-4 mb-2">
                Introduce Yourself to the Candidates.
              </p>
              <img
                className="w-[50px] h-[50px] mx-auto cursor-pointer"
                src={i2}
                alt=""
              />
              <p className="text-[#212427] text-[14px] text-center mt-2 mb-5">
                Choose a photo or select an avatar
              </p>
              <div>
                <div className="border border-1 border-[#828282] border-opacity-25 p-2 rounded-md mb-2">
                  <p className="text-[#212427] text-opacity-50 text-[16px]">
                    First Name
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[#212427] text-[18px]">Jakaria</p>
                    <img
                      className="w-[12px] h-[12px] cursor-pointer"
                      src={i3}
                      alt=""
                    />
                  </div>
                </div>
                <div className="border border-1 border-[#828282] border-opacity-25 p-2 rounded-md mb-2">
                  <p className="text-[#212427] text-opacity-50 text-[16px]">
                    Last Name
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[#212427] text-[18px]">Hasan</p>
                    <img
                      className="w-[12px] h-[12px] cursor-pointer"
                      src={i3}
                      alt=""
                    />
                  </div>
                </div>
                <div className="border border-1 border-[#828282] border-opacity-25 p-2 rounded-md mb-2">
                  <p className="text-[#212427] text-opacity-50 text-[16px]">
                    Company Name
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[#212427] text-[18px]">
                      Bringin Technologies Ltd
                    </p>
                    <img
                      className="w-[12px] h-[12px] cursor-pointer"
                      src={i3}
                      alt=""
                    />
                  </div>
                </div>
                <div className="border border-1 border-[#828282] border-opacity-25 p-2 rounded-md mb-2">
                  <p className="text-[#212427] text-opacity-50 text-[16px]">
                    Designation
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[#212427] text-[18px]">Vice President</p>
                    <img
                      className="w-[12px] h-[12px] cursor-pointer"
                      src={i3}
                      alt=""
                    />
                  </div>
                </div>
                <div className="border border-1 border-[#828282] border-opacity-25 p-2 rounded-md mb-2">
                  <p className="text-[#212427] text-opacity-50 text-[16px]">
                    Email Address
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[#212427] text-[18px]">
                      jakaria@bringin.io
                    </p>
                    <img
                      className="w-[12px] h-[12px] cursor-pointer"
                      src={i3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mx-4 mt-44">
                <button className="bg-[#0077B5] w-[330px] h-[48px] border border-1 rounded-lg text-white text-[18px] text-center">
                  Save & Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterSuccessModal
        rvisible={ropenModal}
        rcloseModal={rcloseModal}
      ></RegisterSuccessModal>
    </div>
  );
};

export default Register;





