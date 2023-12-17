import exp from 'constants';
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 792px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    font-family: Pretendard;
    flex-direction: column;
    margin-bottom: 200px;

    .btns {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
        margin-top: 40px;
    }
`;

export const Title = styled.div`
    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    margin-bottom: 24px;
`

export const Tab = styled.div`
    border-radius: 6px;
    border: 1px solid var(--Grey-400, #DCDFE3);
    background: var(--White, #FFF);
    padding: 20px 24px 17px 24px;
    gap: 10px;
    display: flex;
    flex-direction: column;

    p, div {
        margin: 0;
        padding: 0;
    }

    .sub {
        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }

    .board {
        display: flex;
        gap: 16px;
    }

    .subBoard {
        border-radius: 6px;
        background: var(--Orange-100, #FFF2E8);
        display: inline-flex;
        padding: 10px 16px;
        align-items: center;
        gap: 24px;
    }
`

interface BoardItemProps {
    isSelected: boolean;
}
  
export const BoardItem = styled.p<BoardItemProps>`
    cursor: pointer;
    color: ${(props) => (props.isSelected ? '#FF7710' : '#ADB3BA')};
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

interface SubBoardItemProps {
    isSelected: boolean;
}
  
export const SubBoardItem = styled.p<SubBoardItemProps>`
    cursor: pointer;
    color: ${(props) => (props.isSelected ? '#FF7710' : '#868C94')};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: ${(props) => (props.isSelected ? '700' : '500')};
    line-height: 150%; 

`;

export const WriteTitle = styled.input`

    border-radius: 6px;
    border: 1px solid var(--Grey-400, #DCDFE3);
    background: var(--White, #FFF);
    padding: 14px 24px;
    margin: 8px 0;

    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    &::placeholder { 
        color: var(--Grey-600, #ADB3BA);
        opacity: 1;
    }

    &:focus {
        outline: none;
    }
`

export const CancelBtn = styled.div`
    display: flex;
    padding: 13px 28px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--Grey-300, #EAECEE);
    color: var(--Grey-800, #4D5359);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    &:hover {
        background: var(--Grey-500, #D1D4D8);
    }
`

export const RegBtn = styled.div`
    display: flex;
    padding: 13px 28px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--Grey-600, #ADB3BA);
    color: var(--White, #FFF);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    &:hover {
        background: var(--Grey-900, #212224);
    }
`