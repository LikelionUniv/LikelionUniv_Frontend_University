import styled from 'styled-components';

export const Wrapper = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px){ㄴ
        padding: 0 40px;
    }

    @media screen and (max-width: 768px){
        padding: 0 20px

    }
`;
