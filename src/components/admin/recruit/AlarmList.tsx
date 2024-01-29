import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TableAlarmList from './TableAlarmList';
import TableHead from './TableHead';
// import TableBottom from './TableBottom';
import { SelectedUsersProvider } from './SelectedUserContext';
import useServerSidePagination from '../../../query/get/useServerSidePagination';

function AlarmList() {
    return (
        <>
            <SelectedUsersProvider>
                <Wrapper>
                    <TableHead />
                    <TableAlarmList />
                </Wrapper>
            </SelectedUsersProvider>
        </>
    );
}

export default AlarmList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 10px 0;
`;
