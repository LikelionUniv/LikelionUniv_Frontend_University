import { styled } from 'styled-components';
import footprint from '../../../../img/landing/footprint.png';
import bulb from '../../../../img/landing/bulb.png';
import prize1 from '../../../../img/landing/prize1.png';
import prize2 from '../../../../img/landing/prize2.png';
import prize3 from '../../../../img/landing/prize3.png';

const HackathonPrize = () => {
    return (
        <PrizeWrapper>
            <PrizeContainer>
                12기 중앙 해커톤 수상 혜택
                <Img src={bulb} alt="" />
            </PrizeContainer>
            <PrizePost>
                <Img src={prize1} alt="" />
                <Img src={prize2} alt="" />
                <Img src={prize3} alt="" />
            </PrizePost>
            <Sponsor>
                12기 중앙 해커톤
                <Img src={footprint} alt="" />
                후원사
            </Sponsor>
            <EmptyBox>준비중</EmptyBox>
        </PrizeWrapper>
    );
};

export default HackathonPrize;

const PrizeWrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
`;

const PrizeContainer = styled.div`
    text-align: left;
    color: white;
    /* Title/48_Bold */
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

const Sponsor = styled.div`
    color: white;
    /* Title/48_Bold */
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

const Img = styled.img`
    margin-left: 16px;
    margin-right: 16px;
`;

const EmptyBox = styled.div`
    height: 100px;
    color: white;
    align-items: center;
    text-align: center;
    /* Title/48_Bold */
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

const PrizePost = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    margin-bottom: 160px;
`;
