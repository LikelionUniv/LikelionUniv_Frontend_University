/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";
import { AxiosError } from "axios";

interface IuseFetch<T> {
  uri: string
  initValue: T
}

interface RuseFetch<T> {
  data: T
  loading: boolean
  error: string
}

function useFetch<T>({uri, initValue}: IuseFetch<T>): RuseFetch<T> {
  const [data, setData] = useState<T>(initValue);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<T>(uri);
      setData(response.data);
    } catch (error) {
      const errorMessage = (error as AxiosError).message;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [uri]);

  return {
    data,
    loading,
    error,
  }
}

export default useFetch
