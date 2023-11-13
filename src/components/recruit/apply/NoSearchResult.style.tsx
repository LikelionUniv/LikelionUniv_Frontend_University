import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 192px;
    margin-top: 8px;

    box-sizing: border-box;
    white-space: pre-line;

    border-radius: 8px;
    border: 1px solid var(--Grey-200, #f2f4f6);

    background: var(--Grey-200, #f2f4f6);
    color: var(--Grey-700, #868c94);
`;

export const Content = styled.div`
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;

    text-align: center;
`;

export const Keyword = styled.span`
    color: var(--Orange-600, #ff7710);
    text-align: center;

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const UnivRecruit = styled.div`
    margin-top: 32px;

    @media screen and (max-width: 450px) {
        margin: 0 auto;
        margin-top: 154px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Text = styled.div`
    color: var(--Grey-700, #868c94);

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`;

export const UnivBtn = styled.button`
    display: flex;
    margin-top: 8px;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 6px;

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
