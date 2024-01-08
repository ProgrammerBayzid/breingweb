import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../Components/HomeComponent/Header";
import AppLinkModal from "../Components/ShereComponent/AppLinkModal";
import NormalFooter from "../Components/MarketingPage/NormalFooter";

const BlogLayout = () => {
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
      <div id="mx">
        <Outlet></Outlet>
        <AppLinkModal
          visible={openModal}
          closeModal={closeModal}
        ></AppLinkModal>
      </div>

      <div>
        <NormalFooter></NormalFooter>
      </div>
    </div>
  );
};

export default BlogLayout;
