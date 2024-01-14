import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OrderDropDown from './OrderDropDown';
import WriteIcon from '../../img/community/write.svg';
import PostList from './PostList';
import { useNavigate } from 'react-router-dom';
import CategoryDropDown from './CategoryDropDown';
import search from '../../img/community/search.svg';

interface NoticeProps {
    searchQuery: string;
    mainCategory: string;
    subCategory: string;
    onSearch: (query: string) => void;
}

const contentSubtitles: Record<string, string> = {
    공지사항: '멋대 중앙의 공지사항을 확인할 수 있어요.',
    질문건의: '미정.',
    정보공유: '미정.',
    팀원모짐: '미정.',
    플젝모집: '미정.',
    플젝자랑: '미정.',
    프론트: '미정.',
    백: '미정.',
    기획: '미정.',
    디자인: '미정.',
    기타: '미정.',
};

const Notice: React.FC<NoticeProps> = ({ mainCategory, subCategory, searchQuery, onSearch }) => {
    const navigate = useNavigate();
    const content = subCategory;
    const subtitle = contentSubtitles[content];
    const [inputValue, setInputValue] = useState<string>(searchQuery);
    const [order, setOrder] = useState('CREATED_DATE_ORDER'); 

    const [selectedMainCategory, setSelectedMainCategory] = useState(mainCategory);
    const [selectedSubCategory, setSelectedSubCategory] = useState(subCategory);


    const handleCategoryChange = (newMainCategory: string, newSubCategory: string) => {
        setSelectedMainCategory(newMainCategory);
        setSelectedSubCategory(newSubCategory);
    };

    const handleOrderChange = (newOrder:string) => {
        setOrder(newOrder);
    };

    useEffect(() => {
        setInputValue(searchQuery);
    }, [searchQuery]);

    return (
        <Wrapper>
            {searchQuery ? (
                <div style={{display: 'flex', gap: '8px'}}>
                <CategoryDropDown onCategoryChange={handleCategoryChange} />
                <TextInput borderColor={inputValue !== '' ? '#FF7710' : '#D1D4D8'}>
                <input
                    className='textInput'
                    type="text"
                    placeholder=" 검색"
                    value={inputValue}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter') {
                            onSearch(inputValue);
                        }
                    }}
                    onChange={e => {
                        setInputValue(e.target.value);
                    }}
                />
                <img
                    style={{ marginLeft: '8px' }}
                    src={search}
                    onClick={() => onSearch(inputValue)}
                    alt="검색"
                />
            </TextInput>
            </div>
            ) : (
                <>
                    <Title>{content}</Title>
                    <SubTitle>{subtitle}</SubTitle>
                </>
            )}
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <OrderDropDown onOrderChange={handleOrderChange} />
                <Button onClick={() => navigate('/community/write')}>
                    <img src={WriteIcon} alt="펜" />
                    글쓰기
                </Button>
            </div>
            {searchQuery ? (
                <PostList searchQuery={searchQuery} order={order} mainCategory={selectedMainCategory} subCategory={selectedSubCategory}/>
                ) : (
                    <PostList searchQuery={searchQuery} order={order} mainCategory={mainCategory} subCategory={subCategory}/>
                )}
        </Wrapper>
    );
};
export default Notice;

const Wrapper = styled.div`
    width: 74.5%;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    line-height: 150%;
`;

const SubTitle = styled.div`
    color: var(--Grey-700, #868c94);
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
`;

const Divider = styled.div`
    height: 3px;
    background-color: var(--Grey-900, #212224);
    width: 100%;
    margin-top: 26px;
    margin-bottom: 4px;
`;

const Button = styled.div`
    padding: 8px 20px 8px 14px;
    border-radius: 6px;
    background-color: #ff7710;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 12px;

    font-size: 16px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
`;

const TextInput = styled.div<{ borderColor: string }>`
    height: 40px;
    width: 400px;
    border-radius: 6px;
    border: 1px solid ${props => props.borderColor};
    align-items: center;
    display: inline-flex;
    justify-content: space-between;
    padding: 0 8px 0 16px;

    .textInput{
        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */

        width: 100%;
        outline: none;
        border: none;
    }
`;
