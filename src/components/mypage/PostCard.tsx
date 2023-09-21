import { styled } from 'styled-components';
import heart from '../../img/mypage/heart.svg';
import comment from '../../img/mypage/comment.svg';
import { PostCardProp } from './type';

const PostCard = (props: PostCardProp) => {
    return (
        //Wrapper에다가 PageRouting 기능 추가하면 완료
        <PostCardBoxWrapper>
            <PostCardBox className="date">{props.date}</PostCardBox>
            <PostCardBox className="title">{props.title}</PostCardBox>
            <PostCardBox className="content">{props.content}</PostCardBox>
            <PostCardBox className="nav">
                <div className="wrapper">
                    <div className="heart" />
                    <div>{props.like}</div>
                </div>
                <div className="wrapper">
                    <div className="comment" />
                    <div>{props.comment}</div>
                </div>
            </PostCardBox>
        </PostCardBoxWrapper>
    );
};

export default PostCard;

export const PostCardBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: var(--Grey-100, #f6f8f9);
    flex-shrink: 0;
    @media (max-width: 1920px) {
        width: 384px;
        height: 426px;
        padding: 26px 16px 15px 24px;
    }
    @media (max-width: 1024px) {
        width: 460px;
        height: 463px;
        padding: 26px 24px 25px;
    }
    @media (max-width: 768px) {
        width: 332px;
        height: 383px;
        padding: 26px 24px 22px;
    }
    &.photo {
        background: white;
        @media (max-width: 1920px) {
            padding: 0px 0px 15px 0px;
        }
        @media (max-width: 1024px) {
            padding: 0px 0px 25px;
        }
        @media (max-width: 768px) {
            padding: 0px 0px 22px;
        }
    }
`;

export const PostCardBox = styled.div`
    width: 100%;
    line-height: 150%;
    font-weight: 500;
    &.date {
        color: var(--Grey-700, #868c94);
        font-size: 12px;
    }
    &.title {
        font-size: 20px;
        font-weight: 700;
        margin: 11px 0px 8px;
    }
    &.content {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
    &.photocontent {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    &.photo {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        z-index: 10;
        margin-bottom: 20px;
        @media (max-width: 1920px) {
            height: 240px;
        }
        @media (max-width: 1024px) {
            height: 288px;
        }
        @media (max-width: 768px) {
            height: 208px;
        }
    }
    &.nav {
        display: inline-flex;
        margin-top: auto;
        height: 27px;
        gap: 16px;
        font-size: 18px;
        color: rgba(134, 140, 148, 1);
        & > div {
            &.wrapper {
                display: flex;
                align-items: center;
                gap: 4px;
                .heart {
                    width: 20px;
                    height: 24px;
                    background-repeat: no-repeat;
                    background-image: url(${heart});
                }
                .comment {
                    width: 20px;
                    height: 24px;
                    background-repeat: no-repeat;
                    background-image: url(${comment});
                }
            }
        }
    }
`;
