import styled from 'styled-components';

export const DivImg = styled.div`
    justify-content: space-between;
    display: flex;
    border-radius: 0.3rem;
    border: 0.01rem solid #efeff1;
    display: flex;
    padding: 0.1rem;
    background-color: #efeff1;
    align-items: center;
    font-weight: 400;
    button {
        margin-left: 0.05rem;
        color: gray;
        background-color: white;
        border-radius: 0.5rem;
        height: 0.3rem;
    }
`;

export const NotDownload = styled.div`
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 0.24rem;
`;

export const TableDiv = styled.div`
    width: 11.84rem;
    /* height: 8rem; */
    font-size: 0.25rem;
    margin-left: 0.12rem;
    border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    padding: 0.18rem;
    display: flex;
    input {
        position: relative;
        text-align: right;
        opacity: 0;
        z-index: 2;
        cursor: pointer;
        height: 0.5rem;
        max-width: 1.28rem;
    }
`;

export const ChangeButton = styled.button`
    background-color: ${({ theme }) => theme.palette.green};
    color: white;
    font-size: 0.24rem;
    width: 1.28rem;
    height: 0.52rem;
    cursor: pointer;
    margin-left: 10.25rem;
    /* margin-bottom: -0.1rem; */
    bottom: 24%;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`;
