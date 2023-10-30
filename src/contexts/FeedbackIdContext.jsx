import { createContext, useState } from "react";

export const FeedbackIdContext = createContext();

const FeedbackIdContextProvider = ({ children }) => {
  const [feedbackId, setFeedbackId] = useState("");
  // console.log(feedbackId);
  return (
    <FeedbackIdContext.Provider value={{ feedbackId, setFeedbackId }}>
      {children}
    </FeedbackIdContext.Provider>
  );
};

export default FeedbackIdContextProvider;
