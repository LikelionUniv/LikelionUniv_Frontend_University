import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../api/request';
import { PostComment } from '../../pages/community/components/detail/CommentData';

interface useGetCommentProps {
    communityId: number;
}

interface CommentParam {
    communityId: number;
}

function useGetComment({ communityId }: useGetCommentProps) {
    const fetchComment = async () => {
        const response = await request<null, PostComment[], CommentParam>({
            uri: `/api/v1/community/comments?postId=${communityId}`,
            method: 'get',
            params: {
                communityId,
            },
        });
        return response.data;
    };

    const { data: commentData } = useSuspenseQuery({
        queryKey: ['community-comment', communityId],
        queryFn: fetchComment,
    });

    return {
        commentData,
    };
}

export default useGetComment;
