import styled from 'styled-components';

//이미지 스와이퍼 아이콘
export const Swiper = styled.div`
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translate(-50%, 0%);

    width: 90px;
    height: 36px;

    padding: 8px;
    z-index: 3;
    box-sizing: border-box;

    border-radius: 8px;
    background: var(--Grey-900, #212224);
`;

export const IconLeft = styled.img``;

export const IconRight = styled.img`
    position: absolute;
    top: 0.5rem;
    left: 3.88rem;
    width: 1.25rem;
    height: 1.25rem;
`;

export const SwiperText = styled.b`
    position: absolute;
    top: 0.56rem;
    left: 2.25rem;
    color: var(--White, #fff);

    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 18px */
`;
