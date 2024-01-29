import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelectedUsers } from './SelectedUserContext';
import { useParams } from 'react-router-dom';
import useGetAlarmList from '../../../query/get/useGetAlarmList';

function TableAlarmList() {
    const { selectedUserIds, setSelectedUserIds, selectAll } =
        useSelectedUsers();

    const { generation } = useParams();
    const { data } = useGetAlarmList({
        generation: 12,
    });

    return (
        <Wrapper>
            <TableBody>
                <Table className="check">
                    <input type="checkbox" />
                </Table>
                <Table className="name"></Table>
            </TableBody>
        </Wrapper>
    );
}

export default TableAlarmList;

const Wrapper = styled.div`
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    max-height: 1660px;

    .check {
        margin: 0 10px 0 0;
        height: 24px;
        accent-color: #ff7710;
        color: #ffffff;
    }

    .name {
        width: 93px;
        height: 24px;
    }

    .major {
        width: 156px;
        height: 24px;
    }

    .ordinal {
        width: 48px;
        height: 24px;
    }

    .part {
        width: 75px;
        height: 24px;
    }

    .email {
        width: 311px;
        height: 24px;
    }

    .role {
        width: 62px;
        height: 24px;
    }
`;

const TableBody = styled.div`
    display: flex;
    border-bottom: 1px solid #dcdfe3;
`;

const Table = styled.div`
    padding: 16px 4px;
    margin-bottom: 15px;
`;

const Divider = styled.div`
    height: 3px;
    background-color: var(--Grey-900, #212224);
    width: 100%;
    margin-top: 15px;
`;
