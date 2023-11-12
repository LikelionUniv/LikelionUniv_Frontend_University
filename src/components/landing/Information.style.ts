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
            width: calc(100% - 80px) !important;
            margin-left: 0;
        }
        @media (max-width: 360px) {
            width: calc(100%-40px) !important;
            padding: 0px 20px;
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
    margin-bottom: 5px;
    font-size: 48px;
    height: 48px;
    @media (max-width: 1280px) {
        font-size: 3.6vw;
        height: 3.6vw;
    }
    @media (max-width: 768px) {
        font-size: 6vw;
        height: 6vw;
    }
    @media (max-width: 767px) {
        font-size: 5.5vw;
        height: 5.5vw;
        /* margin-bottom: 21px; */
    }
    @media (max-width: 360px) {
        font-size: 6vw;
        height: 6vw;
        /* margin-bottom: 24px; */
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
            margin: 0 1%;
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
    @media (max-width: 1280px) {
        font-size: 1.6vw;
    }
    @media (max-width: 768px) {
        font-size: 2.8vw;
        margin: 4% 0 8% 0;
    }
    @media (max-width: 767px) {
        font-size: 18px;
        font-weight: 500;
        line-height: 150%;
        white-space: normal;
        margin: 24px 0px;
    }
    @media (max-width: 360px) {
        font-size: 16px;
        font-weight: 500;
        line-height: 160%;
        white-space: normal;
        margin: 8px 0px 24px;
    }
`;

export const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin-bottom: 165px;
    @media (max-width: 767px) {
        flex-direction: column;
        margin-bottom: 20vw;
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
                font-size: 2.5vw;
                padding-bottom: 6%;
            }
            @media (max-width: 767px) {
                font-size: 20px;
                padding-bottom: 9px;
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
                font-size: 6.2vw;
                margin-top: 8%;
                sup {
                    font-size: 2.5vw;
                }
            }
            @media (max-width: 767px) {
                font-size: 5vw;
                margin-top: 9px;
                sup {
                    font-size: 2vw;
                }
            }
            @media (max-width: 360px) {
                font-size: 8.8vw;
                margin-top: 9px;
                sup {
                    font-size: 3.8vw;
                }
            }
        }
    }
`;

export const SwiperWrapper = styled.div`
    width: 100%;
    overflow-x: hidden;
    padding-bottom: 165px;
    @media (max-width: 767px) {
        padding-bottom: 120px;
    }
    @media (max-width: 360px) {
        padding-bottom: 80px;
    }

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
        @media (max-width: 767px) {
            width: calc(100vw / 2) !important;
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
            padding: 24px;
            width: 31.25%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            /* @media (max-width: 768px) {
                padding: 20px;
            } */
            @media (max-width: 360px) {
                padding: 12px;
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
                    font-size: 3.6vw;
                    font-weight: 700;
                    line-height: 150%;
                    margin-bottom: 8px;
                }
                @media (max-width: 360px) {
                    font-size: 5vw;
                    font-weight: 700;
                    line-height: 150%;
                    margin-bottom: 4px;
                }
            }
            .gen {
                font-size: 20px;
                font-weight: 400;
                @media (max-width: 1280px) {
                    font-size: 1.6vw;
                }
                @media (max-width: 767px) {
                    font-size: 2.5vw;
                }
                @media (max-width: 360px) {
                    font-size: 4vw;
                }
            }
        }
    }
`;

export const Box = styled.div<BoxProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: ${props => props.background || 'transparent'};
    border-radius: 8px;
    padding: 24px;

    @media (max-width: 1280px) {
        flex-direction: column;
    }

    .hover-text {
        opacity: 0;
        font-size: 0;
    }
    .img-hide {
        @media (max-width: 1280px) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin-top: 16px;
        }
    }

    .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .name {
            color: var(--Black, #000);
            font-family: Pretendard;
            font-size: 28px;
            font-weight: 700;

            @media (max-width: 1280px) {
                flex-direction: row;
                align-items: center;
                color: var(--Grey-900, #212224);
                font-family: Pretendard;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
            }
        }

        @media (max-width: 1280px) {
            flex-direction: row;
        }
    }

    &:hover {
        background: ${props => props.hoverBackColor}, #212224;

        .title {
            flex-direction: column;
            .name {
                color: #fff;
                margin-bottom: 16px;
            }
        }

        .hover-hide,
        .img-hide {
            opacity: 0;
            width: 0;
        }
        .hover-text {
            opacity: 100;
            color: var(--Grey-200, #f2f4f6);
            font-family: Pretendard;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
        }
    }
`;

export const TrackBox = styled.div<TrackBoxProps>`
    width: 100%;
    height: 100%;
    height: 400px;
    max-width: 384px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #212224;
    border-radius: 8px;

    @media (max-width: 1280px) {
        height: 80%;
    }
    @media (max-width: 768px) {
        height: 240px;
    }

    .hover-text {
        opacity: 0;
        font-size: 0;
    }

    .img-hide {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 24px 24px 16px 24px;
        .name {
            color: #fff;
            font-family: Pretendard;
            font-size: 28px;
            font-weight: 700;
            @media (max-width: 768px) {
                font-size: 20px;
            }
        }
    }

    &:hover {
        .title {
            margin: 40px 0 16px 40px;
            @media (max-width: 768px) {
                margin: 24px 0 6px 24px;
            }
        }

        .name {
            color: ${props => props.hoverColor};
            @media (max-width: 768px) {
                font-size: 15px;
            }
        }
        .hover-hide {
            opacity: 0;
            width: 0;
        }
        .hover-text {
            opacity: 100;
            color: var(--Grey-200, #f2f4f6);
            font-family: Pretendard;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin: 0 40px;
            line-height: 150%;
            @media (max-width: 768px) {
                font-size: 12px;
                margin: 0 24px;
            }
        }
        .img-hide {
            opacity: 0;
        }
    }
`;

export const PlanBox = styled.div`
    height: 195px;

    @media (max-width: 767px) {
        height: 100px;
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
        @media (max-width: 767px) {
            font-size: 20px;
            margin: 24px 0px 8px 0;
        }
        @media (max-width: 360px) {
            font-size: 16px;
            margin: 8px 0 4px 0;
        }
    }
    .content {
        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        @media (max-width: 768px) {
            font-size: 18px;
        }
        @media (max-width: 360px) {
            font-size: 4.5vw;
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
