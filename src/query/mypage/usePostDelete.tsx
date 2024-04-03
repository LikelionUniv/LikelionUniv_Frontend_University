import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../api/request';

export const usePostDelete = ({
    postId,
    user_id,
}: {
    postId: number;
    user_id: number;
}) => {
    const queryClient = useQueryClient();

    const deleteProject = async () => {
        await request<null, null, null>({
            uri: `/api/v1/community/posts/${postId}`,
            method: 'delete',
        });
    };

    const { mutate } = useMutation({
        mutationKey: ['post-delete'],
        mutationFn: deleteProject,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    'get-pagiable',
                    { uri: `/api/v1/user/${user_id}/posts` },
                ],
            });
            alert(`게시글이 삭제되었습니다.`);
        },
    });

    return {
        mutate,
    };
};
