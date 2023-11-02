import styled from 'styled-components'

import googleIcon from '../../../img/login/google-icon.svg'
import kakaoIcon from '../../../img/login/kakao-icon.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const Item = styled.img`
  max-width: 388px;
  max-height: 388px;

  margin: 32px auto;

  @media screen and (max-width: 428px) {
    margin: 32px 20px;
  }
`;

export const Text = styled.div`
  margin: 40px 0 0 20px;

  color: var(--Black, #000);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 176px;
  margin: 0 13px;
`;

export const SocialBtn = styled.button`
  width: 100%;
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
  }
  &::before {
    content: url(${googleIcon});
    position: absolute;
    left : 23px;
  }
`;

export const KakaoBtn = styled(SocialBtn)`
  background-color : #FEE500;
  border: none;

  & > span{
    color : #000;
    position : relative;
  }

  &::before {
    content :url(${kakaoIcon});
    position: absolute;
    left : 23px;
  }
`;
