import React, { useEffect, useState } from 'react';
import {
    SearchAndSortWrapper,
    SearchBoxWrapper,
    SearchInput,
    SearchSVG,
} from './LikeCompoStyle';
import SortBox from './SortBox';
import { PostBoxWrapper } from './UserPostSelect';
import EmptyBox from './EmptyBox';
import PostCard from './PostCard';
import PostCardWithPhoto from './PostCardWithPhoto';
import useServerSidePagination from '../../query/get/useServerSidePagination';
import { MypagePostCardPropType } from './type';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { sortOptionAtom } from '../../store/mypageData';
import { useLocation, useParams } from 'react-router-dom';
import { userState } from '../../store/user';
import { PaginationWrapper } from '../project/ProjectList.style';
import { useQueryClient } from '@tanstack/react-query';

const LikeSelect = ({ select }: { select: string }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchClick, setSearchClick] = useState<string | undefined>(
        undefined,
    );
    const likeOption = useRecoilValue(sortOptionAtom);
    const location = useLocation().pathname;
    const params = useParams();
    const user = useRecoilValue(userState);
    const resetSelectOption = useResetRecoilState(sortOptionAtom);
    const user_id =
        location.includes('userpage') && params.user_id !== undefined
            ? parseInt(params.user_id)
            : user.userId;
    const queryClient = useQueryClient();
    useEffect(() => {
        setSearchValue('');
        setSearchClick('');
        resetSelectOption();
    }, [select]);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    const handleInputClick = () => {
        if (searchValue === '') {
            setSearchClick(undefined);
        } else {
            setSearchClick(searchValue);
        }
    };
    const { curPageItem: posts, renderPaginationBtn } =
        useServerSidePagination<MypagePostCardPropType>({
            uri: `/api/v1/user/${user_id}/posts/like`,
            size: 6,
            sort: likeOption?.value,
            search: searchClick,
        });
    // useEffect(() => {
    //     select === '좋아요'
    //         ? queryClient.invalidateQueries({
    //               queryKey: [
    //                   'get-pagiable',
    //                   {
    //                       uri: `/api/v1/user/${user_id}/posts/like`,
    //                       size: 6,
    //                       sort: likeOption?.value,
    //                       search: searchClick,
    //                   },
    //               ],
    //           })
    //         : console.log('아무 변경 X');
    // }, [select]);
    return (
        <>
            <SearchAndSortWrapper>
                <SearchBoxWrapper>
                    <SearchInput
                        type="text"
                        placeholder="검색"
                        onChange={handleInputChange}
                    />
                    <SearchSVG onClick={handleInputClick}></SearchSVG>
                </SearchBoxWrapper>
                <SortBox select={select} />
            </SearchAndSortWrapper>
            <PostBoxWrapper>
                {Array.isArray(posts) && posts.length !== 0 ? (
                    posts.map(e => {
                        if (e.thumbnail !== null) {
                            return (
                                <PostCardWithPhoto
                                    key={e.id}
                                    id={e.id}
                                    isAuthor={e.isAuthor}
                                    thumbnail={e.thumbnail}
                                    title={e.title}
                                    createdDate={e.createdDate}
                                    body={e.body}
                                    likeCount={e.likeCount}
                                    commentCount={e.commentCount}
                                    type={select}
                                />
                            );
                        } else {
                            return (
                                <PostCard
                                    key={e.id}
                                    id={e.id}
                                    isAuthor={e.isAuthor}
                                    thumbnail={e.thumbnail}
                                    title={e.title}
                                    createdDate={e.createdDate}
                                    body={e.body}
                                    likeCount={e.likeCount}
                                    commentCount={e.commentCount}
                                    type={select}
                                />
                            );
                        }
                    })
                ) : (
                    <EmptyBox name={select} />
                )}
            </PostBoxWrapper>
            <PaginationWrapper>{renderPaginationBtn()}</PaginationWrapper>
        </>
    );
};

export default LikeSelect;
