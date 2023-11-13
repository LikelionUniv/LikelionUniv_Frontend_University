import styled from "styled-components";

export const SearchWindow = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 54px;
  flex-shrink: 0;

  padding: 13px;
  padding-left: 24px;

  border-radius: 8px;
  border: 1px solid var(--Grey-400, #DCDFE3);
  box-sizing: border-box;

  &:hover {
    border-color: #ff7710;
  }

  &:focus {
    border-color: #ff7710;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: var(--Grey-900, #212224);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const Search = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
