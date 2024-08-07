import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import arrow_b from '../../../../img/landing/Longrightarrow_b.png';

const More = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/project');
        window.scrollTo(0, 0);
    };

    return (
        <MoreWrapper>
            <Wrapper>
                <MoreTitle>멋대의 프로젝트가 더 보고 싶다면?</MoreTitle>
                <MoreBtn onClick={handleClick}>
                    더보기
                    <Img src={arrow_b} />
                </MoreBtn>
            </Wrapper>
        </MoreWrapper>
    );
};

export default More;

const MoreWrapper = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #ff7710, #000000 400px);
`;

const Wrapper = styled.div`
    max-width: 1200px;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        width: 80%;
        flex-direction: column;
    }

    @media (max-width: 360px) {
        width: 90%;
        flex-direction: column;
    }
`;

const MoreTitle = styled.div`
    text-align: left;
    color: white;
    width: 100%;
    /* Title/32_Bold */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 48px */

    @media (max-width: 767px) {
        width: 80%;
        margin-bottom: 16px;
        text-align: center;

        /* Title/40_Bold */
        font-family: Pretendard;
        font-size: clamp(16px, 4vw, 40px);
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }

    @media (max-width: 360px) {
        width: 90%;
        margin-bottom: 8px;
        text-align: center;

        /* Title/16_Bold */
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }
`;

const MoreBtn = styled.div`
    color: black;
    width: 384px;
    height: 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    background-color: #eaecee;
    border-radius: 8px;

    padding-left: 32px;
    padding-right: 32px;
    /* Subtitle/20_Bold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    @media (max-width: 767px) {
        width: clamp(320px, 2vw, 523px);
        height: 48px;
        font-size: 16px;
    }
    @media (max-width: 360px) {
        width: clamp(250px, 2vw, 320px);
        height: 40px;
        font-size: 16px;
    }
    &:hover {
        background-color: #d1d4d8;
    }
`;

const Img = styled.img`
    @media (max-width: 767px) {
        width: clamp(30px, 2vw, 36px);
    }
    @media (max-width: 360px) {
        width: clamp(20px, 2vw, 30px);
    }
`;
