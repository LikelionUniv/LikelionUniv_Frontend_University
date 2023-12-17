import axios, { AxiosError } from 'axios';
import request, { IError } from './request';

interface Rissue {
    accessToken: string;
    refreshToken: string;
    isRegistered: boolean;
}

interface RefreshParam {
    token: string;
}

async function reissue() {
    // 로그인 개발 미완성으로 인해 env에서 가져오는 것으로 했습니다.
    // 로그인 api가 완성되어서 로그인을 연동시킨다면 아래의 코드로 변경하면 됩니다.
    const refresh = process.env.REACT_APP_REFRESH_TOKEN as string;
    // const refresh = await localStorage.getItem('refresh_token');

    try {
        const response = await request<null, Rissue, RefreshParam>({
            uri: '/api/v1/auth/refresh',
            method: 'post',
            params: {
                token: refresh,
            },
        });

        if (response === undefined) {
            throw new Error('서버 에러');
        }

        return response.data;
    } catch (error) {
        // refresh마저 만료될 경우 아마도 로그아웃을 시켜야 할 것...
        // 이 경우의 에러 메시지를 확인한 후 고치겠습니다.
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<IError>;
            if (serverError && serverError.response) {
                alert(serverError.response.data.message);
            }
        }
    }
}

export default reissue;
