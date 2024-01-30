import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';

function useDeleteUser() {
    const queryClient = useQueryClient();

    const deleteUser = async (userIds: number[]) => {
        await request({
            uri: '/api/admin/v1/univAdmin/users',
            method: 'DELETE',
            data: {
                ids: userIds,
            },
        });
    };

    const { mutate } = useMutation({
        mutationKey: ['user-delete'],
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    'get-pagiable',
                    { uri: '/api/admin/v1/univAdmin/users/' },
                ],
            });
            queryClient.invalidateQueries({
                queryKey: ['get-users'],
            });

            alert(`사용자가 삭제되었습니다.`);
        },
    });

    return {
        mutate,
    };
}

export default useDeleteUser;
