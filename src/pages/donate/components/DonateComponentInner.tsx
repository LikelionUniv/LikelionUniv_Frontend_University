import React from 'react';
import * as DC from './DonateComponent.style';
import PostList from './DonatePostList';
import useServerSidePagination from '../../../query/get/useServerSidePagination';

interface DonateComponentInnerProps {
    order?: string;
    searchQuery?: string;
}

export interface IPost {
    donationHistoryId: number;
    authorId: number;
    authorName: string;
    authorProfileImage: string;
    title: string;
    createdDate: string;
    viewCount: number;
}

function DonateComponentInner({
    order,
    searchQuery,
}: DonateComponentInnerProps) {
    const { curPageItem: posts, renderPaginationBtn } =
        useServerSidePagination<IPost>({
            uri: '/api/v1/donation_history',
            size: 10,
            sort: order,
            search: searchQuery,
        });

    return (
        <>
            <PostList posts={posts} />
            <DC.PageWrapper>{renderPaginationBtn()}</DC.PageWrapper>
        </>
    );
}

export default DonateComponentInner;
