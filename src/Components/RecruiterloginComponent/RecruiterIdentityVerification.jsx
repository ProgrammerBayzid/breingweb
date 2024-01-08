import { useState } from "react";
import OpenWorkMail from "./OpenWorkMail";
import OpenOtherDocs from "./OpenOtherDocs";
import OpenLinkedInProfile from "./OpenLinkedInProfile";
import OpenIdCard from "./OpenIdCard";
import OpenAppointmentLetter from "./OpenAppointmentLetter";
import OpenOfferLetter from "./OpenOfferLetter";
import { Link } from "react-router-dom";

const RecruiterIdentityVerification = () => {
  const [workMailOpen, setWorkMailOpen] = useState(false);
  const [OfferLetterOpen, setOfferLetterOpen] = useState(false);
  const [AppointmentLetterOpen, setAppointmentLetterOpen] = useState(false);
  const [IdCardOpen, setIdCardOpen] = useState(false);
  const [LinkedInProfileOpen, setLinkedInProfileOpen] = useState(false);
  const [otherDocsOpen, setOtherDocsOpen] = useState(false);

  const handleGoBack = () => {
    window.history.back(); // This will navigate back one step in the browser's history
  };

  return (
    <div className="font-inter bg-white md:bg-gray-100 flex justify-center">
      <div className="font-inter bg-white p-6 rounded-lg shadow-md md:w-[700px] md:h-[624px] md:mt-8 mb-40">
        <div className="font-inter flex justify-between">
          <div>
            <img onClick={handleGoBack}
              src="/images/RI-icons/RI-arrow-left.svg"
              className="font-inter w-[16px] h-[16px]"
            />
          </div>
          <div>
            <Link to="">
              <button className="font-inter btn bg-[#0077B5] w-[105px] h-[28px] rounded-lg text-white">
                Need Help?
              </button>
            </Link>
          </div>
        </div>
        <h2 className="font-inter text-[#454545] text-[22px] font-semibold mt-4">
          Recruiter Identity Verification
        </h2>
        <p className="font-inter pb-6 text-[#212427] text-opacity-60 text-[16px]">
          <small>Choose one of the below listed method</small>
        </p>
        <div className="font-inter space-y-2">
          <div className="font-inter flex justify-between">
            <div className="font-inter flex gap-x-3">
              <img
                onClick={() => setWorkMailOpen(true)}
                src="/images/RI-icons/RI-mail-icon.svg"
                className="font-inter w-[20px] h-[20px] mt-1 cursor-pointer"
              />
              <div>
                <div className="font-inter ">
                  <p
                    onClick={() => setWorkMailOpen(true)}
                    className="font-inter w-[85px] h-[20px] text-[16px] cursor-pointer"
                  >
                    Work Email
                  </p>
                </div>
                <p
                  onClick={() => setWorkMailOpen(true)}
                  className="font-inter pb-4 text-[#212427] text-opacity-60 text-[14px] cursor-pointer"
                >
                  <small>Enter your work email</small>
                </p>
              </div>
            </div>
            <img
              onClick={() => setWorkMailOpen(true)}
              src="/images/RI-icons/RI-arrow-right.svg"
              className="font-inter text-[#212427] text-opacity-30 w-[8px] h-[16px] left-[4px] cursor-pointer"
            />
          </div>
          <div>
            {workMailOpen && (
              <OpenWorkMail setWorkMailOpen={setWorkMailOpen}></OpenWorkMail>
            )}
          </div>
          <div className="font-inter flex justify-between">
            <div className="font-inter flex gap-3">
              <img
                onClick={() => setOfferLetterOpen(true)}
                src="/images/RI-icons/RI-offer-letter.svg"
                className="font-inter w-[20px] h-[20px] mt-1 cursor-pointer"
              />
              <div>
                <div className="font-inter flex items-center">
                  <p
                    onClick={() => setOfferLetterOpen(true)}
                    className="font-inter font-medium cursor-pointer"
                  >
                    Offer Letter
                  </p>
                </div>
                <p
                  onClick={() => setOfferLetterOpen(true)}
                  className="font-inter pb-4 text-[#212427] text-opacity-60 text-[14px] cursor-pointer"
                >
                  <small>Verify with your job offer letter</small>
                </p>
              </div>
            </div>
            <img
              onClick={() => setOfferLetterOpen(true)}
              src="/images/RI-icons/RI-arrow-right.svg"
              className="font-inter text-[#212427] text-opacity-30 w-[8px] h-[16px] left-[4px] cursor-pointer"
            />
          </div>
          <div>
            {OfferLetterOpen && (
              <OpenOfferLetter
                setOfferLetterOpen={setOfferLetterOpen}
              ></OpenOfferLetter>
            )}
          </div>
          <div className="font-inter flex justify-between">
            <div className="font-inter flex gap-3">
              <img
                onClick={() => setAppointmentLetterOpen(true)}
                src="/images/RI-icons/RI-appointment-letter.svg"
                className="font-inter w-[20px] h-[20px] mt-1 cursor-pointer"
              />
              <div>
                <div className="font-inter flex items-center">
                  <p
                    onClick={() => setAppointmentLetterOpen(true)}
                    className="font-inter font-medium cursor-pointer"
                  >
                    Appointment Letter
                  </p>
                </div>
                <p
                  onClick={() => setAppointmentLetterOpen(true)}
                  className="font-inter pb-4 text-[#212427] text-opacity-60 text-[14px] cursor-pointer"
                >
                  <small>Verify with your appointment letter</small>
                </p>
              </div>
            </div>
            <img
              onClick={() => setAppointmentLetterOpen(true)}
              src="/images/RI-icons/RI-arrow-right.svg"
              className="font-inter text-[#212427] text-opacity-30 w-[8px] h-[16px] left-[4px] font-[500px] cursor-pointer"
            />
          </div>
          <div>
            {AppointmentLetterOpen && (
              <OpenAppointmentLetter
                setAppointmentLetterOpen={setAppointmentLetterOpen}
              ></OpenAppointmentLetter>
            )}
          </div>
          <div className="font-inter flex justify-between">
            <div className="font-inter flex gap-3">
              <img
                onClick={() => setIdCardOpen(true)}
                src="/images/RI-icons/RI-company-id.svg"
                className="font-inter w-[20px] h-[20px] mt-1 cursor-pointer"
              />
              <div>
                <div className="font-inter flex items-center">
                  <p
                    onClick={() => setIdCardOpen(true)}
                    className="font-inter font-medium cursor-pointer"
                  >
                    Company ID Card
                  </p>
                </div>
                <p
                  onClick={() => setIdCardOpen(true)}
                  className="font-inter pb-4 text-[#212427] text-opacity-60 text-[14px] cursor-pointer"
                >
                  <small>Verify with your company's ID card</small>
                </p>
              </div>
            </div>
            <img
              onClick={() => setIdCardOpen(true)}
              src="/images/RI-icons/RI-arrow-right.svg"
              className="font-inter text-[#212427] text-opacity-30 w-[8px] h-[16px] left-[4px] cursor-pointer"
            />
          </div>
          <div>
            {IdCardOpen && (
              <OpenIdCard setIdCardOpen={setIdCardOpen}></OpenIdCard>
            )}
          </div>
          <div className="font-inter flex justify-between">
            <div className="font-inter flex gap-3">
              <img
                onClick={() => setLinkedInProfileOpen(true)}
                src="/images/RI-icons/RI-linkedin.svg"
                className="font-inter w-[20px] h-[20px] mt-1 cursor-pointer"
              />
              <div>
                <div className="font-inter flex items-center">
                  <p
                    onClick={() => setLinkedInProfileOpen(true)}
                    className="font-inter font-medium cursor-pointer"
                  >
                    LinkedIn Profile
                  </p>
                </div>
                <p
                  onClick={() => setLinkedInProfileOpen(true)}
                  className="font-inter pb-4 text-[#212427] text-opacity-60 text-[14px] cursor-pointer"
                >
                  <small>Enter Your LinkedIn Profile Link</small>
                </p>
              </div>
            </div>
            <img
              onClick={() => setLinkedInProfileOpen(true)}
              src="/images/RI-icons/RI-arrow-right.svg"
              className="font-inter text-[#212427] text-opacity-30 w-[8px] h-[16px] left-[4px] cursor-pointer"
            />
          </div>
          <div>
            {LinkedInProfileOpen && (
              <OpenLinkedInProfile
                setLinkedInProfileOpen={setLinkedInProfileOpen}
              ></OpenLinkedInProfile>
            )}
          </div>
          <div className="font-inter flex justify-between">
            <div className="font-inter flex gap-3">
              <img
                onClick={() => setOtherDocsOpen(true)}
                src="/images/RI-icons/RI-other-docs.svg"
                className="font-inter w-[20px] h-[20px] mt-1 cursor-pointer"
              />
              <div>
                <div className="font-inter flex items-center">
                  <p
                    onClick={() => setOtherDocsOpen(true)}
                    className="font-inter font-medium cursor-pointer"
                  >
                    Any Other Authorized Documents
                  </p>
                </div>
                <p
                  onClick={() => setOtherDocsOpen(true)}
                  className="font-inter pb-4 text-[#212427] text-opacity-60 text-[14px] cursor-pointer"
                >
                  <small>Verify with any other valid documents</small>
                </p>
              </div>
            </div>
            <img
              onClick={() => setOtherDocsOpen(true)}
              src="/images/RI-icons/RI-arrow-right.svg"
              className="font-inter text-[#212427] text-opacity-30 w-[8px] h-[16px] left-[4px] cursor-pointer"
            />
          </div>
          <div>
            {otherDocsOpen && (
              <OpenOtherDocs
                setOtherDocsOpen={setOtherDocsOpen}
              ></OpenOtherDocs>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterIdentityVerification;