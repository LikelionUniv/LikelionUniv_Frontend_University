import { styled } from 'styled-components';
import heart from '../../img/mypage/heart.svg';
import comment from '../../img/mypage/comment.svg';

interface PhotoCheck {
    photoTitle?: boolean;
}

export const PostCardBoxWrapper = styled.div<PhotoCheck>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: var(--Grey-100, #f6f8f9);
    flex-shrink: 0;
    @media (max-width: 1920px) {
        width: 384px;
        height: 362px;
        padding: 24px 16px 18px 24px;
    }
    //여기가 문제...
    @media (max-width: 1280px) {
        width: 31.6%;
        height: calc(50% - 12px);
        padding: 27px 24px 16px 24px;
    }
    @media (max-width: 1024px) {
        width: calc(50% - 12px);
        height: 31.6%;
        padding: 27px 24px 16px;
    }
    @media (max-width: 767px) {
        width: calc(50% - 12px);
        height: 31.6%;
        padding: 23px 20.5px 20px 21px;
    }
    @media (max-width: 479px) {
        width: 100%;
        height: ${({ photoTitle }) => (photoTitle ? '358px' : '160px')};
    }
    //여기 부분은 나중에 바꾸면 된다
    @media (max-width: 360px) {
        width: 100%;
        height: 291px;
        padding: 23px 20px 20px;
    }
    &.photo {
        background: white;
        @media (max-width: 1920px) {
            padding: 0px;
        }
    }
`;

export const PostCardBox = styled.div<PhotoCheck>`
    width: 100%;
    line-height: 150%;
    font-weight: 500;
    &.date {
        color: var(--Grey-700, #868c94);
        font-size: 12px;
        font-weight: 500;
        line-height: 150%;
    }
    &.title {
        font-size: 20px;
        font-weight: 700;
        margin: ${({ photoTitle }) =>
            photoTitle ? '8px 0px' : '11px 0px 8px'};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        @media (max-width: 479px) {
            margin: 4px 0px 0px;
        }
    }
    &.content {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${({ photoTitle }) => (photoTitle ? 1 : 4)};
        -webkit-box-orient: vertical;
        margin: 8px 0px 16px;
        @media (max-width: 479px) {
            margin: 0px 0px 8px;
            font-size: 14px;
            -webkit-line-clamp: ${({ photoTitle }) => (photoTitle ? 1 : 2)};
        }
        @media (max-width: 360px) {
            margin: 0px 0px 16px;
            font-size: 14px;
            -webkit-line-clamp: ${({ photoTitle }) => (photoTitle ? 1 : 4)};
        }
    }
    &.photo {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        z-index: 10;
        margin-bottom: 16px;
        @media (max-width: 1920px) {
            height: 216px;
        }
        @media (max-width: 1280px) {
            height: 60%;
        }
        @media (max-width: 1024px) {
            height: 64%;
        }
        @media (max-width: 479px) {
            height: 247px;
        }
        @media (max-width: 360px) {
            height: 180px;
        }
    }
    &.nav {
        display: inline-flex;
        margin-top: auto;
        height: 24px;
        gap: 6px;
        font-size: 16px;
        line-height: 150%;
        color: rgba(134, 140, 148, 1);
        & > div {
            &.wrapper {
                display: flex;
                gap: 2px;
                .heart {
                    width: 20px;
                    height: 20px;
                    background-repeat: no-repeat;
                    background-image: url(${heart});
                }
                .comment {
                    width: 20px;
                    height: 20px;
                    background-repeat: no-repeat;
                    background-image: url(${comment});
                }
            }
        }
    }
`;
