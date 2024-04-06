import styled from 'styled-components';
import Header from './Header';
import Developers from './Developers';

const About = () => {
    return (
        <Wrapper>
            <Header />
            <Developers />
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
