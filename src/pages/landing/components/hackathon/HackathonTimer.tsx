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
    width: 1200px;

    @media (max-width: 767px) {
        width: 80%;
    }

    @media (max-width: 360px) {
        width: 90%;
    }
`;

const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 56px 196px 56px 196px;
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
`;

const DateNum = styled.div`
    font-family: Pretendard;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    width: 100px;
    text-align: center;
`;
