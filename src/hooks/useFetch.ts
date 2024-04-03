import { useEffect, useState } from 'react';
import request from '../api/request';

interface IuseFetch<P> {
    uri: string;
    params?: P;
}

function useFetch<T, P>({ uri, params }: IuseFetch<P>) {
    const [data, setData] = useState<T>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await request<null, T, P>({
                uri,
                method: 'get',
                params,
            });

            setData(response.data);
        };

        fetchData();
    }, [params, uri]);

    return { data };
}

export default useFetch;
