import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/layout/Footer';
import { AccessToken, RefreshToken } from '../config';

function root() {
    // 로그인이 되지 않아서 제 액세스토큰과 리프래시토큰 넣어둡니다.
    // 배포서버에는 절대 반영하지 않아야 할 것 같은데 고민입니다...
    // 그 전에 로그인이 완료되기를...
    localStorage.clear();
    localStorage.setItem('access_token', AccessToken);
    localStorage.setItem('refresh_token', RefreshToken);
    
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
