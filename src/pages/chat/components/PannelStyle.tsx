import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 264px);
    height: 100%;
    border-left: 1px solid var(--Grey-300, #eaecee);
    background-color: white;

    @media (max-width: 1280px) {
        padding-right: 24px;
    }
`;

export const Header = styled.div`
    width: fit-content;
    display: flex;
    padding: var(--Percent, 16px) var(--Percent, 0px) var(--Percent, 14px)
        var(--Percent, 16px);
    align-items: center;
    gap: var(--Percent, 0px);
    border-radius: 8px var(--Percent, 0px) var(--Percent, 0px)
        var(--Percent, 0px);
    border-bottom: 1px solid var(--Grey-300, #eaecee);
`;

export const ChatInfo = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: var(--Percent, 0px);
    align-items: center;
    gap: 8px;
    border-radius: var(--Percent, 0px);
`;

export const ChatName = styled.span`
    color: var(--Grey-900, #212224);

    /* Subtitle/20_Bold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
`;

export const Shadow = styled.div`
    width: 100%;
    height: 4px;
    flex-shrink: 0;
    border-radius: var(--Percent, 0px);
    background: linear-gradient(
        180deg,
        rgba(234, 236, 238, 0.5) 0%,
        rgba(220, 223, 227, 0) 100%
    );
    @media (max-width: 1280px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;
