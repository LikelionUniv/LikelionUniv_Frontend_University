import { useState, useCallback, useEffect } from 'react';
import * as T from './UnivTabStyle';
import default_image from '../../img/univ/_default.png';
import { regionTab, IUnivTab } from './UnivTabData';
import { axiosInstance } from '../../utils/axios';

const Tab = () => {
    const [activeTab, setActiveTab] = useState<string>('전체');
    const [universities, setUniversities] = useState<IUnivTab[]>([]);

    const onTabClick = useCallback((tab: string) => {
        setActiveTab(tab);
    }, []);

    const fetchUniversities = useCallback(async () => {
        const url = `/api/v1/university/${
            activeTab === '전체' ? 'all' : activeTab
        }`;
        try {
            const response = await axiosInstance.get(url);
            setUniversities(response.data.data);
        } catch (error) {
            console.error('에러 : ', error);
        }
    }, [activeTab]);

    useEffect(() => {
        fetchUniversities();
    }, [fetchUniversities]);

    // 학교명 가나다 정렬
    const getFilteredUniversities = () => {
        const sortedUniversities = universities.sort((a, b) =>
            a.universityName.localeCompare(b.universityName),
        );

        if (activeTab === '전체') {
            return sortedUniversities;
        } else {
            return sortedUniversities.filter(
                university => university.location === activeTab,
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
                            onClick={() => popupUnivSite(school.recuriteUrl)}
                        >
                            <T.SchoolLogo>
                                <img
                                    src={school.image || default_image}
                                    alt={default_image}
                                />
                            </T.SchoolLogo>
                            <T.SchoolText>
                                {school.universityName}
                                <div>{school.location}</div>
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
                    <T.Btn>13기 참여 대학 모집을 기다려주세요!</T.Btn>
                </T.BtnWrapper>
            </T.Content>
        </T.Container>
    );
};

export default Tab;
