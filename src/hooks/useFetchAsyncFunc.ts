/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

interface IuseFetch<T> {
    initValue: T;
    asyncFunc: () => Promise<T>;
}

interface RuseFetch<T> {
    data: T;
    loading: boolean;
    error: string;
}

function useFetchAsyncFunc<T>({ initValue, asyncFunc }: IuseFetch<T>): RuseFetch<T> {
    const [data, setData] = useState<T>(initValue);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await asyncFunc();
            setData(response);
        } catch (error) {
            const errorMessage = (error as AxiosError).message;
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
    };
}

export default useFetchAsyncFunc;
