import styled from 'styled-components';
import { TransLeftOn, TransRightOn } from '../../../../img/project/detail';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    box-sizing: border-box;
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;

    width: 100%;
    height: 100%;
    padding: 0 120px;

    box-sizing: border-box;

    @media screen and (max-width: 1000px) {
        padding: 0;
    }
`;

export const ModalImage = styled.img`
    position: relative;
    max-width: 1920px;
    max-height: 1080px;

    height: calc(100% - 170px);

    width: inherit;
    box-sizing: border-box;

    aspect-ratio: 16 / 9;
    object-fit: cover;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: auto;
    }
`;

export const ModalIndex = styled.b<{ show: boolean }>`
    display: ${props => (props.show ? 'block' : 'none')};
    position: relative;
    left: -50%;
    transform: translateX(-50%);
    line-height: 150%;
    color: white;
    margin-top: 24px;

    @media screen and (min-width: 768px) and (max-width: 1000px) {
        left: 0;
    }
`;

export const CloseIcon = styled.img`
    position: relative;
    margin-bottom: 24px;
    width: 56px;
    height: 56px;

    @media screen and (max-width: 1000px) {
        right: 2rem;
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const ModalArrowLeft = styled.img`
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    z-index: 10001;

    @media (max-width: 768px) {
        left: 0;
        top: calc(50% - 20px);
        transform: translateY(-50%);
        src: ${TransLeftOn};
    }

    @media screen and (min-width: 768px) and (max-width: 1000px) {
        display: none;
    }
`;

export const ModalArrowRight = styled.img`
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    z-index: 10001;

    @media (max-width: 768px) {
        right: 0;
        top: calc(50% - 20px);
        transform: translateY(-50%);
        src: ${TransRightOn};
    }

    @media screen and (min-width: 768px) and (max-width: 1000px) {
        display: none;
    }
`;

export const Bar = styled.div<{ show: boolean }>`
    display: ${props => (props.show ? 'flex' : 'none')};
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ModalArrowLeftTablet = styled.img`
    width: 3rem;
    height: 3rem;
    margin-top: 24px;
    margin-left: 32px;
    cursor: pointer;
    z-index: 10001;

    @media (max-width: 768px) {
        left: 0;
        top: 50%;
        src: ${TransLeftOn};
    }
`;

export const ModalArrowRightTablet = styled.img`
    width: 3rem;
    height: 3rem;
    margin-top: 24px;
    margin-right: 32px;
    cursor: pointer;
    z-index: 10001;

    @media (max-width: 768px) {
        left: 0;
        top: 50%;
        src: ${TransLeftOn};
    }
`;
