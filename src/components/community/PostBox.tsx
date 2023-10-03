import React from 'react'
import styled from 'styled-components'
import { PostCardProp } from '../mypage/type';
import heart from '../../img/community/heart16.svg'
import comment from '../../img/community/comment16.svg';


export interface PostBoxProp extends PostCardProp{
    user: string
    profile: string|null
}


const PostBox:React.FC<PostBoxProp> = (props) => {
  return (
    <Wrapper>
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
                <Box className="date">{props.date}</Box>
                <div className="wrapper">
                    <div className="heart" />
                    <div>{props.like}</div>
                </div>
                <div className="wrapper">
                    <div className="comment" />
                    <div>{props.comment}</div>
                </div>
            </Box>
        </BoxWrapper>
        <Box className="photo" img={props.img} style={{
            backgroundImage: props.img ? `url(${props.img})` : 'none',
        }}> 
        </Box>
    </Wrapper>
  )
}

export default PostBox

const Wrapper = styled.div`
  width: 100%;
  height: 216px; 
  border-bottom: 1px solid #DCDFE3;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const BoxWrapper = styled.div`
  padding: 28px 32px 28px 0;
`;

//디테일 수정 필요
export const Box = styled.div<{ img?: string | null }>`
    line-height: 150%;
    font-weight: 500;
    &.date {
        color: var(--Grey-700, #868c94);
        font-size: 14px;
    }
    &.title {
        font-size: 20px;
        font-weight: 700;
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
        width: ${props => props.img ? '180px' : '0'};
        height: ${props => props.img ? '180px' : '0'};
    }
    &.nav {
        display: inline-flex;
        align-items: center;
        margin-top: auto;
        height: 28px;
        gap: 16px;
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
                    width: 50px;
                    font-weight: 700;
                    color: var(--Grey-900, #212224);
                }
            }
        }
    }
`;
