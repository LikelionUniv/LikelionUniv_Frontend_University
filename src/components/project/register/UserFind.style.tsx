import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 100%;
  box-sizing: border-box;

`;

export const Input = styled.input`  
  width: 680px;
  height: 48px;
  margin-right: 8px;
  padding: 12px 24px;
  flex-shrink: 0;
  box-sizing: border-box;

  color: var(--Grey-600, #ADB3BA);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
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

export const SearchBtn = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;

  border: none;
  border-radius: 8px;
  background: var(--Grey-300, #EAECEE);

  color: var(--Grey-800, #4D5359);
  text-align: center;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const SearchResultContainer = styled.div`
  position: absolute;
  top: 4px;

  width: 792px;
  height: 216px;
  flex-shrink: 0;

  border-radius: 6px;
  border: 1px solid var(--Grey-400, #DCDFE3);
  background: var(--White, #FFF);
`;

export const Element = styled.div`
  width: 100%;
  height: 41px;

  color: var(--Grey-900, #212224);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  &:hover {
    border-radius: 4px;
    background: var(--Grey-300, #EAECEE);
  }
`;
