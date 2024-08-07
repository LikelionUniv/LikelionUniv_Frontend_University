import { styled } from 'styled-components';
import HackathonTimer from './HackathonTimer';

import notice from '../../../../img/landing/notice.png';

const TimeInfo = () => {
    return (
        <TimerWrapper>
            <TimerInfo>
                <NoticeImg src={notice} />
                <DeadlineInfo>
                    7월 14일 일요일 23시 59분 참가 신청 마감
                </DeadlineInfo>
                <Info>참가 신청 마감까지 남은 시간</Info>
            </TimerInfo>
            <HackathonTimer />
        </TimerWrapper>
    );
};

export default TimeInfo;

const TimerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ff7711;
    max-width: 1200px;
    padding: 80px 360px;

    @media (max-width: 1200px) {
        padding: 30px 10px;
    }

    @media (max-width: 767px) {
        padding: 40px 20px;
    }

    @media (max-width: 360px) {
        padding: 20px 10px;
    }
`;

const TimerInfo = styled.div`
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NoticeImg = styled.img`
    width: 48px;
    margin-bottom: 16px;
    @media (max-width: 767px) {
        width: 48px;
    }

    @media (max-width: 360px) {
        width: 24px;
    }
`;

const DeadlineInfo = styled.div`
    width: 100%;
    /* Title/24_Bold */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-align: center;
    margin-bottom: clamp(4px, 2vh, 13px);

    @media (max-width: 767px) {
        font-size: 20px;
        margin-bottom: clamp(4px, 2vh, 6px);
    }

    @media (max-width: 360px) {
        font-size: 10px;
        margin-bottom: 4px;
    }
`;

const Info = styled.div`
    /* Title/48_Bold */
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-align: center;
    margin-bottom: 12px;

    @media (max-width: 767px) {
        font-size: clamp(30px, 2vw, 40px);
    }

    @media (max-width: 360px) {
        font-size: 16px;
    }
`;
