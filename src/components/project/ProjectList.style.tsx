import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 700px;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }

    @media screen and (min-width: 768px) {
        padding: 0 40px;
    }
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 100px;
`;
