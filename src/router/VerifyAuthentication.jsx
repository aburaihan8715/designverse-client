import { Navigate, useLocation } from "react-router-dom";
import useUserAuth from "../hooks/useUserAuth";

const VerifyAuthentication = ({ children }) => {
  const { user } = useUserAuth();
  const location = useLocation();

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default VerifyAuthentication;
