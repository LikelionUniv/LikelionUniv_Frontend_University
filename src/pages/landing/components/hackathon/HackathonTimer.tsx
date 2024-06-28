import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const HackthonTimer: React.FC = () => {
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

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach(interval => {
        const key = interval as keyof TimeLeft;
        if (!timeLeft[key]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[key]} {interval}{' '}
            </span>,
        );
    });

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default HackthonTimer;
