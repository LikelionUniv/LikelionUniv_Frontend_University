import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const Image = styled.div<{ src: string; width: number }>`
    position: relative;
    display: block;
    width: 100%;
    max-height: 690px;
    height: ${props => (props.width * 9) / 16}px;

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
    right: 0%;
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
