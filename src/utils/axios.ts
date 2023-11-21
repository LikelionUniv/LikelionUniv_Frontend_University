import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER
});

axiosInstance.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return config;
  }

  // // token 필요할 때
  // const token = await localStorage.getItem('access_token');

  // if (token !== null) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});
