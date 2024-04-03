import React from 'react';
import styled from 'styled-components';
import heart from '../../../img/community/heart16.svg';
import comment from '../../../img/community/comment16.svg';
import profileImage from '../../../img/community/profile.svg';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

export interface PostBoxProp {
    authorName: string;
    postId: number;
    mainCategory?: string;
    subCategory?: string;
    hasAuthorProfileImage: boolean;
    authorProfileImageUrl?: string;
    title: string;
    bodySummary: string;
    hasThumbnailUrl: boolean;
    thumbnailUrl?: string;
    likeCount: number;
    commentCount: number;
    createdDate: string;
    isSearching: boolean;
}

const PostBox: React.FC<PostBoxProp> = props => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/community/${props.postId}`);
    };

    const profileImageUrl = props.hasAuthorProfileImage
        ? `https://${props.authorProfileImageUrl}`
        : profileImage;

    return (
        <Wrapper onClick={onClick} isSearching={props.isSearching}>
            <BoxWrapper isSearching={props.isSearching}>
                {props.isSearching && (
                    <Mc className="mc">{props.mainCategory}</Mc>
                )}
                <Box className="title">{props.title}</Box>
                <Box
                    className="content"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(props.bodySummary),
                    }}
                />
                <Box className="nav">
                    <div className="wrapper">
                        <Box
                            className="profile"
                            style={{
                                backgroundImage: `url(${profileImageUrl})`,
                            }}
                        />
                        <div className="user">{props.authorName}</div>
                    </div>
                    <Dot />
                    <Box className="date">{props.createdDate}</Box>
                    <Dot />
                    <div className="wrapper">
                        <div className="heart" />
                        <div>{props.likeCount}</div>
                    </div>
                    <Dot />
                    <div className="wrapper">
                        <div className="comment" />
                        <div>{props.commentCount}</div>
                    </div>
                </Box>
            </BoxWrapper>
            <Box
                className="photo"
                img={props.thumbnailUrl}
                style={{
                    backgroundImage: props.thumbnailUrl
                        ? `url(${props.thumbnailUrl})`
                        : 'none',
                }}
            ></Box>
        </Wrapper>
    );
};

export default PostBox;

const Wrapper = styled.div<{ isSearching: boolean }>`
    width: 100%;
    height: ${props => (props.isSearching ? '237px' : '216px')};
    border-bottom: 1px solid #dcdfe3;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media screen and (max-width: 767px) {
        height: ${props => (props.isSearching ? '160px' : '138px')};
    }
`;

const BoxWrapper = styled.div<{ isSearching: boolean }>`
    padding: ${props =>
        props.isSearching ? '0px 32px 24px 0' : '28px 32px 28px 0'};

    @media screen and (max-width: 767px) {
        padding: ${props =>
            props.isSearching ? '0px 8px 20px 0' : '20px 8px 20px 0'};
    }
`;

const Dot = styled.div`
    width: 2px;
    height: 2px;
    background-color: var(--Grey-500, #d1d4d8);
    border-radius: 50%;
`;

const Mc = styled.div`
    color: var(--Orange-600, #ff7710);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    width: 100%;
    margin: 24px 0 8px 0;

    @media screen and (max-width: 767px) {
        margin: 20px 0 4px 0;
        font-size: 12px;
    }
`;

export const Box = styled.div<{ img?: string | null }>`
    line-height: 150%;
    font-weight: 500;
    font-family: Pretendard;

    &.date {
        color: var(--Grey-700, #868c94);
        font-size: 14px;
        line-height: 150%;

        @media screen and (max-width: 767px) {
            font-size: 12px;
        }
    }
    &.title {
        font-size: 20px;
        font-weight: 700;
        line-height: 150%;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow-wrap: break-word;

        @media screen and (max-width: 767px) {
            font-size: 16px;
            margin-bottom: 4px;
        }
    }
    &.content {
        height: 72px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 22px;
        white-space: pre-line;

        p {
            font-size: 16px;
            line-height: 150%;
            font-weight: 500;
            color: var(--Grey-800, #4d5359);

            @media screen and (max-width: 767px) {
                font-size: 14px;
            }
        }

        @media screen and (max-width: 767px) {
            height: 42px;
            margin-bottom: 9px;
            -webkit-line-clamp: 2;
        }
    }
    &.photo {
        background-repeat: no-repeat;
        flex-shrink: 0;
        width: ${props => (props.img ? '180px' : '0')};
        height: ${props => (props.img ? '180px' : '0')};
        background-size: cover;

        @media screen and (max-width: 767px) {
            width: ${props => (props.img ? '70px' : '0')};
            height: ${props => (props.img ? '70px' : '0')};
        }
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
                .heart {
                    width: 16px;
                    height: 16px;
                    background-repeat: no-repeat;
                    background-image: url(${heart});
                }
                .comment {
                    width: 16px;
                    height: 16px;
                    background-repeat: no-repeat;
                    background-image: url(${comment});
                }
                .user {
                    width: auto;
                    font-weight: 700;
                    color: var(--Grey-900, #212224);
                    line-height: 150%;
                }
                .profile {
                    background-repeat: no-repeat;
                    flex-shrink: 0;
                    width: 28px;
                    height: 28px;
                    background-size: cover;
                    border-radius: 50%;
                    border: 0.5px solid #eaecee;
                    margin-right: 2px;

                    @media screen and (max-width: 767px) {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }

        @media screen and (max-width: 767px) {
            font-size: 12px;
        }
    }
`;
