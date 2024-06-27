import styled from 'styled-components';
import { ReactComponent as CancelIcon } from '../../img/application/Cancel16.svg';

export const SelectedOptionsWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;

    padding-top: 8px;
    gap: 0 8px;
`;

export const SelectedOption = styled.div`
    display: flex;

    height: 40px;

    align-items: center;
    justify-content: center;

    padding: 4px 16px;

    border-radius: 28px;
    border: 1px solid var(--grey-400, #dcdfe3);

    color: var(--Grey-700, #868c94);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
`;

export const SelectedLabel = styled.span<{ width: number }>`
    display: inline-block;
    width: ${props => props.width}px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledCancelIcon = styled(CancelIcon)`
    margin-left: 4px;
    cursor: pointer;
`;
