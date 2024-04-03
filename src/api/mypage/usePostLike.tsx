import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../request';

type PostId = {
    postId: number;
};

type userPostLikeType = {
    postId: number;
    user_id: number;
    currentPage: number;
};

export const usePostLike = (props: userPostLikeType) => {
    const queryClient = useQueryClient();
    const controlPostLike = async () => {
        await request<PostId, null, null>({
            uri: `/api/v1/community/post-likes`,
            method: 'post',
            data: {
                postId: props.postId,
            },
        });
    };

    const { mutate } = useMutation({
        mutationKey: ['post-like-control'],
        mutationFn: controlPostLike,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    'get-pagiable',
                    { uri: `/api/v1/user/${props.user_id}/posts/like` },
                ],
            });
            alert(`해당 게시글의 좋아요를 취소합니다.`);
        },
    });

    return {
        mutate,
    };
};
