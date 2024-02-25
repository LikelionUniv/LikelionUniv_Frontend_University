import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Notice from './Notice';
import { useLocation } from 'react-router-dom';

const Community: React.FC = () => {
    const location = useLocation();
    const category = location.state ? location.state : {};
    const [isPC, setIsPC] = useState(window.innerWidth > 767);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedMainCategory, setSelectedMainCategory] =
        useState(category.mainCategory || '멋쟁이사자처럼');
    const [selectedSubCategory, setSelectedSubCategory] = useState(category.subCategory || '공지사항');

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

    useEffect(() => {
        const handleResize = () => {
            setIsPC(window.innerWidth > 767);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    @media screen and (max-width: 1000px) {
        margin-top: 78px;
        padding: 0 40px;
    }

    @media screen and (max-width: 767px) {
        margin-top: 7px;
        padding: 0;
        min-width: 0;
    }
`;
