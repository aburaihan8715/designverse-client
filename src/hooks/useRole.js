// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, authLoading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data, isLoading: isRoleLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      return res.data;
    },
  });
  return { data, isRoleLoading };
};
export default useRole;
