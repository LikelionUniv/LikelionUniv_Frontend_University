import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
    requestIdtoken,
    requestLogin,
    requestUserInfo,
} from '../../api/auth/auth';

const socialLogin = async (
    authorizationCode: string | null,
    provider: string | undefined,
) => {
    const idToken = await requestIdtoken(authorizationCode, provider);
    if (idToken === undefined) {
        alert('Error requesting idtoken! Please Retry Login.');
        return Error;
    }

    const isUser = await requestLogin(provider, idToken);
    if (isUser === undefined) {
        alert('Error requesting login! Please Retry Login.');
        return Error;
    }

    if (isUser === true) {
        const response = await requestUserInfo();
        return { ...response.data, isLogin: true };
    }

    return null;
};

export const Redirect = () => {
    const navigate = useNavigate();

    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    const { provider } = useParams();

    const { data, error } = useQuery({
        queryKey: ['login-user-information'],
        queryFn: () => socialLogin(authorizationCode, provider),
    });

    useEffect(() => {
        if (error) {
            navigate('/login');
        } else if (data === null) {
            navigate(`/signup/${provider}`);
        } else if (data) {
            navigate('/');
        }
    }, [data, error, provider, navigate]);

    return <div></div>;
};
