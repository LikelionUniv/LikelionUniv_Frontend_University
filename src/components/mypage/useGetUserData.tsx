import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
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
import { useLocation, useParams } from 'react-router-dom';

const useGetUserData = async (
    select: string,
    page: number,
    searchValue?: string,
    searchClick?: string,
) => {
    const setProjectData = useSetRecoilState(myProjectData);
    const setUserData = useSetRecoilState(mypageData);
    const resetUserData = useResetRecoilState(mypageData);
    const resetProjectData = useResetRecoilState(myProjectData);
    const location = useLocation().pathname;
    const params = useParams();
    const user = useRecoilValue(userState);
    const user_id =
        location.includes('userpage') && params.user_id !== undefined
            ? parseInt(params.user_id)
            : user.userId;
    const likeOption = useRecoilValue(sortOptionAtom);
    useEffect(() => {
        const getData = async (select: string) => {
            if (select === '게시글') {
                const data = await mypageGetPostApi(user_id, page);
                if (data === undefined) {
                    resetUserData();
                } else {
                    setUserData(data);
                }
            } else if (select === '댓글') {
                const data = await mypageGetCommentApi(user_id, page);
                if (data === undefined) {
                    resetUserData();
                } else {
                    setUserData(data);
                }
            } else if (select === '좋아요') {
                const data =
                    searchValue !== ''
                        ? likeOption === null
                            ? await myPageGetLikeApi(
                                  user_id,
                                  page,
                                  undefined,
                                  searchValue,
                              )
                            : await myPageGetLikeApi(
                                  user_id,
                                  page,
                                  likeOption.value,
                                  searchValue,
                              )
                        : likeOption === null
                        ? await myPageGetLikeApi(user_id, page)
                        : await myPageGetLikeApi(
                              user_id,
                              page,
                              likeOption.value,
                          );
                if (data === undefined) {
                    resetUserData();
                } else {
                    setUserData(data);
                }
            } else {
                const data = await mypageGetProjectApi(user_id, page);
                if (data === undefined) {
                    resetProjectData();
                } else {
                    setProjectData(data);
                }
            }
        };
        getData(select);
    }, [select, page, likeOption, searchClick, user_id]);
};

export default useGetUserData;
