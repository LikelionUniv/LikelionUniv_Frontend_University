import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const targetDate = '2024-02-10 00:00:00';

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

const CountDown = () => {
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
    );
};

export default CountDown;

const Container = styled.div`
    width: calc(65% + 64px);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 15%;
    .text {
        color: #fff;
        font-family: Pretendard;
        font-size: 30px;
        font-weight: 700;
        flex-shrink: 0;
    }
    .timer {
        flex-shrink: 0;
        width: 60%;
    }
    .text-container {
        display: flex;
        div {
            color: #d1d4d8;
            font-size: 13px;
        }
        .colon {
            color: transparent;
            height: 13px;
        }
        margin-bottom: 5px;
    }
    .time-container {
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-family: Pretendard;
        font-size: 30px;
        font-weight: 700;
        div {
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .colon {
            margin: 0 5px;
        }
    }

    @media (max-width: 1280px) {
        margin-top: 10%;
        .text {
            font-size: 2.5vw;
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
    @media (max-width: 720px) {
        width: calc(65% + 44px);
    }
`;
