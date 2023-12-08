import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/layout/Footer';
<<<<<<< HEAD
import '../components/LoadScript';
=======
import '../components/LoadScript'
>>>>>>> 9367ea3c14168bca30cf5e1a076a7571f61783fc

function root() {
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

export default root;

const Padding = styled.div`
    height: 56px;
`;
