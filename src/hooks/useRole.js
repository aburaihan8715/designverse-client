import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, authLoading } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const {
    data: roleData,
    isLoading: roleDataLoading,
    error: roleDataError,
    isError: isRoleDataError,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      return res.data;
    },
  });
  return { roleData, roleDataLoading, roleDataError, isRoleDataError };
};
export default useRole;
