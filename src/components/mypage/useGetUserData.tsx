import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
    myProjectData,
    mypageData,
    sortOptionAtom,
} from '../../store/mypageData';
import {
    myPageGetLikeApi,
    mypageGetCommentApi,
    mypageGetPostApi,
    mypageGetProjectApi,
} from '../../api/mypage/userpost';
import { userState } from '../../store/user';
import { useEffect } from 'react';

const useGetUserData = async (
    select: string,
    page: number,
    searchValue?: string,
    searchClick?: string,
) => {
    const setProjectData = useSetRecoilState(myProjectData);
    const setUserData = useSetRecoilState(mypageData);
    const user = useRecoilValue(userState);
    const likeOption = useRecoilValue(sortOptionAtom);
    useEffect(() => {
        const getData = async (select: string) => {
            if (select === '게시글') {
                const data = await mypageGetPostApi(user.userId, page);
                setUserData(data);
            } else if (select === '댓글') {
                const data = await mypageGetCommentApi(user.userId, page);
                setUserData(data);
            } else if (select === '좋아요') {
                const data =
                    searchValue !== ''
                        ? likeOption === null
                            ? await myPageGetLikeApi(
                                  user.userId,
                                  page,
                                  undefined,
                                  searchValue,
                              )
                            : await myPageGetLikeApi(
                                  user.userId,
                                  page,
                                  likeOption.value,
                                  searchValue,
                              )
                        : likeOption === null
                        ? await myPageGetLikeApi(user.userId, page)
                        : await myPageGetLikeApi(
                              user.userId,
                              page,
                              likeOption.value,
                          );
                setUserData(data);
            } else {
                const data = await mypageGetProjectApi(user.userId, page);
                setProjectData(data);
            }
        };
        getData(select);
    }, [select, page, likeOption, searchClick, user.userId]);
};

export default useGetUserData;
