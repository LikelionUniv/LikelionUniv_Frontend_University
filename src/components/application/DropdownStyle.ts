import styled from 'styled-components';

export const NdropdownAreaDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 464px;
    height: 174px;

    margin-top: 6px;
    padding: 16px 0 16px 22px;

    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background: var(--white, #fff);

    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.07);
    box-sizing: border-box;
`;

export const NdropdownListDiv = styled.div`
    display: flex;

    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    color: var(--grey-900, #212224);

    margin-bottom: 26px;
`;

export const NdropdownInput = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    white-space: nowrap;
    width: 1px;

    padding: 0;

    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);

    overflow: hidden;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
    display: flex;

    width: 16px;
    height: 16px;

    align-items: center;
    justify-content: center;
    margin-right: 8px;

    svg {
        display: block;
    }

    cursor: pointer;
`;
