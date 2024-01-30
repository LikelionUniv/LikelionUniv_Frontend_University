import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { RolePriority } from '../constants/Role';

type AdminProtectedRouterProp = {
    children: React.ReactNode;
};

const AdminProtectedRouter = ({ children }: AdminProtectedRouterProp) => {
    const { userinfo, isLoading } = useAuth();
    const navigate = useNavigate();

    const isAdmin = RolePriority.findIndex(role => role === userinfo.role) >= 2; 
    
    useEffect(() => {        
        if (!isAdmin && !isLoading) {
            alert(
                '어드민 페이지에 접근할 권한이 없습니다. 관리자에게 문의하세요.',
            );
            navigate('/');
        }
    }, [isAdmin, isLoading]);

    return userinfo.isLogin && isAdmin ? <>{children}</> : null;
};

export default AdminProtectedRouter;
