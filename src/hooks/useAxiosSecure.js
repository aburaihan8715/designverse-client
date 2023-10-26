import { useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  // const { logOutUser } = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    // actually config===request
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.authorization = `bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // await logOutUser();
          // navigate("/login");
        }
        return Promise.reject(error);
      },
    );
  }, []);

  return { axiosSecure };
};

export default useAxiosSecure;
