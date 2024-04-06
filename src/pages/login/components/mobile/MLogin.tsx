import React from 'react';
import * as ML from './MLogin.style';
import MMoreInfo from './MMoreInfo';
import LoginImage from '../../../../img/login/Login.png';
import googleIcon from '../../../../img/login/google-icon.svg';
import kakaoIcon from '../../../../img/login/kakao-icon.svg';

interface LoginProps {
    google_login: () => void;
    kakao_login: () => void;
}

const MLogin = ({ google_login, kakao_login }: LoginProps) => {
    return (
        <>
            <ML.Container>
                <ML.Text>
                    멋쟁이사자처럼 대학에
                    <br />
                    오신 걸 환영합니다.
                </ML.Text>
                <ML.Item src={LoginImage} alt="login" />

                <ML.Box>
                    <ML.GoogleBtn onClick={google_login}>
                        <img src={googleIcon} alt="google_logo" />
                        <span>Google 계정으로 로그인</span>
                    </ML.GoogleBtn>
                    <ML.KakaoBtn onClick={kakao_login}>
                        <img src={kakaoIcon} alt="kakao_logo" />
                        <span>카카오 계정으로 로그인</span>
                    </ML.KakaoBtn>
                </ML.Box>
            </ML.Container>
        </>
    );
};

export default MLogin;
