import { Outlet } from "react-router-dom";
import RecruterDashbordHeadre from "./RecruterDashbordHeadre";
import PurchaseDashboard from "../PurchaseHistoryDashboard/PurchaseDashboard";


const RecruiterPurchaseDashboard = () => {
    return (
        <div>
        <div className="bg-[#F2F0F5] ">
          <div className="sticky top-0 z-40">
            <RecruterDashbordHeadre></RecruterDashbordHeadre>
          </div>
          <div className="flex justify-center mt-[35px] h-auto pb-10 ">
            <div className="flex">
              <div>
                <div className="sticky top-[61px]">
                    <PurchaseDashboard></PurchaseDashboard>
                </div>
              </div>
              <div className="-ms-[80px] w-[1020px]">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
          <div>footer</div>
        </div>
      </div>
    );
};

export default RecruiterPurchaseDashboard;