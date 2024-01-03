import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Recruit = styled.div`
    width: 100%;
    height: 595px;
    @media (max-width: 768px) {
        height: auto;
        padding: 60px 0;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212224;

    .container {
        position: relative;
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1280px) {
            width: calc(100% - 60px);
        }
        @media (max-width: 768px) {
            flex-direction: column-reverse;
        }

        .left {
            width: 40%;
            @media (max-width: 1090px) {
                width: 356px;
            }
            @media (max-width: 768px) {
                width: calc(100% - 80px);
            }
            @media (max-width: 480px) {
                width: 100%;
            }

            .title {
                display: flex;
                align-items: center;
                color: #fff;
                font-family: Pretendard;
                font-size: 48px;
                font-weight: 700;
                @media (max-width: 1280px) {
                    font-size: 3.5vw;
                }
                @media (max-width: 768px) {
                    margin-top: 30px;
                    font-size: 28px;
                }
            }

            .text {
                color: #fff;
                font-family: Pretendard;
                font-size: 20px;
                font-weight: 500;
                line-height: 150%;
                margin: 20px 0 15% 0;
                word-break: keep-all;
                @media (max-width: 1280px) {
                    font-size: 1.6vw;
                    margin-bottom: 10%;
                }
                @media (max-width: 768px) {
                    font-size: 16px;
                    margin-bottom: 30px;
                }
            }

            .btn {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 32px;
                background-color: #fff;
                border-radius: 8px;
                background-color: #ff7710;
                color: #ffffff;
                font-family: Pretendard;
                font-size: 20px;
                font-weight: 600;
                word-break: keep-all;
                text-decoration: none;
                border: none;
                outline: none;
                cursor: pointer;
                &:hover {
                    background-color: #eb6500;
                }
                @media (max-width: 957px) {
                    font-size: 2vw;
                }
                @media (max-width: 768px) {
                    font-size: 16px;
                }

                svg {
                    height: 30px;
                    @media (max-width: 957px) {
                        height: 3vw;
                    }
                    @media (max-width: 720px) {
                        height: 20px;
                    }
                }
            }
        }

        .img-rect {
            height: 320px;
            margin-left: 30px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            background-color: #fff;
            @media (max-width: 1090px) {
                width: 57%;
                height: auto;
            }
            @media (max-width: 957px) {
                width: auto;
                height: 272px;
            }
            @media (max-width: 768px) {
                width: calc(100% - 80px);
                height: auto;
                margin-left: 0;
                margin-top: 20px;
            }
            @media (max-width: 480px) {
                width: 100%;
            }
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media (max-width: 957px) {
                width: 100%;
                height: auto;
            }
        }
    }
`;

export const Notification = styled.div`
    width: 100%;
    padding: 60px 0;
    background-color: #212224;
    display: flex;
    justify-content: center;
    .container {
        position: relative;
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1280px) {
            width: calc(100% - 60px);
        }
        @media (max-width: 768px) {
            flex-direction: column;
            width: calc(100% - 60px);
            .left {
                width: calc(100% - 80px);
            }
        }
        @media (max-width: 480px) {
            .left {
                width: 100%;
            }
        }
        .left {
            flex-shrink: 0;

            @media screen and (min-width: 768px) {
                width: 50%;
            }
        }
        .title {
            height: 60px;
            display: flex;
            align-items: center;
            position: relative;
            color: #fff;
            font-family: Pretendard;
            font-size: 40px;
            font-weight: 700;
            white-space: nowrap;
            @media (max-width: 1280px) {
                height: 5vw;
                font-size: 3.2vw;
            }
            @media (max-width: 768px) {
                display: block;
                height: auto;
                line-height: 130%;
                font-size: 28px;
                white-space: initial;
                word-break: keep-all;
                align-items: flex-start;
            }

            img {
                width: 40px;
                margin-right: 2%;
                @media (max-width: 957px) {
                    width: 4vw;
                    margin-right: 7px;
                }
                @media (max-width: 768px) {
                    width: 26px;
                    height: 26px;
                    margin-top: 5px;
                    float: left;
                    shape-outside: margin-box;
                    vertical-align: bottom;
                }
            }
        }

        .text {
            color: #fff;
            font-family: Pretendard;
            font-size: 20px;
            font-weight: 500;
            line-height: 150%;
            margin-top: 20px;
            word-break: keep-all;
            white-space: pre-line;
            @media (max-width: 1280px) {
                font-size: 1.6vw;
            }
            @media (max-width: 768px) {
                font-size: 16px;
                margin-bottom: 30px;
            }
        }

        .btn {
            width: 230px;
            @media (max-width: 1000px) {
                width: 25%;
            }
            @media (max-width: 768px) {
                width: calc(100% - 140px);
            }
            @media (max-width: 480px) {
                width: calc(100% - 60px);
            }

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 30px;
            background-color: #fff;
            border-radius: 8px;
            color: #212224;
            font-family: Pretendard;
            font-size: 20px;
            font-weight: 600;
            word-break: keep-all;
            white-space: nowrap;
            text-decoration: none;
            border: none;
            outline: none;
            cursor: pointer;
            &:hover {
                background-color: #f6f8f9;
            }
            @media (max-width: 957px) {
                font-size: 2vw;
            }
            @media (max-width: 768px) {
                font-size: 16px;
            }

            svg {
                flex-shrink: 0;
                height: 30px;
                @media (max-width: 957px) {
                    height: 3vw;
                }
                @media (max-width: 720px) {
                    height: 20px;
                }
            }
        }
    }
`;

export const Makers = styled.div`
    width: 100%;
    height: 160px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        height: 190px;
    }
    @media (min-width: 1820px) {
        img {
            width: 100%;
            height: auto;
        }
    }

    .makers-container {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1200px;
        @media (max-width: 1280px) {
            width: calc(100% - 60px);
        }
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }

        .text {
            color: #212224;
            font-family: Pretendard;
            font-size: 28px;
            font-weight: 700;
            text-align: center;
            word-break: keep-all;
            @media (max-width: 1000px) {
                font-size: 2.75vw;
            }
            @media (max-width: 768px) {
                font-size: 20px;
            }
        }

        .btn {
            width: 230px;
            @media (max-width: 1000px) {
                width: 25%;
            }
            @media (max-width: 768px) {
                width: calc(100% - 140px);
                height: auto;
                padding: 16px 30px;
                margin-top: 5%;
            }
            @media (max-width: 480px) {
                width: calc(100% - 60px);
            }
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            background-color: #212224;
            border-radius: 8px;
            color: #fff;
            word-break: keep-all;
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 700;
            text-decoration: none;
            svg {
                fill: #fff;
            }

            &:hover {
                color: #ff7710;
                svg {
                    fill: #ff7710;
                }
            }
        }
    }
`;
