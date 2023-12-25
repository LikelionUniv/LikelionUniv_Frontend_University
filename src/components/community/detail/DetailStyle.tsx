import styled from 'styled-components';
import { RegBtnProps } from './Comment';

export const Container = styled.div`
    max-width: 792px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    font-family: Pretendard;
    flex-direction: column;
    margin-bottom: 200px;

    .back {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;

        color: var(--Grey-900, #212224);
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        cursor: pointer;

        &:hover {
            color: var(--Orange-600, #FF7710);
        }
    }

    .count {

        display: flex;
        align-items: center;
        gap: 6px;
        margin: 66px 0 16px 0;


        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 24px */
    }

`;

/*Header 헤더*/
export const Title = styled.div`
    width: 100%;
    margin: 4px 0 16px 0;

    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const Dot = styled.div`
    width: 2px;
    height: 2px;
    background-color: var(--Grey-800, #4D5359);
    border-radius: 50%;
`;

export const User = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--Grey-300, #EAECEE);;
    
    

    .left {
        display: flex;
        gap: 8px;
        align-items: flex-start;
    }

    .image {
        background-color: transparent;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        flex-shrink: 0;
        border: 0.75px solid #eaecee;
        object-fit: cover;
    }

    .userBox {
        display: flex;
        gap: 8px;
        align-items: center;

        .name {
            color: var(--Grey-900, #212224);
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%; /* 24px */
        }

        .followBtn {
            display: flex;
            padding: 3px 0;
            width: 56px;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            background: var(--Orange-600, #FF7710);

            color: var(--White, #FFF);
            text-align: center;
            font-family: Pretendard;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%; /* 18px */
            cursor: pointer;

            &:hover {
                background: var(--Grey-900, #212224);
            }

            &.followed {
                background: #212224;

                &:hover span {
                    display: none;
                }

                &:hover::after {
                    display: flex;
                    content: '언팔로우';
                    color: #FF7710;
                }
            }
        }
    }

    .userInfo {
        display: flex;
        margin-top: 3px;
        align-items: center;
        gap: 4px;

        p {
            color: var(--Grey-800, #4D5359);
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 21px */
        }
    }

    .right {
        display: flex;
        gap: 16px;
        align-self: flex-end;
        align-items: center;

        .icons {
            gap: 4px;
            display: flex;
            align-items: center;

            color: var(--Grey-800, #4D5359);
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 21px */
        }

        .btns {
            gap: 7.5px;
            display: flex;
            cursor: pointer;
            margin-left: 16px;

            p {
                display: inline-flex;
                padding: 5.5px 16px;
                justify-content: center;
                align-items: center;
                border-radius: 6px;
                border: 1px solid var(--Grey-400, #DCDFE3);

                text-align: center;
                font-family: Pretendard;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%; /* 21px */
            }

            .modify {
                color: var(--Grey-800, #4D5359);

                &:hover{
                    background: var(--Grey-200, #F2F4F6);
                }
            }

            .delete {
                color: var(--Orange-600, #FF7710);

                &:hover{
                    background: var(--Grey-200, #F2F4F6);
                }
            }
        }
    }

`;

/*TextArea 본문*/
export const TextArea = styled.div`
    width: 100%;
    margin: 48px 0 64px 0;
`;

/*Like 좋아요*/
export const Like = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .likeBtn {
        display: flex;
        flex-direction: column;
        gap: 8px;
        cursor: pointer;

        color: var(--Grey-600, #ADB3BA);
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;

        &:hover {
            color: var(--Grey-900, #212224);
        }
    }

    .likeBtn.liked {
        color: #ff7710;
    }

    .likeBtn:hover {
        color: #212224;
    }

    
`;

/*Comment 댓글입력창*/

export const CommentWrapper = styled.div`
    width: 100%;
`;

export const WriteComment = styled.div<{ borderColor: string }>`
    border-radius: 6px;
    border: 1px solid ${props => props.borderColor};
    background: var(--White, #FFF);
    width: 100%;
    padding: 12px 24px;
    height: fit-content;
    display: flex;
    align-items: center;

    .text {
        width: 100%;
        outline: none;
        border: none;
        resize: none;
        overflow: hidden;

        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
    }
`;

export const RegBtn = styled.div<RegBtnProps>`
    display: inline-flex;
    padding: 5.5px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: var(--Orange-600, #FF7710);
    margin: 8px 0 32px 0;
    float: inline-end;
    cursor: pointer;

    color: var(--White, #FFF);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */

    background: ${props => props.inputEmpty ? '#ADB3BA' : 'var(--Orange-600, #FF7710)'};

    &:hover {
        background: ${props => props.inputEmpty ? '#ADB3BA' : '#212224'};
    }

    
`;

/*ParentBox 댓글*/

export const BoxWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 110px;
    padding: 16px 0px;
    align-items: flex-start;
    justify-content: space-between;
    border-top: 1px solid var(--Grey-300, #EAECEE);
    position: relative;

    .menu {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

`;

export const BoxLeft = styled.div`
    gap: 8px;
    display: flex;

    .profile {
        background-color: transparent;
        border-radius: 40px;
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        border: 0.625px solid #eaecee;
        object-fit: cover;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .body {
            color: var(--Grey-900, #212224);
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 25.6px */
        }

        .wrapper {
            display: flex;
            gap: 6px;
            align-items: center;

            color: var(--Grey-700, #868C94);
            font-family: Pretendard;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 18px */

            .user {
                color: var(--Grey-900, #212224);
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%; /* 24px */
            }

            .author {
                display: flex;
                padding: 1px 6px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 10px;
                background: var(--Orange-600, #FF7710);

                color: var(--White, #FFF);
                text-align: center;
                font-family: Pretendard;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%; /* 15px */
            }

            .icons {
                gap: 4px;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
        }
    }
`;

export const Dot2 = styled.div`
    width: 2px;
    height: 2px;
    background-color: var(--Grey-700, #868C94);
    border-radius: 50%;
`;

export const MenuBtn = styled.div`
    border-radius: 6px;
    border: 1px solid var(--Grey-400, #DCDFE3);
    background: var(--White, #FFF);
    padding: 4px;
    flex-shrink: 0;
    position: absolute;
    top: 44px;
    right: 0;
    z-index: 1;

    .btns{
        padding: 8px 20px;
        border-radius: 4px;
        background: #fff;
        cursor: pointer;

        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */

        &:hover {
            background: var(--Grey-300, #EAECEE);
        }
    }
`;

export const ReplyBox = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    padding: 16px 0 16px 48px;
    align-items: flex-start;
    justify-content: space-between;
    border-top: 1px solid var(--Grey-300, #EAECEE);
`;
