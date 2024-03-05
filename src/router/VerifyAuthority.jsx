import { Navigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

const VerifyAuthority = ({ children, roles }) => {
  const { user, role } = useUserAuth();

  if (user && roles.includes(role)) {
    return children;
  }

  return <Navigate to="/login" replace={true} />;
};

export default VerifyAuthority;
