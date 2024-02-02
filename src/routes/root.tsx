import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/layout/Footer';
import useIsPC from '../hooks/useIsPC';
import styled from 'styled-components';
import useIsViewMobileNav from '../hooks/useIsViewMobileNav';

function Root() {
    const isPC = useIsPC();
    const location = useLocation();
    const hideNavAndFooter =
        !isPC &&
        (location.pathname.includes('/community/write') ||
            location.pathname.match(/^\/community\/\d+$/));

    const hideFooter = !isPC && location.pathname === '/community';
    const {isMobileView} = useIsViewMobileNav();

    return (
        <>
            {!hideNavAndFooter && <Nav />}
            {isMobileView && <MHeaderBlank />}
            <div>
                <Outlet />
            </div>
            {!(hideNavAndFooter || hideFooter) && <Footer />}
        </>
    );
}

export default Root;

const MHeaderBlank = styled.div`
    width: 100%;
    height: 48px;
`;
