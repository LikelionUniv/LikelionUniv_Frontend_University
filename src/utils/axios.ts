import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER
});

axiosInstance.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return config;
  }

  // 게시글 등록 시 formData를 사용하므로
  if (config.url && config.url.includes('/api/v1/project/post/')) {    
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  // // token 필요할 때
  // const token = await localStorage.getItem('access_token');

  // if (token !== null) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});
