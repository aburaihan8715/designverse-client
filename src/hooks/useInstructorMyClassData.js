import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useInstructorMyClassData = () => {
  const { user, authLoading } = useAuth();
  const {
    data: instructorMyClassData = [],
    refetch,
    isLoading: instructorMyClassLoading,
    error: instructorMyClassError,
    isError: isInstructorMyClassError,
  } = useQuery({
    queryKey: ["instructorMyClasses", user?.email],
    enabled: !!user?.email && !authLoading,
    queryFn: async () => {
      const data = await axios.get(
        `https://fashion-verse-server.vercel.app/classes?email=${user?.email}`,
      );
      return data.data;
    },
  });
  return {
    instructorMyClassData,
    instructorMyClassLoading,
    instructorMyClassError,
    isInstructorMyClassError,
    refetch,
  };
};

export default useInstructorMyClassData;
