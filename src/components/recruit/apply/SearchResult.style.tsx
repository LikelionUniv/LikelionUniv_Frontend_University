import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-height: 293px;
  
  margin-top: 4px;
  border-radius: 8px;
  border: 1px solid var(--Grey-400, #DCDFE3);
  box-sizing: border-box;

  z-index: 1;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  };

  &::-webkit-scrollbar-track {
    margin: 4px 0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #D1D4D8;
    border-radius: 3px;

    &:hover {
      background: #D1D4D8;
    }
  }
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 4px 13px 9px;
  box-sizing: border-box;
`;
