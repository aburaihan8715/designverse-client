import { useQuery } from "react-query";

const useClassesData = () => {
  const {
    isLoading: classesLoading,
    data: classesData = [],
    error: classesError,
    isError: isClassesError,
    refetch,
  } = useQuery("classes", () => fetch("https://fashion-verse-server.vercel.app/classes").then((res) => res.json()));

  return { classesData, classesLoading, classesError, isClassesError, refetch };
};

export default useClassesData;
