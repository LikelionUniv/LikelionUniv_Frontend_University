import * as DC from './style/DonateComponent.style';
import useServerSidePagination from '../../hooks/useServerSidePagination';
import PostList from './DonatePostList';
import OrderDropDown from './DonateOrderDropDown';
import { useState } from 'react';
import SearchBar from './SearchBar';

export interface IPost {
    donationHistoryId: number;
    authorId: number;
    authorName: string;
    authorProfileImage: string;
    title: string;
    createdDate: string;
    viewCount: number;
}

function DonateComponent() {
    const [order, setOrder] = useState<string | undefined>();
    const [searchQuery, setSearchQuery] = useState<string | undefined>();

    const { curPageItem: posts, renderPaginationBtn } =
        useServerSidePagination<IPost>({
            uri: '/v1/donation_history/{donationHistoryId}',
            size: 10,
            sort: order,
            search: searchQuery,
        });

    return (
        <DC.Wrapper>
            <DC.Nav>
                <OrderDropDown setOrder={setOrder} />
                <SearchBar setSearchQuery={setSearchQuery} />
            </DC.Nav>
            <PostList posts={posts} />
            <DC.PageWrapper>{renderPaginationBtn()}</DC.PageWrapper>
        </DC.Wrapper>
    );
}

export default DonateComponent;
