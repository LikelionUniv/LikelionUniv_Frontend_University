import React from 'react';
import styled from 'styled-components';
import TableUserList from './TableUserList';
import TableHead from './TableHead';
import TableBottom from './TableBottom';
import { SelectedUsersProvider } from '../SelectedUserContext';
import useServerSidePagination from '../../../query/get/useServerSidePagination';
import { User } from './Usertype';

interface UserListProps {
    order?: string;
    searchQuery?: string;
    role?: string;
    univName?: string;
}

function HeadUserList({ order, searchQuery }: UserListProps, { id }: User) {
    const { curPageItem: users, renderPaginationBtn } =
        useServerSidePagination<User>({
            uri: '/api/admin/v1/headquaters/users',
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

export default HeadUserList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
