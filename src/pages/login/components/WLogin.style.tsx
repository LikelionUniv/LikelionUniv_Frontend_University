import styled from 'styled-components';
import googleIcon from '../../../img/login/google-icon.svg';
import kakaoIcon from '../../../img/login/kakao-icon.svg';

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Item = styled.img`
    width: 486px;
    height: 486px;
    border-radius: 8px;
    margin-right: 126px;
    @media (max-width: 1072px) {
        width: 332px;
        height: 332px;
        background-position: contain;
        margin-right: 24px;
    }
`;

export const Box = styled.div`
    width: 380px;
`;

export const Text = styled.div`
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 48px;

    @media (max-width: 1072px) {
        font-size: 37px;
    }
`;

export const SocialBtn = styled.button`
    width: 380px;
    height: 62px;
    border-radius: 12px;
    margin-bottom: 20px;
    padding-left: 23px;
    border: none;
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;

    & > span {
        flex: 1;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
    }

    @media (max-width: 1072px) {
        width: 332px;
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

    & > span {
        color: #000;
        position: relative;
    }
`;
