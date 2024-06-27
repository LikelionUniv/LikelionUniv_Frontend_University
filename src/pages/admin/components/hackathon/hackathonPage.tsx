import { Suspense, useState } from 'react';
import { styled } from 'styled-components';
import OrderDropDown from '../DropDown/OrderDropDown';
import { OutletContext } from '../../../../inteface/adminType';
import { useOutletContext } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';
import HackathonHeadUserList from './components/HackathonHeadUserList';

function HackathonPage() {
    const [order, setOrder] = useState<string | undefined>();
    const [role, setRole] = useState<string | undefined>();
    const [univName, setunivName] = useState<string | undefined>();

    console.log('해커톤 페이지');
    const { userinfo, isAdmin, isUniversityAdmin } =
        useOutletContext<OutletContext>();
    return (
        <Wrapper>
            <div className="TitleUniversity">
                <Title>회원정보</Title>
            </div>
            {isAdmin && (
                <Nav>
                    <OrderDropDown setRole={setRole} />
                    <SearchBar setunivName={setunivName} />
                </Nav>
            )}
            <Suspense fallback={<div>loading...</div>}>
                {isAdmin && (
                    <HackathonHeadUserList role={role} univName={univName} />
                )}
            </Suspense>
        </Wrapper>
    );
}
export default HackathonPage;

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
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
