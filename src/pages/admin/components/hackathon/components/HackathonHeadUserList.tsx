import React from 'react';
import styled from 'styled-components';
import { Hackathons, User } from '../../../../../inteface/adminType';
import useServerSidePagination from '../../../../../query/get/useServerSidePagination';
import { SelectedUsersProvider } from '../../SelectedUserContext';
import TableHackathonList from './TableHackathonList';
import HackathonTableBottom from './TableBottom';
import TableHackathonHead from './TableHead';

interface UserListProps {
    order?: string;
    searchQuery?: string;
    role?: string;
    univName?: string;
}

const HackathonHeadUserList: React.FC<UserListProps> = ({
    order,
    univName,
    role,
}: UserListProps) => {
    const { curPageItem: users, renderPaginationBtn } =
        useServerSidePagination<User>({
            uri: '/api/admin/v1/univAdmin/univ/users',
            size: 10,
            sort: order,
        });

    return (
        <>
            <SelectedUsersProvider>
                <Wrapper>
                    <TableHackathonHead />
                    {Array.isArray(users) &&
                        users.map(user => (
                            <TableHackathonList
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                email={user.email}
                                major={user.major}
                                part={user.part}
                                ordinal={user.ordinal}
                                role={user.role}
                                univName={user.univName}
                            />
                        ))}
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
