import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
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

    if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
