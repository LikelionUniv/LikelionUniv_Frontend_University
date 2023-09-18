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
    @media (max-width: 1024px) {
        width: 944px;
        height: 1675px;
    }
    @media (max-width: 768px) {
        width: 688px;
        height: 1426px;
    }
`;
