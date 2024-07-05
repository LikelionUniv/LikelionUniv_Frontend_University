import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    background: linear-gradient(to bottom, #000000, #212224);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1920px;
    /* margin-top: 56px; */
    /* height: 5000px; // 임시로 세팅해놓은 값이기때문에 어느정도 완성되면 지워도 됩니다. */
    /* border: 1px solid black; */
`;
