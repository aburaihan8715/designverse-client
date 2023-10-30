import { useContext } from "react";
import { ModalOpenContext } from "../contexts/ModalOpenContext";

const useModalOpen = () => {
  return useContext(ModalOpenContext);
};

export default useModalOpen;
