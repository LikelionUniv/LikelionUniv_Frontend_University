import React from "react";
import * as L from './LoginStyle'
import LoginImage from '../../img/login/Login.png'
import MLogin from "./mobile/MLogin";

export const Login = () => {

  return (
    <>
      <L.Container>
        <L.Item src={LoginImage} alt="login"/>

        <L.Box>
          <L.Text>
            멋쟁이사자처럼에<br/>
            오신 걸 환영합니다.
          </L.Text>
          <L.GoogleBtn><span>Google 계정으로 로그인</span></L.GoogleBtn>
          <L.KakaoBtn><span>카카오 로그인</span></L.KakaoBtn>
        </L.Box>
      </L.Container>
      <MLogin />
    </>
  )
}
