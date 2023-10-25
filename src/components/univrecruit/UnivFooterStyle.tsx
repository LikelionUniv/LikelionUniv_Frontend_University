import { styled } from 'styled-components';

export const UnivFooterWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 304px;
    gap: 32px;
    background: var(--Grey-900, #212224);
`;

export const UnivText = styled.div`
    color: var(--White, #fff);
    font-size: 2rem;
    font-weight: 700;
    line-height: 150%;
`;

export const UnivBtn = styled.div`
    display: flex;
    padding: 16px 32px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--Orange-600, #ff7710);
    cursor: pointer;

    &:hover {
        background: var(--Grey-900, #212224);
    }
    font-size: 20px;
    font-weight: 700;
    color: white;
    line-height: 150%; /* 30px */
`;
