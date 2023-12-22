import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 64px;
    box-sizing: border-box;

    overflow: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const TabContainer = styled.div`
    display: flex;
    gap: 0 24px;
`;

export const Tab = styled.div`
    position: relative;

    padding: 5px 0;

    color: var(--Grey-600, #adb3ba);
    text-align: center;
    /* Subtitle/20_Bold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    &.selected {
        color: var(--Grey-900, #212224);

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 3px;

            background-color: #212224;
        }
    }

    &:hover {
        cursor: pointer;
    }
`;

export const Divider = styled.div`
    display: none;
`;

export const WriteBtn = styled.button<{isAdmin: boolean}>`
    display: ${props => props.isAdmin ? 'inline-flex' : 'none'};
    margin-left: 20px;
    padding: 8px 20px 8px 14px;
    justify-content: center;
    align-items: center;
    gap: 6px;

    border-radius: 6px;
    border: none;
    background: var(--Orange-600, #ff7710);

    color: var(--White, #fff);
    text-align: center;
    /* Subtitle/16_Bold */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */

    &:hover {
        cursor: pointer;
    }
`;
