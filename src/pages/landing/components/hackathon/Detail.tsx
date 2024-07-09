import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import detailBackground from '../../../../img/landing/detailBackground.png';
import arrow_up from '../../../../img/landing/Arrow_Upright.png';

const Detail = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
        window.scrollTo(0, 0);
    };

    return (
        <DetailWrapper>
            <Wrapper>
                <MoreTitle>
                    멋쟁이사자처럼 대학 홈페이지를 만든 사람이 궁금하다면?
                </MoreTitle>
                <MoreBtn onClick={handleClick}>
                    제작자 보기
                    <Img src={arrow_up} />
                </MoreBtn>
            </Wrapper>
        </DetailWrapper>
    );
};

export default Detail;

const DetailWrapper = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${detailBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Wrapper = styled.div`
    max-width: 1200px;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px) {
        flex-direction: column;
    }

    @media (max-width: 360px) {
        flex-direction: column;
        width: 90%;
    }
`;

const MoreTitle = styled.div`
    color: black;
    /* Title/32_Bold */
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 48px */

    @media (max-width: 767px) {
        font-size: 20px;
        text-align: center;
    }

    @media (max-width: 360px) {
        font-size: 20px;
        text-align: center;
    }
`;

const MoreBtn = styled.div`
    color: white;
    width: 384px;
    height: 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    background-color: #212224;
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
        width: clamp(290px, 3vw, 523px);
        height: 48px;
        font-size: 16px;
    }
    @media (max-width: 360px) {
        width: clamp(250px, 2vw, 320px);
        height: 48px;
        font-size: 16px;
    }
    &:hover {
        color: #ff7710;

        img {
            filter: invert(39%) sepia(100%) saturate(600%) hue-rotate(347deg)
                brightness(105%) contrast(103%);
        }
    }
`;

const Img = styled.img``;
