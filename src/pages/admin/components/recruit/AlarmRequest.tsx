import React from 'react';
import styled from 'styled-components';

const AlarmRequestWrapper = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: var(--orange-600, #ff7710);

    border-radius: 42px;
    padding: 6px 12px 6px 12px;
    margin: 12px;

    background: #fff2e8;
`;

interface AlarmRequestProps {
    count: number;
    children?: React.ReactNode;
}

const AlarmRequest: React.FC<AlarmRequestProps> = ({ count, children }) => (
    <AlarmRequestWrapper>
        알림 신청 {children} {count}건
    </AlarmRequestWrapper>
);

export default AlarmRequest;
