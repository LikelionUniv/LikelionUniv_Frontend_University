import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../utils/request';

interface useGetAdminUsersProps {
    id: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    major: string;
    part: string;
    ordinal: number;
    role: string;
}

interface UserResponse {
    data: User[];
    totalPage: number;
    totalElements: number;
    currentPage: number;
}

function useGetAdminUsers({ id }: useGetAdminUsersProps) {
    const fetchUsers = async () => {
        const response = await request<null, UserResponse, null>({
            uri: `/api/admin/v1/univAdmin/univ/users?page=0&size=12&sort=createdDate%2CDESC`,
            method: 'get',
        });

        return response.data;
    };

    const { data } = useSuspenseQuery({
        queryKey: ['get-users', id],
        queryFn: fetchUsers,
    });

    return {
        data,
    };
}

export default useGetAdminUsers;
