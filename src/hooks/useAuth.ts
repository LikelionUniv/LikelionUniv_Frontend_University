import { useRecoilState } from 'recoil';
import { userState } from '../store/user';
import { requestUserInfo } from '../api/auth/auth';
import { useEffect, useState } from 'react';

export const useAuth = () => {
    const [userinfo, setUserinfo] = useRecoilState(userState);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            let accessToken = localStorage.getItem('access_token');
            const response = accessToken && (await requestUserInfo());
            response && setUserinfo({ ...response.data, isLogin: true });
            setIsLoading(false);
        };
        fetchUser();
    }, []);

    return { userinfo, setUserinfo, isLoading };
};
