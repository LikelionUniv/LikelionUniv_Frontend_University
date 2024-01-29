import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Notice from './Notice';
import useIsPC from '../../hooks/useIsPC';

const Community: React.FC = () => {
    const isPC = useIsPC();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedMainCategory, setSelectedMainCategory] = 
        useState('멋쟁이사자처럼');
    const [selectedSubCategory, setSelectedSubCategory] = useState('공지사항');

    const handleCategorySelect = (
        mainCategory: string,
        subCategory: string,
    ) => {
        setSelectedMainCategory(mainCategory);
        setSelectedSubCategory(subCategory);
        setSearchQuery('');
    };

    const handleCategoryChange = (
        mainCategory: string,
        subCategory: string,
    ) => {
        setSelectedMainCategory(mainCategory);
        setSelectedSubCategory(subCategory);
    };

    return (
        <>
            <Container>
                {isPC && (
                    <SideBar
                        onCategorySelect={handleCategorySelect}
                        onSearch={(query: string) => setSearchQuery(query)}
                        mainCategory={selectedMainCategory}
                        subCategory={selectedSubCategory}
                    />
                )}
                <Notice
                    onSearch={(query: string) => setSearchQuery(query)}
                    mainCategory={selectedMainCategory}
                    subCategory={selectedSubCategory}
                    searchQuery={searchQuery}
                    onCategoryChange={handleCategoryChange}
                />
            </Container>
        </>
    );
};

export default Community;

const Container = styled.div`
    max-width: 1200px;
    padding: 0;
    min-width: 768px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 128px;
    font-family: Pretendard;
    height: auto;

    @media screen and (max-width: 1200px) {
        padding: 0 40px;
    }

    @media screen and (max-width: 767px) {
        margin-top: 55px;
        padding: 0;
        min-width: 0;
    }
`;
