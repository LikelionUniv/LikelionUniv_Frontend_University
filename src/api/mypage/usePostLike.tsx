import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';
import {
    MypagePostCardProp,
    MypageQueryPropType,
} from '../../components/mypage/type';
import { useRecoilValue } from 'recoil';
import { likeOptionAtom } from '../../store/mypageData';

type PostId = {
    postId: number;
};

type userPostLikeType = {
    postId: number;
    user_id: number;
    currentPage: number;
};

export const usePostLike = (props: userPostLikeType) => {
    const searchOption = useRecoilValue(likeOptionAtom);
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

    const queryParams =
        typeof searchOption.searchData === 'undefined'
            ? searchOption.sortData?.value !== null
                ? {
                      uri: `/api/v1/user/${props.user_id}/posts/like`,
                      size: 6,
                      sort: searchOption.sortData?.value,
                      search: searchOption.searchData,
                      currentPage: props.currentPage,
                  }
                : {
                      uri: `/api/v1/user/${props.user_id}/posts/like`,
                      size: 6,
                      search: searchOption.searchData,
                      currentPage: props.currentPage,
                  }
            : searchOption.sortData?.value !== null
            ? {
                  uri: `/api/v1/user/${props.user_id}/posts/like`,
                  size: 6,
                  sort: searchOption.sortData?.value,
                  currentPage: props.currentPage,
              }
            : {
                  uri: `/api/v1/user/${props.user_id}/posts/like`,
                  size: 6,
                  currentPage: props.currentPage,
              };
    const { mutate } = useMutation({
        mutationKey: ['post-like-control'],
        mutationFn: controlPostLike,
        onSuccess: () => {
            const queryKey = ['get-pagiable', queryParams];
            const data: MypageQueryPropType | undefined =
                queryClient.getQueryData(queryKey);
            console.log(data);
            const blankpost: Array<MypagePostCardProp> = [
                {
                    id: 0,
                    thumbnail: null,
                    createdDate: '',
                    title: '',
                    body: '',
                    likeCount: 0,
                    commentCount: 0,
                    isAuthor: false,
                    isLiked: false,
                },
            ];
            const post: Array<MypagePostCardProp> =
                typeof data === 'undefined'
                    ? blankpost
                    : data.data.filter(e => e.id === props.postId);
            console.log(post[0]);
            queryClient.setQueryData(
                ['get-pagiable', queryParams],
                typeof data !== 'undefined'
                    ? (oldData: MypageQueryPropType) => ({
                          ...oldData,
                          data: oldData.data.map(e =>
                              e === post[0]
                                  ? {
                                        ...post[0],
                                        likeCount: post[0].isLiked
                                            ? e.likeCount - 1
                                            : e.likeCount + 1,
                                        isLiked: !e.isLiked,
                                    }
                                  : e,
                          ),
                      })
                    : null,
            );
        },
    });

    return {
        mutate,
    };
};
