import { Outlet, useParams } from "react-router-dom";
import RecruterDashbordHeadre from "./RecruterDashbordHeadre";
import RecruiterDashboard from "./RecruiterDashboard";

import useAuth from "../RecruterPrivetRoute/Context/useAuth";
import Spinner from "../Spinner/Spinner";

const RegisterDahsbordLayout = () => {
  const recruter = useAuth();

  const recruterDetails = recruter.recruter;

  return (
    <div>
      <div className="bg-[#F2F0F5] ">
        <div className="sticky top-0 z-40">
          <RecruterDashbordHeadre
            recruter={recruterDetails}
          ></RecruterDashbordHeadre>
        </div>
        {recruter.isLoading === true ? (
          <Spinner></Spinner>
        ) : (
          <div className="flex justify-center mt-[35px] h-auto pb-10 ">
            <div className="flex gap-[30px]">
              <div>
                <div className="sticky top-[61px] ">
                  <RecruiterDashboard
                    recruter={recruterDetails}
                  ></RecruiterDashboard>
                </div>
              </div>
              <div className="w-[995px]">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        )}
        <div>footer</div>
      </div>
    </div>
  );
};

export default RegisterDahsbordLayout;
