import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useGetAlarmList from '../../../query/get/useGetAlarmList';
import { useSelectedUsers } from '../SelectedUserContext';

function TableAlarmList() {
    const {
        selectedUserEmails,
        setSelectedUserEmails,
        selectAll,
        setSelectAll,
    } = useSelectedUsers();
    const { data } = useGetAlarmList({ generation: 12 });

    useEffect(() => {
        if (selectAll && data) {
            setSelectedUserEmails(data.recruits.map(recruit => recruit.email));
        } else if (!selectAll) {
            setSelectedUserEmails([]);
        }
    }, [selectAll, data, setSelectedUserEmails]);

    const handleCheckboxChange = (recruitEmail: string, isChecked: boolean) => {
        if (selectAll) {
            setSelectAll(false);
        }
        setSelectedUserEmails(prev =>
            isChecked
                ? [...prev, recruitEmail]
                : prev.filter(email => email !== recruitEmail),
        );
    };

    return (
        <Wrapper>
            {data &&
                data.recruits.map((recruit, index) => (
                    <TableBody key={index}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Table className="check">
                                <input
                                    type="checkbox"
                                    checked={
                                        selectedUserEmails.includes(
                                            recruit.email,
                                        ) || selectAll
                                    }
                                    onChange={e =>
                                        handleCheckboxChange(
                                            recruit.email,
                                            e.target.checked,
                                        )
                                    }
                                />
                            </Table>
                            <Table className="email">{recruit.email}</Table>
                        </div>
                        <Table className="email">
                            {recruit.id}.{recruit.id}.{recruit.id}
                        </Table>
                    </TableBody>
                ))}
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
        margin-right: 20px;
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
        width: 120px;
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
    align-items: center;
    padding: 5px 0;
    justify-content: space-between;
`;

const Table = styled.div`
    padding: 4px 4px;
    //margin-bottom: 15px;
`;
