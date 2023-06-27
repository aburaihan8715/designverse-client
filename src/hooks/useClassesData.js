import { useQuery } from "react-query";

const useClassesData = () => {
  const {
    isLoading: classesLoading,
    error: classesError,
    data: classesData = [],
    refetch,
  } = useQuery("classes", () => fetch("http://localhost:5000/classes").then((res) => res.json()));

  return [classesData, classesLoading, classesError, refetch];
};

export default useClassesData;
