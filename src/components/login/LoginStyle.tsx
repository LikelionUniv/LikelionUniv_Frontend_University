import styled from 'styled-components'
import googleIcon from "../../img/icon-google.svg"
import kakaoIcon from "../../img/icon-kakao.svg"

export const Container = styled.section`
  width : 1120px;
  height : 100%;
  display: flex;
  justify-content: space-between;
  align-items : center;
  padding-top : 160px;
  margin : 0 auto;

  @media screen and (max-width : 1120px){
    width : auto;
    margin : 0 20px;
  }
`;


export const ImgBox = styled.div`
  width : 458px;
  height : 490px;
  background-color : #eee;

  @media screen and (max-width : 900px){
    width: 289px;
    height: 308px; 
  }
`;

export const Box = styled.div`
  width : 380px;
`;

export const Text = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  margin-bottom :48px;
`;

export const SocialBtn = styled.button`
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

export const GoogleBtn = styled(SocialBtn)`
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

export const KakaoBtn = styled(SocialBtn)`
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