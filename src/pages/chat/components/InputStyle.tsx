import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: var(--Percent, 8px) var(--Percent, 15px) var(--Percent, 16px)
        var(--Percent, 16px);
    gap: var(--Percent, 8px);
    border-radius: var(--Percent, 0px) var(--Percent, 0px) 8px
        var(--Percent, 0px);

    @media (max-width: 1279px) {
        width: 100%;
    }
`;

export const Message = styled.form`
    width: 848px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--Grey-300, #eaecee);
    display: flex;
    align-items: center;

    @media (max-width: 1279px) {
        width: calc(100% - 94px);
    }
`;

export const MessageInput = styled.input`
    width: 100%;
    color: var(--Grey-900, #212224);

    /* Body/14_Medium */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */

    &::-ms-input-placeholder {
        color: var(--Grey-600, #adb3ba);

        /* Body/14_Medium */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }
    &::-webkit-input-placeholder {
        color: var(--Grey-600, #adb3ba);

        /* Body/14_Medium */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }
    &::-moz-placeholder {
        color: var(--Grey-600, #adb3ba);

        /* Body/14_Medium */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }

    &:focus {
        outline: none;
    }

    &:active {
        border-radius: 8px;
        border: 1px solid var(--Orange-600, #ff7710);
    }
`;

export const SendMsg = styled.div`
    display: flex;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: var(--Percent, 0px);
    flex-shrink: 0;

    /* 비어있을 때 */
    border-radius: 8px;
    background: var(--Grey-600, #adb3ba);
`;
