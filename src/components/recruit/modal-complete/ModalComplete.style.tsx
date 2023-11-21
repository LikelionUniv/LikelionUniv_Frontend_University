import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    padding-top: 28px;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        padding: 0;
        padding-top: 28px;
    }
`;

export const Img = styled.img`
    width: 160px;
    height: 160px;
    object-fit: contain;
    margin-bottom: 24px;
`;

export const Text = styled.div`
    margin-bottom: 48px;
    color: var(--Grey-900, #212224);

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 39.2px */

    @media screen and (max-width: 768px) {
        color: var(--Grey-900, #212224);

        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 30px */
        white-space: nowrap;
    }
`;

export const Btn = styled.button`
    display: flex;
    width: 384px;
    padding: 17px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border: none;
    border-radius: 8px;
    background: var(--Orange-600, #ff7710);

    color: var(--White, #fff);
    text-align: center;

    /* Subtitle/20_Bold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    @media screen and (max-width: 768px) {
        width: 260px;
        padding: 12px 24px;
        gap: 8px;

        font-size: 16px;
    }
`;
