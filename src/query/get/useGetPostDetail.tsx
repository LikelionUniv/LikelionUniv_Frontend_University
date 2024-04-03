import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../api/request';
import { Post } from '../../components/community/detail/CommentData';

interface useGetDonatePostProps {
    communityId: number;
}

interface PostDetailParam {
    communityId: number;
}

function useGetPostDetail({ communityId }: useGetDonatePostProps) {
    const fetchPostDetail = async () => {
        const response = await request<null, Post, PostDetailParam>({
            uri: `/api/v1/community/posts/${communityId}`,
            method: 'get',
            params: {
                communityId,
            },
        });
        return response.data;
    };

    const { data } = useSuspenseQuery({
        queryKey: ['community-detail', communityId],
        queryFn: fetchPostDetail,
    });

    return {
        data,
    };
}

export default useGetPostDetail;
