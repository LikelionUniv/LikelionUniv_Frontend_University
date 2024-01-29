import React from 'react';
import styled from 'styled-components';
import TableUserList from './TableUserList';
import TableHead from './TableHead';
import TableBottom from './TableBottom';
import { SelectedUsersProvider } from './SelectedUserContext';
import useServerSidePagination from '../../../query/get/useServerSidePagination';

interface UserListProps {
    order?: string;
    searchQuery?: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    major: string;
    part: string;
    ordinal: number;
    role: string;
}

function UserList({ order, searchQuery }: UserListProps, { id }: User) {
    const { curPageItem: users, renderPaginationBtn } =
        useServerSidePagination<User>({
            uri: '/api/admin/v1/univAdmin/univ/users',
            size: 10,
            sort: order,
            search: searchQuery,
        });

    return (
        <>
            <SelectedUsersProvider>
                <Wrapper>
                    <TableHead />
                    <TableUserList users={users} id={id} />
                    {renderPaginationBtn()}
                    <TableBottom />
                </Wrapper>
            </SelectedUsersProvider>
        </>
    );
}

export default UserList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 10px 0;
`;
