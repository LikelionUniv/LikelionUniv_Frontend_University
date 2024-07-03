import axios from 'axios';

import { axiosInstance } from '../axios';

export const requestIdtoken = async (
    authorizationCode: any,
    provider: string | undefined,
) => {
    return await axiosInstance
        .get(`/api/v1/auth/${provider}/idtoken?code=${authorizationCode}`)
        .then(response => {
            localStorage.setItem('idtoken', response.data.data.idToken);
            return response.data.data.idToken;
        })
        .catch(error => {
            if (axios.isAxiosError(error)) return undefined;
        });
};

// 기존 회원인지 아닌지 t/f 리턴 , True일 경우 localStorage에 accesstoken , refresh token 저장
export const requestLogin = async (
    provider: string | undefined,
    idtoken: any,
) => {
    return await axiosInstance
        .post(`/api/v1/auth/${provider}/login?idtoken=${idtoken}`)
        .then(response => {
            const isUser = response.data.data.isRegistered;
            if (isUser) {
                const { accessToken, refreshToken } = response.data.data;
                localStorage.removeItem('idtoken');
                localStorage.setItem('access_token', accessToken);
                localStorage.setItem('refresh_token', refreshToken);
            }

            return isUser;
        })
        .catch(error => {
            if (axios.isAxiosError(error)) return undefined;
        });
};

export const requestUserInfo = async () => {
    const response = await axiosInstance.get(`/api/v1/auth/userInfo`);
    return response.data;
};
