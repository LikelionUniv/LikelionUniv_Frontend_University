import styled from 'styled-components';

import HakathonGuide from './HackathonGuide';

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
        </BackgroundContainer>
    );
};

export default GuideLine;
