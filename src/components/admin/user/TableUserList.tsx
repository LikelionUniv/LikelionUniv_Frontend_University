import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { User } from './Usertype';
import { useSelectedUsers } from '../SelectedUserContext';
import DeleteUser from './DeleteUser';
import ModifyUser from './ModifyUser';
import { useOutletContext } from 'react-router-dom';
import OutletContext from '../OutletContext';

export interface TableUserListProps {
    id: number;
    name: string;
    email: string;
    major: string;
    part: string;
    ordinal: number;
    role: string;
    univName?: string;
}

const TableUserList: React.FC<TableUserListProps> = props => {
    const {
        selectedUserIds,
        setSelectedUserIds,
        selectedUserEmails,
        setSelectedUserEmails,
        selectAll,
    } = useSelectedUsers();

    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const { userinfo, isAdmin } = useOutletContext<OutletContext>();

    const handleCheckboxChange = (
        userId: number,
        userEmail: string,
        isChecked: boolean,
    ) => {
        setSelectedUserIds(prev =>
            isChecked ? [...prev, userId] : prev.filter(id => id !== userId),
        );
        setSelectedUserEmails(prev =>
            isChecked
                ? [...prev, userEmail]
                : prev.filter(email => email !== userEmail),
        );
    };

    const handleEdit = () => {
        setEditingUserId(props.id);
        setEditingUser({
            id: props.id,
            name: props.name,
            email: props.email,
            major: props.major,
            part: props.part,
            ordinal: props.ordinal,
            role: props.role,
        });
    };

    const USER_ROLE: { [key: string]: string } = {
        GUEST: '게스트',
        USER: '아기사자',
        MANAGER: '운영진',
        UNIVERSITY_ADMIN: '대표',
        SUPER_ADMIN: '관리자',
    };

    useEffect(() => {
        if (selectAll) {
            setSelectedUserIds(prev => [...prev, props.id]);
            setSelectedUserEmails(prev => [...prev, props.email]);
        } else {
            setSelectedUserIds(prev => prev.filter(id => id !== props.id));
            setSelectedUserEmails(prev =>
                prev.filter(email => email !== props.email),
            );
        }
    }, [selectAll, props.id, props.email]);

    return (
        <>
            <Wrapper>
                <BodyTable>
                    <TableBody key={props.id}>
                        <Table className="check">
                            <input
                                type="checkbox"
                                checked={selectedUserIds.includes(props.id)}
                                onChange={e =>
                                    handleCheckboxChange(
                                        props.id,
                                        props.email,
                                        e.target.checked,
                                    )
                                }
                            />
                        </Table>
                        <Table className="name">{props.name}</Table>
                        {isAdmin && (
                            <Table className="univ">{props.univName}</Table>
                        )}
                        <Table className="major">{props.major}</Table>
                        <Table className="ordinal">{props.ordinal}기</Table>
                        <Table className="part">{props.part}</Table>
                        <Table className="role">
                            {USER_ROLE[props.role] || props.role}
                        </Table>
                        <Table className="email">{props.email}</Table>
                        <Table className="edit">
                            <button onClick={() => handleEdit()}>수정</button>{' '}
                        </Table>
                        <Table>
                            <DeleteUser id={props.id} userName={props.name} />
                        </Table>
                    </TableBody>
                </BodyTable>
            </Wrapper>
            {editingUserId && editingUser && (
                <ModifyUser
                    userId={editingUserId}
                    user={editingUser}
                    onClose={() => {
                        setEditingUserId(null);
                        setEditingUser(null);
                    }}
                />
            )}
        </>
    );
};

export default TableUserList;

const Wrapper = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;

    .name {
        width: 90px;
    }

    .univ {
        width: 170px;
    }

    .major {
        width: 140px;
    }

    .ordinal {
        width: 40px;
    }

    .part {
        width: 120px;
    }

    .role {
        width: 70px;
    }
    .email {
        width: 200px;
    }
`;

const BodyTable = styled.div`
    button {
        width: 57px;
        height: 32px;
        padding: 5.5px, 16px, 5.5px, 16px;
        border-radius: 6px;

        padding: 4px 8px;
        background: #eaecee;

        font-weight: 700;
        color: #212224;

        border: none;
        cursor: pointer;

        &:hover {
            background-color: #ff7710;
            color: #ffffff;
        }
    }

    .check {
        margin-right: 10px;
        height: 24px;
        accent-color: #ff7710;
        color: #ffffff;
    }
`;

const TableBody = styled.div`
    display: flex;
    border-bottom: 1px solid #dcdfe3;
`;

const Table = styled.div`
    padding: 16px 4px;
    min-height: 24px;
    margin-right: 20px;
    text-align: start;
    font-size: 1rem;

    @media (max-width: 1500px) {
        padding: 12px 2px;
        margin-right: 5px;
        font-size: 0.9rem;
    }

    @media (max-width: 1200px) {
        padding: 8px 2px;
        margin-right: 0px;
        font-size: 0.8rem;
    }
`;
