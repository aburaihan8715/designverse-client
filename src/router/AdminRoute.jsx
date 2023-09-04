import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../ui/LoadingSpinner";

const AdminRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const { data, roleDataLoading } = useRole();
  const location = useLocation();

  if (authLoading || roleDataLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (user && data?.role === "admin") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
