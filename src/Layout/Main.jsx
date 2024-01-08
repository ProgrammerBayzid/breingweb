import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import App from "../App.css";
import Hedline from "../Components/HomeComponent/Hedline";
import Header from "../Components/HomeComponent/Header";
import Footer from "../Components/HomeComponent/Footer";
import AppLinkModal from "../Components/ShereComponent/AppLinkModal";
const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [openModal, closeModal] = useState(false);

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const timeoutId = setTimeout(clearLocalStorage, 60 * 60 * 24 * 30); // 30 days

    return () => {
      // Clear the timeout if the component unmounts before the 30 days
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <div className="sticky top-0 z-40">
        <Header closeModal={closeModal}></Header>
        {/* <Hedline></Hedline> */}
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

export default Main;
