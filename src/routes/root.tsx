import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/layout/Footer';
import { useEffect } from 'react';
import { requestUserInfo } from '../api/auth/auth';
import { useRecoilState } from 'recoil';
import { userState } from '../store/user';


function Root() {
    const [userinfo,updateUserinfo] = useRecoilState(userState);

    useEffect(()=>{
        const fetchUser =async () => {
            const userInfo = await requestUserInfo();
            console.log(userInfo);
            updateUserinfo(userInfo);
        }
        fetchUser();
    },[])

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
