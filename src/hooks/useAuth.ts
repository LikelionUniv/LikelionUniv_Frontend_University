import { useRecoilState } from 'recoil';
import { userState } from '../store/user';
import { requestUserInfo } from '../api/auth/auth';
import { useEffect } from 'react';
import { AxiosError } from 'axios';


export const useAuth = () => {
    const [userinfo, setUserinfo] = useRecoilState(userState);

    useEffect(() => {
        const fetchUser = async () => {
            
            const response = await requestUserInfo()
            if(response instanceof AxiosError){
                setUserinfo({...userinfo , isLogin: false})
                console.log("로그인 상태 X");
            }
            else{
                setUserinfo({...response.data,isLogin: true});
            }
        };

        fetchUser();
    }, []);
    
    return {userinfo, setUserinfo};
}

