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
    error => {
        const axiosError = getAxiosError(error);
        // const {config} = error; 

        // // 리프레시도 만료된 경우나 잘못된 토큰인 경우
        // if (axiosError?.code === 'TOKEN_401_1') {
        //     return Promise.reject(error);
        // }

        // // 액세스 토큰 만료
        // if (axiosError?.code === 'TOKEN_401_4') {
        //     const originRequest = config;
        //     const reissueToken = await reissue();

        //     setAccessAndRefresh(reissueToken.accessToken, reissueToken.refreshToken);
        //     originRequest.headers.Authorization = `Bearer ${reissueToken.accessToken}`;

        //     return axiosInstance(originRequest);
        // }
        alert(axiosError?.message);
        return Promise.reject(error);
    },
);

const getAxiosError = (error: AxiosError): IError | undefined => {
    const serverError = error as AxiosError<IError>;
    return serverError.response?.data;
};

// const setAccessAndRefresh = (accessToken: string, refreshToken: string) => {
//     localStorage.setItem('access_token', accessToken);
//     localStorage.setItem('refresh_token', refreshToken);
// }