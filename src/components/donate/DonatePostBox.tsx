import React from 'react';
import styled from 'styled-components';
import eye from '../../img/donate/eye.svg';
import comment from '../../img/community/comment16.svg';
import { IPost } from './DonateComponent';

interface DonatePostBoxProps {
    post: IPost
}

function DonatePostBox({post}: DonatePostBoxProps) {
    return (
        <Wrapper>
            <BoxWrapper>
                <Box className="title">{post.title}</Box>
                <Box className="nav">
                    <div className="wrapper">
                        <Box
                            className="profile"
                            style={{
                                backgroundImage: `url(${post.authorProfileImage})`,
                            }}
                        ></Box>
                        <div className="user">{post.authorName}</div>
                    </div>
                    <Dot />
                    <Box className="date">{post.createdDate}</Box>
                    <Dot />
                    <div className="wrapper">
                        <img src={eye} alt="eye" className="eye" />
                        <div>{post.viewCount}</div>
                    </div>
                    <Dot />
                </Box>
            </BoxWrapper>
        </Wrapper>
    );
};

export default DonatePostBox;

const Wrapper = styled.div`
    width: 100%;
    height: 64px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    border-top: 1px solid var(--Grey-400, #DCDFE3);

    &:last-child {
        border-bottom: 1px solid var(--Grey-400, #DCDFE3);
    }
`;

const BoxWrapper = styled.div`
    display: flex;
`;

const Dot = styled.div`
    width: 2px;
    height: 2px;
    background-color: var(--Grey-500, #d1d4d8);
    border-radius: 50%;
`;

export const Box = styled.div<{ img?: string | null }>`
    line-height: 150%;
    font-weight: 500;
    &.date {
        color: var(--Grey-700, #868C94);

        /* Body/14_Medium */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */

    }
    &.title {
        color: var(--Grey-900, #212224);
        /* Subtitle/18_Medium */
        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 27px */
        width: 894px;
    }
    &.nav {
        display: inline-flex;
        align-items: center;
        margin-top: auto;
        height: 28px;
        gap: 6px;
        font-size: 14px;
        color: rgba(134, 140, 148, 1);
        & > div {
            &.wrapper {
                display: flex;
                align-items: center;
                gap: 4px;
                .eye {
                    width: 16px;
                    height: 16px;
                    background-repeat: no-repeat;
                    background-image: url(${eye});
                }
                .comment {
                    width: 16px;
                    height: 16px;
                    background-repeat: no-repeat;
                    background-image: url(${comment});
                }
                .user {
                    color: var(--Grey-900, #212224);
                    /* Subtitle/14_Bold */
                    font-family: Pretendard;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 150%; 
                    width: 37px;
                    height: 21px;
                    gap: 6px;
                }
                .profile {
                    background-repeat: no-repeat;
                    flex-shrink: 0;
                    width: 28px;
                    height: 28px;
                    background-size: cover;
                    border-radius: 50%;
                    border: 0.5px solid #eaecee;
                    margin-right: 6px;
                }
            }
        }
    }
`;
