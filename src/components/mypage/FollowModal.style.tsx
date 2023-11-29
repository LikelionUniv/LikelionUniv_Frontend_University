import styled from 'styled-components';
import Cancel from '../../img/mypage/Cancel.svg';


export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBackground = styled.div`
    position: fixed;
    top : 0;
    left : 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

export const ModalContainer = styled.div`
    z-index : 1000;
    width : 464px;
    height : 420px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    border-radius : 20px;
    background-color : #fff;
    box-shadow : 0px 12px 20px 0px rgba(0, 0, 0, 0.07);
    

    @media (max-width: 767px) {
        width : 320px;
        height : 400px;
    } 
`;

export const ModalHeader = styled.div`
    width: 93%;
    height: 56px;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid #dcdfe3; */
    position: relative;

    color: var(--Grey-900, #212224);
    font-size: 20px;
    font-weight: 700;
    line-height: 150%; /* 30px */
`;

export const ModlalClose = styled.div`
        background-image: url(${Cancel});
        width: 24px;
        height: 24px;
        cursor: pointer;
        position: absolute;
        right: 16px;
        justify-self: flex-end;
`;

export const ModalContent = styled.div`
    width: 98%;
    height: 338px;
    border-radius: 0px 0px 20px 20px;
    overflow: auto;
    padding: 0 4px;
    border-top: 1px solid #dcdfe3;
    &::-webkit-scrollbar {
        width: 5px;
        overflow : hidden;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--Grey-500, #d1d4d8);
        border-radius: 5px;
    }

    @media (max-width: 767px) {
        width: 97%;
        height: 320px;
    } 
`;

