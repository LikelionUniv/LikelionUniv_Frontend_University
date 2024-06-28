import { Layout, Container } from '../../../../styles/Layout';
import Detail from './Detail';

import GuideLine from './GuideLine';
import MainInfo from './MainInfo';
import More from './More';
import Prize from './Prize';
import TimeInfo from './TimeInfo';

const HakathonLanding = () => {
    return (
        <Layout>
            <Container>
                <MainInfo />
                <TimeInfo />
                <GuideLine />
                <More />
                <Prize />
                <Detail />
            </Container>
        </Layout>
    );
};

export default HakathonLanding;
