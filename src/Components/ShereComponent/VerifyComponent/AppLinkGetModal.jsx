const AppLinkGetModal = ({ visible, closeModal }) => {
  const modalClass = visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none';

  return (
    <div className={`fixed inset-0 flex justify-center items-center z-40 backdrop-blur-[1px] transition-opacity duration-300 ${modalClass}`}>
      <div className="transform transition-transform">
        <div className="w-full">
          <div className="lg:w-[400px] bg-white lg:h-[260px] md:w-[750px] relative md:h-[550px] w-[330px] h-[450px] flex justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:p-0 md:p-0 p-2 rounded rounded-[10px]">
            <label
              onClick={() => closeModal(false)}
              className="cursor-pointer text-[25px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#0077B5] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="mt-7">
                <span className="text-2xl font-medium">
                  Please check your phone SMS.
                </span>
                <p className="text-center">
                  {" "}
                  We have successfully sent a download link.
                </p>
              </div>
              <button
                onClick={() => closeModal(false)}
                className="p-2 mt-10 bg-[#0077B5] rounded-lg w-full text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLinkGetModal;
