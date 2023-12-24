import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/layout/Footer';

function Root() {

    return (
        <>
            <Nav />
            <Padding />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Root;

const Padding = styled.div`
    height: 56px;
`;
