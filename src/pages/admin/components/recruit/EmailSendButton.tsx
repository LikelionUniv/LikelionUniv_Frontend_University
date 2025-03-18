import React, { useState } from 'react';
import { useSelectedUsers } from '../SelectedUserContext';
import EmailModal from '../modal/EmailModal';
import { styled } from 'styled-components';
import XLSX from 'xlsx-js-style';
import useGetAlarmList from '../../../../query/get/useGetAlarmList';
import { IRecruits } from '../../../../query/get/useGetAlarmList';
interface EmailSendProps {
    email: string;
}

interface ExcelType {
    name: string;
    universityName: string;
    phone: string;
    offlineParticipation: boolean | string;
    hackathonParts: any;
    email: string;
    teamName: string;
}

function EmailSendButton() {
    const { selectedUserEmails, selectAll } = useSelectedUsers();
    const { data: users } = useGetAlarmList({ ordinal: 12 });
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

    const openEmailModal = () => setIsEmailModalOpen(true);
    const closeEmailModal = () => setIsEmailModalOpen(false);

    const handleSendEmail = () => {
        openEmailModal();
    };

    const handleDownExcel = () => {
        const workbook = XLSX.utils.book_new();
        const body: any[] = [];

        // users.map(el => {
        //     body.push({
        //         name: el.name,
        //         universityName: el.universityName!,
        //         phone: el.phone!,
        //         offlineParticipation: el.offlineParticipation!,
        //         hackathonParts: el.hackathonParts![0],
        //         email: el.email,
        //         teamName: el.teamName!,
        //     });
        // });
        users.alarms.map((el: IRecruits) => {
            body.push({
                ordinal: el.ordinal,
                email: el.email!,
                createdDate: el.createdDate,
            });
        });
        body.unshift({
            ordinal: '기수',
            email: '이메일',
            createdDate: '신청 날짜',
        });

        const firstSheet = XLSX.utils.json_to_sheet(body, {
            header: ['ordinal', 'email', 'createdDate'],
            skipHeader: true,
        });
        firstSheet['!cols'] = [{ wpx: 30 }, { wpx: 180 }, { wpx: 180 }];
        XLSX.utils.book_append_sheet(workbook, firstSheet, 'hackathonData');

        XLSX.writeFile(workbook, '모집알림신청.xlsx');
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
            <Button
                onClick={handleDownExcel}
                style={{
                    color: '#ffffff',
                    backgroundColor: '#FF7710',
                    cursor: 'pointer',
                    marginLeft: '10px',
                }}
            >
                엑셀로 내보내기
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

const Wrapper = styled.div``;

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
