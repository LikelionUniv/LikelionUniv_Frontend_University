import styled from 'styled-components';

export const Tab = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 55;
    z-index: 998;
    background-color: #fff;
    width: 100%;

    p,
    div {
        margin: 0;
        padding: 0;
    }

    .board {
        display: flex;
        padding: 9px 20px;
        justify-content: space-between;
    }

    .boards {
        display: flex;
        gap: 24px;
    }

    .subBoard {
        border-top: 1px solid #eaecee;
        background: var(--Grey-100, #f6f8f9);
        display: inline-flex;
        padding: 10px 20px;
        align-items: center;
        gap: 16px;
    }
`;

interface BoardItemProps {
    isSelected: boolean;
}

export const BoardItem = styled.p<BoardItemProps>`
    cursor: pointer;
    color: ${props => (props.isSelected ? '#212224' : '#ADB3BA')};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

interface SubBoardItemProps {
    isSelected: boolean;
}

export const SubBoardItem = styled.p<SubBoardItemProps>`
    cursor: pointer;
    color: ${props => (props.isSelected ? '#212224' : '#868C94')};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: ${props => (props.isSelected ? '700' : '500')};
    line-height: 150%;
`;
