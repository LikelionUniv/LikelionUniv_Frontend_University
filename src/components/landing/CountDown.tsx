import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const targetDate = '2023-12-10 23:59:59';

const getRemainTime = (countDown: number) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    return [
        days < 10 ? '0' + days : days,
        hours < 10 ? '0' + hours : hours,
        minutes < 10 ? '0' + minutes : minutes,
        seconds < 10 ? '0' + seconds : seconds,
    ];
};

type Props = { isFloating?: boolean };
const CountDown = ({ isFloating }: Props) => {
    const [countDown, setCountDown] = useState(
        new Date(targetDate).getTime() - new Date().getTime(),
    );
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(new Date(targetDate).getTime() - new Date().getTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const [days, hours, minutes, seconds] = getRemainTime(countDown);
    return (
        <>
            {isFloating ? (
                <FloatingContainer>
                    <div className="text">
                        <div className="mobile">신규 대학&nbsp;</div>
                        모집 종료까지
                    </div>
                    <div className="time-container">
                        <div>{days}</div>
                        <div className="colon">:</div>
                        <div>{hours}</div>
                        <div className="colon">:</div>
                        <div>{minutes}</div>
                        <div className="colon">:</div>
                        <div>{seconds}</div>
                    </div>
                </FloatingContainer>
            ) : (
                <Container>
                    <div className="text">모집 종료까지</div>
                    <div className="timer">
                        <div className="time-container text-container">
                            <div>DAYS</div>
                            <p className="colon">:</p>
                            <div>HOURS</div>
                            <p className="colon">:</p>
                            <div>MINS</div>
                            <p className="colon">:</p>
                            <div>SECS</div>
                        </div>
                        <div className="time-container">
                            <div>{days}</div>
                            <p className="colon">:</p>
                            <div>{hours}</div>
                            <p className="colon">:</p>
                            <div>{minutes}</div>
                            <p className="colon">:</p>
                            <div>{seconds}</div>
                        </div>
                    </div>
                </Container>
            )}
        </>
    );
};

export default CountDown;

const Container = styled.div`
    width: calc(65% + 64px);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 8%;
    color: #f6f8f9;
    .text {
        font-family: Pretendard;
        font-size: 24px;
        font-weight: 700;
        flex-shrink: 0;
        margin-bottom: 2px;
    }
    .timer {
        flex-shrink: 0;
        width: 55%;
    }
    .time-container {
        max-height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: Pretendard;
        font-size: 30px;
        font-weight: 700;
        div {
            width: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .colon {
            margin: 0 5%;
        }
    }
    .text-container {
        display: flex;
        max-height: 16px;
        div {
            color: #eaecee;
            font-size: 13px;
        }
        .colon {
            color: transparent;
            height: 13px;
        }
        margin-bottom: 5px;
    }

    @media (max-width: 1280px) {
        margin-top: 8%;
        .text {
            font-size: 2vw;
        }
        .time-container {
            font-size: 2.5vw;
        }
        .text-container {
            div {
                font-size: 1.2vw;
            }
        }
    }
    @media (max-width: 768px) {
        max-width: 500px;
        padding: 0 10px;
        .text {
            font-size: 16px;
        }
        .time-container {
            font-size: 24px;
        }
        .text-container {
            div {
                font-size: 10px;
            }
        }
    }
`;

const FloatingContainer = styled.div`
    display: flex;
    align-items: center;
    color: #f2f4f6;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    flex-shrink: 0;
    .text {
        display: flex;
        flex-shrink: 0;
        margin-left: 26px;
        @media (max-width: 890px) {
            font-size: 2.7vw;
        }
    }
    .time-container {
        display: flex;
        margin-left: 12px;
        .colon {
            margin: 0 5px;
        }
    }

    @media (max-width: 768px) {
        width: 160px;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 20px;
        font-size: 20px;
        .text {
            margin-left: 0;
            margin-bottom: 5px;
            font-size: 14px;
            .mobile {
                display: none;
            }
        }
        .time-container {
            margin-left: 0;
            .colon {
                margin: 0 8px;
            }
        }
    }
`;
