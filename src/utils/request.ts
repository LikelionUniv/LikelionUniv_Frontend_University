import { axiosInstance } from './axios';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface Irequest<T> {
  uri: string;
  method: string;
  data?: T;
}

interface IResponse<T> {
  timestamp: string
  isSuccess: boolean
  code: string
  message: string
  data: T
}

interface IError {
  timestamp: string
  isSuccess: boolean
  code: string
  message: string
  httpStatus: number
}

async function request<T>({uri, method, data}: Irequest<T>) {
  const config: AxiosRequestConfig = {
    url: uri,
    method,
    data,
  }

  try {
    const response = await axiosInstance<T, AxiosResponse<IResponse<T>>>(config);    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<IError>;
      if (serverError && serverError.response) {
        alert(serverError.response.data.message);
      }
    }
  }
}

export default request
