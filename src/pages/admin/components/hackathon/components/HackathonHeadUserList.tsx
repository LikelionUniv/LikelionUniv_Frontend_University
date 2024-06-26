import React, { useEffect } from 'react';
import styled from 'styled-components';

import TableBottom from './TableBottom';
import { User } from '../../../../../inteface/adminType';
import useServerSidePagination from '../../../../../query/get/useServerSidePagination';
import { SelectedUsersProvider } from '../../SelectedUserContext';
import TableHead from '../../user/TableHead';
import TableUserList from '../../user/TableUserList';

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
            uri: '/api/admin/v1/headquaters/users',
            size: 10,
            sort: order,
            univName: univName,
            role: role,
        });

    return (
        <>
            <SelectedUsersProvider>
                <Wrapper>
                    <TableHead />
                    {Array.isArray(users) &&
                        users.map(user => (
                            <TableUserList
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
                    {renderPaginationBtn()}
                    <TableBottom />
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
