import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import arrow from '../../../../img/landing/longrightarrow_s.png';
import { startTransition } from 'react';

const HackathonPart = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            startTransition(() => {
                navigate('/hackathons');
            });
        } else {
            sessionStorage.setItem('nav', 'hackathons');
            startTransition(() => {
                navigate('/login');
            });
        }
    };

    return (
        <PartButton onClick={handleClick}>
            <Info>지금 신청하러 가기</Info>
            <Img src={arrow} />
        </PartButton>
    );
};

export default HackathonPart;

const PartButton = styled.div`
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #ff7711;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-radius: 8px;

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;

    width: 580px;
    height: auto;

    margin-top: 120px;
    margin-bottom: 148px;

    cursor: pointer;

    &:hover {
        background-color: #eb6502;
    }

    @media (max-width: 767px) {
        width: 520px;
        height: 64px;
        font-size: 20px;
        margin-top: 40px;
        margin-bottom: 446px;
        width: 300px;
    }

    @media (max-width: 360px) {
        width: 282px;
        height: 48px;
        font-size: 16px;
        margin-top: 36px;
        margin-bottom: 255px;
    }
`;

const Info = styled.div`
    margin: 21px 0px 20px 40px;
    font-weight: bold;
`;

const Img = styled.img`
    margin: 24px 40px 24px 0px;
`;
