import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostBox from './PostBox';
import Pagination from '../mypage/Pagination';
import { PostBoxProp } from './PostBox';
import { axiosInstance } from '../../utils/axios';

interface PostListProps {
    searchQuery: string;
    order: string;
    mainCategory: string;
    subCategory: string;
}

const PostList: React.FC<PostListProps> = ({ searchQuery, order, mainCategory, subCategory }) => {
    const [posts, setPosts] = useState<Array<PostBoxProp>>([]);
    const [page, setPage] = useState(1);
    const isSearching = searchQuery !== '';

    useEffect(() => {
        const fetchData = async () => {
            let response;
            if (searchQuery) {
                const searchParams = {
                    mc: mainCategory,
                    sc: subCategory,
                    st: searchQuery,
                    page: 1,
                    size: 5
                };
                response = await axiosInstance.get(`/api/v1/community/posts/search`, { params: searchParams });
            } else {
                const params = {
                    oc: order,
                    mc: mainCategory,
                    sc: subCategory,
                    page: page,
                    size: 5
                };
                response = await axiosInstance.get(`/api/v1/community/posts`, { params: params });
            }
            console.log(response.data.data.data);
            setPosts(response.data.data.data);
        };
    
        fetchData();
    }, [searchQuery, order, mainCategory, subCategory, page]);
    

    
    const [totalPage, setTotalPage] = useState<number>(1);


    return (
        <Wrapper>
            <>
                {Array.isArray(posts) && (
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
                )}
            </>
            <PageWrapper>
                <Pagination
                    totalPageNum={totalPage}
                    pageNum={page}
                    setPageNum={setPage}
                />
            </PageWrapper>
        </Wrapper>
    );
};

export default PostList;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const PageWrapper = styled.div`
    margin: 64px 0 100px 0;
`;
