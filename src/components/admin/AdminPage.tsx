import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SideBar from './Sidebar';
import styled from 'styled-components';
import useGetUserInfo from '../../query/get/useGetUserInfo';
import GlobalStyles from '../../styles/GlobalStyle';
import { RolePriority } from '../../constants/Role';

const AdminPage = () => {
    const [selectedItem, setSelectedItem] = useState<string>('회원정보');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const { userinfo, error } = useGetUserInfo();
    const isAdmin = RolePriority.findIndex(role => role === userinfo.role) >= 2;
    const isUniversityAdmin =
        RolePriority.findIndex(role => role === userinfo.role) >= 3;

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
    max-width: 1600px;
    min-width: 1024px;
    width: 100%;
    margin: 150px auto;
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 1024px) {
        padding: 0 40px;
    }

    @media screen and (max-width: 767px) {
        padding: 0;
    }
`;
