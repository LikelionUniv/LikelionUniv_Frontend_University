import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import UserList from './user/UserList';
import OrderDropDown from './DropDown/OrderDropDown';
import SearchBar from './Search/SearchBar';
import { useOutletContext } from 'react-router-dom';
import OutletContext from './OutletContext';
import HeadUserList from './user/HeadUserList';

function User() {
    const [order, setOrder] = useState<string | undefined>();
    const [univName, setunivName] = useState<string | undefined>();
    const { userinfo, isAdmin } = useOutletContext<OutletContext>();
    const [role, setRole] = useState<string | undefined>();

    const universityName = userinfo.universityName;

    return (
        <Wrapper>
            <div className="TitleUniversity">
                <Title>회원정보</Title>
                <UniversityName>{universityName}</UniversityName>
            </div>
            {isAdmin && (
                <Nav>
                    <OrderDropDown setRole={setRole} />
                    <SearchBar setunivName={setunivName} />
                </Nav>
            )}
            <Suspense fallback={<div>loading...</div>}>
                {isAdmin ? (
                    <HeadUserList role={role} univName={univName} />
                ) : (
                    <UserList order={order} />
                )}
            </Suspense>
        </Wrapper>
    );
}

export default User;

const Wrapper = styled.div`
    width: fit-content;

    .TitleUniversity {
        display: flex;
        align-items: baseline;
    }
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    line-height: 150%;
`;

const UniversityName = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: var(--orange-600, #ff7710);

    border-radius: 42px;
    padding: 6px 12px 6px 12px;
    margin: 12px;
    background: #fff2e8;
`;
