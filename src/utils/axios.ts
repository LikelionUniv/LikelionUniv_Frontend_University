import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import reissue from './reissue';

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

        // access token 만료 검증
        const expiredAt = jwtDecode(token).exp as number;
        const now = Math.floor(Date.now() / 1000);

        // access token이 만료됐을 때
        if (expiredAt < now) {
            const reissueToken = await reissue();
            if (reissueToken === undefined) throw new Error('에러');

            localStorage.setItem('access_token', reissueToken.accessToken);
            localStorage.setItem('refresh_token', reissueToken.refreshToken);

            config.headers.Authorization = `Bearer ${reissueToken.accessToken}`;
        }
    }

    return config;
});
