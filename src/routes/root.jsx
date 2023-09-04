import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyle';

function root() {
    return (
        <div>
            <GlobalStyles/>
            <Nav />
            <Outlet />
        </div>
    );
}

export default root;
