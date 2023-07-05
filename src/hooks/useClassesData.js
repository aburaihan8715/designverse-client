import { useQuery } from "react-query";

const useClassesData = () => {
  const {
    isLoading: classesLoading,
    error: classesError,
    data: classesData = [],
    refetch,
  } = useQuery("classes", () => fetch("https://fashion-verse-server.vercel.app/classes").then((res) => res.json()));

  return [classesData, classesLoading, classesError, refetch];
};

export default useClassesData;
