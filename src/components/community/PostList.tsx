import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostBox from './PostBox';
import { TestData } from './DummyData';
import Pagination from '../mypage/Pagination';
import { PostBoxProp } from './PostBox';

interface PostListProps {
    searchQuery: string;
}

const PostList: React.FC<PostListProps> = ({ searchQuery }) => {
    const [page, setPage] = useState(1);
    const [testData, setTestData] = useState<Array<PostBoxProp>>([]);
    const [totalPage, setTotalPage] = useState<number>(1);

    useEffect(() => {
        const filteredData = TestData.filter(post =>
            post.title.includes(searchQuery),
        );
        setTestData(
            filteredData.slice(5 * Math.ceil(page) - 5, 5 * Math.ceil(page)),
        );

        setTotalPage(Math.ceil(filteredData.length / 5));
    }, [page, searchQuery]);

    return (
        <Wrapper>
            <>
                {testData.map(e => {
                    return (
                        <PostBox
                            img={e.img}
                            title={e.title}
                            content={e.content}
                            like={e.like}
                            comment={e.comment}
                            date={e.date}
                            user={e.user}
                            profile={e.profile}
                        />
                    );
                })}
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
