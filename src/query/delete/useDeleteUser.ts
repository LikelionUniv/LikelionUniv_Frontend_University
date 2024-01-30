import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';

interface UseDeleteUserProps {
    userId: number;
}

function useDeleteUser({ userId }: UseDeleteUserProps) {
    const queryClient = useQueryClient();

    const deleteUser = async () => {
        await request<null, null, null>({
            uri: `/api/admin/v1/univAdmin/users/${userId}`,
            method: 'delete',
        });
    };

    const { mutate } = useMutation({
        mutationKey: ['user-delete'],
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    'get-pageable',
                    { uri: '/api/admin/v1/univAdmin/users/' },
                ],
            });
            queryClient.invalidateQueries({
                queryKey: ['get-users', userId],
            });

            alert(`선택한 사용자가 삭제되었습니다.`);
        },
    });

    return { mutate };
}

export default useDeleteUser;
