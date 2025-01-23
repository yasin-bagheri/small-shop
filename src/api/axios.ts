import axios, { AxiosError, AxiosResponse } from "axios";
import { HOST_API } from "../global-config.ts";

const axiosInstance = axios.create({
  baseURL: HOST_API,
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${sessionStorage?.getItem("accessToken") || ""}`,
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const { status } = error?.response as AxiosResponse;
    // const { detail } = error?.response?.data as any;
    switch (status) {
      case 400:
        break;
      case 401:
        // Cookie.remove("token");
        window.location.href = "/auth/login";
        break;
      // case 403:
      //   break;
      // case 404:
      //   break;
      // case 500:
      //   break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
