import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-bottom: 4px;

    @media (max-width: 768px) {
        padding-right: 100px;
    }

    &.owner {
        flex-direction: row-reverse;
        padding-right: 24px;

        @media (max-width: 768px) {
            padding-left: 100px;
        }

        p {
            display: inline-flex;
            max-width: max-content;
            padding: 9px 16px;
            margin-right: 24px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 20px;
            background: var(--Orange-200, #ffe4cf);
        }
    }
`;

export const Content = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;

    p {
        display: inline-flex;
        max-width: max-content;
        padding: 9px 16px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 20px;
        background: var(--Grey-200, #f2f4f6);

        color: var(--Grey-900, #212224);
        /* Body/14_Medium */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }
`;

export const TimeInfo = styled.div`
    display: flex;
    color: var(--Grey-700, #868c94);

    /* Body/12_Medium */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */

    &.owner {
        justify-content: flex-end;
        margin-right: 24px;
    }
`;
