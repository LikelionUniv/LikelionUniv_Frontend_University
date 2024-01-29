import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AdminBoard = () => {
    return (
        <>
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default AdminBoard;

const Container = styled.div`
    max-width: 1200px;
    //padding: 0 40px;
    min-width: 768px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: Pretendard;
    margin-top: 100px;
    height: auto;
    margin-bottom: 100px;
`;
