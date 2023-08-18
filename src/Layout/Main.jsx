import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import App from "../App.css";
import Hedline from "../Components/HomeComponent/Hedline";
import Header from "../Components/HomeComponent/Header";
import Footer from "../Components/HomeComponent/Footer";
const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <div className="sticky top-0 z-40">

      <Header></Header>
      <Hedline></Hedline>
      </div>
      <div id="mx">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
