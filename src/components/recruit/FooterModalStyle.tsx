import { styled } from 'styled-components';
import modalring from '../../img/recruit/modalring.svg';
export const ModalContent = styled.div`
    & > img {
        @media (max-width: 768px) {
            width: calc(100%);
        }
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ModalTitle = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 20px;
    font-weight: 700;
    line-height: 150%; /* 30px */
    width: 100%;
    text-align: center;
`;

export const ModalCloseButton = styled.div<{ close?: string }>`
    width: 24px;
    height: 24px;
    background: ${props => (props.close ? `url(${props.close})` : '')};
    cursor: pointer;
`;

export const ModalBody = styled.div`
    margin: 40px;
    height: 100%;
    @media (max-width: 768px) {
        margin: 25px;
    }

    @media (max-width: 480px) {
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* width: calc(100% - 80px); */
        /* margin : 5px; */
    }
`;

export const ModalText = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const ModalGraphic = styled.div`
    width: 144px;
    height: 144px;
    flex-shrink: 0;
    background: url(${modalring});

    @media (max-width: 480px) {
        width: 100px;
        height: 100px;
        background-position: center;
        background-size: contain;
    }
`;

export const Text = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 28px;
    font-weight: 700;
    line-height: 140%; /* 39.2px */

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 22px;
    }

    :nth-child(2) {
        margin-top: 24px;
        color: var(--Grey-700, #868c94);
        font-size: 16px;
        font-weight: 500;
        line-height: 150%; /* 24px */

        @media (max-width: 768px) {
            font-size: 16px;
            margin-top: 12px;
        }
        @media (max-width: 480px) {
            font-size: 13px;
            margin-top: 8px;
        }
    }
`;

export const InputWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 40px;

    @media (max-width: 768px) {
        width: calc(100%);
        margin-top: 20px;
        gap: 20px;
    }
`;

export const ModalInput = styled.div``;

export const InputLabel = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 20px;
    font-weight: 700;
    line-height: 150%; /* 30px */
`;

export const Input = styled.input`
    width: 608px;
    height: 48px;
    flex-shrink: 0;
    margin-top: 8px;
    padding: 0 12px;

    border-radius: 6px;
    border: 1px solid var(--Grey-400, #dcdfe3);
    background: var(--White, #fff);

    font-size: 16px;
    font-weight: 500;
    line-height: 150%; /* 24px */
    outline: none;

    @media (max-width: 768px) {
        width: calc(90%);
    }
`;

export const InputBtn = styled.div`
    display: flex;
    justify-content: center;
    width: 384px;
    margin: 40px auto 0;
    padding: 17px 32px;

    border-radius: 8px;
    background: var(--Orange-600, #ff7710);
    color: var(--White, #fff);

    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    &:hover {
        background: var(--Grey-900, #212224);
    }

    @media (max-width: 768px) {
        width: calc(100% - 80px);
        margin: 20px auto 0;
        padding: 8px 25px;
    }
`;
