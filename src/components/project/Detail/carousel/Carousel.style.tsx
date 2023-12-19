import styled from 'styled-components';
import { TransLeftOn, TransRightOn } from '../../../../img/project/detail';

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const Image = styled.div<{ src: string }>`
    position: relative;
    display: block;
    width: 100%;
    height: 690px;

    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
`;

//반투명 화살표 아이콘
export const TransLeft = styled.img`
    position: absolute;
    top: 50%;
    left: 0%;
    z-index: 3;
    transform: translateY(-50%);
    display: none;
    @media (max-width: 767px) {
        display: block;
    }
`;

export const TransRight = styled.img`
    position: absolute;
    top: 50%;
    right: 15%;
    z-index: 3;
    transform: translateY(-50%);
    display: none;
    @media (max-width: 767px) {
        display: block;
    }
`;

//이미지 위에 위치한, 모달창 띄우는 버튼
export const ProjectModalButton = styled.img`
    position: absolute;
    bottom: 12px;
    right: 12px;

    border-radius: var(--br-5xs);
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    z-index: 2;
`;

//이미지 모달
export const FullScreenModal = styled.div`
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalImage = styled.img`
    width: 70%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    @media (max-width: 1000px) {
        width: 100%;
    }
    @media (max-width: 572px) {
        width: 100%;
    }
`;
export const ModalIndex = styled.b`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    line-height: 150%;
    color: white;
    padding: 0.5rem;

    @media (max-width: 1180px) {
        bottom: 15%;
    }
    @media (max-width: 1000px) {
        bottom: 5%;
    }
    @media (max-width: 768px) {
        bottom: 16%;
    }
    @media (max-width: 660px) {
        bottom: 20%;
    }
    @media (max-width: 520px) {
        bottom: 25%;
    }
`;

export const CloseIcon = styled.img`
    position: absolute;
    top: 3rem;
    left: 82%;
    width: 2.25rem;
    height: 2.25rem;
    @media (max-width: 1180px) {
        top: 6.5rem;
        left: 81%;
    }
    @media (max-width: 1080px) {
        top: 7.5rem;
        left: 81%;
    }
    @media (max-width: 1000px) {
        top: 3rem;
        left: 94%;
    }
    @media (max-width: 900px) {
        top: 5rem;
        left: 94%;
    }
    @media (max-width: 800px) {
        top: 6.5rem;
        left: 94%;
    }
    @media (max-width: 768px) {
        display: none;
    }
    @media (max-width: 560px) {
        display: none;
    }
`;

export const ModalArrowLeft = styled.img`
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    z-index: 10001;

    @media (max-width: 1000px) {
        left: 2%;
        top: 92%;
    }
    @media (max-width: 768px) {
        left: 2%;
        top: 50%;
        src: ${TransLeftOn};
    }
`;

export const ModalArrowRight = styled.img`
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    z-index: 10001;

    @media (max-width: 1000px) {
        right: 2%;
        top: 92%;
    }
    @media (max-width: 768px) {
        right: 2%;
        top: 50%;
        src: ${TransRightOn};
    }
`;
