import { Outlet } from "react-router-dom";
import RecruterChatHistory from "./RecruterChatHistory";
import RecruterDashbordHeadre from "../RegisterDahsbord/RecruterDashbordHeadre";

const RecruterChatPage = () => {
  return (
    <div>
        <div className="bg-[#F2F0F5] ">
        <div className="sticky top-0 z-50">
          <RecruterDashbordHeadre></RecruterDashbordHeadre>
        </div>
        <div className="flex justify-center mt-[10px] pb-20 ">
          <div className="flex gap-[30px] ">
            <div>
              <div className=" ">
              <RecruterChatHistory></RecruterChatHistory>
              </div>
            </div>
            <div className="w-[870px]">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default RecruterChatPage;
