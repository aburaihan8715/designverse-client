import axios from "axios";
import { useQuery } from "react-query";

const useSelectedClassesData = () => {
  const {
    isLoading: selectedDataLoading,
    error: selectedDataError,
    data: selectedData,
    refetch,
  } = useQuery("selectedClasses", () => axios.get("http://localhost:5000/selectedClasses"));

  return [selectedData, selectedDataLoading, selectedDataError, refetch];
};

export default useSelectedClassesData;
