import { useInfiniteQuery } from '@tanstack/react-query';

import { axiosInstance } from '../../utils/axios';
import { useAuth } from '../../hooks/useAuth';

interface Follow {
    currentPage: number;
    size: number;
    hasNext: boolean;
    data: [];
}

async function userFollowApi(
    user_id: number,
    page: number,
    follow: string,
): Promise<Follow> {
    const response = await axiosInstance.get(
        `/api/v1/user/${user_id}/${follow}?page=${page}&size=5`,
    );
    return response.data.data;
}

export function useLoadFollow(follow: string) {
    const {
        userinfo: { userId },
    } = useAuth();
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
        useInfiniteQuery({
            queryKey: [follow, userId],
            queryFn: ({ pageParam }) =>
                userFollowApi(userId, pageParam, follow),
            initialPageParam: 1,
            getNextPageParam: lastPage => {
                console.log(lastPage);
                return lastPage.hasNext ? lastPage.currentPage + 1 : undefined;
            },
        });

    return { data, fetchNextPage, isFetchingNextPage, hasNextPage };
}
