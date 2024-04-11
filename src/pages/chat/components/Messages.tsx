import React, { useState, useEffect } from 'react';
import Message from './Message';
import * as MS from './MessagesStyle';

const Messages = () => {
    const [date, setDate] = useState('');

    // 날짜 (년, 월, 일) 설정
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();

    // 시간 설정

    useEffect(() => {
        setDate(`${currentYear}.${currentMonth}.${currentDate}`);
    }, [date, currentYear, currentMonth, currentDate]);

    return (
        <MS.Container>
            <MS.Date>{date}</MS.Date>
            <Message />
        </MS.Container>
    );
};

export default Messages;
