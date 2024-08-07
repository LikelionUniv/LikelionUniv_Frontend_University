import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import AlarmList from './recruit/AlarmList';
import { SelectedUsersProvider, useSelectedUsers } from './SelectedUserContext';
import EmailSendButton from './recruit/EmailSendButton';
import AlarmRequest from './recruit/AlarmRequest';
import useGetAlarmList from '../../../query/get/useGetAlarmList';

function RecruitAlarm() {
    const { data } = useGetAlarmList({ ordinal: 12 });
    const alarmCount = data ? data.alarms.length : 0;

    return (
        <SelectedUsersProvider>
            <Wrapper>
                <TableTitle>
                    <TitleAlarm>
                        <Title>모집 알림</Title>
                        <AlarmRequest count={alarmCount}></AlarmRequest>
                    </TitleAlarm>
                    <EmailDesktopView>
                        <EmailSendButton />
                    </EmailDesktopView>
                </TableTitle>

                <Suspense fallback={<div>loading...</div>}>
                    <AlarmList />
                </Suspense>
                <EmailMobileView>
                    <EmailSendButton />
                </EmailMobileView>
            </Wrapper>
        </SelectedUsersProvider>
    );
}

export default RecruitAlarm;

const Wrapper = styled.div`
    width: 1250px;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;
const EmailDesktopView = styled.div`
    @media screen and (max-width: 767px) {
        display: none;
    }
`;
const EmailMobileView = styled.div`
    display: none;
    @media screen and (max-width: 767px) {
        display: flex;

        justify-content: flex-end;
    }
`;

const TableTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TitleAlarm = styled.div`
    display: flex;
    align-items: baseline;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    line-height: 150%;
`;
