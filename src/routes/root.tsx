import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/layout/Footer';
import { useRecoilState } from 'recoil';
import { userState } from '../store/user';
import { requestUserInfo } from '../api/auth/auth';
import { useEffect } from 'react';

function Root() {
    const [userinfo, updateUserinfo] = useRecoilState(userState);

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        const fetchUser = async () => {
            const userInfo = await requestUserInfo();
            console.log(userInfo);
            updateUserinfo(userInfo);
        };
        if (token != null) {
            fetchUser();
        } else {
            console.error('NO ACCESS-TOKEN');
            //refresh token으로 accesstoken 재발급
        }
    }, []);

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
