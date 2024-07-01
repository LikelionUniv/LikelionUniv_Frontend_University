import React, { useState } from 'react';
import styled from 'styled-components';
import ModifyUser from '../../modal/ModifyUser';
import { useOutletContext } from 'react-router-dom';
import { OutletContext, User } from '../../../../../inteface/adminType';
import HackathonModal from '../../modal/hackathonModal';
export interface TableUserListProps {
    id: number;
    name: string;
    email: string;
    part?: string;
    phone?: string;
    universityName?: string;
    teamName?: string;
    offlineParticipation?: boolean;
    reasonForNotOffline?: string | null;
}

const TableHackathonList: React.FC<TableUserListProps> = props => {
    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [isModal, setIsModal] = useState<boolean>(false);
    const { userinfo, isAdmin } = useOutletContext<OutletContext>();

    const onCancel = () => {
        setIsModal(false);
    };

    return (
        <>
            <Wrapper>
                <BodyTable>
                    <TableBody key={props.id}>
                        <Table className="name">{props.name}</Table>
                        {isAdmin && (
                            <Table className="univ">
                                {props.universityName!.length >= 5
                                    ? props.universityName!.substr(0, 5)
                                    : props.universityName}
                            </Table>
                        )}
                        <Table className="phone">{props.phone}</Table>
                        <Table className="join">
                            {props.offlineParticipation ? (
                                'O'
                            ) : (
                                <Xbtn onClick={() => setIsModal(true)}>X</Xbtn>
                            )}
                        </Table>
                        <Table className="part">{props.part}</Table>
                        <Table className="email">{props.email}</Table>
                        <Table className="teamname">{props.teamName}</Table>
                    </TableBody>
                </BodyTable>
            </Wrapper>
            {isModal && (
                <HackathonModal
                    onCancel={onCancel}
                    reason={props.reasonForNotOffline}
                />
            )}
        </>
    );
};

export default TableHackathonList;

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

    .phone {
        width: 140px;
    }

    .join {
        width: 60px;
    }

    .part {
        width: 120px;
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

        .phone {
            width: 120px;
        }

        .join {
            width: 30px;
        }

        .part {
            width: 100px;
        }
        .email {
            width: 180px;
        }
        .teamname {
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

        .join {
            width: 30px;
        }

        .part {
            width: 90px;
        }
        .email {
            width: 170px;
        }
    }
    @media screen and (max-width: 767px) {
        .name,
        .univ,
        .part {
            width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .univ {
            width: 61px;
        }

        .phone {
            display: none;
        }

        .join {
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .email {
            width: 90px;
        }

        .part {
            width: 70px;
        }

        .teamname {
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
`;

const TableBody = styled.div`
    display: flex;
    border-bottom: 1px solid #dcdfe3;
`;
const Xbtn = styled.span`
    cursor: pointer;
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
