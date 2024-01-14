import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Notice from './Notice';

const Community: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedMainCategory, setSelectedMainCategory] = useState('멋대 중앙');
    const [selectedSubCategory, setSelectedSubCategory] = useState('공지사항');

    const handleCategorySelect = (mainCategory:string, subCategory:string) => {
        setSelectedMainCategory(mainCategory);
        setSelectedSubCategory(subCategory);
        setSearchQuery('');
    };

    return (
        <>
            <Container>
                <SideBar
                    onCategorySelect={handleCategorySelect}
                    onSearch={(query: string) => setSearchQuery(query)}
                />
                <Notice onSearch={(query: string) => setSearchQuery(query)} mainCategory={selectedMainCategory} subCategory={selectedSubCategory} searchQuery={searchQuery} />
            </Container>
        </>
    );
};

export default Community;

const Container = styled.div`
    max-width: 1200px;
    padding: 0 40px;
    min-width: 768px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 128px;
    font-family: Pretendard;
    height: auto;
`;
