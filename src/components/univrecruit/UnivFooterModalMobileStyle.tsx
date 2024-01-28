import { styled } from 'styled-components';

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -10px;
`;

export const ModalTitle = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%; /* 30px */
`;

export const ModalCloseButton = styled.div<{ close?: string }>`
    width: 24px;
    height: 24px;
    position: relative;
    top: -13px;
    left: 123px;
    background: ${props => (props.close ? `url(${props.close})` : '')};
    cursor: pointer;
`;

export const ModalBody = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

export const ModalText = styled.div`
    border-top: 1px solid #dcdfe3;
    display: flex;
    align-items: center;
`;

export const Text = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 20px;
    font-weight: 700;
    line-height: 140%; /* 39.2px */
    margin-top: 20px;

    :nth-child(2) {
        margin-top: 8px;
        color: var(--Grey-700, #868c94);
        font-size: 12px;
        font-weight: 500;
        line-height: 150%; /* 24px */
    }

    :nth-child(3) {
        margin-top: 8px;
        color: var(--Grey-700, #868c94);
        font-size: 12px;
        font-weight: 500;
        line-height: 150%; /* 24px */
    }
`;

export const InputWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-top: 24px;
    box-sizing: border-box;
`;

export const ModalInput = styled.div``;

export const InputLabel = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%; /* 30px */
`;

export const Input = styled.input`
    width: 100%;
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
`;

export const InputBtn = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 12px 12px;
    margin-top: 32px;
    box-sizing: border-box;

    border-radius: 8px;
    background: var(--Orange-600, #ff7710);
    color: var(--White, #fff);

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    &:hover {
        background: var(--Grey-900, #212224);
    }
`;
