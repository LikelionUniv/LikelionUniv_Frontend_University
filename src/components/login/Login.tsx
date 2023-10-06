import { useState } from "react";
import styled from 'styled-components'
import loingImage from '../../img/login/Login.svg';
import loginSm from '../../img/login/login-sm.svg';
import googleIcon from '../../img/login/google-icon.svg'
import kakaoIcon from '../../img/login/kakao-icon.svg'

export const Login = () =>{


  return (
    <>
      <Container>
        <Item/>

        <Box>
          <Text>
            멋쟁이사자처럼에<br/>
            오신 걸 환영합니다.
          </Text>
          <GoogleBtn><span>Google 계정으로 로그인</span></GoogleBtn>
          <KakaoBtn><span>카카오 로그인</span></KakaoBtn>
        </Box>
      </Container>
    </>

  )
}

const Container = styled.div`
  width : 1152px;
  margin : 0 auto;
  display : flex;
  justify-content : flex-start;
  align-items : center;
  padding : 0 40px;
  margin-top : 241px;
  
  @media (max-width: 1920px) {
        margin-top : 241px;

        & > div:first-child {
          margin-right : 126px;
        }
    }

  @media (max-width: 1280px){
    margin-top : 117px;

  }

  @media (max-width: 768px){
    margin-top : 194px;
    justify-content : center;
    & > div:first-child {
          width : 332px;
          height : 332px;
          background-image : url(${loginSm});
          margin-right : 24px;
        }
  }
  
`;

const Item = styled.div`
  width : 486px;
  height : 486px;
  //background-color : #eee;
  background-image : url(${loingImage});
  background-position : contain;
`;

const Box = styled.div`
  width : 380px;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  margin-bottom :48px;
`;

const SocialBtn = styled.button`
  width: 380px;
  height: 62px;
  padding: 16px 0;
  border-radius: 12px;
  margin-bottom : 20px;
  cursor : pointer;

  & > span{
    text-align: center;
    font-size : 20px;
    font-style : normal;
    font-weight : 700;
  }
`;

const GoogleBtn = styled(SocialBtn)`
  background-color :#fff;
  border : 1px solid #D1D4D8;
  & > span{
    color : #4D5359;
    position : relative;
    &::before {
      content: url(${googleIcon});
      position: absolute;
      left : -67px;
    }
  }
`;

const KakaoBtn = styled(SocialBtn)`
  background-color : #FEE500;

  & > span{
    color : #000;
    position : relative;
    &::before {
      content :url(${kakaoIcon});
      position: absolute;
      left : -112px;
    }
  }
`;
