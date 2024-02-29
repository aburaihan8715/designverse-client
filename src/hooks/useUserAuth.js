import { useContext } from "react";
import { UserAuthContext } from "../contexts/UserAuthContext";

const useUserAuth = () => {
  return useContext(UserAuthContext);
};

export default useUserAuth;

/*
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
*/
