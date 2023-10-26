import styled from 'styled-components';

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
`;

export const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin-bottom: 165px;

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
                font-size: 3vw;
                padding-bottom: 6%;
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
            width: calc(100vw / 3) !important;
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
            @media (max-width: 768px) {
                padding: 20px;
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
                    font-size: 2.8vw;
                }
            }
            .gen {
                font-size: 20px;
                font-weight: 400;
                @media (max-width: 1280px) {
                    font-size: 1.6vw;
                }
                @media (max-width: 768px) {
                    font-size: 2.2vw;
                }
            }
        }
    }
`;
