import { useRecoilState, useRecoilValue } from 'recoil';
import { mypageData, sortOptionAtom } from '../../store/mypageData';
import {
    myPageGetLikeApi,
    mypageGetCommentApi,
    mypageGetPostApi,
} from '../../api/mypage/userpost';
import { userState } from '../../store/user';
import { useEffect, useState } from 'react';
import { ProjectTestData } from './TestData';
import { ProjectCardProp } from './type';

const useGetUserData = async (
    select: string,
    page: number,
    searchValue?: string,
    searchClick?: string,
) => {
    const [testData, setTestData] = useState<Array<ProjectCardProp>>([]);
    const [userData, setUserData] = useRecoilState(mypageData);
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
            }
        };
        if (select === '프로젝트') {
            setTestData(
                ProjectTestData.slice(
                    6 * Math.ceil(page) - 6,
                    6 * Math.ceil(page),
                ),
            );
        } else {
            getData(select);
        }
    }, [select, page, likeOption, searchClick, user.userId]);
};

export default useGetUserData;
