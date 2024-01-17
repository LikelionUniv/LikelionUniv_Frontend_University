import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 204px);
    flex-shrink: 0;
    padding: 24px;
    border-radius: var(--Percent, 0px);
    overflow-x: hidden;
    overflow-y: scroll;
    text-align: center;
`;

export const Date = styled.div`
    display: inline-flex;
    padding: 1px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    background: var(--Grey-300, #eaecee);
    color: var(--Grey-800, #4d5359);
    text-align: center;

    /* Body/12_Medium */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */
`;
