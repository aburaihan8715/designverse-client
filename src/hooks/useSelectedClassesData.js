import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClassesData = () => {
  const { user, authLoading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    isLoading: selectedDataLoading,
    error: selectedDataError,
    data: selectedData,
    refetch,
  } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedClasses?email=${user?.email}`);
      return res.data;
    },

    // queryFn: async () => {
    //   const res = await axios.get(`https://fashion-verse-server.vercel.app/selectedClasses?email=${user?.email}`, {
    //     headers: {
    //       authorization: `bearer ${token}`,
    //     },
    //   });
    //   return res.data;
    // },
  });

  return { selectedData, selectedDataLoading, selectedDataError, refetch };
};

export default useSelectedClassesData;
