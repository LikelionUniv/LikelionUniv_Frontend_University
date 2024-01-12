import axios, { AxiosError } from 'axios';
import { IError } from './request';
import reissue from './reissue';
import BASE_URL from '../config';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const refreshInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use(async config => {
    if (!config.headers) {
        return config;
    }

    const token = localStorage.getItem('access_token');

    if (token !== null && config.url !== '/api/v1/auth/kakao/login') {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const customError = error as AxiosError;
        const axiosError = customError.response?.data as IError;

        const { config } = error;
        console.log(axiosError.code);

        // 리프레시도 만료된 경우나 잘못된 토큰인 경우
        if (axiosError?.code === 'TOKEN_401_1') {
            return Promise.reject(error);
        }

        // 인가되지 않은 사용자인 경우 로그인으로 돌려버림
        if (axiosError?.code === 'SECURITY_401') {
            alert(axiosError.message);
            // window.location.replace('/login');
            return Promise.reject(error);
        }

        // 리프레시 토큰 만료인 경우
        if (axiosError?.code === 'REFRESH_TOKEN_401') {
            alert('리프레시 만료');
            localStorage.clear();
            return Promise.reject(error);
        }

        // 액세스 토큰 만료
        if (axiosError?.code === 'TOKEN_401_4') {
            const originRequest = config;
            const reissueToken = await reissue();

            setAccessAndRefresh(
                reissueToken.accessToken,
                reissueToken.refreshToken,
            );
            originRequest.headers.Authorization = `Bearer ${reissueToken.accessToken}`;

            return axiosInstance(originRequest);
        }

        alert(axiosError?.message);
        return Promise.reject(error);
    },
);

const setAccessAndRefresh = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
};
