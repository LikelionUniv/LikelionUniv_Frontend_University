import { refreshInstance } from './axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IRequest<T, P> {
    uri: string;
    method: string;
    data?: T;
    params?: P;
}

interface IResponse<R> {
    timestamp: string;
    isSuccess: boolean;
    code: string;
    message: string;
    data: R;
}

export interface IError {
    timestamp: string;
    isSuccess: boolean;
    code: string;
    message: string;
    httpStatus: number;
}

/**
 * 재발급을 위해서만 쓰는 request입니다. 다른 곳에서 사용하지 마세요.
 * @template T - request data type
 * @template R - response data type
 * @template P - request parameter type
 *
 * @param {string} uri - server endpoint
 * @param {string} method - get, post, patch, put, delete
 * @param {T} data - data
 * @param {P} params - request parameter
 */

async function refreshRequest<T, R, P>({ uri, method, data, params }: IRequest<T, P>) {
    const config: AxiosRequestConfig = {
        url: uri,
        method,
        data,
        params,
    };

    const response = await refreshInstance<T, AxiosResponse<IResponse<R>>>(
        config,
    );

    return response.data;
}

export default refreshRequest;
