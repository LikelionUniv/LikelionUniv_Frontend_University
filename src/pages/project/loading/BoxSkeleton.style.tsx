import styled from 'styled-components';

export const BoxContainer = styled.div`
    display: grid;

    width: 100%;
    max-width: 1200px;
    margin-top: 64px;

    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;

    grid-row-gap: 40px;
    grid-column-gap: 24px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        margin-bottom: 64px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 80px;
    }

    @media screen and (min-width: 1025px) {
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 68px;
    }
`;

export const Box = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    gap: 16px 0;
    box-sizing: border-box;
`;

export const SubBox = styled.div<{ width: number }>`
    position: relative;
    width: 100%;
    height: 216px;
    box-sizing: border-box;
    background: var(--Grey-300, #eaecee);

    @media screen and (max-width: 768px) {
        height: calc(${props => props.width} * 0.53px);
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        height: calc(${props => props.width} * 0.2529px);
    }

    @media screen and (min-width: 1025px) and (max-width: 1280px) {
        height: calc(${props => props.width} * 0.16875px);
    }
`;

export const SmallBox1 = styled.div`
    width: 85%;
    height: 36px;
    margin-top: 16px;
    background: var(--Grey-300, #eaecee);
`;

export const SmallBox2 = styled.div`
    width: 100%;
    height: 20px;
    margin-top: 6px;
    background: var(--Grey-300, #eaecee);
`;

export const SmallBox3 = styled.div`
    width: 48%;
    height: 20px;
    margin-top: 6px;
    background: var(--Grey-300, #eaecee);
`;
