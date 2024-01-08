import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import App from "../App.css";
import Footer from "../Components/HomeComponent/Footer";
import Header from "../Components/HomeComponent/Header";
import AppLinkModal from "../Components/ShereComponent/AppLinkModal";
const WithOutHedline = () => {
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
      <Footer></Footer>
    </div>
  );
};

export default WithOutHedline;
