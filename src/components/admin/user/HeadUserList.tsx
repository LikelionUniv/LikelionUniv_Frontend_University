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

const HeadUserList: React.FC<UserListProps> = ({
    order,
    searchQuery,
}: UserListProps) => {
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

export default HeadUserList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
