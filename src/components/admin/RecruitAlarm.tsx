import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import AlarmList from './recruit/AlarmList';

function RecruitAlarm() {
    const [users, setUsers] = useState<string | undefined>();

    return (
        <Wrapper>
            <TableTitle>
                <TitleAlarm>
                    <Title>모집 알림</Title>
                    <AlarmRequest>알림 신청</AlarmRequest>
                </TitleAlarm>
                <Button style={{ color: '#ffffff' }}>선택 알림 보내기</Button>
            </TableTitle>
            {
                <Suspense fallback={<div>loading...</div>}>
                    <AlarmList />
                </Suspense>
            }
        </Wrapper>
    );
}

export default RecruitAlarm;

const Wrapper = styled.div`
    width: 74.5%;
`;

const TableTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    padding: 0px 16px;
    height: 40px;
    margin-top: 15px;
    background-color: #adb3ba;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid #dcdfe3;
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
