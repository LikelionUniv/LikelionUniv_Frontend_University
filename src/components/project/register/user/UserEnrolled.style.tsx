import styled from "styled-components";

export const Container = styled.div<{show: boolean}>`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;

  width: 100%;
  margin-top: 8px;
  padding: 16px;

  border-radius: 8px;
  background: var(--Grey-100, #F6F8F9);
  
  box-sizing: border-box;
`;
