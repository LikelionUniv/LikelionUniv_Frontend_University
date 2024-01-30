import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
    const [remainTime, setRemainTime] = useState<number>(5);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainTime(prev => prev - 1);
        }, 1000);

        if (remainTime === 0) {
            navigate(-1);
        }

        return () => clearInterval(timer);
    }, [navigate, remainTime]);

    return (
        <Container>
            <Message>존재하지 않는 페이지입니다.</Message>
            <Message>{remainTime}초 뒤에 전 페이지로 이동합니다.</Message>
        </Container>
    );
}

export default NotFound;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 700px;
`;

const Message = styled.h1`
    text-align: center;
    color: var(--Black, #000);

    font-family: Pretendard;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    @media screen and (max-width: 767px) {
        font-size: 30px;
    }
`;
