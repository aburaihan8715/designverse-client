import { useContext } from "react";
import { ReviewIdContext } from "../contexts/ReviewIdContext";

const useReviewId = () => {
  return useContext(ReviewIdContext);
};

export default useReviewId;
