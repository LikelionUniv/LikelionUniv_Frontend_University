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
    isUniversityAdmin: boolean;
}

function useIsAdmin(): RuseIsAdmin {
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
                setIsAdmin(false);
                setIsUniversityAdmin(false);
            }
        };

        fetchUserRole();
    }, []);

    return { isAdmin, isUniversityAdmin };
}

export default useIsAdmin;
