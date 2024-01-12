import styled from 'styled-components';
import ChatList from './ChatList';
import Pannel from './Pannel';
import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import StompJs from '@stomp/stompjs';
import axios from 'axios';

const ChatBox = () => {
    return (
        <Container>
            <ChatList />
            <Pannel />
        </Container>
    );
};

const Container = styled.div`
    border: 1px solid var(--Grey-300, #eaecee);
    border-radius: 8px;
    min-height: 320px;
    max-height: 944px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    margin-top: 56px; // navbar 고려
    background-color: white;

    @media (max-width: 1280px) {
        width: 100%;
        margin: 0;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
    @media (max-height: 1080px) {
        height: 944px;
    }
`;

export default ChatBox;
