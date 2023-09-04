import { styled } from 'styled-components';

export const BlackDiv = styled.div`
    background: #212224;
    padding-top: 100px;

    color: white;
    padding-bottom: 170px;
    padding-left: 360px;
`;

export const T1 = styled.div`
    color: #fff;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const T2 = styled.div`
    color: #eaecee;
    font-family: Pretendard;
    font-size: 18px;
    width: 562px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 48px;
`;

export const T3 = styled.div`
    color: #fff;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */

    margin-bottom: 16px;
`;

export const Button = styled.button`
    border-radius: 8px;
    background: #ff7710;
    width: 384px;
    height: 64px;

    color: #fff;

    /* 글자 */
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    /* layout */
    display: flex;
    padding: 16px 32px;
    justify-content: center;
    align-items: flex-start;
    gap: 202px;
`;
