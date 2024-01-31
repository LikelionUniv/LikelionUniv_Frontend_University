import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
`;

export const Text = styled.p`
  margin-top: 16px;
  color: var(--Grey-900, #212224);
  text-align: center;

  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
