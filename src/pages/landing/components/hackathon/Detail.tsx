import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import detailBackground from '../../../../img/landing/detailBackground.png';
import arrow_up from '../../../../img/landing/Arrow_Upright.png';

const Detail = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('');
        window.scrollTo(0, 0);
    };

    return (
        <DetailWrapper>
            <Wrapper>
                <MoreTitle>
                    멋쟁이사자처럼 대학홈페이지를 만든 사람이 궁금하다면?
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
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MoreTitle = styled.div`
    color: black;
    /* Title/32_Bold */
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 48px */
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
`;

const Img = styled.img``;
