import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        margin: 0 auto;

        box-sizing: border-box;

        overflow: auto;
        white-space: nowrap;

        &::-webkit-scrollbar {
            display: none;
        }
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
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    &.selected {
        color: var(--Grey-900, #ff7710);

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 3px;
            background-color: #ff7710;
        }
    }

    &:hover {
        cursor: pointer;
    }
`;
