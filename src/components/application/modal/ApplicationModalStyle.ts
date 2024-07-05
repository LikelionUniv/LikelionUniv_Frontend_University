import styled from 'styled-components';
import modalring from '../../../img/recruit/modalring.svg';
import { ReactComponent as CloseIcon } from '../../../img/recruit/close.svg';
import modalringIcon from '../../../img/application/modarringMobile.svg';

export const Overlay = styled.div`
    background-color: rgba(152, 146, 146, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
`;

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 688px;
    height: 512px;
    flex-shrink: 0;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 20px;
    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.07);
    box-sizing: border-box;

    @media screen and (max-width: 767px) {
        width: 320px;
        height: 402px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 13px;
    @media screen and (max-width: 767px) {
        padding-top: 12px;
    }
`;

export const HeaderName = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 20px;
    font-weight: 700;
    line-height: 150%; /* 30px */
    @media screen and (max-width: 767px) {
        font-size: 14px;
        margin-top: 2px;
    }
`;

export const StyledCloseIcon = styled(CloseIcon)`
    margin: 3px 32px 0 183px;
    cursor: pointer;
    @media screen and (max-width: 767px) {
        margin: 0px 20px 0 43px;
    }
`;

export const ModalTitle = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 28px;
    font-weight: 700;
    line-height: 140%;

    margin: 40px 145px 0 145px;
    @media screen and (max-width: 767px) {
        font-size: 18px;
        margin: 38px 32px 0 32px;
    }
`;

export const ModalText = styled.div`
    font-size: 20px;
    align-items: center;
    text-align: center;
    line-height: 150%;
    font-weight: 600;
    margin: 8px 110px 0 111px;
    @media screen and (max-width: 767px) {
        font-size: 16px;
        margin: 8px 57px 0 57px;
    }
`;

export const ModalCloseButton = styled.div<{ close?: string }>`
    width: 24px;
    height: 24px;
    background: ${props => (props.close ? `url(${props.close})` : '')};
    cursor: pointer;
`;

export const ModalGraphic = styled.div`
    width: 144px;
    height: 144px;
    flex-shrink: 0;
    background: url(${modalring});

    margin: 40px 272px 59px 272px;

    @media screen and (max-width: 767px) {
        width: 124px;
        height: 124px;
        background: url(${modalringIcon});
        margin: 24px 98px 23px 98px;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 0 20px;
    @media screen and (max-width: 767px) {
        gap: 0 8px;
    }
`;

export const Button = styled.button`
    width: 240px;
    height: 56px;

    border: none;
    border-radius: 8px;

    background: var(--Orange-600, #ff7710);
    color: var(--White, #fff);

    font-size: 20px;
    font-weight: 700;

    @media screen and (max-width: 767px) {
        width: 138px;
        font-size: 16px;
        height: 48px;
    }
`;

export const DeleteButton = styled(Button)`
    background: var(--Grey-300, #eaecee);
    color: var(--Grey-800, #4d5359);
`;
