import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    width: 100%;
    box-sizing: border-box;
`;

export const Input = styled.input`
    width: 680px;
    height: 48px;
    margin-right: 8px;
    padding: 12px 24px;

    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background: var(--white, #fff);
    box-sizing: border-box;

    color: var(--grey-900, #212224);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    outline: 0;

    &::placeholder {
        color: var(--grey-600, #adb3ba);
    }
    &:focus {
        border: 1px solid var(--orange-600, #ff7710);
    }
`;

export const SearchBtn = styled.button`
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;

    border: none;
    border-radius: 8px;
    background: var(--Grey-300, #eaecee);

    color: var(--Grey-800, #4d5359);
    text-align: center;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    &:hover {
        cursor: pointer;
    }
`;

export const SearchResultContainer = styled.div<{ show: boolean }>`
    display: ${props => (props.show ? 'block' : 'none')};
    position: absolute;
    top: 52px;

    width: 792px;
    min-height: 80px;
    max-height: 216px;
    flex-shrink: 0;

    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        margin: 4px 0;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background: #d1d4d8;
        border-radius: 3px;

        &:hover {
            background: #d1d4d8;
        }
    }

    border-radius: 6px;
    border: 1px solid var(--Grey-400, #dcdfe3);
    background: var(--White, #fff);
`;

export const NoResult = styled.div`
    padding: 12px 25px;
    color: var(--Grey-700, #868c94);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
`;
