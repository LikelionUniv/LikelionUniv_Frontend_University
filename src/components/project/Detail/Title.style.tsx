import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 40px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    color: var(--Orange-600, #FF7710);
`;

export const ProjectTitle = styled.b`
    font-size: var(--title-48-bold-size);
    line-height: 150%;
    @media (max-width: 768px) {
        font-size: var(--title-28-bold-size);
    }
`;

export const ProjectSummary = styled.b`
    font-size: var(--title-24-bold-size);
    line-height: 150%;

    @media (max-width: 768px) {
        font-size: var(--title-18-bold-size);
    }
`;

export const ProjectContainer = styled.div`
    line-height: 160%;
    font-weight: 500;
    width: 60%;
    margin-top: 1rem;
`;

export const B = styled.b`
    position: relative;
    line-height: 150%;

    &:last-child {
      margin-left: 16px;
    }
`;

export const P = styled.p`
    margin: 0;
`;


//서비스 바로가기 버튼
export const Button = styled.button<{width: number}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 28px;

    background-color: var(--color-darkorange);
    border: none;
    border-radius: var(--br-5xs);
    width: 384px;
    height: 3.5rem;
    margin-top: 40px;
    overflow: hidden;
    font-size: var(--body-14-bold-size);

    cursor: pointer;

    @media screen and (max-width: 767px) {
      width: 240px;
      margin: 0 auto;
      margin-top: 40px;
    }

    @media screen and (min-width: 767px) and (max-width: 1280px) {
        width: ${props => props.width * 0.31}px;
    }
`;


export const ButtonText = styled.b`
    font-size: var(--subtitle-20-bold-size);
    font-family: var(--subtitle-20-bold);
    color: var(--white);
    text-align: left;
`;

export const IconArrowUpright = styled.img`
    width: 1.75rem;
    height: 1.75rem;
`;