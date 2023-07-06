import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyClassesData = () => {
  const { user, authLoading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    isLoading: myClassesDataLoading,
    error: myClassesDataError,
    data: myClassesData,
  } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myClasses?email=${user?.email}`);
      return res.data;
    },
  });

  return { myClassesDataLoading, myClassesDataError, myClassesData };
};

export default useMyClassesData;
