import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../HomeComponent/Header";
import NormalFooter from "./NormalFooter";
const MarketingPageLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [openModal, closeModal] = useState(false);



  return (
    <div>
      <div className="sticky top-0 z-40">
        <Header closeModal={closeModal}></Header>
      </div>
      <div >
        <Outlet></Outlet>
      </div>
      <NormalFooter></NormalFooter>
    </div>
  );
};

export default MarketingPageLayout;
