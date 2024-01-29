import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';
import { useNavigate } from 'react-router-dom';

export interface UserType {
    name: string;
    major: string;
    part: string;
    ordinal: number;
    role: string;
}

interface usePatchUserProps {
    userId: number;
}

function usePatchUser({ userId }: usePatchUserProps) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const patchUser = async (user: UserType) => {
        const response = await request<UserType, any, UserType>({
            uri: `/api/admin/v1/univAdmin/users/${userId}`,
            method: 'PATCH',
            data: user,
        });

        return response;
    };

    const { mutate } = useMutation({
        mutationFn: patchUser,
        onSuccess: () => {
            // 적절한 쿼리를 무효화하여 데이터를 최신 상태로 유지합니다.
            queryClient.invalidateQueries({ queryKey: ['users-list'] });
            alert(`수정 완료`);
            navigate(0);
        },
    });

    return { mutate };
}

export default usePatchUser;
