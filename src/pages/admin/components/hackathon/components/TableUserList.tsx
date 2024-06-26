import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ModifyUser from '../../modal/ModifyUser';
import { useOutletContext } from 'react-router-dom';
import { OutletContext, User } from '../../../../../inteface/adminType';
import DeleteUser from '../../user/DeleteUser';
import { useSelectedUsers } from '../../SelectedUserContext';

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

    return (
        <>
            <Wrapper>
                <BodyTable>
                    <TableBody key={props.id}>
                        <Table className="check">
                            <input
                                type="checkbox"
                                checked={selectedUserIds.includes(props.id)}
                            />
                        </Table>
                        <Table className="name">{props.name}</Table>
                        {isAdmin && (
                            <Table className="univ">
                                {props.univName!.length >= 5
                                    ? props.univName!.substr(0, 5)
                                    : props.univName}
                            </Table>
                        )}
                        <Table className="major">{props.major}</Table>
                        <Table className="ordinal">{props.ordinal}</Table>
                        <Table className="part">{props.part}</Table>
                        <Table className="role">
                            {USER_ROLE[props.role] || props.role}
                        </Table>
                        <Table className="email">{props.email}</Table>
                        <MobileBtnWrapper>
                            <Table className="edit">
                                <button onClick={() => handleEdit()}>
                                    수정
                                </button>{' '}
                            </Table>
                            <Table>
                                <DeleteUser
                                    id={props.id}
                                    userName={props.name}
                                />
                            </Table>
                        </MobileBtnWrapper>
                        <WebBtnWrapper>
                            <Table className="edit">
                                <button onClick={() => handleEdit()}>
                                    수정
                                </button>{' '}
                            </Table>
                            <Table>
                                <DeleteUser
                                    id={props.id}
                                    userName={props.name}
                                />
                            </Table>
                        </WebBtnWrapper>
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

    @media (max-width: 1500px) {
        .name {
            width: 70px;
        }

        .univ {
            width: 150px;
        }

        .major {
            width: 120px;
        }

        .ordinal {
            width: 30px;
        }

        .part {
            width: 100px;
        }

        .role {
            width: 50px;
        }
        .email {
            width: 180px;
        }
    }

    @media (max-width: 1200px) {
        .name {
            width: 60px;
        }

        .univ {
            width: 140px;
        }

        .major {
            width: 110px;
        }

        .ordinal {
            width: 30px;
        }

        .part {
            width: 90px;
        }

        .role {
            width: 50px;
        }
        .email {
            width: 170px;
        }
    }
    @media screen and (max-width: 767px) {
        .name,
        .univ,
        .part,
        .role {
            width: 60px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .univ {
            width: 61px;
        }

        .major {
            display: none;
        }

        .ordinal {
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .part {
            width: 70px;
        }

        .role {
            width: 49px;
        }
        .email {
            display: none;
        }
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

        @media (max-width: 1400px) {
            width: 45px;
            font-size: 0.8rem;
        }
    }
    @media screen and (max-width: 767px) {
        .mobileDelete {
            background-color: #ff7710;
        }
    }
    @media screen and (max-width: 380px) {
        margin-left: 10px;
    }

    .check {
        height: 70px;
        accent-color: #ff7710;
        color: #ffffff;

        @media screen and (max-width: 767px) {
            display: flex;
            align-items: center;
            justify-content: center;
        }
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
    word-break: break-all;

    @media (max-width: 1400px) {
        padding: 14px 4px;
        margin-right: 10px;
        font-size: 0.8rem;
    }

    @media (max-width: 1300px) {
        padding: 14px 2px;
        margin-right: 0px;
    }
`;
const MobileBtnWrapper = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: block;
        & > div:first-child {
            margin-bottom: -20px;
        }
    }
`;
const WebBtnWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 767px) {
        display: none;
        .mobileDelete {
            background-color: orange;
        }
    }
`;
