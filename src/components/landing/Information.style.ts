import styled from 'styled-components';
import { TrackBoxProps } from './InfoTrack';
import { BoxProps } from './InfoActivity';

export const Outer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f4f6;
`;

export const Wrapper = styled.div`
    width: calc(100% - 80px);
    padding: 160px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 1280px) {
        height: auto;
        padding: 140px 0;
    }
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column-reverse;
        padding: 80px 0;
    }

    .container {
        @media (max-width: 768px) {
            width: calc(100% - 40px) !important;
            max-width: 520px;
            margin-left: 0;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
    color: #212224;
    font-family: Pretendard;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 48px;
    height: 48px;
    &.br {
        display: flex;
        align-items: center;
        span {
            display: flex;
            align-items: center;
            svg {
                margin: 0 10px;
            }
        }
    }
    @media (max-width: 1280px) {
        font-size: 3.6vw;
        height: 3.6vw;
        &.br {
            span {
                height: 3.6vw;
                display: flex;
                align-items: center;
            }
        }
    }
    @media (max-width: 768px) {
        font-size: 28px;
        height: 30px;
        white-space: initial;
        word-break: break-all;
        &.br {
            span {
                height: 30px;
                display: flex;
                align-items: center;
                white-space: nowrap;
            }
        }
    }
    @media (max-width: 480px) {
        &.br {
            height: auto;
            flex-direction: column;
            align-items: flex-start;
            white-space: nowrap;
            span {
                height: 30px;
                display: flex;
                align-items: center;
                margin-bottom: 4px;
            }
            .right {
                margin-left: 0;
            }
        }
    }

    svg {
        flex-shrink: 0;
        margin: 0 8px;
        height: 48px;
        @media (max-width: 1280px) {
            height: 100%;
            width: auto;
            margin: 0 1%;
        }
        @media (max-width: 768px) {
            margin: 0 5px;
        }
    }
`;

export const SubText = styled.div`
    white-space: nowrap;
    color: #212224;
    font-family: Pretendard;
    font-weight: 600;
    font-size: 20px;
    margin: 24px 0 40px 0;
    @media (max-width: 768px) {
        font-size: 16px;
        white-space: initial;
        word-break: keep-all;
        line-height: 150%;
        margin: 4% 0 8% 0;
    }
`;

export const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin-bottom: 165px;
    @media (max-width: 768px) {
        flex-direction: column;
    }

    .number-rect {
        width: 100%;
        margin-top: 5%;
        .subtitle {
            width: 100%;
            color: #212224;
            font-family: Pretendard;
            font-weight: 700;
            font-size: 24px;
            padding-bottom: 10px;
            border-bottom: 2px solid #212224;
            @media (max-width: 1280px) {
                font-size: 2vw;
            }
            @media (max-width: 768px) {
                font-size: 20px;
            }
        }
        .number {
            margin-top: 16px;
            display: flex;
            justify-content: center;
            color: #212224;
            font-family: Pretendard;
            font-weight: 700;
            font-size: 72px;
            sup {
                font-size: 28px;
                line-height: 200%;
                margin-left: 5px;
            }
            @media (max-width: 1280px) {
                font-size: 5.5vw;
                sup {
                    font-size: 2vw;
                }
            }
            @media (max-width: 768px) {
                font-size: 32px;
                sup {
                    font-size: 14px;
                }
            }
        }
    }
`;

export const SwiperWrapper = styled.div`
    width: 100%;
    overflow-x: hidden;
    padding-bottom: 165px;

    .swiper-container {
        width: 984px !important;
        @media (max-width: 1280px) {
            width: calc((100vw - 36px) / 3 * 2 + 20px) !important;
        }
        @media (max-width: 768px) {
            width: calc(100vw / 3 * 2 + 12px) !important;
        }
        display: flex;
        overflow-x: visible;
        margin: 0 auto;
    }
    .swiper-wrapper {
        display: flex;
    }
    .swiper-slide {
        width: 480px !important;
        @media (max-width: 1280px) {
            width: calc((100vw - 36px) / 3) !important;
        }
        @media (max-width: 768px) {
            width: 259px !important;
        }
        a {
            text-decoration: none;
        }
        .rect {
            width: 100%;
            aspect-ratio: 48 / 20;
            background-color: #fff;
            border-radius: 8px;
            display: flex;
            align-items: center;
        }
        .logo-rect {
            margin: 24px;
            border-radius: 12px;
            width: 31.25%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            @media (max-width: 768px) {
                width: 25%;
                margin: 20px;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 12px;
            }
        }
        .text-section {
            font-family: Pretendard;
            color: #212224;
            .name {
                color: #212224;
                font-size: 28px;
                font-weight: 600;
                line-height: 200%;
                @media (max-width: 1280px) {
                    font-size: 2.2vw;
                }
                @media (max-width: 768px) {
                    font-size: 20px;
                }
            }
            .gen {
                font-size: 20px;
                font-weight: 400;
                @media (max-width: 1280px) {
                    font-size: 1.6vw;
                }
                @media (max-width: 768px) {
                    font-size: 15px;
                }
            }
        }
    }
`;

export const ActivityContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Box = styled.div<BoxProps>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    background: ${props => props.background || 'transparent'};
    border-radius: 8px;
    padding: 16px;

    @media screen and (max-width: 1280px) {
      height: 240px;
    }

    @media screen and (max-width: 768px) {
      height: 136px;
    }

    .hover-text {
        display: none;
    }

    .img-wrapper {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .img-hide {
        @media (max-width: 1280px) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        .name {
            width: 30%;
            color: #fff;
            font-family: Pretendard;
            font-size: 28px;
            font-weight: 700;
            word-break: keep-all;

            @media (max-width: 1280px) {
                width: 100%;
                font-family: Pretendard;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
            }
        }

        @media (max-width: 1280px) {
            min-width: 100px;
            height: 100%;
            flex-direction: column;
            align-items: center;
            & svg {
                width: 5vw;
                position: absolute;
                bottom: 0;
                left: 10px;
            }
        }
    }

    &:hover {
        background: ${props => props.hoverBackColor}, #212224;

        .hover-hide,
        .img-hide {
            opacity: 0;
            width: 0;
            height: 0;
            margin-top: 0;
        }
        .hover-text {
            display: block;
            width: 70%;
            color: #fff;
            font-family: Pretendard;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;

            @media screen and (max-width: 768px) {
              font-size: 14px;
            }

            @media screen and (max-width: 450px) {
              font-size: 12px;
            }
        }

        @media (max-width: 1280px) {
            justify-content: flex-start;
            .title {
                margin-bottom: 24px;
            }
            .hover-text {
                width: 100%;
            }
        }
    }
`;

export const TrackWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;



export const TrackBox = styled.div<TrackBoxProps>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    &:hover {
        background-color: ${props => props.hoverColor};
    }
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;

    @media screen and (max-width: 1280px) {
      height: 312px;
    }

    @media screen and (max-width: 768px) {
      height: 168px;
    }

    .hover-text {
      display: none;
    }

    .img-wrapper {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .img-hide {
        border-radius: 8px;
        @media (max-width: 1280px) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @media (max-width: 360px) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
       

    }

    .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        .name {
            width: 30%;
            color: #fff;
            font-family: Pretendard;
            font-size: 28px;
            font-weight: 700;
            word-break: keep-all;

            @media (max-width: 1280px) {
                width: 100%;
                font-family: Pretendard;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
            }
            
        }

        @media (max-width: 1280px) {
            min-width: 100px;
            height: 100%;
            flex-direction: column;
            align-items: center;

            & svg {
                width: 5vw;
                position: absolute;
                bottom: 0;
                left: 10px;
            }
        }
    }

    &:hover {
        .title {
            word-break: keep-all;
        }

        .name {
            color: ${props => props.hoverColor};
            @media (max-width: 768px) {
                font-family: Pretendard;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%
            }            
           
            @media (max-width: 360px) {
                color: var(--White, #FFF);

                /* Body/12_Medium */
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%; /* 18px */
            }
            
        }
        .hover-text {
            display: block;
            width: 100%;
            color: #fff;
            font-family: Pretendard;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;

            @media (max-width: 768px) {
                color: var(--White, #FFF);

                /* Body/16_Medium_160 */
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 160%; /* 25.6px */
            }
            @media (max-width: 450px) {
                color: var(--White, #FFF);

                    /* Body/12_Medium */
                    font-family: Pretendard;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 150%; /* 18px */
            }
        }
  
        .img-hide {
          display: none;
        }
    }
`;

export const PlanBox = styled.div`
    height: 195px;

    @media (max-width: 500px) {
        height: 130px;
    }

    .img {
        width: 100%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    .week {
        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        margin: 23.5px 0 7.5px 0;
        @media (max-width: 768px) {
            font-size: 3vw;
            margin: 15px 0 5px 0;
        }
    }
    .content {
        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
        @media (max-width: 768px) {
            font-size: 3vw;
        }
    }
`;

export const SupportBox = styled.div`
    width: 100%;
    gap: 24px;
    display: flex;
    margin-bottom: 24px;

    .wrapper {
        width: 100%;
        background: var(--White, #fff);
        border-radius: 8px;
        padding: 28px 78px;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo {
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (max-width: 1280px) {
                height: 35px;
            }
        }

        @media (max-width: 1280px) {
            padding: 15px 35px;
        }
    }
`;