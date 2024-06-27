import styled from 'styled-components';
import { To, useNavigate } from 'react-router-dom';

import Typography from '../../../../components/text/Typography';

import firstImg from '../../../../img/landing/hackathon_1st.svg';
import firstPlace from '../../../../img/landing/hackathon_1st_place.svg';
import SecondImg from '../../../../img/landing/hackathon_2nd.svg';
import SecondPlace from '../../../../img/landing/hackathon_2nd_place.svg';
import ThirdImg from '../../../../img/landing/hackathon_3rd.svg';
import ThirdPlace from '../../../../img/landing/hackathon_3rd_place.svg';
import ThirdImgSec from '../../../../img/landing/hackathon_3rd_place2.svg';

const GridAwards = styled.div`
    margin-top: 40px;
    margin-bottom: 160px;
    max-width: 1200px;
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
    column-gap: 24px;

    @media (max-width: 1150px) {
        grid-template-columns: 1fr;
    }
`;

const AwardsSamples = styled.div`
    width: calc(100% - 38px);
    height: clamp(195px, 3vw, 246px);
    padding: 16px 19px 16px 19px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        width: 100%;
        height: clamp(136px, 4vw, 195px);
    }

    @media (max-width: 360px) {
        width: 320px;
        height: 136px;
    }
`;

const SampleContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 8px);
    margin-right: 8px;
`;

const AwardsImg = styled.img`
    width: 77px;
    height: 77px;

    @media (max-width: 767px) {
        width: 60px;
        height: 60px;
    }

    @media (max-width: 360px) {
        width: 48px;
        height: 48px;
    }
`;

const SampleTitle = styled(Typography)`
    font-size: clamp(24px, 2vw, 28px);
    color: #212224;
    font-weight: 700;
    margin-bottom: 8px;

    @media (max-width: 767px) {
        font-size: clamp(16px, 3vw, 20px);
    }

    @media (max-width: 360px) {
        font-size: clamp(16px, 4vw, 16px);
    }
`;

const SampleUniversity = styled.div`
    display: flex;
    flex-direction: column;
`;

const SampleSubTitle = styled(Typography)`
    font-size: clamp(16px, 2vw, 18px);
    color: #868c94;

    @media (max-width: 767px) {
        font-size: clamp(12px, 3vw, 16px);
    }

    @media (max-width: 360px) {
        font-size: clamp(12px, 4vw, 12px);
    }
`;

const HackathonAwardsEx = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: To) => {
        setTimeout(() => {
            navigate(path);
        }, 300);
    };

    return (
        <GridAwards>
            <AwardsSamples onClick={() => handleNavigate('/project/81')}>
                <SampleContentWrapper>
                    <SampleTitle>휠패스</SampleTitle>
                    <SampleUniversity>
                        <SampleSubTitle>중앙대학교</SampleSubTitle>
                        <SampleSubTitle>BFGGyu</SampleSubTitle>
                    </SampleUniversity>
                    <AwardsImg src={firstPlace} alt="first" />
                </SampleContentWrapper>
                <img src={firstImg} alt="first" />
            </AwardsSamples>
            <AwardsSamples onClick={() => handleNavigate('/project/50')}>
                <SampleContentWrapper>
                    <SampleTitle>MO:IN</SampleTitle>
                    <SampleUniversity>
                        <SampleSubTitle>중앙대학교</SampleSubTitle>
                        <SampleSubTitle>BFGGyu</SampleSubTitle>
                    </SampleUniversity>
                    <AwardsImg src={SecondPlace} alt="first" />
                </SampleContentWrapper>
                <img src={SecondImg} alt="second" />
            </AwardsSamples>
            <AwardsSamples onClick={() => handleNavigate('/project/41')}>
                <SampleContentWrapper>
                    <SampleTitle>핸디(Handi)</SampleTitle>
                    <SampleUniversity>
                        <SampleSubTitle>중앙대학교</SampleSubTitle>
                        <SampleSubTitle>BFGGyu</SampleSubTitle>
                    </SampleUniversity>
                    <AwardsImg src={ThirdPlace} alt="first" />
                </SampleContentWrapper>
                <img src={ThirdImg} alt="third" />
            </AwardsSamples>
            <AwardsSamples onClick={() => handleNavigate('/project/44')}>
                <SampleContentWrapper>
                    <SampleTitle>YOUCHECK</SampleTitle>
                    <SampleUniversity>
                        <SampleSubTitle>중앙대학교</SampleSubTitle>
                        <SampleSubTitle>BFGGyu</SampleSubTitle>
                    </SampleUniversity>
                    <AwardsImg src={ThirdPlace} alt="first" />
                </SampleContentWrapper>
                <img src={ThirdImgSec} alt="third2" />
            </AwardsSamples>
        </GridAwards>
    );
};

export default HackathonAwardsEx;
