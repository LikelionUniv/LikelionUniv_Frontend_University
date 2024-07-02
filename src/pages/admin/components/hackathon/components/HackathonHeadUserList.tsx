import React, { useState } from 'react';
import styled from 'styled-components';
import { Hackathons, User } from '../../../../../inteface/adminType';
import useServerSidePagination from '../../../../../query/get/useServerSidePagination';
import { SelectedUsersProvider } from '../../SelectedUserContext';
import TableHackathonList from './TableHackathonList';
import HackathonTableBottom from './TableBottom';
import TableHackathonHead from './TableHead';

interface UserListProps {
    keyword?: string;
}

const HackathonHeadUserList: React.FC<UserListProps> = ({ keyword }) => {
    const {
        curPageItem: users,
        renderPaginationBtn,
        refetch,
    } = useServerSidePagination<User>({
        uri: '/api/admin/v1/hackathons',
        size: 10,
        keyword: keyword,
        isExcelData: false,
    });

    return (
        <>
            <SelectedUsersProvider>
                <Wrapper>
                    <TableHackathonHead />
                    {Array.isArray(users) && (
                        <>
                            {users.map(user => (
                                <TableHackathonList
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    hackathonParts={user.hackathonParts}
                                    phone={user.phone}
                                    universityName={user.universityName}
                                    teamName={user.teamName}
                                    offlineParticipation={
                                        user.offlineParticipation
                                    }
                                    reasonForNotOffline={
                                        user.reasonForNotOffline
                                    }
                                />
                            ))}
                        </>
                    )}
                    <HackathonTableBottom />
                    {renderPaginationBtn()}
                </Wrapper>
            </SelectedUsersProvider>
        </>
    );
};

export default HackathonHeadUserList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
