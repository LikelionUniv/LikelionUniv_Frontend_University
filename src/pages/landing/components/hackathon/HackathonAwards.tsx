import styled from 'styled-components';

import {
    GuideContainer,
    TitleWrapper,
    GuideTypography,
    GuideImg,
} from '../../../../styles/HackGuideLine';
import Awards from '../../../../img/landing/hackathon_awards.svg';

import HackathonAwardsEx from './HackathonAwardsEx';

const AwardsImg = styled(GuideImg)`
    margin-right: 14px;

    @media (max-width: 767px) {
        margin-right: 8px;
    }
`;

const HackathonAwards = () => {
    return (
        <GuideContainer>
            <TitleWrapper>
                <AwardsImg src={Awards} alt="guideImg" />
                <GuideTypography
                    weight="700"
                    color="#fff"
                    margin="0px 16px 0px 0px"
                >
                    11기 중앙 해커톤 수상작
                </GuideTypography>
            </TitleWrapper>
            <HackathonAwardsEx />
        </GuideContainer>
    );
};

export default HackathonAwards;
