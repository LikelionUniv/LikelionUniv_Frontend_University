import styled from 'styled-components';

import HakathonGuide from './HackathonGuide';
import HackathonTimeLine from './HackathonTimeLine';
import HackathonAwards from './HackathonAwards';

const BackgroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: linear-gradient(to bottom, #000000, #212224);
`;

const GuideLine = () => {
    return (
        <BackgroundContainer>
            <HakathonGuide />
            <HackathonTimeLine />
            <HackathonAwards />
        </BackgroundContainer>
    );
};

export default GuideLine;
