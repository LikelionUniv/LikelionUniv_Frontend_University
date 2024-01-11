import { useState, useCallback } from 'react';
import * as T from './UnivTabStyle';
import Logo from '../../img/recruit/logo.svg';
import BtnArrow from '../../img/recruit/btnArrow.svg';
import default_image from '../../img/univ/_default.png';
import { tabData, regionTab } from './UnivTabData';

const Tab = () => {
    const [activeTab, setActiveTab] = useState<string>('전체');

    const onTabClick = useCallback((tab: string) => {
        setActiveTab(tab);
    }, []);

    // 학교명 가나다 정렬
    const getFilteredUniversities = () => {
        if (activeTab === '전체') {
            const allUniversities = Object.values(tabData).flat();
            return allUniversities.sort((a, b) =>
                a.school.localeCompare(b.school),
            );
        } else {
            return tabData[activeTab].sort((a, b) =>
                a.school.localeCompare(b.school),
            );
        }
    };

    const popupUnivSite = (siteUrl?: string): void => {
        if (siteUrl) {
            window.open(siteUrl, '_blank');
        }
        // Add any other actions you want to perform if there is no website link.
    };
    const onButtonClick = (): void => {
        window.open('https://forms.gle/j4CJ35VwWgePBEJX6');
    };

    return (
        <T.Container>
            <T.Content>
                {/* 지역 탭 부분 */}
                <T.TabWrapper>
                    {regionTab.map(tab => (
                        <T.TabRegion
                            key={tab}
                            active={activeTab === tab}
                            onClick={() => onTabClick(tab)}
                        >
                            {tab}
                        </T.TabRegion>
                    ))}
                </T.TabWrapper>

                {/* 학교명  */}
                <T.SchoolWrapper>
                    {getFilteredUniversities().map((school, index) => (
                        <T.TabContent
                            key={index}
                            onClick={() => popupUnivSite(school.website)}
                        >
                            {/* 학교 로고 추가 */}
                            <T.SchoolLogo>
                                <img
                                    src={
                                        school.logo
                                            ? school.logo
                                            : default_image
                                    }
                                />
                            </T.SchoolLogo>
                            {/* 학교 텍스트 */}
                            <T.SchoolText>
                                {school.school}
                                <div>{school.region}</div>
                            </T.SchoolText>
                        </T.TabContent>
                    ))}
                </T.SchoolWrapper>

                {/* 참여 버튼  */}
                <T.BtnWrapper>
                    <div>우리 학교에는 아직 멋쟁이사자처럼이 없다면?</div>
                    {/* <T.Btn onClick={onButtonClick}>
                        우리 학교도 멋쟁이사자처럼 참여하기
                        <img src={BtnArrow} alt="버튼화살표" />
                    </T.Btn> */}
                    <T.Btn>
                         13기 참여 대학 모집을 기다려주세요!
                    </T.Btn>
                </T.BtnWrapper>
            </T.Content>
        </T.Container>
    );
};

export default Tab;
