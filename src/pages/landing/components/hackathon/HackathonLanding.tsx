import { Layout, Container } from '../../../../styles/Layout';
import CommunityPart from './CommunityPart';
import Detail from './Detail';

import GuideLine from './GuideLine';
import SponsorInfo from './HackathonSponsor';
import MainInfo from './MainInfo';
import More from './More';
import Prize from './Prize';
// import TimeInfo from './TimeInfo';

const HakathonLanding = () => {
    return (
        <Layout>
            <Container>
                <MainInfo />
                {/* 
                해커톤 신청 마감기간을 알려주는 컴포넌트
                <TimeInfo /> 
                */}
                <GuideLine />
                <More />
                <Prize />
                <SponsorInfo />
                <CommunityPart />
                <Detail />
            </Container>
        </Layout>
    );
};

export default HakathonLanding;
