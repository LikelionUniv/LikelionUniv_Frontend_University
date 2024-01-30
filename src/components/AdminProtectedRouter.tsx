import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useIsAdmin from '../hooks/useIsAdmin';

type AdminProtectedRouterProp = {
    children: React.ReactNode;
};

const AdminProtectedRouter = ({ children }: AdminProtectedRouterProp) => {
    const { userinfo } = useAuth();
    const navigate = useNavigate();

    const { isAdmin, isLogin } = useIsAdmin();

    useEffect(() => {
        if (!isLogin) {
            navigate('/login');
            return;
        }

        if (!isAdmin) {
            alert(
                '어드민 페이지에 접근할 권한이 없습니다. 관리자에게 문의하세요.',
            );
            navigate('/');
        }
    }, [isLogin, isAdmin, navigate]);

    return userinfo.isLogin && isAdmin ? <>{children}</> : null;
};

export default AdminProtectedRouter;
