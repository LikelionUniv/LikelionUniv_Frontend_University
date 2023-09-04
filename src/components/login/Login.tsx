import React from 'react'
import * as L from './LoginStyle';

const Login = () => {

  
  return (
    <>
      <L.Container>
        <L.ImgBox></L.ImgBox>
        <L.Box>
          <L.Text>
            멋쟁이사자처럼에 <br/>
            오신 걸 환영합니다.
          </L.Text>
          <div>
            <L.GoogleBtn>
              <span>Google 계정으로 로그인</span>
            </L.GoogleBtn>
            <L.KakaoBtn>
              <span>카카오 로그인</span>
            </L.KakaoBtn>
          </div>
        </L.Box>
      </L.Container>
    </>
  );

}

export default Login;