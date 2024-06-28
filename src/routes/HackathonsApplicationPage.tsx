import ApplicationForm from '../components/application/ApplicationForm';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const HackathonsApplicationPage = () => {
    const { userinfo, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (!userinfo?.isLogin) {
            alert('로그인 후 이용 기능합니다.');
            navigate('/login');
        } else if (userinfo?.role === 'GUEST') {
            alert('작성 권한이 없는 회원입니다.');
            navigate('/');
        }
    }, [userinfo, navigate, isLoading]);

    return (
        <>
            <ApplicationForm />
        </>
    );
};

export default HackathonsApplicationPage;
