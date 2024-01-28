import React from 'react';
import * as L from './LoginStyle';
import MLogin from './mobile/MLogin';
import WLogin from './WLogin';

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

export const Login = () => {
    return (
        <L.Wrapper>
            <WLogin google_login={google_login} kakao_login={kakao_login} />
            <MLogin google_login={google_login} kakao_login={kakao_login} />
        </L.Wrapper>
    );
};
