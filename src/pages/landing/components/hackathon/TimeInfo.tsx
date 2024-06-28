import { styled } from 'styled-components';
import HackathonTimer from './HackathonTimer';

import notice from '../../../../img/landing/notice.png';
const TimeInfo = () => {
    return (
        <TimerWrapper>
            <TimerInfo>
                <img src={notice} />
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
    align-items: center;
    text-align: center;
    background-color: #ff7711;
    padding: 80px 360px 80px 360px;
`;
const TimerInfo = styled.div`
    color: white;
`;

const DeadlineInfo = styled.div`
    /* Title/24_Bold */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

const Info = styled.div`
    /* Title/48_Bold */
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;
