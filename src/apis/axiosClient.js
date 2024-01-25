import axios from "axios";
import { API_URL } from "./constant";
import storageService from "../config/storageService";

const axiosClient = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to axiosClient
axiosClient.interceptors.request.use(async (currentConfig) => {
  const customHeaders = {};
  const accessToken = storageService.getAccessToken();
  if (accessToken) {
    customHeaders["Authorization"] = `Bearer ${accessToken}`;
  }

  return {
    ...currentConfig,
    headers: {
      ...customHeaders,
      ...currentConfig.headers,
    },
  };
});

// Add a response interceptor to axiosClient
axiosClient.interceptors.response.use(
  function (response) {
    if (response.data) {
      if (response.status === 200 || response.status === 201) {
        return response;
      }
      return Promise.reject(response);
    }
    return Promise.reject(response);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
