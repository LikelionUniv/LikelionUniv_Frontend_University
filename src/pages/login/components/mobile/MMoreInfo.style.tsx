import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 20px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const SubHeader = styled.header`
    margin-top: 40px;
    margin-bottom: 34px;

    color: var(--Grey-900, #212224);

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const Form = styled.form`
    width: 100%;
`;

export const Field = styled.div`
    margin-bottom: 34px;

    &:nth-child(3) {
        margin-bottom: 222px;
    }

    & > div {
        margin-bottom: 12px;
    }
`;

export const Label = styled.div`
    color: var(--Black, #000);

    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 12px 24px;

    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background: var(--white, #fff);
    box-sizing: border-box;

    font-family: 'Pretendard';
    font-size: 16px;
    color: var(--grey-900, #212224);
    font-weight: 500;
    line-height: 150%;

    outline: 0;

    &::placeholder {
        color: var(--grey-600, #adb3ba);
    }
    &:focus {
        border: 1px solid var(--orange-600, #ff7710);
    }
`;

export const SaveBtn = styled.button<{ active: boolean }>`
    width: 100%;
    height: 48px;
    margin-bottom: 34px;
    padding: 12px 24px;

    border-radius: 8px;
    border: none;
    background: ${props => (props.active ? '#FF7710' : '#ADB3BA')};

    color: var(--White, #fff);
    text-align: center;

    font-family: 'Pretendard';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    &:hover {
        ${props => (props.active ? 'cursor: pointer' : 'null')};
    }
`;
