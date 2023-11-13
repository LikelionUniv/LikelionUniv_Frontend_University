import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 40px 20px;
  padding-bottom: 30px;

  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  color: var(--Grey-900, #212224);

  /* Title/24_Bold */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;

export const Paragraph = styled.p`
  margin-top: 16px;
  color: var(--Grey-900, #212224);

  /* Subtitle/18_Medium */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
`;


export const Btn = styled.button<{active: boolean}>`
  position: absolute;
  bottom: 30px;
  display: flex;
  width: calc(100% - 40px);
  box-sizing: border-box;

  padding: 17px 32px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 8px;
  background: ${props => props.active ? '#FF7710' : 'var(--Grey-600, #ADB3BA)'};

  color: var(--White, #FFF);
  text-align: center;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  &:hover {
    cursor: pointer;
  }

`;
