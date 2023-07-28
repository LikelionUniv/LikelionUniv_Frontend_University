import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

function root() {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
}

export default root;
