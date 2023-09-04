import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsersData = () => {
  const { axiosSecure } = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading: userLoading,
    error: userError,
    isError: isUserError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/users`);
      return data.data;
    },
  });
  return { users, userLoading, userError, isUserError, refetch };
};

export default useUsersData;
