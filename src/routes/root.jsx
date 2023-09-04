import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

function root() {
    return (
        <>
            <Nav />
            <div style={{ paddingTop: '56px' }}>
                <Outlet />
            </div>
        </>
    );
}

export default root;
