import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import search from '../../img/community/search.svg';

interface SideBarProps {
    onCategorySelect: (mainCategory: string, subCategory: string) => void;
    onSearch: (query: string) => void;
    mainCategory : string;
    subCategory : string;
}

const SideBar: React.FC<SideBarProps> = ({ onCategorySelect, onSearch, mainCategory, subCategory}) => {
    const [selectedMainCategory, setSelectedMainCategory] = useState<string>(mainCategory);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string>(subCategory);
    const [inputValue, setInputValue] = useState<string>('');


    const handleTabClick = (mainCategory: string, subCategory: string) => {
        setSelectedMainCategory(mainCategory);
        setSelectedSubCategory(subCategory);
        onCategorySelect(mainCategory, subCategory);
        onSearch('');
    };


    return (
        <Wrapper>
            <Title>커뮤니티</Title>
            <Content>
                <SubTitle>멋대 중앙</SubTitle>
                <Tab $isSelected={mainCategory === '멋대 중앙' && subCategory === '공지사항'}
                    onClick={() => handleTabClick('멋대 중앙', '공지사항')}
                >
                    공지사항
                </Tab>
                <Tab
                    $isSelected={mainCategory === '멋대 중앙' && subCategory === '질문건의'}
                    onClick={() => handleTabClick('멋대 중앙', '질문건의')}
                >
                    질문건의
                </Tab>
                <Tab
                    $isSelected={mainCategory === '멋대 중앙' && subCategory === '정보공유'}
                    onClick={() => handleTabClick('멋대 중앙', '정보공유')}
                >
                    정보공유
                </Tab>
            </Content>
            <Divider />
            <Content>
                <SubTitle>자유게시판</SubTitle>
                <Tab
                    $isSelected={mainCategory === '자유게시판' && subCategory === '정보공유'}
                    onClick={() => handleTabClick('자유게시판', '정보공유')}
                >
                    정보공유
                </Tab>
                <Tab
                    $isSelected={mainCategory === '자유게시판' && subCategory === '팀원모집'}
                    onClick={() => handleTabClick('자유게시판', '팀원모집')}
                >
                    팀원모집
                </Tab>
                <Tab
                    $isSelected={mainCategory === '자유게시판' && subCategory === '플젝모집'}
                    onClick={() => handleTabClick('자유게시판', '플젝모집')}
                >
                    플젝모집
                </Tab>
                <Tab
                    $isSelected={mainCategory === '자유게시판' && subCategory === '플젝자랑'}
                    onClick={() => handleTabClick('자유게시판', '플젝자랑')}
                >
                    플젝자랑
                </Tab>
            </Content>
            <Divider />
            <Content>
                <SubTitle>멋사 오버플로우</SubTitle>
                <Tab
                    $isSelected={mainCategory === '멋사 오버플로우' && subCategory === '프론트'}
                    onClick={() => handleTabClick('멋사 오버플로우', '프론트')}
                >
                    프론트
                </Tab>
                <Tab
                    $isSelected={mainCategory === '멋사 오버플로우' && subCategory === '백'}
                    onClick={() => handleTabClick('멋사 오버플로우', '백')}
                >
                    백
                </Tab>
                <Tab
                    $isSelected={mainCategory === '멋사 오버플로우' && subCategory === '기획'}
                    onClick={() => handleTabClick('멋사 오버플로우', '기획')}
                >
                    기획
                </Tab>
                <Tab
                    $isSelected={mainCategory === '멋사 오버플로우' && subCategory === '디자인'}
                    onClick={() => handleTabClick('멋사 오버플로우', '디자인')}
                >
                    디자인
                </Tab>
                <Tab
                    $isSelected={mainCategory === '멋사 오버플로우' && subCategory === '기타'}
                    onClick={() => handleTabClick('멋사 오버플로우', '기타')}
                >
                    기타
                </Tab>
            </Content>
            <TextInput borderColor={inputValue !== '' ? '#FF7710' : '#D1D4D8'}>
                <input
                    className='textInput'
                    type="text"
                    placeholder=" 검색"
                    value={inputValue}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter') {
                            onCategorySelect('전체 게시판', '전체 게시판');
                            onSearch(inputValue);
                            setSelectedMainCategory('');
                            setSelectedSubCategory('');
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
        </Wrapper>
    );
};

export default SideBar;

const Wrapper = styled.div`
    width: 25.5%;
    padding-right: 24px;
    min-width: 150px;
    margin: 0 auto;
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    margin-bottom: 8px;
    line-height: 140%;
`;

const SubTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    margin: 8px 0;
    line-height: 150%;
`;

const Tab = styled.div<{ $isSelected: boolean }>`
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    color: var(--Grey-900, #212224);
    padding: 8px 0;
    cursor: pointer;

    ${props =>
        props.$isSelected &&
        css`
            color: var(--Orange-600, #ff7710);
            font-weight: 700;
        `}
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 0;
`;

const Divider = styled.div`
    height: 1px;
    background-color: var(--Grey-400, #dcdfe3);
    width: 80%;
`;

const TextInput = styled.div<{ borderColor: string }>`
    height: 40px;
    width: 80%;
    border-radius: 6px;
    border: 1px solid ${props => props.borderColor};
    align-items: center;
    display: inline-flex;
    justify-content: space-between;
    margin: 16px 0 100px 0;
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
