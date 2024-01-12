import React from 'react';
import * as L from './LoginStyle';
import LoginImage from '../../img/login/Login.png';
import MLogin from './mobile/MLogin';

export const Login = () => {
    const kakaoLoginURL = `
    https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}
    `;

    const GoogleLoginUrl = `
    https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&scope=openid email profile
    `;

    const google_login = () => {
        window.open(GoogleLoginUrl, '_self');
    };
    const kakao_login = () => {
        window.open(kakaoLoginURL, '_self');
    };

    return (
        <L.Wrapper>
            <L.Container>
                <L.Item src={LoginImage} alt="login" />

                <L.Box>
                    <L.Text>
                        멋쟁이사자처럼 대학에
                        <br />
                        오신 걸 환영합니다.
                    </L.Text>
                    <L.GoogleBtn onClick={google_login}>
                        <span>Google 계정으로 로그인</span>
                    </L.GoogleBtn>
                    <L.KakaoBtn onClick={kakao_login}>
                        <span>카카오 로그인</span>
                    </L.KakaoBtn>
                </L.Box>
            </L.Container>
            {/* <MLogin /> */}
        </L.Wrapper>
    );
};
