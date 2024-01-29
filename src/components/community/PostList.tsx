import React from 'react';
import styled from 'styled-components';
import PostBox from './PostBox';
import { PostBoxProp } from './PostBox';
import useServerSidePagination from '../../query/get/useServerSidePagination';
import useIsPC from '../../hooks/useIsPC';

interface PostListProps {
    searchQuery: string;
    order: string;
    mainCategory: string;
    subCategory: string;
}

const PostList: React.FC<PostListProps> = ({
    searchQuery,
    order,
    mainCategory,
    subCategory,
}) => {
    const isPC = useIsPC();
    const isSearching = searchQuery !== '';
    let paginationParams;

    if (isSearching) {
        paginationParams = {
            uri: `/api/v1/community/posts/search`,
            size: isPC ? 5 : 10,
            st: searchQuery,
            mc: mainCategory,
            sc: subCategory,
            oc: order,
        };
    } else {
        paginationParams = {
            uri: `/api/v1/community/posts`,
            size: isPC ? 5 : 10,
            oc: order,
            mc: mainCategory,
            sc: subCategory,
        };
    }

    const { curPageItem: posts, renderPaginationBtn } =
        useServerSidePagination<PostBoxProp>(paginationParams);
      

    return (
        <Wrapper>
            <>
                {Array.isArray(posts) && 
                    posts.map(e => (
                        <PostBox
                            title={e.title}
                            bodySummary={e.bodySummary}
                            likeCount={e.likeCount}
                            commentCount={e.commentCount}
                            createdDate={e.createdDate}
                            authorName={e.authorName}
                            thumbnailUrl={e.thumbnailUrl}
                            authorProfileImageUrl={e.authorProfileImageUrl}
                            postId={e.postId}
                            hasAuthorProfileImage={e.hasAuthorProfileImage}
                            hasThumbnailUrl={e.hasThumbnailUrl}
                            mainCategory={e.mainCategory}
                            isSearching={isSearching}
                        />
                    ))
                }
            </>
            <PageWrapper>
                <PaginationWrapper>{renderPaginationBtn()}</PaginationWrapper>
            </PageWrapper>
        </Wrapper>
    );
};

export default PostList;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 767px) {
        padding: 0 20px;
    }
`;

const PageWrapper = styled.div`
    margin: 64px 0 100px 0;

    @media screen and (max-width: 767px) {
        margin: 64px 0;
    }
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
