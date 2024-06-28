import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import arrow from '../../../../img/landing/longrightarrow_s.png';

const HackathonPart = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            navigate('/hackathons');
        } else {
            navigate('/login');
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
    color: white;
    background-color: #ff7711;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;

    width: 580px;
    height: 80px;

    margin-top: 120px;
    margin-bottom: 148px;

    cursor: pointer;

    &:hover {
        background-color: #eb6502;
    }

    @media (max-width: 767px) {
        width: 520px;
        height: 60px;
        font-size: 20px;
    }

    @media (max-width: 360px) {
        width: 282px;
        height: 48px;
        font-size: 16px;
    }
`;

const Info = styled.div`
    padding: 21px 0px 20px 40px;

    @media (max-width: 767px) {
        padding: 16px 0px 15px 30px;
    }

    @media (max-width: 360px) {
        padding: 12px 0px 10px 20px;
    }
`;

const Img = styled.img`
    padding: 24px 40px 24px 0px;

    @media (max-width: 767px) {
        padding: 16px 30px 16px 0px;
    }

    @media (max-width: 360px) {
        padding: 12px 20px 12px 0px;
    }
`;
