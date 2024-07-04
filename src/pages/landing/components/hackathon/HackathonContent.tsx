import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { activeContentState } from '../../../../atoms/HackathonGuide';

const TimelineItem = styled.ul`
    display: flex;
    align-items: flex-start;
    position: relative;
    list-style: none;
    padding-left: 32px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 32px;
        height: 100%;
        width: 2px;
        border-left: 2px dashed #4d5359;
    }

    &:last-child::before {
        display: none;
    }
`;

const TimelineContent = styled.li`
    flex-grow: 1;
    padding-left: 48px;
`;

const Circle = styled.div`
    width: clamp(40px, 3vw, 48px);
    height: clamp(40px, 3vw, 48px);
    background-color: #4d53594d;
    border-radius: 50%;
    margin-right: 20px;
    position: absolute;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: clamp(20px, 2vw, 24px);
        height: clamp(20px, 2vw, 24px);
        background-color: #4d5359;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    @media (min-width: 1480px) {
        left: 10px;
    }

    @media (max-width: 1480px) and (min-width: 767px) {
        left: 12px;
    }

    @media (max-width: 767px) {
        width: clamp(40px, 4vw, 40px);
        height: clamp(40px, 4vw, 40px);
        left: 12px;

        &::after {
            width: 20px;
            height: 20px;
        }
    }
`;

const TimelineTitle = styled.div`
    color: #ff7710;
    font-size: clamp(20px, 2vw, 28px);
    font-weight: 700;
    margin-bottom: 8px;

    @media (max-width: 767px) {
        font-size: clamp(16px, 3vw, 20px);
    }
    @media (max-width: 360px) {
        font-size: clamp(16px, 4vw, 16px);
    }
`;

const TimeLineSubTitle = styled.span`
    color: #fff;
    font-weight: 700;
    font-size: clamp(18px, 2vw, 20px);

    @media (max-width: 767px) {
        font-size: clamp(14px, 3vw, 18px);
    }
    @media (max-width: 360px) {
        font-size: clamp(14px, 4vw, 14px);
    }
`;

const TimelineList = styled.ul`
    list-style-type: disc;
    margin: 8px 0px 16px 16px;
`;

const TimeLineText = styled.li`
    font-size: clamp(18px, 2vw, 20px);
    line-height: 1.5;
    color: #868c94;

    @media (max-width: 767px) {
        font-size: clamp(14px, 3vw, 18px);
    }

    @media (max-width: 360px) {
        font-size: clamp(14px, 4vw, 14px);
    }
`;

const August6Content = () => (
    <>
        <TimelineItem>
            <Circle />
            <TimelineContent>
                <TimelineTitle>입장 및 착석</TimelineTitle>
                <TimeLineSubTitle>14~17시</TimeLineSubTitle>
                <TimelineList>
                    <TimeLineText>
                        입장 시 진행 요원의 안내에 잘 따라주시길 바랍니다.
                    </TimeLineText>
                    <TimeLineText>
                        진행 요원 안내에 따르지 않을 경우 퇴실 조치가 될 수
                        있습니다.
                    </TimeLineText>
                </TimelineList>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <Circle />
            <TimelineContent>
                <TimelineTitle>개회식</TimelineTitle>
                <TimeLineSubTitle>17~18시</TimeLineSubTitle>
                <TimelineList>
                    <TimeLineText>개회사</TimeLineText>
                    <TimeLineText>전체 진행 일정 공유</TimeLineText>
                </TimelineList>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <Circle />
            <TimelineContent>
                <TimelineTitle>저녁식사</TimelineTitle>
                <TimeLineSubTitle>18~19시</TimeLineSubTitle>
                <TimelineList>
                    <TimeLineText>간단한 저녁이 제공됩니다.</TimeLineText>
                </TimelineList>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <Circle />
            <TimelineContent>
                <TimelineTitle>발표 자료 제작 및 제출</TimelineTitle>
                <TimeLineSubTitle>19~24시</TimeLineSubTitle>
                <TimelineList>
                    <TimeLineText>
                        예선 기간동안 개발한 프로덕트를 잘 보여줄 수 있는 발표
                        자료를 만들어주세요.
                    </TimeLineText>
                    <TimeLineText>
                        해당 발표 자료를 기준으로 심사가 진행됩니다.
                    </TimeLineText>
                    <TimeLineText>
                        본선 진출 시, 해당 발표 자료를 가지고 대표자 1명이
                        발표를 진행하게 됩니다.
                    </TimeLineText>
                </TimelineList>
            </TimelineContent>
        </TimelineItem>
    </>
);

const August7Content = () => (
    <>
        <TimelineItem>
            <Circle />
            <TimelineContent>
                <TimelineTitle>심사</TimelineTitle>
                <TimeLineSubTitle>0~4시</TimeLineSubTitle>
                <TimelineList>
                    <TimeLineText>심사위원 소개</TimeLineText>
                    <TimeLineText>전체 팀 심사 진행</TimeLineText>
                    <TimeLineText>네트워킹</TimeLineText>
                </TimelineList>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <Circle />
            <TimelineContent>
                <TimelineTitle>본선 진출자 발표 / 심사 진행</TimelineTitle>
                <TimeLineSubTitle>4~5시</TimeLineSubTitle>
                <TimelineList>
                    <TimeLineText>
                        본선에 진출한 팀을 선정하고, 해당 팀의 발표를 듣습니다.
                    </TimeLineText>
                </TimelineList>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <Circle />
            <TimelineContent>
                <TimelineTitle>시상식 및 폐회식</TimelineTitle>
                <TimeLineSubTitle>5~6시</TimeLineSubTitle>
                <TimelineList>
                    <TimeLineText>
                        발표 내용을 바탕으로 1,2,3등을 가려 시상이 진행됩니다.
                    </TimeLineText>
                </TimelineList>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <Circle />
            <TimelineContent>
                <TimelineTitle>자리 정리 및 귀가</TimelineTitle>
                <TimeLineSubTitle>6~7시</TimeLineSubTitle>
            </TimelineContent>
        </TimelineItem>
    </>
);

const HackathonContent = () => {
    const activeContent = useRecoilValue(activeContentState);

    return (
        <>
            {activeContent === 'August 6' ? (
                <August6Content />
            ) : (
                <August7Content />
            )}
        </>
    );
};

export default HackathonContent;
