import axios from "axios";
import { useEffect } from "react";
import api from "../api/api";
import useAuth from "./useAuth";

const useApi = () => {
  const { authInfo, setAuthInfo } = useAuth();
  const refreshToken = authInfo?.refreshToken;
  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${authInfo.accessToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.status === 401 && originalRequest._retry) {
          originalRequest._retry = true;
          if (refreshToken) {
            try {
              const response = await axios.post(
                `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
                { refreshToken }
              );
              setAuthInfo(response.data);
              originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

              return axios(originalRequest)
            } catch (error) {
                Promise.reject(error)
            }
          }
        }
        return Promise.reject(error);
      }
    );

    return ()=>{
        api.interceptors.request.eject(requestInterceptor)
        api.interceptors.response.eject(responseInterceptor)
    }
  }, [authInfo.accessToken, refreshToken, setAuthInfo]);

  return {api}
};

export default useApi;
