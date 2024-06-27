import HackathonSchedule from './HackathonSchedule';
import {
    GuideContainer,
    TitleWrapper,
    GuideTypography,
    GuideSubTypography,
    GuideImg,
} from '../../../../styles/HackGuideLine';

import GuideStar from '../../../../img/landing/hackathon_guide.svg';

const HakathonGuide = () => {
    return (
        <GuideContainer>
            <TitleWrapper>
                <GuideTypography
                    $weight="700"
                    $color="#fff"
                    $margin="0px 16px 0px 0px"
                >
                    12기 중앙 해커톤 행사 안내
                </GuideTypography>
                <GuideImg src={GuideStar} alt="해커톤 로고 이미지" />
            </TitleWrapper>
            <GuideSubTypography $weight="600" $color="#868C94">
                해커톤 진행에 대한 간단한 일정을 확인하세요.
            </GuideSubTypography>
            <HackathonSchedule />
        </GuideContainer>
    );
};

export default HakathonGuide;
