import { styled } from 'styled-components';
import footprint from '../../../../img/landing/footprint.png';
import bulb from '../../../../img/landing/bulb.png';
import prize1 from '../../../../img/landing/prize1.png';
import prize2 from '../../../../img/landing/prize2.png';
import prize3 from '../../../../img/landing/prize3.png';
import prize2_w from '../../../../img/landing/prize2_w.png';
import prize3_w from '../../../../img/landing/prize3_w.png';

const HackathonPrize = () => {
    return (
        <PrizeWrapper>
            <PrizeContainer>
                <Title>
                    12기 중앙 해커톤 수상 혜택
                    <Img src={bulb} alt="" />
                </Title>
            </PrizeContainer>
            <PrizePost>
                <ImageWrapper>
                    <PrizeImg src={prize1} alt="" />
                    <PrizeImgW src={prize2_w} alt="" />
                </ImageWrapper>
                <ImageWrapper>
                    <PrizeImg src={prize2} alt="" />
                    <PrizeImgW src={prize2_w} alt="" />
                </ImageWrapper>
                <ImageWrapper>
                    <PrizeImg src={prize3} alt="" />
                    <PrizeImgW src={prize3_w} alt="" />
                </ImageWrapper>
            </PrizePost>
            <PrizeContainer>
                <Title>
                    12기 중앙 해커톤
                    <Img src={footprint} alt="" />
                    후원사
                </Title>
            </PrizeContainer>
            <Sponsor>
                <SponsorP>
                    멋쟁이사자처럼 대학 중앙 해커톤이 개최될 수 있도록 도움을
                    주신 후원사를 소개합니다.
                </SponsorP>
            </Sponsor>
        </PrizeWrapper>
    );
};

export default HackathonPrize;

const PrizeWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        width: 80%;
    }

    @media (max-width: 360px) {
        width: 90%;
    }
`;

const PrizeContainer = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
    color: white;
    /* Title/48_Bold */
    font-family: Pretendard;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    display: flex;

    font-size: clamp(40px, 4vw, 48px);

    @media (max-width: 767px) {
        justify-content: left;
        font-size: clamp(24px, 5vw, 40px);
    }

    @media (max-width: 360px) {
        justify-content: left;
        font-size: clamp(24px, 6vw, 24px);
    }
`;

const Title = styled.div`
    text-align: left;
    width: 100%;
    font-size: clamp(40px, 4vw, 48px);

    @media (max-width: 767px) {
        font-size: clamp(24px, 5vw, 40px);
    }

    @media (max-width: 360px) {
        font-size: clamp(20px, 6vw, 24px);
    }
`;

const Sponsor = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    align-items: center;

    /* Title/48_Bold */
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 40px;

    @media (max-width: 767px) {
        font-size: 40px;
        margin-bottom: 24px;
    }

    @media (max-width: 360px) {
        font-size: 24px;
        margin-bottom: 24px;
    }
`;

const SponsorP = styled.div`
    margin-top: 24px;
    color: #868c94;
    width: 100%;
    /* Subtitle/20_Semibold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */

    @media (max-width: 767px) {
        font-size: 18px;
        margin-top: 16px;
    }

    @media (max-width: 360px) {
        font-size: 14px;
        margin-top: 8px;
    }
`;

const PrizeImg = styled.img`
    max-width: 100%;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;

    @media (max-width: 360px) {
        display: none;
    }
`;

const PrizeImgW = styled.img`
    max-width: 100%;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
    display: none;

    @media (max-width: 360px) {
        display: inline;
        margin-top: 10px;
    }
`;

const Img = styled.img`
    max-width: 48px;
    width: clamp(40px, 2vw, 48px);
    height: clamp(40px, 2vh, 48px);
    margin-left: 10px;
    margin-right: 10px;

    @media (max-width: 767px) {
        width: clamp(28px, 2vw, 40px);
        height: clamp(28px, 2vh, 40px);
    }

    @media (max-width: 360px) {
        width: clamp(20px, 2vw, 28px);
        height: clamp(20px, 2vh, 28px);
    }
`;

const PrizePost = styled.div`
    max-width: 1200px;
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 160px;

    @media (max-width: 767px) {
        margin-bottom: 120px;
        padding-top: 24px;
    }

    @media (max-width: 360px) {
        margin-bottom: 60px;
        flex-direction: column;
        padding-top: 24px;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`;
