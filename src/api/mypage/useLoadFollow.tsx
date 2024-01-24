import { useInfiniteQuery } from '@tanstack/react-query';

import { axiosInstance } from '../../utils/axios';

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
        `/api/v1/user/${user_id}/${follow}?page=${page}&size=4`,
    );
    return response.data.data;
}

export function useLoadFollow(userId: number, follow: string) {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
        useInfiniteQuery({
            queryKey: [follow, userId],
            queryFn: ({ pageParam }) =>
                userFollowApi(userId, pageParam, follow),
            initialPageParam: 1,
            getNextPageParam: lastPage => {
                return lastPage.hasNext ? lastPage.currentPage + 1 : undefined;
            },
        });

    return { data, fetchNextPage, isFetchingNextPage, hasNextPage };
}
