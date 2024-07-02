import { styled, css } from 'styled-components';

const responsiveWidth = css`
    @media screen and (max-width: 1280px) {
        max-width: 950px;
    }

    @media screen and (max-width: 768px) {
        max-width: 680px;
        padding: 5%;
    }

    @media screen and (max-width: 480px) {
        //max-width: 360px;
        padding: 5%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    color: var(--Grey-900, #212224);
    font-family: Pretendard;

    width: 100%;
    max-width: 1200px;
    padding: 1rem;

    ${responsiveWidth}
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 200px;
    flex-direction: column;
    .part {
        margin: 0 0 8px 0;
        color: var(--Grey-900, #212224);
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
        @media screen and (max-width: 500px) {
            font-size: 22px;
        }
    }
`;

export const PeopleBox = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    align-items: center;
    justify-content: space-around;

    @media (max-width: 780px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: none;
    }

    @media (max-width: 530px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: none;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    width: 100%;
    max-width: 384px;
    height: 84px;
    margin: 20px 0;
    .image {
        background-color: transparent;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        fill: var(--Grey-300, #eaecee);
        object-fit: cover;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 13px;
    }

    .name,
    .from,
    .position {
        margin: 0;
    }
    .email {
        background-color: var(--Orange-600, #ff7710);
        display: flex;
        align-items: center;
        padding: 5px 10px;
        border-radius: 15px;
        margin-top: 10px;
        font-weight: 600;
        color: var(--Orange-100, #fff2e8);
        font-size: 12px;
        img {
            margin-right: 5px;
        }
    }

    .name {
        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }

    .from {
        color: var(--Grey-800, #4d5359);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        margin-bottom: 4px;
    }

    .position {
        display: inline-flex;
        padding: 4px 12px;
        align-items: center;
        gap: 10px;
        border-radius: 13px;
        background: var(--Orange-100, #fff2e8);

        color: var(--Orange-600, #ff7710);
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }
`;

export const Divider = styled.div`
    height: 1px;
    background-color: var(--Grey-900, #212224);
    width: 100%;
    margin: 70px 0;
`;
