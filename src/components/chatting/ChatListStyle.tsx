import styled from 'styled-components';

export const Container = styled.div`
    width: 264px;
    height: 100%;
    flex-shrink: 0;
    fill: var(--White, #fff);
    stroke-width: 1px;
    stroke: var(--Grey-300, #eaecee);

    @media (max-width: 1280px) {
        width: 264px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 72px;
    align-items: center;
    border-radius: 8px 0px 0px 0px;
    border: 1px solid var(--Grey-300, #eaecee);
    background: var(--White, #fff);
    @media (max-width: 1280px) {
        width: 100%;
    }
    @media (min-width: 768px) {
        min-width: 768px;
    }
`;

export const HeaderText = styled.text`
    color: var(--Grey-900, #212224);
    padding: 18px 182px 18px 40px;

    /* Title/24_Bold */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
`;

export const ListContainer = styled.div`
    padding: 8px 8px 0px 8px;
    margin: 0px;

    @media (max-width: 768px) {
        width: calc(100%-8px);
    }
`;

export const UserChat = styled.div`
    width: 100%;
    height: 80px;
    flex-shrink: 0;
    border-radius: 8px;
    background-color: white;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: var(--Grey-200, #f2f4f6);
    }

    /* &:active,
    &:focus,
    &.active {
        background: var(--Grey-300, #eaecee);
    } */
`;

export const UserProfile = styled.div`
    width: max-content;
    padding: 8px;
    display: flex;
    flex-direction: row;
`;

export const UserChatInfo = styled.div`
    display: flex;
    width: 100%;
    height: 44px;
    padding: var(--Percent, 0px);
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex-shrink: 0;
    border-radius: var(--Percent, 0px);
`;

export const DetailInfo = styled.div`
    display: flex;
    padding: var(--Percent, 0px);
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: var(--Percent, 0px);
`;
export const UserName = styled.span`
    display: flex;
    width: 89px;
    height: 19px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Grey-900, #212224);

    /* Subtitle/16_Bold */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
`;

export const UserDetail = styled.span`
    color: var(--Grey-800, #4d5359);

    /* Body/14_Medium */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
`;
