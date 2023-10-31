import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudentEnrolledClass = () => {
  const { user, authLoading } = useAuth();
  const { axiosSecure } = useAxiosSecure();

  const {
    isLoading: enrolledClassesDataLoading,
    data: enrolledClassesData,
    error: enrolledClassesDataError,
    isError: isEnrolledClassesError,
  } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  return {
    enrolledClassesDataLoading,
    enrolledClassesData,
    enrolledClassesDataError,
    isEnrolledClassesError,
  };
};

export default useStudentEnrolledClass;
