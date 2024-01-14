import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';

type PostId = {
    postId: number;
};

export const usePostLike = ({ postId }: { postId: number }) => {
    const controlPostLike = async () => {
        await request<PostId, null, null>({
            uri: `/api/v1/community/post-likes`,
            method: 'post',
            data: {
                postId: postId,
            },
        });
    };

    const { mutate } = useMutation({
        mutationKey: ['post-like-control'],
        mutationFn: controlPostLike,
        onSuccess: () => {},
    });

    return {
        mutate,
    };
};
