import { useRecoilState } from 'recoil';
import { userState } from '../store/user';
import { requestUserInfo } from '../api/auth/auth';
import { useEffect } from 'react';


export const useAuth = () => {
    const [userinfo, setUserinfo] = useRecoilState(userState);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        const fetchUser = async () => {
            const userInfo = await requestUserInfo();
            console.log(userInfo);
            setUserinfo(userInfo);
        };
        if (token != null) {
            fetchUser();
        } else {
            console.error('NO ACCESS-TOKEN');
            //refresh token으로 accesstoken 재발급
        }
    }, []);
    
    return userinfo;
}

