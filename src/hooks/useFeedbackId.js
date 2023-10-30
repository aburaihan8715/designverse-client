import { useContext } from "react";
import { FeedbackIdContext } from "../contexts/FeedbackIdContext";

const useFeedbackId = () => {
  return useContext(FeedbackIdContext);
};

export default useFeedbackId;
