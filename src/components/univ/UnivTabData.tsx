interface ITabData {
    school: string;
    region: string;
}

export const tabData: { [key: string]: ITabData[] } = {
    서울: [
        { school: '서울대학교1', region: '서울' },
        { school: '서울대학교2', region: '서울' },
        { school: '서울대학교3', region: '서울' },
        { school: '서울대학교4', region: '서울' },
        { school: '가나다서울대학교5', region: '서울' },
        { school: '서울대학교6', region: '서울' },
        { school: '서울대학교7', region: '서울' },
    ],
    부산: [
        { school: '부산대학교1', region: '부산' },
        { school: '부산대학교2', region: '부산' },
        { school: '부산대학교3', region: '부산' },
        { school: '부산대학교4', region: '부산' },
        { school: '부산대학교5', region: '부산' },
        { school: '부산대학교6', region: '부산' },
    ],
    대구: [
        { school: '대구대학교1', region: '대구' },
        { school: '대구대학교2', region: '대구' },
        { school: '대구대학교3', region: '대구' },
        { school: '대구대학교4', region: '대구' },
    ],
    인천: [
        { school: '인천대학교1', region: '인천' },
        { school: '인천대학교2', region: '인천' },
        { school: '인천대학교3', region: '인천' },
        { school: '인천대학교4', region: '인천' },
    ],
    광주: [
        { school: '광주대학교1', region: '광주' },
        { school: '광주대학교2', region: '광주' },
        { school: '광주대학교3', region: '광주' },
    ],
    대전: [
        { school: '대전대학교1', region: '대전' },
        { school: '대전대학교2', region: '대전' },
    ],
    울산: [
        { school: '울산대학교1', region: '울산' },
        { school: '울산대학교2', region: '울산' },
    ],
    세종: [
        { school: '세종대학교1', region: '세종' },
        { school: '세종대학교2', region: '세종' },
    ],
    경기: [
        { school: '경기대학교1', region: '경기' },
        { school: '경기대학교2', region: '경기' },
    ],
    강원: [
        { school: '강원대학교1', region: '강원' },
        { school: '강원대학교2', region: '강원' },
    ],
    충북: [
        { school: '충북대학교1', region: '충북' },
        { school: '충북대학교2', region: '충북' },
    ],
    충남: [
        { school: '충남대학교1', region: '충남' },
        { school: '충남대학교2', region: '충남' },
    ],
    전남: [
        { school: '전남대학교1', region: '전남' },
        { school: '전남대학교2', region: '전남' },
    ],
    전북: [
        { school: '전북대학교1', region: '전북' },
        { school: '전북대학교2', region: '전북' },
    ],
    경북: [
        { school: '경북대학교1', region: '경북' },
        { school: '경북대학교2', region: '경북' },
    ],
    경남: [
        { school: '경남대학교1', region: '경남' },
        { school: '경남대학교2', region: '경남' },
    ],
    제주: [{ school: '제주대학교', region: '제주' }],
};

// 탭 메뉴
export const regionTab: string[] = [
    '전체',
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전남',
    '전북',
    '경남',
    '제주',
];
