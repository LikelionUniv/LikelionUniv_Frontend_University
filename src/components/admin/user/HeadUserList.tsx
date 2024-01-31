import React, { useEffect } from 'react';
import styled from 'styled-components';
import TableUserList from './TableUserList';
import TableHead from './TableHead';
import TableBottom from './TableBottom';
import { SelectedUsersProvider } from '../SelectedUserContext';
import useServerSidePagination from '../../../query/get/useServerSidePagination';
import { User } from './Usertype';
import OrderDropDown from './OrderDropDown';
import SearchBar from '../Search/SearchBar';

interface UserListProps {
    order?: string;
    searchQuery?: string;
    role?: string;
    univName?: string;
}

/* type PartType = 'PM_DESIGNER' | 'NO_PART' | 'FRONTEND' | 'BACKEND';

const partOrder: { [key in PartType]: number } = {
    PM_DESIGNER: 1,
    FRONTEND: 2,
    BACKEND: 3,
    NO_PART: 4,
}; */

/* const sortByOrdinalPartAndName = (a: User, b: User) => {
    const ordinalA = a.ordinal ?? Number.MAX_SAFE_INTEGER;
    const ordinalB = b.ordinal ?? Number.MAX_SAFE_INTEGER;

    if (ordinalA < ordinalB) return -1;
    if (ordinalA > ordinalB) return 1;

    if (partOrder[a.part as PartType] < partOrder[b.part as PartType])
        return -1;
    if (partOrder[a.part as PartType] > partOrder[b.part as PartType]) return 1;

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    return 0;
}; */

const HeadUserList: React.FC<UserListProps> = ({
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

    /* 
    const [sortedUsers, setSortedUsers] = React.useState<User[]>([]);

    useEffect(() => {
        if (Array.isArray(users)) {
            const sorted = [...users].sort(sortByOrdinalPartAndName);
            setSortedUsers(sorted);
        }
    }, [users]); */

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

const Nav = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;
