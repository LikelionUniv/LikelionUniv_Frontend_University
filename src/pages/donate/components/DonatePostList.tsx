import React from 'react';
import styled from 'styled-components';
import DonatePostBox from './DonatePostBox'; // 추가된 부분
import { IPost } from './DonateComponentInner';

interface DonatePostListProps {
    posts: IPost[];
}

const PostList: React.FC<DonatePostListProps> = ({
    posts,
}: DonatePostListProps) => {
    return (
        <Wrapper>
            <>
                {posts.map((e, index) => {
                    // key prop 추가
                    return <DonatePostBox key={index} post={e} />;
                })}
            </>
        </Wrapper>
    );
};

export default PostList;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    width: 100%;
`;
