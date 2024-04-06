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
    margin: 64px auto 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (min-width: 1281px) {
        width: 1200px;
        height: 1134px;
    }
    @media (max-width: 1280px) {
        width: calc(100% - 80px);
        height: 100%;
    }
    /* @media (max-width: 1024px) {
        width: calc(100% - 80px);
        height: 1675px;
    }
    @media (max-width: 768px) {
        width: calc(100% - 80px);
        height: 1426px;
    } */
    @media (max-width: 479px) {
        width: calc(100% - 40px);
        height: 2660px;
    }
    @media (max-width: 360px) {
        width: calc(100% - 40px);
        height: 2227px;
    }
`;
