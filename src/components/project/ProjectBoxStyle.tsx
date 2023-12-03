import styled from 'styled-components';

interface BoxProps {
    clicked: boolean;
}
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);

    width: 1200px;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    grid-column-gap: 24px;
`;

export const Box = styled.div`
    width: 384px;
    height: 343px;

    display: flex;
    flex-direction: column;

    margin-top: 64px;
    gap: 16px 0;
`;

export const SubBox = styled.div`
    width: 384px;
    height: 216px;
    background: var(--Grey-400, #dcdfe3);
`;
export const BlackBox = styled.div<BoxProps>`
    width: 40px;
    height: 21px;

    color: ${props => (props.clicked ? '#FFFFFF' : '#FFFFFF')};

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    line-height: 150%; /* 21px */
    background: ${props => (props.clicked ? '#FF7710' : '#000000')};
`;

export const SmallBox = styled.div`
    width: 128px;
    height: 127px;
    border: 1px solid black;
    background-color: #ffffff;
`;

export const SmallBox1 = styled.div<BoxProps>`
    width: 380px;
    height: 39px;
    color: ${props => (props.clicked ? '#FF7710' : '#000000')};

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 39.2px */
`;

export const SmallBox2 = styled.div<BoxProps>`
    display: flex;
    gap: 16px;
    width: 380px;
    height: 48px;
    color: ${props => (props.clicked ? '#FF7710' : '#000000')};

    /* Body/16_Medium_150 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
`;

export const SmallBox3 = styled.div`
   width :380px; 
   height :32px; 
   background-color: #ffffff ;
   color: var(--Grey-700, #868C94);

  gap: 6;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */

`;
