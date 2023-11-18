export interface ITabData {
    school: string;
    region: string;
    website: string; // Add this line
}

export const tabData: { [key: string]: ITabData[] } = {
    서울: [
        {
            school: '홍익대학교',
            region: '서울',
            website: 'https://likelionhongik.com/',
            
        },
        {
            school: '강남대학교',
            region: '서울',
            website: 'https://www.knu-likelion.org/',
        },
        {
            school: '국민대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_kmu/',
        },
        {
            school: '단국대학교',
            region: '서울',
            website: 'https://www.instagram.com/dku_likelion11th/',
        },
        {
            school: '동국대학교',
            region: '서울',
            website: 'https://likeliondgu.oopy.io/',
        },
        {
            school: '동덕여자대학교',
            region: '서울',
            website: 'https://linktr.ee/dongduk_likelion',
        },
        {
            school: '중앙대학교',
            region: '서울',
            website: 'https://cau-likelion.org/',
            
        },
        {
            school: '가톨릭대학교',
            region: '서울',
            website:
                'https://likelioncuk.notion.site/likelioncuk/ade52330317b445998c7b066071bbff4',
        },
        {
            school: '서울여자대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_swu/',
        },
        {
            school: '성균관대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_skku/',
        },
        {
            school: '세종대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_sejong/',
        },
        {
            school: '덕성여자대학교',
            region: '서울',
            website: 'https://linktr.ee/likelion_ds/',
        },
        {
            school: '한성대학교',
            region: '서울',
            website: 'https://linktr.ee/likelion_hansung',
        },
        {
            school: '건국대학교',
            region: '서울',
            website: 'https://linktr.ee/likelion.ku',
        },
        {
            school: '상명대학교(서울)',
            region: '서울',
            website: 'https://www.instagram.com/likelion_smu/',
        },
        {
            school: '성공회대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_skhu/',
        },
        {
            school: '서강대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_sg/',
        },
        {
            school: '연세대학교',
            region: '서울',
            website: 'https://yonseilikelion.pythonanywhere.com/',
        },
        {
            school: '숙명여자대학교',
            region: '서울',
            website: 'https://linktr.ee/sookmyung_likelion',
        },
        {
            school: '숭실대학교',
            region: '서울',
            website:
                'https://hello-happy-world.notion.site/75640158e27e40b18d212140fce497ae',
        },
        {
            school: '한국외국어대학교(서울)',
            region: '서울',
            website:
                'https://precious-lumber-c73.notion.site/9a23bcb170654f04bfe257e384881865',
        },
        {
            school: '서경대학교',
            region: '서울',
            website:
                'https://fantasy-cardamom-9ce.notion.site/11-94e464e93d1e4197a000f9fa185c05b95',
        },
        {
            school: '서울대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_snu/',
        },
        {
            school: '명지대학교(서울)',
            region: '서울',
            website: 'https://www.instagram.com/likelion_mju/',
        },
        {
            school: '삼육대학교',
            region: '서울',
            website: 'https://syulion11th.github.io/likelionpage-front/',
        },
        {
            school: '성신여자대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_sswu/',
        },
        {
            school: '이화여자대학교',
            region: '서울',
            website: 'https://linktr.ee/likelion.ewha',
        },
        { school: '한양여자대학교', region: '서울', website: '' },
    ],

    부산: [
        {
            school: '부산외국어대학교',
            region: '부산',
            website: 'https://www.instagram.com/likelion_bufs/',
        },
    ],
    대구: [
        {
            school: '계명대학교',
            region: '대구',
            website: 'http://kelmyung.likelion.org/',
        },
    ],
    인천: [
        {
            school: '인천대학교',
            region: '인천',
            website: 'https://www.instagram.com/inu_likelion/',
        },
        {
            school: '인하대학교',
            region: '인천',
            website: 'https://www.instagram.com/likelion_inha/',
        },
    ],
    대전: [
        {
            school: '한밭대학교',
            region: '대전',
            website: 'http://hanbat-likelion.kr/',
        },
        {
            school: '을지대학교',
            region: '대전',
            website: 'https://linktr.ee/likelion_eulji',
        },
        { school: '한남대학교', region: '대전', website: '' },
    ],

    경기: [
        {
            school: '고려대학교(세종)',
            region: '경기',
            website: 'https://www.instagram.com/likelion_ku_sejong/',
        },
        {
            school: '성결대학교',
            region: '경기',
            website: 'https://linktr.ee/likelion_sku',
        },
        {
            school: '한국항공대학교',
            region: '경기',
            website: 'https://www.instagram.com/kau_likelion/',
        },
        {
            school: '한양대학교(에리카)',
            region: '경기',
            website: 'https://linktr.ee/likelion_erica',
        },
        {
            school: '한국외국어대학교(글로벌)',
            region: '경기',
            website:
                'https://hufsglobal.notion.site/ece28870debd4c50b943266433f284cc',
        },
        {
            school: '명지대학교(자연)',
            region: '경기',
            website: 'https://mju-likelion.org/',
        },
        { school: '아주대학교', region: '경기', website: '' },
    ],
    강원: [
        {
            school: '강원대학교',
            region: '강원',
            website: 'https://www.instagram.com/likelion_kangwon/',
        },
        {
            school: '한림대학교',
            region: '강원',
            website: 'https://www.instagram.com/likelion_hallym/',
        },
    ],
    충북: [
        {
            school: '한국교통대학교',
            region: '충북',
            website: 'http://knut.likelion.org/',
        },
        { school: '충북대학교', region: '충북', website: '' },
    ],
    충남: [
        {
            school: '상명대학교(천안)',
            region: '충남',
            website: 'https://www.instagram.com/likelion_smuc/',
        },
        { school: '중부대학교', region: '충남', website: '' },
        {
            school: '순천향대학교',
            region: '충남',
            website: 'https://www.instagram.com/schlikelion/',
        },
        {
            school: '남서울대학교',
            region: '충남',
            website: 'https://www.instagram.com/likelionnsu/',
        },
        {
            school: '한서대학교',
            region: '충남',
            website: 'https://www.instagram.com/likelion_hsu/',
        },
        {
            school: '충남대학교',
            region: '충남',
            website: 'https://www.instagram.com/likelion._.cnu/',
        },
    ],
    전남: [{ school: '순천대학교', region: '전남', website: '' }],
    전북: [
        {
            school: '전북대학교',
            region: '전북',
            website:
                'https://likelionjbnu.notion.site/11-a32d1db7bba2467eb985f9a4d97e7a77',
        },
    ],
    경북: [
        {
            school: '금오공과대학교',
            region: '경북',
            website: 'https://www.instagram.com/likelionkumoh/',
        },
        {
            school: '영남대학교',
            region: '경북',
            website: 'https://linktr.ee/likelion_yu',
        },
        { school: '한동대학교', region: '경북', website: '' },
        {
            school: '경북대학교',
            region: '경북',
            website: 'https://www.instagram.com/likelion_knu/',
        },
    ],
    경남: [
        {
            school: '경상국립대학교',
            region: '경남',
            website: 'https://www.instagram.com/likelion_gnu/',
        },
        { school: '경남대학교', region: '경남', website: '' },
    ],
};
// 탭 메뉴
export const regionTab: string[] = [
    '전체',
    '서울',
    '부산',
    '대구',
    '인천',

    '대전',

    '경기',
    '강원',
    '충북',
    '충남',
    '전남',
    '전북',
    '경남',
];

// 학교 이름만 필요할 때
export const schoolList = Object.values(tabData).flatMap(tab =>
    tab.map(value => value.school),
);
