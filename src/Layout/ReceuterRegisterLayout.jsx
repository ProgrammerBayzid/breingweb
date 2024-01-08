import { useEffect } from "react";
import {  Outlet, useLocation } from "react-router-dom";

import RecruterFooter from "../Components/RecruiterloginComponent/recruterFooter";
import RecruterHeader from "../Components/RecruiterloginComponent/RecruterHeader";
import AppLinkModal from "../Components/ShereComponent/AppLinkModal";
import { useState } from "react";

const ReceuterRegisterLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [openModal, closeModal] = useState(false);
  return (
    <div>
      <div className="sticky top-0 z-40">
        <RecruterHeader closeModal={closeModal}></RecruterHeader>
      </div>
      <div className="bg-[#E6E6E6] w-full h-full">

      <div id="mx">
        <Outlet></Outlet>
        <AppLinkModal
          visible={openModal}
          closeModal={closeModal}
        ></AppLinkModal>
      </div>
      </div>

      <div>
      <RecruterFooter></RecruterFooter>
      </div>
    </div>
  );
};

export default ReceuterRegisterLayout;
