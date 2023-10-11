import axios from "axios";
import { useQuery } from "react-query";

const useClassesData = () => {
  const {
    isLoading: classesLoading,
    data: classesData = [],
    error: classesError,
    isError: isClassesError,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(
        "https://fashion-verse-server.vercel.app/classes",
      );
      return res.data;
    },
  });

  return {
    classesData,
    classesLoading,
    classesError,
    isClassesError,
    refetch,
  };
};

export default useClassesData;
