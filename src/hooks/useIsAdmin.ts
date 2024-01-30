import { useEffect, useState } from 'react';
import request from '../utils/request';
import { RolePriority } from '../constants/Role';

interface Userinfo {
    userId: number;
    profileImage: string;
    role: string;
    name: string;
}

interface RuseIsAdmin {
    isAdmin: boolean;
    isLogin: boolean;
    isUniversityAdmin: boolean;
}

function useIsAdmin(): RuseIsAdmin {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isUniversityAdmin, setIsUniversityAdmin] = useState<boolean>(false);

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const response = await request<null, Userinfo, null>({
                    uri: '/api/v1/auth/userinfo',
                    method: 'get',
                });

                setIsAdmin(
                    RolePriority.findIndex(
                        role => role === response.data.role,
                    ) >= 2,
                );
                setIsUniversityAdmin(
                    RolePriority.findIndex(
                        role => role === response.data.role,
                    ) >= 3,
                );
            } catch (error) {
                setIsLogin(false);
                setIsAdmin(false);
                setIsUniversityAdmin(false);
            }
        };

        fetchUserRole();
    }, []);

    return { isLogin, isAdmin, isUniversityAdmin };
}

export default useIsAdmin;
