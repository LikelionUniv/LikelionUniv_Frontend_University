import styled from 'styled-components';

export const ProjectDetailRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: var(--white);
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0 auto;
    padding: 40px;
    box-sizing: border-box;

    @media screen and (max-width: 767px) {
        padding: 20px;
    }
`;

export const B = styled.b`
    position: relative;
    line-height: 150%;
`;
export const P = styled.p`
    margin: 0;
`;
