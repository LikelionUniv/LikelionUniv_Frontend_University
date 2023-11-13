import styled from "styled-components";

export const Element = styled.div`
  width: 100%;
  height: 56px;

  padding: 14px 13px;

  color: var(--Grey-900, #212224);
  border-radius: 8px;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: #F2F4F6;
  }
`;
