import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyle';

const CommunityPage = () => {
    return (
        <>
        <GlobalStyles/>
        <Container>
            <Outlet />
        </Container>
    </>
    );
};

export default CommunityPage;

const Container = styled.div`
    max-width: 1200px;
    padding: 0 40px;
    min-width: 768px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: Pretendard;
    height: auto;
`;

