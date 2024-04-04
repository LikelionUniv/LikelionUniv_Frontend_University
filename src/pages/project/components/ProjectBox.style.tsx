import styled from 'styled-components';

export const Container = styled.div`
    display: grid;

    width: 100%;
    max-width: 1200px;
    min-height: 700px;
    margin-top: 64px;

    align-items: center;
    align-content: start;
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

export const Nothing = styled.div`
    width: 100%;
    height: 700px;
`;
