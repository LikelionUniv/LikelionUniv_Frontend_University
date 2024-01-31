import styled, { keyframes } from 'styled-components';
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
`;

export const ModalContainer = styled.div`
    z-index: 1002;
    width: 464px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.07);

    @media (max-width: 767px) {
        width: 320px;
        height: 400px;
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

    @media (max-width: 767px) {
        height: 48px;
    }
`;

export const ModlalClose = styled.div`
    background-image: url(${Cancel});
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    right: 26px;
`;

export const ModalContent = styled.div`
    width: 98%;
    height: 348px;
    margin-bottom: 8px;
    border-radius: 0px 0px 20px 20px;
    overflow: auto;
    padding: 0 4px;
    border-top: 1px solid #dcdfe3;
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

    @media (max-width: 767px) {
        width: 97%;
        height: 320px;
    }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loading = styled.div`
    border: 3px solid #f3f3f3; // 빛난 경계
    border-top: 3px solid #ff7710; // 파란색 경계
    border-radius: 50%; // 원으로 만들기
    width: 10px;
    height: 10px;
    animation: ${spin} 2s linear infinite; // 애니메이션 적용
    margin-left: 50%;
`;

export const Target = styled.div`
    height: 1px;
`;
