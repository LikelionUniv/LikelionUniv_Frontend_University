import React from 'react';
import styled from 'styled-components';
import XLSX from 'xlsx-js-style';
interface ExcelType {
    name: string;
    universityName: string;
    phone: string;
    offlineParticipation: boolean | string;
    hackathonPart: string;
    email: string;
    teamName: string;
}
const HackathonTableBottom: React.FC = () => {
    const workbook = XLSX.utils.book_new();

    const body: ExcelType[] = [
        {
            name: '홍길동',
            universityName: '하버드',
            phone: '010-1111-2222',
            offlineParticipation: true,
            hackathonPart: 'PM',
            email: 'test1234@naver.com',
            teamName: '화이팅팀',
        },
        {
            name: '홍길동',
            universityName: '하버드',
            phone: '010-1111-2222',
            offlineParticipation: true,
            hackathonPart: 'PM',
            email: 'test1234@naver.com',
            teamName: '화이팅팀',
        },
        {
            name: '홍길동',
            universityName: '하버드',
            phone: '010-1111-2222',
            offlineParticipation: true,
            hackathonPart: 'PM',
            email: 'test1234@naver.com',
            teamName: '화이팅팀',
        },
    ];
    body.unshift({
        name: '이름',
        universityName: '대학',
        phone: '전화번호',
        offlineParticipation: '참여 여부',
        hackathonPart: '테스트',
        email: '테스트',
        teamName: '테스트',
    });

    console.log(body);
    // STEP 3: header와 body로 worksheet를 생성한다.
    const firstSheet = XLSX.utils.json_to_sheet(body, {
        header: [
            'name',
            'universityName',
            'phone',
            'offlineParticipation',
            'hackathonPart',
            'email',
            'teamName',
        ],
        skipHeader: true,
    });
    firstSheet['!cols'] = [
        { wpx: 120 },
        { wpx: 180 },
        { wpx: 200 },
        { wpx: 100 },
        { wpx: 130 },
        { wpx: 200 },
        { wpx: 200 },
    ];
    XLSX.utils.book_append_sheet(workbook, firstSheet, 'hackathonData');

    return (
        <Wrapper>
            <Button
                style={{ color: '#4D5359' }}
                onClick={() => {
                    XLSX.writeFile(workbook, '해커톤신청정보.xlsx');
                }}
            >
                엑셀로 내보내기
            </Button>
        </Wrapper>
    );
};

export default HackathonTableBottom;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
