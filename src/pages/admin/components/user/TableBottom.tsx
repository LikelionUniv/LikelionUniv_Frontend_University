import React, { useState } from 'react';
import { useSelectedUsers } from '../SelectedUserContext';
import useDeleteUserList from '../../../../query/delete/useDeleteUserList';
import styled from 'styled-components';
import EmailModal from '../modal/EmailModal';
// import { useUserProfile } from '../../../../query/mypage/useUserProfile';
import { useOutletContext } from 'react-router-dom';
import { OutletContext, User } from '../../../../inteface/adminType';
import AdminCertificateModal from '../modal/AdminCertificateModal';
import XLSX from 'xlsx-js-style';
import useServerSidePagination from '../../../../query/get/useServerSidePagination';

const TableBottom: React.FC = () => {
    const { selectedUserIds, setSelectedUserIds, selectedUserEmails } =
        useSelectedUsers();
    const [isChangeCertificateModal, setIsChangeCertificateModal] =
        useState(false);

    const { mutate } = useDeleteUserList();
    const { curPageItem: users } = useServerSidePagination<User>({
        uri: '/api/admin/v1/headquarters/users',
        size: 10,
        isExcelData: true,
    });

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

    const handleDownExcel = () => {
        const workbook = XLSX.utils.book_new();
        const body: any[] = [];

        users.map((el: any) => {
            body.push({
                name: el.name,
                univName: el.univName!,
                major: el.major,
                ordinal: el.ordinal,
                part: el.part,
                role: el.role,
                email: el.email,
            });
        });
        body.unshift({
            name: '이름',
            univName: '소속 대학',
            major: '전공',
            ordinal: '기수',
            part: '파트',
            role: '역할',
            email: '이메일',
        });

        const firstSheet = XLSX.utils.json_to_sheet(body, {
            header: [
                'name',
                'univName',
                'major',
                'ordinal',
                'part',
                'role',
                'email',
            ],
            skipHeader: true,
        });
        firstSheet['!cols'] = [
            { wpx: 100 },
            { wpx: 100 },
            { wpx: 100 },
            { wpx: 100 },
            { wpx: 100 },
            { wpx: 100 },
            { wpx: 200 },
        ];
        XLSX.utils.book_append_sheet(workbook, firstSheet, 'hackathonData');

        XLSX.writeFile(workbook, '회원정보.xlsx');
    };

    return (
        <Wrapper>
            <SelectedActions>
                <div>
                    <div>선택한 회원</div>
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
                <Button style={{ color: '#4D5359' }} onClick={handleDownExcel}>
                    엑셀로 내보내기
                </Button>
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
                    setSelectedUserIds={setSelectedUserIds}
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
    justify-content: space-between;
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
        display: flex;
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
