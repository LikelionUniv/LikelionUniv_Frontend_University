import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyle';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CommunityPage = () => {
    const { userinfo, isLoading } = useAuth();
    const navigate = useNavigate();

    //커뮤니티 접근할 때 로그인 안 한 유저 로그인으로 보내기
    //GUEST는 메인페이지로 보내기
    useEffect(() => {

        if (isLoading) {
            return; 
        }

        if (!userinfo?.isLogin) {
            navigate('/login');
        }else if (userinfo?.role === "GUEST"){
            alert("커뮤니티 이용 권한이 없는 회원입니다.");
            navigate('/');
        }
    }, [userinfo, navigate, isLoading]);

    if (!userinfo?.isLogin || userinfo?.role === "GUEST") {
        return null;
    }

    return (
        <>
            <GlobalStyles />
                <Container>
                    <Outlet />
                </Container>
        </>
    );
};

export default CommunityPage;

const Container = styled.div`
    max-width: 1200px;
    padding: 0;
    //min-width: 768px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: Pretendard;
    height: auto;

    @media screen and (max-width: 1024px) {
        padding: 0 40px;
    }

    @media screen and (max-width: 767px) {
        padding: 0;
    }
`;
