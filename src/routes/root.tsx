import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/layout/Footer';
import useIsPC from '../hooks/useIsPC';

function Root() {
    const isPC = useIsPC();
    const location = useLocation();
    const hideNavAndFooter =
        !isPC &&
        (location.pathname.includes('/community/write') ||
            location.pathname.match(/^\/community\/\d+$/));

    const hideFooter = !isPC && location.pathname === '/community';

    return (
        <>
            {!hideNavAndFooter && <Nav />}
            <div>
                <Outlet />
            </div>
            {!(hideNavAndFooter || hideFooter) && <Footer />}
        </>
    );
}

export default Root;
