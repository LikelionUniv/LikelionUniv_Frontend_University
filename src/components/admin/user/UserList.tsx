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
}

function UserList({ order, searchQuery }: UserListProps) {
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
                    {Array.isArray(users) &&
                        users.map(e => (
                            <TableUserList
                                id={e.id}
                                name={e.name}
                                email={e.email}
                                major={e.major}
                                part={e.part}
                                ordinal={e.ordinal}
                                role={e.role}
                                univName={e.univName}
                            />
                        ))}
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
