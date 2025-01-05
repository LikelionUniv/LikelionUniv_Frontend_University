import React, { useState } from 'react';
import { useSelectedUsers } from '../SelectedUserContext';
import useDeleteUserList from '../../../../query/delete/useDeleteUserList';
import styled from 'styled-components';
import EmailModal from '../modal/EmailModal';
// import { useUserProfile } from '../../../../query/mypage/useUserProfile';
import { useOutletContext } from 'react-router-dom';
import { OutletContext } from '../../../../inteface/adminType';
import AdminCertificateModal from '../modal/AdminCertificateModal';

const TableBottom: React.FC = () => {
    const { selectedUserIds, setSelectedUserIds, selectedUserEmails } =
        useSelectedUsers();
    const [isChangeCertificateModal, setIsChangeCertificateModal] =
        useState(false);

    const { mutate } = useDeleteUserList();

    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const openEmailModal = () => setIsEmailModalOpen(true);
    const closeEmailModal = () => setIsEmailModalOpen(false);
    const { userinfo, isAdmin } = useOutletContext<OutletContext>();
    // const isAdmin = userProfile.role === 'UNIVERSITY_ADMIN';

    const handleDelete = () => {
        if (
            selectedUserIds.length > 0 &&
            window.confirm('선택한 사용자를 삭제하시겠습니까?')
        ) {
            mutate(selectedUserIds, {
                onSuccess: () => {
                    setSelectedUserIds([]);
                },
            });
        }
    };

    const handleSendEmail = () => {
        console.log('Sending emails to:', selectedUserEmails);
        openEmailModal();
    };

    const handleChangeOrdinal = () => {
        if (selectedUserIds.length <= 0) return;
        setIsChangeCertificateModal(true);
    };

    return (
        <Wrapper>
            <SelectedActions>
                <div>선택한 회원</div>
                <div>
                    <Button onClick={handleDelete}>삭제하기</Button>
                    {isAdmin && (
                        <Button
                            style={{ color: '#4D5359' }}
                            onClick={handleSendEmail}
                        >
                            이메일 보내기
                        </Button>
                    )}
                    <Button
                        style={{ color: '#4D5359' }}
                        onClick={handleChangeOrdinal}
                    >
                        수료증 등급 변환
                    </Button>
                </div>
            </SelectedActions>
            {isEmailModalOpen && (
                <EmailModal
                    selectedEmails={selectedUserEmails}
                    onCancel={closeEmailModal}
                />
            )}
            {isChangeCertificateModal && (
                <AdminCertificateModal
                    onClose={() => setIsChangeCertificateModal(false)}
                    selectedUserIds={selectedUserIds}
                />
            )}
        </Wrapper>
    );
};

export default TableBottom;

const Wrapper = styled.div`
    width: 100%;
`;

const SelectedActions = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    @media screen and (max-width: 650px) {
        flex-direction: column;
        align-items: start;
        & > div {
            margin-bottom: 5px;
        }
    }
    div {
        font-weight: bold;
        margin-top: 5px;
        margin-right: 10px;
    }
`;

const Button = styled.button`
    margin-right: 10px;
    padding: 8px 16px;
    background-color: #f2f4f6;
    color: #ff7710;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid #dcdfe3;

    &:hover {
        background-color: #d45a07;
    }
`;
