import { Navigate,  useLocation } from "react-router-dom";
import useAuth from "./Context/useAuth";
import Spinner from "../Spinner/Spinner";

const RecruterPrivetRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  const isLoading = useAuth();
  const location = useLocation();

  if (isLoading?.isLoading === true) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  } else if (isAuthenticated?.isAuthenticated === true) {
    return children;
  } else {
    return (
      <Navigate
        to="/recruiters-login"
        state={{ from: location }}
        replace
      ></Navigate>
    );
  }
};

export default RecruterPrivetRoute;
