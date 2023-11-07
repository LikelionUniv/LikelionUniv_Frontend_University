import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    top: 1.75rem;
    left: 0.06rem;
    line-height: 150%;
    font-weight: 500;
`;
const B = styled.b`
    position: absolute;
    font-size: var(--subtitle-16-bold-size);
    line-height: 150%;
    color: var(--grey-900);
`;
const Parent1 = styled.div`
    position: relative;
    width: 6.31rem;
    height: 3.06rem;
    margin-top: 1.5rem;
`;
const Calender = styled.div`
    position: absolute;
    top: 1.75rem;
    line-height: 150%;
    font-weight: 500;
`;
const CalenderParent = styled.div`
    position: relative;
    width: 11.75rem;
    height: 3.06rem;
`;
const B2 = styled.b`
    position: absolute;
    line-height: 150%;
`;
const B5 = styled.div`
    position: absolute;
    top: 1.75rem;
    font-size: var(--body-14-medium-size);
    line-height: 150%;
    font-weight: 500;
    color: var(--grey-800);
`;
const Group = styled.div`
    position: relative;
    width: 9.13rem;
    height: 3.06rem;
    font-size: var(--subtitle-16-bold-size);
    color: var(--grey-900);
`;
const GroupContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
`;
const FrameWrapper = styled.div`
    position: absolute;
    width: 11.75rem;
    height: 11.19rem;
`;
const GroupWrapper = styled.div`
    position: absolute;
    top: 1.5rem;
    width: 11.75rem;
    height: 11.19rem;
`;
const B3 = styled.b`
    position: relative;
    line-height: 150%;
    margin-top: 1.5rem;
`;
const Span = styled.span`
    color: var(--grey-900);
`;
const Span4 = styled.span``;
const P = styled.p`
    margin: 0;
`;
const Div1 = styled.div`
    position: relative;
    font-size: var(--body-14-medium-size);
    line-height: 180%;
    font-weight: 500;
    display: inline-block;
    width: 17.38rem;
    color: var(--grey-800);
`;
const Container = styled.div`
    position: absolute;
    top: 1.5rem;
    left: 51rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
    font-size: var(--subtitle-16-bold-size);
    color: var(--grey-900);
`;
const GroupParentRoot = styled.div`
    position: absolute;
    top: 78.06rem;
    left: 12.56rem;
    width: 75rem;
    height: 14.19rem;
    text-align: left;
    font-size: var(--body-14-medium-size);
    color: var(--grey-800);
    font-family: var(--subtitle-20-bold);
`;
const HorizontalLine = styled.div`
    position: absolute;
    top: 15rem;
    width: 42.75rem; /* 수평선의 길이 조정 */
    height: 2px; /* 선의 두께 조정 */
    background-color: black; /* 선의 색상 설정 */
`;
const HorizontalLine2 = styled.div`
    position: absolute;
    top: 0rem;
    width: 42.75rem; /* 수평선의 길이 조정 */
    height: 2px; /* 선의 두께 조정 */
    background-color: black; /* 선의 색상 설정 */
`;
const HorizontalSubLine1 = styled.div`
    position: absolute;
    width: 24rem;
    height: 2px;
    background-color: black;
`;
const HorizontalSubLine2 = styled.div`
    position: absolute;
    top: 15rem;
    width: 24rem;
    height: 2px;
    background-color: black;
`;

const FormContainer: FunctionComponent = () => {
    return (
        <GroupParentRoot>
            <GroupWrapper>
                <FrameWrapper>
                    <GroupContainer>
                        <HorizontalLine2 />
                        <Parent1>
                            <Div>11기〡중앙대</Div>
                            <B>기수</B>
                        </Parent1>
                        <CalenderParent>
                            <Calender>{`YYYY.MM.DD – YYYY.MM.DD `}</Calender>
                            <B>기간</B>
                        </CalenderParent>
                        <HorizontalLine />
                        <Group>
                            <B2>기술 스택</B2>
                            <B5>Django, HTML_CSS, JS</B5>
                        </Group>
                    </GroupContainer>
                </FrameWrapper>
            </GroupWrapper>
            <Container>
                <HorizontalSubLine1 />
                <B3>팀원 소개</B3>
                <Div1>
                    <P>
                        <Span>기획</Span>
                        <Span4> 박혜준, 허유진</Span4>
                    </P>
                    <P>
                        <Span>디자인</Span>
                        <Span4> 박혜준, 허유진</Span4>
                    </P>
                    <P>
                        <Span>프론트</Span>
                        <Span4> 박혜준, 허유진, 박혜준</Span4>
                    </P>
                    <P>
                        <Span>백</Span>
                        <Span4> 허유진, 박혜준, 허유진</Span4>
                    </P>
                </Div1>
                <HorizontalSubLine2 />
            </Container>
        </GroupParentRoot>
    );
};

export default FormContainer;
