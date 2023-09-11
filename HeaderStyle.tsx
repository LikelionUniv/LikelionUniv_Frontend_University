import styled, { css } from 'styled-components';

interface TabProps {
  isSelected?: boolean;
}

export const BarDiv = styled.div``;

export const Tab = styled.div<TabProps>`
  cursor: pointer;
  display: flex;
  padding: 5px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--Grey-900, #212224);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  
  &:hover {
    color: black;
  }
`;

export const SelectedTab = styled(Tab)``;

export const Divider = styled.div``;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  width: 990px;
  height: 30px;
  margin-left: 18%;
  margin-top: 64px;
  color: var(--Grey-600, #ADB3BA);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const TabContainer = styled.div`
  align-items: center;
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
`;

export const Spacer = styled.div`
  margin-right: 8px;
`;
