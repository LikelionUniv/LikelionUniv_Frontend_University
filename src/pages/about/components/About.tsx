import styled from 'styled-components';
import Header from './Header';
import Developers1th from './Developers1th';
import DeveloperNav from './DeveloperNav';
import Developers2th from './Developers2th';
import { useState } from 'react';

const About = () => {
    const [aboutTh, setAboutTh] = useState<1 | 2>(2);
    return (
        <Wrapper>
            <Header />
            <DeveloperNav aboutTh={aboutTh} setAboutTh={setAboutTh} />
            {aboutTh === 1 ? <Developers1th /> : <Developers2th />}
        </Wrapper>
    );
};

export default About;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--Grey-200, #fff);
`;
