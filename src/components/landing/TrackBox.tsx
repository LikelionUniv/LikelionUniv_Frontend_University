import styled from 'styled-components';

interface TitleProps {
    color?: string;
}

interface CardProp {
    title: string;
    content: string;
    color?: string;
}

const TrackBox: React.FC<CardProp> = props => {
    return (
        <Box>
            <Title color={props.color}>{props.title}</Title>
            <Content>{props.content} </Content>
        </Box>
    );
};

export default TrackBox;

const Box = styled.div`
    padding: 40px;
    border-radius: 8px;
    background: var(--Grey-900, #212224);
    gap: 16px;

    display: flex;
    flex-direction: column;
    max-width: 588px;
    max-height: 320px;
    height: 320px;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 768px) {
        padding: 25px;
        height: 35vh;
        max-height: 320px;
    }

    @media (max-width: 360px) {
        width: 520px;
        padding: 18px;
        height: 25vh;
        max-height: 168px;
        gap: 8px;
        width: 320px;
    }
`;

const Title = styled.div<TitleProps>`
    color: ${props => props.color || 'transparent'};

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    @media (max-width: 760px) {
        font-size: 20px;
    }

    @media (max-width: 500px) {
        font-size: 3.8vw;
    }
`;

const Content = styled.div`
    color: var(--Grey-200, #f2f4f6);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    @media (max-width: 760px) {
        font-size: 16px;
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }
    @media (max-width: 400px) {
        font-size: 12px;
    }
`;
