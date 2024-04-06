import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import OrderDropDown from './OrderDropDown';
import WriteIcon from '../../../img/community/write.svg';
import PostList from './PostList';
import { useNavigate } from 'react-router-dom';
import CategoryDropDown from './CategoryDropDown';
import search from '../../../img/community/search.svg';
import Tab from './Tab';
import Search from './Search';
import CategoryModal from './CategoryModal';
import { useAuth } from '../../../hooks/useAuth';
import { RolePriority } from '../../../constants/Role';

interface NoticeProps {
    searchQuery: string;
    mainCategory: string;
    subCategory: string;
    onSearch: (query: string) => void;
    onCategoryChange: (mainCategory: string, subCategory: string) => void;
}

const contentSubtitles: Record<string, string> = {
    공지사항: `멋쟁이사자처럼에서 공지사항을 전달해 드려요. 문의는 univ_admin@likelion.net 로 해주세요.`,
    정보공유: '서로에게 공유하고 싶은 양질의 정보를 올려주세요.',
    '프로젝트 팀원 모집': '프로젝트에 필요한 팀원을 모집하세요.',
    '프로젝트 자랑': '진행 중이거나 완료한 여러분의 프로젝트를 소개해 주세요.',
    프론트엔드: '프론트엔드 관련한 정보를 공유하거나 궁금한 점을 나눠보세요.',
    백엔드: '백엔드 관련한 정보를 공유하거나 궁금한 점을 나눠보세요. ',
    기획: '기획 관련한 정보를 공유하거나 궁금한 점을 나눠보세요. ',
    디자인: '디자인 관련한 정보를 공유하거나 궁금한 점을 나눠보세요. ',
    기타: '이외 직무와 관련한 정보를 공유하거나 궁금한 점을 나눠보세요. ',
};

const Notice: React.FC<NoticeProps> = ({
    mainCategory,
    subCategory,
    searchQuery,
    onSearch,
    onCategoryChange,
}) => {
    const navigate = useNavigate();
    const [isPC, setIsPC] = useState(window.innerWidth > 767);
    const isSearching = searchQuery !== undefined && searchQuery !== '';
    const [inputValue, setInputValue] = useState<string>(searchQuery);
    const [order, setOrder] = useState('CREATED_DATE_ORDER');
    const [selectedMainCategory, setSelectedMainCategory] =
        useState('전체 게시판');
    const [selectedSubCategory, setSelectedSubCategory] =
        useState('전체 게시판');
    const [tabCategoryChanged, setTabCategoryChanged] = useState(false);
    const content = tabCategoryChanged ? selectedSubCategory : subCategory;
    const subtitle = contentSubtitles[content];

    const { userinfo, isLoading } = useAuth();
    const isSuperAdminInfo =
        RolePriority.findIndex(role => role === userinfo.role) >= 4;

    const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(false);

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

    useEffect(() => {
        if (isSuperAdminInfo && !isLoading) {
            setIsSuperAdmin(true);
        }
    }, [isLoading, isSuperAdminInfo]);

    const handleCategoryChange = (
        newMainCategory: string,
        newSubCategory: string,
    ) => {
        setSelectedMainCategory(newMainCategory);
        setSelectedSubCategory(newSubCategory);
        onCategoryChange(newMainCategory, newSubCategory);
    };

    const handleTabCategoryChange = (
        newMainCategory: string,
        newSubCategory: string,
    ) => {
        setSelectedMainCategory(newMainCategory);
        setSelectedSubCategory(newSubCategory);
        setTabCategoryChanged(true);
        onCategoryChange(newMainCategory, newSubCategory);
    };

    const handleOrderChange = (newOrder: string) => {
        setOrder(newOrder);
    };

    useEffect(() => {
        setInputValue(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        setTabCategoryChanged(false);
    }, [subCategory]);

    return (
        <Wrapper>
            {searchQuery ? (
                <>
                    {!isPC && (
                        <Search onSearch={onSearch} searchQuery={searchQuery} />
                    )}
                    {!isPC && (
                        <CategoryModal
                            onCategoryChange={handleCategoryChange}
                            mainCategory={selectedMainCategory}
                            subCategory={selectedSubCategory}
                        />
                    )}
                    <div className="afterSearch">
                        <CategoryDropDown
                            onCategoryChange={handleCategoryChange}
                            mainCategory={selectedMainCategory}
                            subCategory={selectedSubCategory}
                        />
                        <TextInput
                            borderColor={
                                inputValue !== '' ? '#FF7710' : '#D1D4D8'
                            }
                        >
                            <input
                                className="textInput"
                                type="text"
                                placeholder=" 검색"
                                value={inputValue}
                                onKeyDown={(
                                    e: React.KeyboardEvent<HTMLInputElement>,
                                ) => {
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
                </>
            ) : (
                <>
                    <Title>{content}</Title>
                    <SubTitle>{subtitle}</SubTitle>
                    {!isPC && (
                        <Tab
                            onSearch={onSearch}
                            onCategoryChange={handleTabCategoryChange}
                            mainCategory={mainCategory}
                            subCategory={subCategory}
                        />
                    )}
                </>
            )}
            <Divider />
            <Header isSearching={isSearching}>
                <OrderDropDown onOrderChange={handleOrderChange} />
                {isSuperAdmin ? (
                    <Button
                        onClick={() => navigate('/community/write')}
                        isSearching={isSearching}
                    >
                        <img src={WriteIcon} alt="펜" />
                        글쓰기
                    </Button>
                ) : (
                    content !== '공지사항' && (
                        <Button
                            onClick={() => navigate('/community/write')}
                            isSearching={isSearching}
                        >
                            <img src={WriteIcon} alt="펜" />
                            글쓰기
                        </Button>
                    )
                )}
            </Header>
            {searchQuery ? (
                <Suspense fallback={<div></div>}>
                    <PostList
                        searchQuery={searchQuery}
                        order={order}
                        mainCategory={selectedMainCategory}
                        subCategory={selectedSubCategory}
                    />
                </Suspense>
            ) : tabCategoryChanged && !isPC ? (
                <Suspense fallback={<div></div>}>
                    <PostList
                        searchQuery={searchQuery}
                        order={order}
                        mainCategory={selectedMainCategory}
                        subCategory={selectedSubCategory}
                    />
                </Suspense>
            ) : (
                <Suspense fallback={<div></div>}>
                    <PostList
                        searchQuery={searchQuery}
                        order={order}
                        mainCategory={mainCategory}
                        subCategory={subCategory}
                    />
                </Suspense>
            )}
        </Wrapper>
    );
};
export default Notice;

const Wrapper = styled.div`
    width: 74.5%;

    .afterSearch {
        display: flex;
        gap: 8px;

        @media screen and (max-width: 767px) {
            display: none;
        }
    }

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    line-height: 150%;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const SubTitle = styled.div`
    color: var(--Grey-700, #868c94);
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const Divider = styled.div`
    height: 3px;
    background-color: var(--Grey-900, #212224);
    width: 100%;
    margin-top: 26px;
    margin-bottom: 4px;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const Header = styled.div<{ isSearching: boolean }>`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
        margin-top: ${props => (props.isSearching ? '0' : '100px')};
        padding: 0 20px;
    }
`;

const Button = styled.div<{ isSearching: boolean }>`
    padding: 8px 20px 8px 14px;
    border-radius: 6px;
    background-color: #ff7710;
    flex-shrink: 0;
    display: ${props => (props.isSearching ? 'none' : 'inline-flex')};
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 12px;

    font-size: 16px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;

    @media screen and (max-width: 767px) {
        padding: 7.5px 18px 7.5px 14px;
        margin-top: 0;
        font-size: 14px;
        position: fixed;
        bottom: 34px;
        right: 20px;
    }
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

    .textInput {
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
