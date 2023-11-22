import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 7px 16px;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  border-radius: 28px;
  border: 1px solid var(--Grey-400, #DCDFE3);
  background: var(--White, #FFF);

  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const Name = styled.div`
  margin: 0;
  color: var(--Grey-900, #212224);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;

export const Delete = styled.img`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  &:hover {
    cursor: pointer;
  }
`;
