import React, { useState } from 'react';
import { useSelectedUsers } from '../SelectedUserContext';
import EmailModal from '../modal/EmailModal';
import { styled } from 'styled-components';

interface EmailSendProps {
    email: string;
}

function EmailSendButton() {
    const { selectedUserEmails, selectAll } = useSelectedUsers();
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

    const openEmailModal = () => setIsEmailModalOpen(true);
    const closeEmailModal = () => setIsEmailModalOpen(false);

    const handleSendEmail = () => {
        openEmailModal();
    };

    const isButtonActive = selectedUserEmails.length > 0 || selectAll;

    return (
        <Wrapper>
            <Button
                onClick={isButtonActive ? openEmailModal : undefined}
                style={{
                    color: '#ffffff',
                    backgroundColor: isButtonActive ? '#FF7710' : '#ADB3BA',
                    cursor: isButtonActive ? 'pointer' : 'default',
                }}
            >
                선택 알림 보내기
            </Button>
            {isEmailModalOpen && (
                <EmailModal
                    selectedEmails={selectedUserEmails}
                    onCancel={closeEmailModal}
                />
            )}
        </Wrapper>
    );
}

export default EmailSendButton;

const Wrapper = styled.div`
    =
`;

const Button = styled.button`
    padding: 0px 16px;
    height: 40px;
    margin-top: 15px;
    background-color: #adb3ba;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid #dcdfe3;
`;
