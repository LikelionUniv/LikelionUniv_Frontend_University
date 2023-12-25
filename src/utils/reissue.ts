import refreshRequest from './refreshRequest';

interface Rissue {
    accessToken: string;
    refreshToken: string;
    isRegistered: boolean;
}

interface RefreshParam {
    token: string;
}

async function reissue() {
    const refresh = localStorage.getItem('refresh_token') as string;

    const response = await refreshRequest<null, Rissue, RefreshParam>({
        uri: '/api/v1/auth/refresh',
        method: 'post',
        params: {
            token: refresh,
        },
    });

    return response.data;
}

export default reissue;
