import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsersData = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading: userIsLoading,
    error: userError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/users`);
      return data.data;
    },
  });
  return { users, refetch, userIsLoading, userError };
};

export default useUsersData;
