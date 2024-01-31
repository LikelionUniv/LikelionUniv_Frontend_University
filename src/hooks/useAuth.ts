import { useQuery, useQueryClient } from '@tanstack/react-query';

import { requestUserInfo } from '../api/auth/auth';

export type User = {
    name: string;
    profileImage: string;
    userId: number;
    role: string;
    isLogin: boolean;
};

const fallback = {
    name: '',
    profileImage: '',
    userId: -1,
    role: '',
    isLogin: false,
};

export const useAuth = () => {
    const access_token = localStorage.getItem('access_token');
    const queryClient = useQueryClient();

    const fetchUser = async () => {
        const response = await requestUserInfo();
        return { ...response.data, isLogin: true };
    };

    const {
        data: userinfo = fallback,
        isLoading,
        error,
    } = useQuery<User>({
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
