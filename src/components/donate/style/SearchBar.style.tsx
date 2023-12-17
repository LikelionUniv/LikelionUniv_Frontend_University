import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 588px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid var(--Grey-400, #dcdfe3);
`;

export const Input = styled.input`
    width: 80%;
    padding: 8px 16px;
    border: none;
    outline: none;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    &::placeholder {
        color: var(--Grey-600, #adb3ba);
    }
`;

export const Search = styled.img`
    margin-right: 8px;
    &:hover {
        cursor: pointer;
    }
`;
