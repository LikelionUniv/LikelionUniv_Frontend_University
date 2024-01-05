import { useEffect, useRef } from 'react';
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
    const isEffectRun = useRef(false);

    useEffect(() => {
        if (isEffectRun.current) {  // 이미 실행되었다면 더 이상 실행하지 않도록 함
            return;
        }
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
        isEffectRun.current = true;
    }, []);

    return <div>

    </div>;
};
