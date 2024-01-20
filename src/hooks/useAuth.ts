import { useQuery, useQueryClient } from '@tanstack/react-query';

import { requestUserInfo } from '../api/auth/auth';

export const useAuth = () => {
    const access_token = localStorage.getItem('access_token');
    const queryClient = useQueryClient();

    const fetchUser = async () => {
        const response = await requestUserInfo();
        return { ...response.data, isLogin: true };
    };

    const {
        data: userinfo,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['login-user-information'],
        queryFn: fetchUser,
        enabled: !!access_token,
    });

    const handleLogout = () => {
        localStorage.clear();
        queryClient.removeQueries({ queryKey: ['login-user-information'] });
    };

    return { userinfo, isLoading, error, handleLogout };
};
