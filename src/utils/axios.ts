import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://stag.likelionuniv.com',
});

axiosInstance.interceptors.request.use(async config => {
    if (!config.headers) {
        return config;
    }

    // 로그인 개발 미완성으로 인해 env에서 가져오는 것으로 했습니다.
    // 로그인 api가 완성되어서 로그인을 연동시킨다면 아래의 코드로 변경하면 됩니다.
    const token = process.env.REACT_APP_ACCESS_TOKEN as string;

    // // token 필요할 때
    // const token = await localStorage.getItem('access_token');

    if (token !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    // if (token !== undefined) {
    //     // access token 만료 검증
    //     const expiredAt = jwtDecode(token).exp as number;
    //     const now = Math.floor(Date.now() / 1000);

    //     // access token이 만료됐을 때
    //     if (expiredAt < now) {
    //         const reissueToken = await reissue();
    //         if (reissueToken === undefined) throw new Error('에러');

    //         localStorage.setItem('access_token', reissueToken.accessToken);
    //         localStorage.setItem('refresh_token', reissueToken.refreshToken);

    //         config.headers.Authorization = `Bearer ${reissueToken.accessToken}`;
    //     }
    // }

    return config;
});
