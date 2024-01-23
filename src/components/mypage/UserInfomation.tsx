import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ResponsiveUserBox from './ResponsiveUserBox';
import { Button } from './Common';

function UserInfomation() {
    const navigate = useNavigate();

    return (
        <Container>
            <ResponsiveUserBox />
            <ResponsiveButton onClick={() => navigate('modify')}>
                내 정보 수정
            </ResponsiveButton>
        </Container>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        padding: 0 40px;
        margin-top: 156px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;
        margin-top: 80px;
        flex-direction: column;
    }
`;

const ResponsiveButton = styled(Button)`
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 32px;
        font-size: 14px;
        margin-top: 16px;
    }
`;

export default UserInfomation;
