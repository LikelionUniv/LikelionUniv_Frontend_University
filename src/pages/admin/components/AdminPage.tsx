import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SideBar from './Sidebar';
import styled from 'styled-components';
import useGetUserInfo from '../../../query/get/useGetUserInfo';
import { RolePriority } from '../../../constants/Role';

const AdminPage = () => {
    const [selectedItem, setSelectedItem] = useState<string>('회원정보');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const { userinfo, error } = useGetUserInfo();
    const isAdmin = [1, 4].includes(
        RolePriority.findIndex(role => role === userinfo.role),
    );
    const isUniversityAdmin = [2, 3].includes(
        RolePriority.findIndex(role => role === userinfo.role),
    );

    return (
        <Container>
            <SideBar
                onItemSelect={setSelectedItem}
                onSearch={(query: string) => setSearchQuery(query)}
                userProfile={userinfo}
            />
            <Outlet
                context={{
                    isAdmin,
                    isUniversityAdmin,
                    userinfo,
                }}
            />
        </Container>
    );
};

export default AdminPage;

const Container = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 150px auto;
    padding-right: 300px;
    display: flex;
    align-items: flex-start;

    @media (max-width: 1500px) {
        padding-right: 0px;
        margin-left: 0px;
    }

    @media (max-width: 1200px) {
        width: calc(100% - 100px);
    }
    @media screen and (max-width: 767px) {
        flex-direction: column;
        background-color: red;

        min-width: 105%;
        padding: 0 20px;
    }
`;
