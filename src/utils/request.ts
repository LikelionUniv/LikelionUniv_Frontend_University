import { axiosInstance } from './axios';
import { AxiosError, AxiosRequestConfig } from 'axios';

interface Irequest<T> {
  uri: string;
  method: string;
  data?: T;
}

async function request<T>({uri, method, data}: Irequest<T>) {
  const config: AxiosRequestConfig = {
    url: uri,
    method,
    data,
  }

  try {
    const response = await axiosInstance<T>(config);
    return response.data;
  } catch (error) {
    const errorMessage = (error as AxiosError).message;
    alert(errorMessage);
  }
}

export default request
