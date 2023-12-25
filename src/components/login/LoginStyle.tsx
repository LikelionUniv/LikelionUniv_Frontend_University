import styled from 'styled-components';
import googleIcon from '../../img/login/google-icon.svg';
import kakaoIcon from '../../img/login/kakao-icon.svg';

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    margin: 241px 0;

    @media (max-width: 1920px) {
        margin-top: 241px;

        & > img:first-child {
            margin-right: 126px;
        }
    }

    @media (max-width: 1280px) {
        margin-top: 117px;
    }

    @media (min-width: 768px) and (max-width: 1280px) {
        & > img:first-child {
            margin-right: 24px;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Item = styled.img`
    width: 486px;
    height: 486px;

    @media screen and (min-width: 768px) and (max-width: 1280px) {
        width: 332px;
        height: 332px;
        background-position: contain;
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
`;

export const SocialBtn = styled.button`
    width: 380px;
    height: 62px;
    padding: 16px 0;
    border-radius: 12px;
    margin-bottom: 20px;
    cursor: pointer;

    & > span {
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
        &::before {
            content: url(${googleIcon});
            position: absolute;
            left: -67px;
        }
    }
`;

export const KakaoBtn = styled(SocialBtn)`
    background-color: #fee500;

    & > span {
        color: #000;
        position: relative;
        &::before {
            content: url(${kakaoIcon});
            position: absolute;
            left: -112px;
        }
    }
`;
