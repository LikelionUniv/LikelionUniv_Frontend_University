import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../img/recruit/close.svg';

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
    width: 320px;
    height: 228px;
    flex-shrink: 0;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 20px;
    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.07);
    box-sizing: border-box;

    @media screen and (max-width: 360px) {
        width: 320px;
        height: 208px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    padding-top: 12px;
`;

export const HeaderName = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%; /* 30px */
    margin-left: 131px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
    margin: 3px 5px 0 91px;
    cursor: pointer;
`;

export const ModalCloseButton = styled.div<{ close?: string }>`
    width: 24px;
    height: 24px;
    background: ${props => (props.close ? `url(${props.close})` : '')};
    cursor: pointer;
`;

export const NdropdownDiv = styled.div`
    padding-left: 30px;
    display: flex;
`;
