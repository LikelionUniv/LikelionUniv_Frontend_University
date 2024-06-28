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
    background: linear-gradient(to right, #ff7710, #000000 400px);

    @media (max-width: 767px) {
        width: 80%;
    }

    @media (max-width: 360px) {
        width: 90%;
    }
`;

const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 54px;
`;

const MoreTitle = styled.div`
    color: white;
    /* Title/32_Bold */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 48px */
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
`;

const Img = styled.img``;
