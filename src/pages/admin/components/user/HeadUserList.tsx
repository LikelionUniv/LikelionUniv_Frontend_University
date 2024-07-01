import React, { useEffect } from 'react';
import styled from 'styled-components';
import TableUserList from './TableUserList';
import TableHead from './TableHead';
import TableBottom from './TableBottom';
import { SelectedUsersProvider } from '../SelectedUserContext';
import useServerSidePagination from '../../../../query/get/useServerSidePagination';
import { User } from '../../../../inteface/adminType';

interface UserListProps {
    order?: string;
    searchQuery?: string;
    role?: string;
    univName?: string;
}

const HeadUserList: React.FC<UserListProps> = ({
    order,
    univName,
    role,
}: UserListProps) => {
    //메모. 여기가 지금 회원정보 list
    const { curPageItem: users, renderPaginationBtn } =
        useServerSidePagination<User>({
            uri: '/api/admin/v1/univAdmin/univ/users',
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

export default HeadUserList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
