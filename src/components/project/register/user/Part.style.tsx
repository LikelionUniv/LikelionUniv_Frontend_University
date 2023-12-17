import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const Title = styled.div`
    margin-bottom: 8px;
    color: var(--Orange-600, #ff7710);

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
