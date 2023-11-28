import { axiosInstance } from './axios';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

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

interface IError {
    timestamp: string;
    isSuccess: boolean;
    code: string;
    message: string;
    httpStatus: number;
}

/**
 *
 * @template T - request data type
 * @template R - response data type
 * @template P - request parameter type
 *
 * @param {string} uri - server endpoint
 * @param {string} method - get, post, patch, put, delete
 * @param {T} data - data
 * @param {P} params - request parameter
 */

async function request<T, R, P>({ uri, method, data, params }: IRequest<T, P>) {
    const config: AxiosRequestConfig = {
        url: uri,
        method,
        data,
        params,
    };

    try {
        const response = await axiosInstance<T, AxiosResponse<IResponse<R>>>(
            config,
        );
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

export default request;
