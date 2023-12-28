import React from 'react';
import styled from 'styled-components';
import { PostCardProp } from '../mypage/type';
import heart from '../../img/community/heart16.svg';
import comment from '../../img/community/comment16.svg';
import { useNavigate } from 'react-router-dom';

export interface PostBoxProp extends PostCardProp {
    user: string;
    profile: string | null;
}

const PostBox: React.FC<PostBoxProp> = props => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/community/1`);
    };

    return (
        <Wrapper onClick={onClick}>
            <BoxWrapper>
                <Box className="title">{props.title}</Box>
                <Box className="content">{props.content}</Box>
                <Box className="nav">
                    <div className="wrapper">
                        <Box
                            className="profile"
                            style={{
                                backgroundImage: `url(${props.profile})`,
                            }}
                        ></Box>
                        <div className="user">{props.user}</div>
                    </div>
                    <Dot />
                    <Box className="date">{props.date}</Box>
                    <Dot />
                    <div className="wrapper">
                        <div className="heart" />
                        <div>{props.like}</div>
                    </div>
                    <Dot />
                    <div className="wrapper">
                        <div className="comment" />
                        <div>{props.comment}</div>
                    </div>
                </Box>
            </BoxWrapper>
            <Box
                className="photo"
                img={props.img}
                style={{
                    backgroundImage: props.img ? `url(${props.img})` : 'none',
                }}
            ></Box>
        </Wrapper>
    );
};

export default PostBox;

const Wrapper = styled.div`
    width: 100%;
    height: 216px;
    border-bottom: 1px solid #dcdfe3;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

const BoxWrapper = styled.div`
    padding: 28px 32px 28px 0;
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
        color: var(--Grey-700, #868c94);
        font-size: 14px;
        line-height: 150%;
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
    }
    &.content {
        font-size: 16px;
        overflow: hidden;
        line-height: 150%;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 22px;
        white-space: pre-line;
    }
    &.photo {
        background-repeat: no-repeat;
        flex-shrink: 0;
        width: ${props => (props.img ? '180px' : '0')};
        height: ${props => (props.img ? '180px' : '0')};
        background-size: cover;
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
                }
            }
        }
    }
`;
