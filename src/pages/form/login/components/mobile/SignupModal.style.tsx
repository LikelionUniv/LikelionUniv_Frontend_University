import styled from 'styled-components';
import Cancel from '../../../../../img/mypage/Cancel.svg';

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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
`;

export const ModalContainer = styled.div`
    z-index: 1002;
    width: 320px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.07);
`;

export const ModalHeader = styled.div`
    width: 93%;
    height: 56px;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    color: var(--Grey-900, #212224);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%; /* 30px */
`;

export const ModalClose = styled.div`
    background-image: url(${Cancel});
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    right: 26px;
`;

export const ModalContent = styled.div`
    width: 100%;
    height: 350px;
    border-radius: 0px 0px 20px 20px;
    border-top: 1px solid #dcdfe3;
    padding-bottom: 5px;

    display: flex;
    overflow: hidden;
`;

export const LocalSection = styled.div`
    width: 26%;
    height: 100%;
    border-radius: 0px 0px 0px 20px;

    overflow: auto;
    margin-left: 5px;
    margin-right: 5px;

    &::-webkit-scrollbar {
        width: 5px;
        overflow: hidden;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--Grey-500, #d1d4d8);
        border-radius: 5px;
    }
`;

export const UniversitySection = styled.div`
    width: 72%;
    height: 100%;

    margin-right: 5px;
    padding-left: 5px;
    border-left: 1px solid #dcdfe3;

    overflow: auto;

    &::-webkit-scrollbar {
        width: 5px;
        overflow: hidden;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--Grey-500, #d1d4d8);
        border-radius: 5px;
    }
`;

export const LocationItem = styled.div<{ active: boolean }>`
    width: 66px;
    height: 41px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;

    cursor: pointer;

    background-color: ${props => props.active && '#EAECEE'};
`;

export const UniversityItem = styled.div`
    width: 80%;
    height: 41px;
    padding: 0 15px;
    margin-left: 5px;
    display: inline-flex;
    align-items: center;

    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;

    cursor: pointer;

    &:active {
        background-color: #eaecee;
    }
`;
