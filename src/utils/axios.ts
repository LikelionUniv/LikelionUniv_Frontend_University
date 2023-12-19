import axios, { AxiosError } from 'axios';
import { IError } from './request';

export const axiosInstance = axios.create({
    baseURL: 'https://stag.likelionuniv.com',
});

axiosInstance.interceptors.request.use(async config => {
    if (!config.headers) {
        return config;
    }

    const token = localStorage.getItem('access_token');

    if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        // const axiosError = getAxiosError(error);

        // // 액세스 토큰 만료
        // if (axiosError?.code === 'TOKEN_401_1') {
        //     const reissueToken = await reissue();
        //     console.log(reissueToken);
        //     return axiosInstance.request(error.config);
        // }
        return Promise.reject(error);
    },
);

const getAxiosError = (error: AxiosError): IError | undefined => {
    const serverError = error as AxiosError<IError>;
    return serverError.response?.data;
};
