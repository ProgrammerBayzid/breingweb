import { useEffect } from "react";

const CopyJobLinkPopUp = ({ setShowCopyJobLinkPopup }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
        setShowCopyJobLinkPopup(false);
    }, 1500); // 5000 milliseconds = 5 seconds

    // Clean up the timeout if the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [setShowCopyJobLinkPopup]);

  return (
    <div className="fixed inset-0  flex justify-center items-center  z-40 App">
      <div className="  relative      lg:p-0 md:p-0 p-2 rounded rounded-[10px]">
        <div className="px-3">
          <div className="my-5">
            {/* <div className="flex justify-between">
              <img
                // onClick={handelSkillRemove}
                className="cursor-pointer"
                src="/images/tircompany.svg"
              />
              <h1 className="text-[18px] font-semibold text-[#212427] text-opacity-90 ">
                Add Skill
              </h1>
              <button
                // onClick={() => setskillModalOpen(false)}
                className=" text-white bg-[#0077B5] h-[25px] w-[50px] text-[14px] rounded rounded-[5px]"
              >
                Save
              </button>
            </div> */}
          </div>
          <div>
            <p className="text-center bg-black bg-opacity-70 px-3 py-1 text-white rounded-[7px]">
             Copied Job Link
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyJobLinkPopUp;
