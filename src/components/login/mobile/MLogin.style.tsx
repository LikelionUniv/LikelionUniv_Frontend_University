import styled from 'styled-components';

import googleIcon from '../../../img/login/google-icon.svg';
import kakaoIcon from '../../../img/login/kakao-icon.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 769px) {
        display: none;
    }
`;

export const Item = styled.img`
    max-width: 388px;
    max-height: 388px;
    border-radius: 8px;
    margin: 32px auto;

    @media screen and (max-width: 428px) {
        margin: 32px 0;
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
`;

export const SocialBtn = styled.button`
    width: 100%;
    height: 62px;
    padding: 16px 0;
    border-radius: 12px;
    margin-bottom: 20px;
    padding-left: 23px;
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;

    & > span {
        flex: 1;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
    }
`;

export const GoogleBtn = styled(SocialBtn)`
    background-color: #fff;
    border: 1px solid #d1d4d8;
    & > span {
        color: #4d5359;
        position: relative;
    }
`;

export const KakaoBtn = styled(SocialBtn)`
    background-color: #fee500;
    border: none;

    & > span {
        color: #000;
        position: relative;
    }
`;
