import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 40px;
    padding: 4px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid var(--Grey-400, #dcdfe3);
    margin-left: 10px;
`;

export const Input = styled.input`
    height: 90%;
    width: 80%;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
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
