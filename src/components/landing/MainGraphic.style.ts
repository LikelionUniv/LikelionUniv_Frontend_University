import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`;

export const Background = styled.div`
    width: 100%;
    aspect-ratio: 2.15 / 1;
    background-color: #000;
    position: relative;
    overflow: hidden;

    & > div {
        width: 100%;
        height: 89.2%;
        background: linear-gradient(
            180deg,
            rgba(255, 146, 64, 0.2) 0%,
            rgba(255, 146, 64, 0) 100%
        );
    }

    & > img {
        position: absolute;
        height: 100%;
        top: 0;
        right: 2%;
        @media (max-width: 1280px) {
            height: 120%;
            top: -10%;
            right: -5%;
        }
    }

    .inner {
        width: 43%;
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 1280px) {
            width: 50vw;
            margin-left: 32px;
        }

        img {
            width: 100%;
            margin-top: 22%;
        }
    }

    .btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 32px;
        margin-top: 25px;

        background-color: #ff7710;
        border-radius: 8px;
        color: #fff;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 600;
        word-break: keep-all;
        text-decoration: none;
        border: none;
        outline: none;
        width: 65%;
        cursor: pointer;
        &:hover {
            background-color: #eb6500;
        }
        @media (max-width: 1280px) {
            padding: 12px 32px;
            margin-top: 15px;
        }
        @media (max-width: 957px) {
            font-size: 2.1vw;
        }
        @media (max-width: 720px) {
            font-size: 15px;
            padding: 10px 22px;
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
`;

export const Line = styled.div`
    width: 100%;
    background-color: #ff7710;
    display: flex;
    position: relative;
    overflow-x: hidden;
    padding: 20px 0;
    @media (max-width: 780px) {
        padding: 2.5% 0;
    }

    .track {
        height: 100%;
        display: flex;
        align-items: center;
        flex-shrink: 0;
        white-space: nowrap;
    }
    .track1 {
        animation: rollingleft1 70s linear infinite;
    }
    .track2 {
        animation: rollingleft2 70s linear infinite;
    }
    @keyframes rollingleft1 {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-100%);
        }
        50.01% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes rollingleft2 {
        0% {
            transition: translateX(0);
        }
        100% {
            transform: translateX(-200%);
        }
    }

    .flex {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding-right: 20px;

        svg {
            height: 28px;
            padding-right: 20px;
            flex-shrink: 0;
            @media (max-width: 768px) {
                height: 3.8vw;
                padding-right: 2.4vw;
            }
        }

        .text {
            font-size: 28px;
            line-height: 140%;
            color: #000;
            @media (max-width: 768px) {
                font-size: 3.4vw;
            }
        }
    }
`;

export const Description = styled.div`
    width: calc(100% - 80px);
    height: 666px;
    background-color: #fff;
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
            width: calc(100% - 80px);
            margin-left: 0;
        }
    }
    .title {
        display: flex;
        align-items: center;
        color: #212224;
        font-family: Pretendard;
        font-weight: 700;
        margin-bottom: 5px;
        font-size: 48px;
        @media (max-width: 1280px) {
            font-size: 3.6vw;
        }
        @media (max-width: 768px) {
            font-size: 6vw;
        }

        svg {
            margin-right: 10px;
            @media (max-width: 1280px) {
                width: 4vw;
                height: 4vw;
                margin-right: 1.5%;
            }
            @media (max-width: 768px) {
                width: 7vw;
                height: 7vw;
            }
        }
    }
    .text {
        width: 600px;
        color: #212224;
        font-family: Pretendard;
        font-weight: 600;
        line-height: 150%;
        word-break: keep-all;
        font-size: 20px;
        margin-top: 20px;
        @media (max-width: 1280px) {
            width: 50vw;
            font-size: 1.6vw;
        }
        @media (max-width: 768px) {
            width: 100%;
            font-size: 2.8vw;
        }
    }
    .desimage {
        width: 580px;
        margin-left: 3%;
        @media (max-width: 1280px) {
            width: 38vw;
            margin-left: 1%;
        }
        @media (max-width: 768px) {
            width: 55vw;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 40px;
        }
    }
`;
