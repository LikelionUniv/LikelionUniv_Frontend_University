import { useRecoilState } from 'recoil';
import { userState } from '../store/user';
import { requestUserInfo } from '../api/auth/auth';
import { useEffect } from 'react';
import { AxiosError } from 'axios';

export const useAuth = () => {
    const [userinfo, setUserinfo] = useRecoilState(userState);

    useEffect(() => {
        const fetchUser = async () => {
            let accessToken = localStorage.getItem('access_token');
            const response = accessToken && await requestUserInfo();
            response && setUserinfo({ ...response.data, isLogin: true });
        };
        fetchUser();
    }, []);

    return { userinfo, setUserinfo };
};
