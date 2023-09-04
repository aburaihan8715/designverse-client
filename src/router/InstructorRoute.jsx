import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../ui/LoadingSpinner";
// import useAuth from "../hooks/useAuth";
// import useRole from "../hooks/useRole";
// import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const InstructorRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const { data, roleDataLoading } = useRole();
  const location = useLocation();

  if (authLoading || roleDataLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (user && data?.role === "instructor") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
