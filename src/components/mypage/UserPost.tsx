import React from 'react';
import { styled } from 'styled-components';
import UserPostSelect from './UserPostSelect';

const UserPost = () => {
    return (
        <PostWrapper>
            <UserPostSelect />
        </PostWrapper>
    );
};

export default UserPost;

const PostWrapper = styled.div`
    margin: 64px auto 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 344px;
    @media (max-width: 1920px) {
        width: 1200px;
        height: 1039px;
    }
    //여기가 지금 약간 문제...
    @media (max-width: 1280px) {
        width: calc(100% - 80px);
        height: 1039px;
    }
    @media (max-width: 1024px) {
        width: calc(100% - 80px);
        height: 1675px;
    }
    @media (max-width: 768px) {
        width: calc(100% - 80px);
        height: 1426px;
    }
`;
