import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const HackathonTimer: React.FC = () => {
    const deadline = new Date('2024-07-14T23:59:00');

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date();
        const difference = deadline.getTime() - now.getTime();
        let timeLeft: TimeLeft;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: number): string => {
        return time.toString().padStart(2, '0');
    };

    return (
        <TimerContainer>
            <DateContainer>
                <DateBox>
                    <DateType>DAYS</DateType>
                    <DateNum>{formatTime(timeLeft.days)}</DateNum>
                </DateBox>
                <BlankBox>:</BlankBox>
                <DateBox>
                    <DateType>HOURS</DateType>
                    <DateNum>{formatTime(timeLeft.hours)}</DateNum>
                </DateBox>
                <BlankBox>:</BlankBox>
                <DateBox>
                    <DateType>MINS</DateType>
                    <DateNum>{formatTime(timeLeft.minutes)}</DateNum>
                </DateBox>
                <BlankBox>:</BlankBox>
                <DateBox>
                    <DateType>SECS</DateType>
                    <DateNum>{formatTime(timeLeft.seconds)}</DateNum>
                </DateBox>
            </DateContainer>
        </TimerContainer>
    );
};

export default HackathonTimer;

const TimerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: black;
    border-radius: 24px;
    height: 240px;
    max-width: 1200px;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;

    @media (max-width: 1200px) {
        width: 80%;
        height: clamp(154px, 4vh, 240px);
        padding: 5px 20px;
    }

    @media (max-width: 767px) {
        width: 80%;
        height: clamp(140px, 4vh, 240px);
        padding: 5px 20px;
    }

    @media (max-width: 430px) {
        width: 90%;
        height: 120px;
        padding: 0px 20px;
        border-radius: 8px;
    }

    @media (max-width: 390px) {
        width: 90%;
        height: 120px;
        padding: 0px 20px;
        border-radius: 8px;
    }

    @media (max-width: 360px) {
        width: 90%;
        height: clamp(80px, 2vh, 140px);
        padding: 5px px;
        border-radius: 8px;
    }
`;

const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 56px 196px;

    @media (max-width: 767px) {
        margin: 20px 0;
    }

    @media (max-width: 360px) {
        margin: 10px 0;
    }
`;

const DateBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DateType = styled.div`
    display: inline-block;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    @media (max-width: 767px) {
        font-size: clamp(12px, 1vw, 16px);
    }

    @media (max-width: 360px) {
        font-size: 12px;
    }
`;

const BlankBox = styled.div`
    margin-top: 27px;
    margin-left: 30px;
    margin-right: 30px;
    font-family: Pretendard;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 10%;

    @media (max-width: 767px) {
        font-size: 40px;
        margin-left: 15px;
        margin-right: 15px;
    }

    @media (max-width: 360px) {
        font-size: 28px;
        margin-left: 10px;
        margin-right: 10px;
    }
`;

const DateNum = styled.div`
    font-family: Pretendard;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    width: 100px;
    text-align: center;

    @media (max-width: 767px) {
        font-size: clamp(28px, 2vw, 40px);
        width: clamp(42px, 2vw, 60px);
    }

    @media (max-width: 360px) {
        font-size: 28px;
        width: clamp(20px, 2vw, 28px);
    }
`;
