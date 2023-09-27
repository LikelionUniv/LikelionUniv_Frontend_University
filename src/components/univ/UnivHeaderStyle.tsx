import { styled, css } from 'styled-components';

const responsiveWidth = css`
    @media screen and (max-width: 1280px) {
        width: 950px;
    }

    @media screen and (max-width: 768px) {
        width: 688px;
    }
`;

export const TopDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 100px;
    background: var(--Grey-200, #f2f4f6);
`;

export const T1 = styled.div`
    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 24px;
    width: 1200px;

    ${responsiveWidth}
`;

export const T2 = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 60px */
`;

export const Num = styled.div`
    width: 120px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--Grey-900, #212224);
    color: var(--Orange-600, #ff7710);
    text-align: center;

    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 60px */
`;

export const T3 = styled.div`
    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */

    margin-top: 82px;
`;
