import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userState } from '../../store/user';
import { useSetRecoilState } from 'recoil';
import {
    requestIdtoken,
    requestLogin,
    requestUserInfo,
} from '../../api/auth/auth';

export const Redirect = () => {
    const navigate = useNavigate();
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    const { provider } = useParams();
    const updateUserState = useSetRecoilState(userState);

    useEffect(() => {
        const socialLogin = async () => {
            const idtoken = await requestIdtoken(authorizationCode, provider);
            const isUser = await requestLogin(provider, idtoken);
    
            if (isUser) {
                const response = await requestUserInfo();
                updateUserState({ ...response.data, isLogin: true });
                navigate('/');
            } else {
                navigate(`/signup/${provider}`);
            }
        };
 
        socialLogin();
    }, []);

    return <div>

    </div>;
};
