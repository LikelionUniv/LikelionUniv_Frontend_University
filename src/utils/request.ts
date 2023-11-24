import { axiosInstance } from './axios';
import { AxiosError, AxiosRequestConfig } from 'axios';

interface Irequest<T> {
  uri: string;
  method: string;
  data?: T;
}

export interface Response<T> {
  timestamp: string
  isSuccess: boolean
  code: string
  message: string
  data: T
}

async function request<T>({uri, method, data}: Irequest<T>) {
  const config: AxiosRequestConfig = {
    url: uri,
    method,
    data,
  }

  try {
    const response = await axiosInstance<T, Response<T>>(config);    
    return response.data;
  } catch (error) {
    const errorMessage = (error as AxiosError).message;
    alert(errorMessage);
  }
}

export default request
