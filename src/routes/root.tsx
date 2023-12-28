import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/layout/Footer';
//import '../components/LoadScript';

function Root() {
    return (
        <>
            <Nav />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Root;
