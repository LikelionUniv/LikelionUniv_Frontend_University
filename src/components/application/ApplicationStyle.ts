import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from '../../img/application/chervron_left.svg';

import { ReactComponent as CheckedIcon } from '../../img/application/checked16.svg';
import { ReactComponent as NotCheckedIcon } from '../../img/application/not_checked16.svg';

import RadioCheckedIcon from '../../img/application/radioChecked.svg';
import RadioNotCheckedIcon from '../../img/application/radioNotChecked.svg';

import { ReactComponent as DropdownArrow } from '../../img/arrow.svg';

interface NtxtProps {
    $offlinetxt?: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    margin: 100px 0;
    box-sizing: border-box;

    @media screen and (max-width: 769px) {
        padding: 0 20px;
        width: 100%;
        max-width: 760px;
    }
    @media screen and (max-width: 360px) {
        margin: 40px 0;
    }
`;

export const StyledArrowIcon = styled(ArrowIcon)`
    padding: 3.5px 24px 3.5px 0;
    margin-left: -56px;

    @media screen and (max-width: 360px) {
        padding: 2px 4px 2px 0;
        margin-left: 0;
    }
`;

export const Stitle = styled.div`
    display: flex;
    align-items: center;
    color: var(--grey-900, #212224);
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    @media screen and (max-width: 360px) {
        max-width: 360px;
        font-size: 24px;
        /* Title/24_Bold */
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
    }
`;

export const StyledCheckedIcon = styled(CheckedIcon)`
    padding: 5.5px 0 5.5px 8px;
`;

export const StyledNotCheckedIcon = styled(NotCheckedIcon)`
    padding: 5.5px 0 5.5px 8px;
`;

export const Ndiv = styled.div`
    color: var(--black, #000);
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    margin-top: 34px;
    margin-bottom: 12px;

    display: flex;
`;

export const Nform = styled.input`
    width: 464px;
    height: 48px;
    font-family: Pretendard;
    font-size: 16px;
    color: var(--grey-900, #212224);
    font-weight: 500;
    line-height: 150%;
    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background: var(--white, #fff);
    box-sizing: border-box;
    padding: 12px 16px;
    outline: 0;

    &::placeholder {
        color: var(--grey-600, #adb3ba);
    }

    &:focus {
        border: 1px solid var(--orange-600, #ff7710);
    }

    @media screen and (max-width: 769px) {
        width: 100%;
    }
`;

export const NdropdownDiv = styled.div`
    display: flex;
    width: 464px;
    height: 48px;

    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background: var(--white, #fff);
    box-sizing: border-box;
    padding: 12px 16px;
    outline: 0;

    &:focus {
        border: 1px solid var(--orange-600, #ff7710);
    }

    @media screen and (max-width: 769px) {
        width: 100%;
    }
`;

export const NdropdownArrow = styled(DropdownArrow)`
    cursor: pointer;
`;

export const NdropdownTxt = styled.p`
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-right: 228px;
`;

export const SelectedOptionsWrapper = styled.div`
    padding-top: 8px;
    gap: 0 8px;
    display: flex;
    flex-wrap: nowrap;
`;

export const NradioWrapper = styled.div`
    display: flex;
    flex-direction: row;

    margin: 24px 0;

    line-height: 150%;

    @media screen and (max-width: 360px) {
        flex-direction: column;
    }
`;

export const NradioInput = styled.input.attrs({ type: 'radio' })`
    margin-right: 8px;
    cursor: pointer;
    appearance: none; /* 기본 라디오 버튼 스타일 제거 */
    width: 20px;
    height: 20px;
    background: center / contain no-repeat
        url(${props =>
            props.checked ? RadioCheckedIcon : RadioNotCheckedIcon});
`;

export const NradioDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Nlabel = styled.label<{ checked: boolean }>`
    display: flex;
    align-items: center;

    color: ${props =>
        props.checked
            ? 'var(--grey-900, #212224)'
            : 'var(--Grey-700, #868c94)'};

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    margin-right: 40px;
`;

export const Ntxt = styled.div<NtxtProps>`
    color: var(--Grey-700, #868c94);
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;

    margin-top: ${props => (props.$offlinetxt ? '8px' : '12px')};
`;

export const Button = styled.button<{ disabled: boolean }>`
    display: inline-flex;
    flex-shrink: 0;

    width: 100px;
    height: 44px;
    margin-top: 56px;
    margin-left: 364px;
    align-self: flex-end;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border: none;

    color: #fff;
    background: ${props => (props.disabled ? '#ADB3BA' : '#FF7710')};

    font-size: 16px;
    font-weight: 700;

    &:hover {
        ${props => (props.disabled ? 'null' : 'cursor: pointer')};
    }

    @media screen and (max-width: 769px) {
        width: 100%;
        margin-left: 0;
    }
`;
