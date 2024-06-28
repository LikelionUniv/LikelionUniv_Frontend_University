import { Layout, Container } from '../../../../styles/Layout';

import GuideLine from './GuideLine';
import MainInfo from './MainInfo';
import TimeInfo from './TimeInfo';

const HakathonLanding = () => {
    return (
        <Layout>
            <Container>
                <MainInfo />
                <TimeInfo />
                <GuideLine />
            </Container>
        </Layout>
    );
};

export default HakathonLanding;
