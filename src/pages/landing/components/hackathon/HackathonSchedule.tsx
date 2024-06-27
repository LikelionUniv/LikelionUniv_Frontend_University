import styled from 'styled-components';

import HackathonArrow from '../../../../img/landing/hackathon_arrow.svg';

const schedule = [
    {
        id: 0,
        title: '주제 공개',
        content: '2024년 7월 5일 14:00',
    },
    {
        id: 1,
        title: '팀빌딩 및 개발',
        content: '2024년 7월 5일 금요일 ~ 2024년 8월 5일 금요일',
    },
    {
        id: 2,
        title: '해커톤 본선 진행 일정',
        content: '2024년 8월 6일 화요일 17:00 ~ 8월 7일 수요일 07:00',
    },
    {
        id: 3,
        title: '해커톤 진행 장소',
        content: '양재 AT 센터 제2전시장',
    },
    {
        id: 4,
        title: '참가 신청 접수 기간',
        content: '2024년 7월 5일 ~ 2024년 7월 14일',
    },
    {
        id: 5,
        title: '참가 대상',
        content: '2024년 활동 중인 멋쟁이사자처럼 대학 아기사자 및 운영진',
    },
];

const ScheduleContainer = styled.div`
    max-width: 1200px;
    height: 80px;
    width: 100%;
    border-radius: 16px;
    margin-bottom: 24px;
    background-color: #4d53594d;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 767px) {
        height: 109px;
    }
`;

const ScheduleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const ScheduleTitle = styled.div`
    font-size: clamp(20px, 2vw, 24px);
    font-weight: 700;
    margin-right: 16px;
    width: 30%;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #4d5359;

    @media (max-width: 767px) {
        border-right: none;
        font-size: clamp(16px, 3vw, 20px);
        width: 85%;
    }

    @media (max-width: 360px) {
        width: 80%;
        font-size: clamp(16px, 4vw, 16px);
    }
`;

const ScheduleContent = styled.span`
    font-size: clamp(18px, 2vw, 20px);
    color: #d1d4d8;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    @media (max-width: 767px) {
        font-size: clamp(14px, 3vw, 18px);
        width: 90%;
    }

    @media (max-width: 360px) {
        font-size: clamp(14px, 4vw, 14px);
    }
`;

const ScheduleImg = styled.img`
    width: clamp(20px, 2vw, 24px);
    height: clamp(20px, 2vw, 24px);
    margin-right: 22px;

    @media (max-width: 767px) {
        width: clamp(14.4px, 2vw, 20px);
        height: clamp(14.4px, 2vw, 20px);
        margin-right: 12px;
    }

    @media (max-width: 360px) {
        margin-right: 8px;
        width: clamp(14.4px, 3vw, 14.4px);
        height: clamp(14.4px, 3vw, 14.4px);
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ScheduleSubContent = styled.div`
    margin-top: 4px;
    font-size: clamp(14px, 2vw, 16px);
`;

const HackathonSchedule = () => {
    return (
        <>
            {schedule.map(item => (
                <ScheduleContainer key={item.id}>
                    <ScheduleWrapper>
                        <ScheduleTitle>
                            <TitleWrapper>
                                <ScheduleImg src={HackathonArrow} alt="guide" />
                                {item.title}
                            </TitleWrapper>
                        </ScheduleTitle>

                        <ScheduleContent>
                            {item.content}
                            {item.id === 3 && (
                                <ScheduleSubContent>
                                    *무박 2일로 진행됩니다.
                                </ScheduleSubContent>
                            )}
                        </ScheduleContent>
                    </ScheduleWrapper>
                </ScheduleContainer>
            ))}
        </>
    );
};

export default HackathonSchedule;
