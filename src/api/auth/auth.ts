import { axiosInstance } from '../../utils/axios';

// 인가코드 서버로 전송 , idtoken return
export const requestIdtoken = async (
    authorizationCode: any,
    provider: string | undefined,
) => {
    return await axiosInstance
        .get(`/api/v1/auth/${provider}/idtoken?code=${authorizationCode}`)
        .then(response => {
            //idtoken return
            localStorage.setItem('idtoken', response.data.data.idToken);
            return Promise.resolve(response.data.data.idToken);
        })
        .catch(e => {
            return '인가 코드 인증 오류';
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
        .catch(e => {
            return e;
        });
};

// 유저정보 GET
export const requestUserInfo = async () => {
    return await axiosInstance
        .get(`/api/v1/auth/userinfo`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
};
