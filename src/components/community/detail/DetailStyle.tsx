import styled from 'styled-components';

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
`

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
            padding: 3px 12px;
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
            cursor: pointer;

            color: var(--Grey-800, #4D5359);
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 21px */
        }
    }

`

/*TextArea 본문*/
export const TextArea = styled.div`
    width: 100%;
    margin: 48px 0 64px 0;
`

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

    
`

/*Comment 댓글*/

export const CommentWrapper = styled.div`
    width: 100%;
    margin-top: 66px;
    
    .count {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 16px;


        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 24px */
    }
`
export const WriteComment = styled.div<{ borderColor: string }>`
    border-radius: 6px;
    border: 1px solid ${props => props.borderColor};
    background: var(--White, #FFF);
    width: 100%;
    padding: 12px 24px;
    height: fit-content;

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
`

export const RegBtn = styled.div`
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
`