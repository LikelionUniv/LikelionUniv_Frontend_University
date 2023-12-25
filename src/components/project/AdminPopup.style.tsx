import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    right: 0;
    width: 104px;
    height: 90px;
    padding: 4px;
    box-sizing: border-box;

    border-radius: 6px;
    border: 1px solid var(--Grey-400, #dcdfe3);
    background: var(--White, #fff);
`;

export const Btn = styled.button`
    width: 96px;
    height: 41px;
    box-sizing: border-box;

    border-radius: 4px;
    border: none;
    background: #ffffff;

    color: var(--Grey-900, #212224);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    &:hover {
        cursor: pointer;
        background: var(--Grey-300, #eaecee);
    }
`;
