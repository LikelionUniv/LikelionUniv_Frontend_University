import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, useLocation } from 'react-router';
import { IuserProfile } from '../../../inteface/myPageType';
import * as P from './SidebarStyle';

interface SideBarProps {
    onItemSelect: (item: string) => void;
    onSearch: (query: string) => void;
    userProfile: IuserProfile;
}

const SideBar: React.FC<SideBarProps> = ({
    onItemSelect,
    onSearch,
    userProfile,
}) => {
    // const userProfile = useUserProfile();
    const [selectedTab, setSelectedTab] = useState<string>('공지사항');
    const [inputValue, setInputValue] = useState<string>('');
    const [showSubList, setShowSubList] = useState(false);

    const isAdmin = userProfile.role === 'SUPER_ADMIN';

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (url: string): void => {
        navigate(url);
    };

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.includes('recruitalarm')) {
            setSelectedTab('모집알림');
            onItemSelect('모집알림');
        } else if (currentPath.includes('hackathon')) {
            setSelectedTab('중앙 해커톤 신청 정보');
            onItemSelect('중앙 해커톤 신청 정보');
        } else {
            setSelectedTab('회원정보');
            onItemSelect('회원정보');
        }
    }, [location, onItemSelect]);

    function handleToggleSubList() {
        setShowSubList(prevState => !prevState);
    }

    return (
        <Wrapper showSubList={showSubList}>
            <Title>어드민</Title>
            <Content>
                <Tab
                    className="ParentTab"
                    $isSelected={selectedTab === '회원정보'}
                    onClick={() => {
                        onItemSelect('회원정보');
                        setSelectedTab('회원정보');
                        handleNavigate('');
                    }}
                >
                    회원정보
                </Tab>
                {isAdmin && (
                    <Tab
                        className="ParentTab"
                        $isSelected={selectedTab === '모집알림'}
                        onClick={() => {
                            onItemSelect('모집알림');
                            setSelectedTab('모집알림');
                            handleNavigate('recruitalarm');
                        }}
                    >
                        모집알림
                    </Tab>
                )}
                {isAdmin && (
                    <Tab
                        className="ParentTab"
                        $isSelected={selectedTab === '중앙 해커톤 신청 정보'}
                        onClick={() => {
                            onItemSelect('중앙 해커톤 신청 정보');
                            setSelectedTab('중앙 해커톤 신청 정보');
                            handleNavigate('hackathon');
                        }}
                    >
                        중앙 해커톤 신청 정보
                    </Tab>
                )}
            </Content>

            <P.HeaderContainer>
                <P.TabContainer>
                    <P.Tab
                        className={selectedTab === '회원정보' ? 'selected' : ''}
                        onClick={() => {
                            onItemSelect('회원정보');
                            setSelectedTab('회원정보');
                            handleNavigate('');
                        }}
                    >
                        회원정보
                    </P.Tab>
                    {isAdmin && (
                        <P.Tab
                            className={
                                selectedTab === '모집알림' ? 'selected' : ''
                            }
                            onClick={() => {
                                onItemSelect('모집알림');
                                setSelectedTab('모집알림');
                                handleNavigate('recruitalarm');
                            }}
                        >
                            모집알림
                        </P.Tab>
                    )}
                    {isAdmin && (
                        <P.Tab
                            className={
                                selectedTab === '중앙 해커톤 신청 정보'
                                    ? 'selected'
                                    : ''
                            }
                            onClick={() => {
                                onItemSelect('중앙 해커톤 신청 정보');
                                setSelectedTab('중앙 해커톤 신청 정보');
                                handleNavigate('hackathon');
                            }}
                        >
                            중앙 해커톤 신청 정보
                        </P.Tab>
                    )}
                </P.TabContainer>
            </P.HeaderContainer>
        </Wrapper>
    );
};

export default SideBar;

const Wrapper = styled.div<{ showSubList: boolean }>`
    min-width: 150px;
    margin: 15px 80px;

    @media screen and (max-width: 1200px) {
        margin: 15px 40px;
    }

    @media screen and (max-width: 1024px) {
        margin: 15px 20px;
    }

    @media screen and (max-width: 768px) {
        margin: 10px 0px;
        min-width: 120px;
    }

    .ParentTab {
        padding-left: 12px;
    }

    .ParentBoard {
        padding-left: 12px;

        border-radius: 6px 6px 0px 0px;
        border: 1px;
        margin-bottom: 12px;
        ${props =>
            props.showSubList &&
            css`
                background: #212224;
                color: #ffffff;
            `}
    }

    .BoardBox {
        width: 144px;
        height: auto;
        border-radius: 6px;
        margin-right: 8px;

        ${props =>
            props.showSubList &&
            css`
                border: 1px solid #dcdfe3;
            `}
    }

    .boardcontent {
        display: flex;
        flex-direction: column;
        padding-left: 12px;
    }
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    margin-bottom: 8px;
    padding-left: 12px;
`;

const Tab = styled.div<{ $isSelected: boolean }>`
    font-size: 14px;
    font-weight: 500;
    color: var(--Grey-600, #adb3ba);
    padding: 8px 0;
    cursor: pointer;

    ${props =>
        props.$isSelected &&
        css`
            color: var(--Orange-600, #ff7710);
            font-weight: 700;
        `}
`;

const ArrowUp = styled.img`
    width: 16px;
    height: 16px;
`;

const ArrowDown = styled.img`
    width: 16px;
    height: 16px;
`;

const SpecialTab = styled(Tab)<{ $isSelected: boolean }>`
    font-size: 16px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    padding: 8px 0;
    cursor: default;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Divider = styled.div`
    height: 1px;
    background-color: var(--Grey-400, #dcdfe3);
    width: 80%;
    margin: 15px;
`;
