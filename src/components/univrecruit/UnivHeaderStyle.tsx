import { styled } from 'styled-components';

export const BlackDiv = styled.div`
    background: #212224;
    padding-top: 100px;

    font-family: Pretendard;
    color: white;
    padding-bottom: 170px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-left: 6em;
    padding-right: 6em;
`;

export const T1 = styled.div`
    color: #fff;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
`;

export const T2 = styled.div`
    color: #eaecee;
    font-size: 18px;
    width: 562px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 48px;
`;

export const T3 = styled.div`
    color: #fff;
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

export const Gra = styled.img`
    width: 35em;

    @media screen and (max-width: 1280px) {
        width: 460px;
    }

    @media screen and (max-width: 768px) {
        width: 332px;
    }
`;
