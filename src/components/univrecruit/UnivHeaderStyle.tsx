import { styled } from 'styled-components';

export const BlackDiv = styled.div`
    display: flex;
    justify-content: center;
    background: #212224;
    padding-top: 100px;
    padding-left: 6em;
    padding-right: 6em;
    box-sizing: border-box;

    font-family: Pretendard;
    color: white;
    padding-bottom: 170px;

    width: 100%;

    @media screen and (max-width: 767px) {
        padding: 2.875rem 1.25rem;
    }
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;

    @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 588px;
`;

export const T1 = styled.div`
    color: #fff;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;

    @media screen and (max-width: 767px) {
        font-size: 40px;
    }

    @media screen and (max-width: 360px) {
        font-size: 28px;
    }
`;

export const T2 = styled.div`
    color: #eaecee;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 24px;
    max-width: 588px;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }

    @media screen and (max-width: 360px) {
        font-size: 16px;
    }

    :nth-child(2) {
        color: var(--Grey-600, #adb3ba);
        font-size: 14px;
        margin-top: 24px;

        @media screen and (max-width: 767px) {
            font-size: 12px;
            font-weight: 500;
            line-height: 150%;
        }
    }
`;

export const T3 = styled.div`
    color: var(--Orange-600, #ff7710);

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */

    margin-bottom: 16px;
    white-space: nowrap;

    @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 150%;
    }

    @media screen and (max-width: 387px) {
        font-size: 19px;
        max-width: 100%;
    }
`;

export const Button = styled.button`
    border: none;
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

    @media screen and (max-width: 768px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 480px) {
        justify-content: space-between;
        align-items: center;
        width: 320px;
        padding: 1rem 2rem;
        gap: 0;

        & > div {
            width: 100px;
            white-space: nowrap;
        }
    }
`;

export const Gra = styled.img`
    width: 35em;

    @media screen and (max-width: 1280px) {
        max-width: 332px;
    }

    @media screen and (max-width: 767px) {
        width: 480px;
        max-width: 100%;
        margin-bottom: 40px;
    }
`;
