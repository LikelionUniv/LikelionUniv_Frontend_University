import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import AlarmList from './recruit/AlarmList';
import { SelectedUsersProvider, useSelectedUsers } from './SelectedUserContext';
import EmailModal from './user/EmailModal';
import EmailSendButton from './recruit/EmailSendButton';

function RecruitAlarm() {
    const [users, setUsers] = useState<string | undefined>();
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

    const openEmailModal = () => setIsEmailModalOpen(true);
    const closeEmailModal = () => setIsEmailModalOpen(false);

    return (
        <SelectedUsersProvider>
            <Wrapper>
                <TableTitle>
                    <TitleAlarm>
                        <Title>모집 알림</Title>
                        <AlarmRequest>알림 신청</AlarmRequest>
                    </TitleAlarm>
                    <EmailSendButton />
                </TableTitle>

                <Suspense fallback={<div>loading...</div>}>
                    <AlarmList />
                </Suspense>
            </Wrapper>
        </SelectedUsersProvider>
    );
}

export default RecruitAlarm;

const Wrapper = styled.div`
    width: fit-content;
    min-width: 1100px;
    margin-right: 200px;
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

const AlarmRequest = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: var(--orange-600, #ff7710);

    border-radius: 42px;
    padding: 6px 12px 6px 12px;
    margin: 12px;
    background: #fff2e8;
`;
