import { Layout, Container } from '../../../../styles/Layout';

import GuideLine from './GuideLine';
import MainInfo from './MainInfo';

const HakathonLanding = () => {
    return (
        <Layout>
            <Container>
                <GuideLine />
                <MainInfo />
            </Container>
        </Layout>
    );
};

export default HakathonLanding;
