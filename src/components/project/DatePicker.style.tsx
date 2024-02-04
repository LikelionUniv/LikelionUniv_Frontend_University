import styled from "styled-components";

interface DatePickerStyleProps {
  value: Date | null;
}

const DatePickerStyle = styled.div<DatePickerStyleProps>`
  .react-datepicker-wrapper {
    width: 180px;
    height: 48px;

    margin-right: 8px;
    box-sizing: border-box;

    border-radius: 6px;
    border: 1px solid var(--Grey-400, #dcdfe3);
    background: var(--White, #fff);

    outline: 0;

    &:hover {
      border-color: #ff7710;
    }
  }

  .react-datepicker__input-container {
    height: 100%;
    & > input {
      width: 100%;
      height: 100%;
      padding: 12px 24px;
      box-sizing: border-box;
      border: none;
      border-radius: 6px;
      color: ${props =>
        props.value ? 'var(--Grey-900, #212224)' : 'var(--grey-600, #adb3ba)'};
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      &:focus {
        outline: 1px solid #ff7710;
      }
      &::placeholder {
        color: var(--grey-600, #adb3ba);
      }
    }
  }
`;

export default DatePickerStyle;
