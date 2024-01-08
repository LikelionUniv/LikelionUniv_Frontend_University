import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type ProtectedRouterProp = {
    children: React.ReactNode;
};

const ProtectedRouter = ({ children }: ProtectedRouterProp) => {
    const { userinfo, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userinfo.isLogin && !isLoading) navigate('/login');
    }, [userinfo.isLogin, isLoading]);

    return userinfo.isLogin ? <>{children}</> : null;
};

export default ProtectedRouter;
