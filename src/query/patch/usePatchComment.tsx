import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';

interface usePatchCommentProps {
    commentId: number;
    communityId: number;
    userId: number;
}

function usePatchComment({
    commentId,
    communityId,
    userId,
}: usePatchCommentProps) {
    const queryClient = useQueryClient();

    const SoftdeleteComments = async () => {
        await request<null, null, null>({
            uri: `/api/v1/community/disable/${commentId}`,
            method: 'patch',
        });
    };

    const { mutate } = useMutation({
        mutationKey: ['comment-delete'],
        mutationFn: SoftdeleteComments,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['community-comment', communityId],
            });
            queryClient.invalidateQueries({
                queryKey: ['community-detail', communityId],
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'get-pagiable',
                    { uri: `/api/v1/user/${userId}/posts/comment` },
                ],
            });
            queryClient.invalidateQueries({
                queryKey: ['get-pagiable', { uri: `/api/v1/community/posts` }],
            });
        },
    });

    return {
        mutate,
    };
}

export default usePatchComment;
