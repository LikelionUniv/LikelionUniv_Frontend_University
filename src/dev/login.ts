import request from "../utils/request";
import { idtoken } from "../config";

interface LoginParams {
  idtoken: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  isRegistered: string;
}

async function login() {
  const logintype = 'kakao';

  const response = await request<null, LoginResponse, LoginParams>({
    uri: `/api/v1/auth/${logintype}/login`,
    method: 'post',
    params: {
      idtoken,
    }
  });

  localStorage.clear();
  localStorage.setItem('access_token', response.data.accessToken);
  localStorage.setItem('refresh_token', response.data.refreshToken);
}

export default login;
