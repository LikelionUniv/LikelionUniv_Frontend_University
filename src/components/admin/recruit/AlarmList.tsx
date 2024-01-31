import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TableAlarmList from './TableAlarmList';
import TableHead from './TableHead';

function AlarmList() {
    return (
        <>
            <Wrapper>
                <TableHead />
                <TableAlarmList />
            </Wrapper>
        </>
    );
}

export default AlarmList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
