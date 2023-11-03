import { styled, css } from 'styled-components';


const responsiveWidth = css`
    @media screen and (max-width: 1280px) {
        width: 950px;
    }

    @media screen and (max-width: 768px) {
        width: 688px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    
    width: 1200px;
    ${responsiveWidth}

    .year {
        border-bottom: 1px solid #EAECEE;
        width: 100%;
        position: relative;
        margin-bottom: 39.5px;
        .first {
            color: var(--Grey-900, #212224);
            width: fit-content;
            margin: 0;
            border-bottom: 3px solid var(--Grey-900, #212224);
            text-align: left;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            padding: 5px 0;
            z-index: 20;
            position: absolute;
            bottom: 0;
        }
    }
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
    }
`;

export const PeopleBox = styled.div`
    width: 100%;
    margin-top: 24px;
    display: grid; 
    grid-gap: 24px; 
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    align-items: center; 
    justify-content: space-around;
`;

export const InfoBox = styled.div`
    display: flex;
    width: 100%;
    max-width: 384px;
    height: 84px;
    margin: 0;
    .image {
        background-color: grey;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        fill: var(--Grey-300, #EAECEE);
        object-fit: cover;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 13px;
    }

    .name, .from, .position {
        margin: 0;
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
        color: var(--Grey-800, #4D5359);
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
        background: var(--Orange-100, #FFF2E8);

        color: var(--Orange-600, #FF7710);
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
    margin: 32px 0;
`