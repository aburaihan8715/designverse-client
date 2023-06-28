import axios from "axios";
import { useQuery } from "react-query";

const useSelectedClassesData = () => {
  const {
    isLoading: selectedDataLoading,
    error: selectedDataError,
    data: selectedData,
    refetch,
  } = useQuery("selectedClasses", () => axios.get("https://fashion-verse-server.vercel.app/selectedClasses"));

  return [selectedData, selectedDataLoading, selectedDataError, refetch];
};

export default useSelectedClassesData;
