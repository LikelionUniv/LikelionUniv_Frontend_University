import styled from 'styled-components';

import {
    GuideContainer,
    TitleWrapper,
    GuideTypography,
    GuideSubTypography,
    GuideImg,
} from '../../../../styles/HackGuideLine';
import HackathonNav from './HackathonNav';

import HackathonCalendar from '../../../../img/landing/hackathon_union.svg';

const TimeLineImg = styled(GuideImg)`
    margin-left: 16px;
    margin-right: 16px;

    @media (max-width: 767px) {
        margin-left: 8px;
        margin-right: 8px;
    }

    @media (max-width: 360px) {
        margin-left: 4px;
        margin-right: 4px;
    }
`;

const HackathonTimeLine = () => {
    return (
        <GuideContainer>
            <TitleWrapper>
                <GuideTypography
                    weight="700"
                    color="#fff"
                    margin="0px 16px 0px 0px"
                >
                    12기 중앙 해커톤
                    <TimeLineImg
                        src={HackathonCalendar}
                        alt="해커톤 로고 이미지"
                    />
                    타임라인
                </GuideTypography>
            </TitleWrapper>
            <GuideSubTypography weight="600" color="#868C94">
                행사 진행에 대한 타임라인을 확인하세요.
            </GuideSubTypography>
            <HackathonNav />
        </GuideContainer>
    );
};

export default HackathonTimeLine;
