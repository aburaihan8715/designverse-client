import { useQuery } from "react-query";

const useUsersData = () => {
  const {
    data: users = [],
    refetch,
    isLoading: userIsLoading,
    error: userError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/users`);
      return data.json();
    },
  });
  return { users, refetch, userIsLoading, userError };
};

export default useUsersData;
