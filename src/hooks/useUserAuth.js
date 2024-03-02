import { useContext } from "react";
import { UserAuthContext } from "../contexts/UserAuthContext";

const useUserAuth = () => {
  return useContext(UserAuthContext);
};

export default useUserAuth;
