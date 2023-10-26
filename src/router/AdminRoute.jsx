import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../ui/LoadingSpinner";

const AdminRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const { roleData, roleDataLoading } = useRole();
  const location = useLocation();

  if (authLoading || roleDataLoading) return <LoadingSpinner />;

  if (user && roleData?.role === "admin") return children;

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
