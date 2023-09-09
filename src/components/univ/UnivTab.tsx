// 대학 Tab
import { useState, useCallback } from 'react';
import * as T from './UnivTabStyle';
import Logo from '../../img/recruit/logo.svg';
import BtnArrow from '../../img/recruit/btnArrow.svg';
import { tabData, regionTab } from './UnivTabData';

interface TabProps {
    showCount: boolean;
}

const Tab = ({ showCount }: TabProps) => {
    const [activeTab, setActiveTab] = useState<string>('전체');

    const onClick = useCallback((tab: string) => {
        setActiveTab(tab);
    }, []);

    // 대학 개수 (/univ)
    const getCount = () => {
        if (activeTab === '전체') {
            const allUniversities = Object.values(tabData).flat();
            return allUniversities.length;
        } else {
            return tabData[activeTab].length;
        }
    };

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

    return (
        <T.Container>
            <div>
                <>
                    {/* 참여 대학 페이지 (/univ) text  */}
                    {showCount && (
                        <T.Text>
                            대학을 선택하시면 각 대학의 멋쟁이사자처럼 소개
                            홈페이지를 볼 수 있어요.
                        </T.Text>
                    )}
                </>

                {/* 지역 탭 부분 */}
                <T.TabWrapper>
                    <>
                        {regionTab.map(tab => (
                            <T.TabRegion
                                key={tab}
                                active={activeTab === tab}
                                onClick={() => onClick(tab)}
                            >
                                {tab}
                            </T.TabRegion>
                        ))}
                    </>
                </T.TabWrapper>

                {/* 참여 대학 페이지 (/univ) 개수  */}
                <T.CountText>
                    {showCount && (
                        <>
                            <span>{activeTab}</span>
                            <span> {getCount()}</span>
                        </>
                    )}
                </T.CountText>

                {/* 학교명  */}
                <T.SchoolWrapper>
                    {getFilteredUniversities().map(school => (
                        <>
                            <T.TabContent>
                                <T.SchoolLogo logo={Logo} />
                                <T.SchoolText>
                                    {school.school}
                                    <div>{school.region}</div>
                                </T.SchoolText>
                            </T.TabContent>
                        </>
                    ))}
                </T.SchoolWrapper>

                {/* 참여 버튼  */}
                <T.BtnWrapper>
                    <div>우리 학교에는 아직 멋쟁이 사자처럼이 없다면?</div>
                    <T.Btn>
                        우리 학교도 멋쟁이사자처럼 참여하기
                        <img src={BtnArrow} alt="버튼화살표" />
                    </T.Btn>
                </T.BtnWrapper>
            </div>
        </T.Container>
    );
};

export default Tab;
