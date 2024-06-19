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
            <Wrapper>
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
            </Wrapper>
        </Container>
    );
};

export default AdminPage;

const Container = styled.div`
    min-width: 100%;
    margin: 150px auto;
    display: flex;
    justify-content: center;
    @media (max-width: 1500px) {
        padding-right: 0px;
        margin-left: 0px;
    }
    @media screen and (max-width: 767px) {
        margin: 40px 0;
    }
    @media (max-width: 1200px) {
        width: calc(100% - 100px);
    }
`;
const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 767px) {
        flex-direction: column;
        margin: 0 20px;
    }
`;
