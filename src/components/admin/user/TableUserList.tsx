import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EditModal from './ModifyUser';
import { User } from './UserList';
import { useSelectedUsers } from './SelectedUserContext';
import DeleteUser from './DeleteUser';
import EmailModal from './EmailModal';
import ModifyUser from './ModifyUser';

interface TableUserListProps {
    users: User[];
    id: number;
}

export interface UserType {
    name: string;
    major: string;
    part: string;
    ordinal: number;
}

function TableUserList({ users, id }: TableUserListProps) {
    const {
        selectedUserIds,
        setSelectedUserIds,
        selectedUserEmails,
        setSelectedUserEmails,
        selectAll,
    } = useSelectedUsers();
    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const selectedEmails = users
        .filter(user => selectedUserIds.includes(user.id))
        .map(user => user.email);

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

    const handleEdit = (user: User) => {
        setEditingUserId(user.id);
        setEditingUser(user);
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
            const allUserIds = users.map(user => user.id);
            setSelectedUserIds(allUserIds);
        } else {
            setSelectedUserIds([]);
        }
    }, [selectAll, users]);

    return (
        <>
            <Wrapper>
                <BodyTable>
                    {users.map(user => (
                        <TableBody key={user.id}>
                            <Table className="check">
                                <input
                                    type="checkbox"
                                    checked={selectedUserIds.includes(user.id)}
                                    onChange={e =>
                                        handleCheckboxChange(
                                            user.id,
                                            user.email,
                                            e.target.checked,
                                        )
                                    }
                                />
                            </Table>
                            <Table className="name">{user.name}</Table>
                            <Table className="major">{user.major}</Table>
                            <Table className="ordinal">{user.ordinal}기</Table>
                            <Table className="part">{user.part}</Table>
                            <Table className="role">
                                {USER_ROLE[user.role] || user.role}
                            </Table>
                            <Table className="email">{user.email}</Table>
                            <Table className="edit">
                                <button onClick={() => handleEdit(user)}>
                                    수정
                                </button>
                            </Table>
                            <Table>
                                <DeleteUser id={user.id} userName={user.name} />
                            </Table>
                        </TableBody>
                    ))}
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
}

export default TableUserList;

const Wrapper = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;

    max-height: 1660px;

    .name {
        min-width: 110px;
    }

    .major {
        min-width: 140px;
    }

    .ordinal {
        min-width: 50px;
    }

    .part {
        min-width: 120px;
    }

    .role {
        min-width: 100px;
    }
    .email {
        min-width: 200px;
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
    margin-right: 8px;
    text-align: start;
`;
