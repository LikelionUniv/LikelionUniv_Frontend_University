import styled from 'styled-components';
import LoadingImg from '../../img/chatting/eyes.svg';

const Container = styled.div`
    height: calc(100% - 204px);
    flex-shrink: 0;
    padding: 24px;
    background-color: white;
    border-radius: var(--Percent, 0px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NoticeText = styled.span`
    color: var(--Grey-900, #212224);
    text-align: center;
    padding-top: 24px;

    /* Title/24_Bold */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
`;

const Loading = () => {
    return (
        <Container>
            <img src={LoadingImg} alt="loading" />
            <NoticeText>현재 채팅 중인 채팅방이 없어요.</NoticeText>
        </Container>
    );
};

export default Loading;
