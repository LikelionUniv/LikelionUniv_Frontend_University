import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';

function root() {
    return (
        <>
            <Nav />
            <Padding />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default root;

const Padding = styled.div`
    height: 56px;
`;
