import React, { useState } from 'react';
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
    const [isExcelDownload, setIsExcelDownload] = useState(false);
    console.log(isExcelDownload);
    const {
        curPageItem: data,
        renderPaginationBtn,
        refetch,
    } = useServerSidePagination<User>({
        uri: '/api/admin/v1/hackathons',
        size: 10,
        isExcelData: isExcelDownload,
    });

    console.log(data);

    return (
        <>
            <SelectedUsersProvider>
                <Wrapper>
                    <TableHackathonHead />
                    {Array.isArray(data) && (
                        <>
                            {data.map(user => (
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
                        </>
                    )}
                    <HackathonTableBottom
                        setIsExcelDownload={setIsExcelDownload}
                        refetch={refetch}
                    />
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
