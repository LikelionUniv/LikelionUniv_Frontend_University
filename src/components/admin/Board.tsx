import React, { useState } from 'react';
import styled from 'styled-components';
import OrderDropDown from './board/OrderDropDown';
import WriteIcon from '../../img/admin/write.svg';
import PostList from './board/PostList';
import { useNavigate } from 'react-router-dom';
import { PostBoxProp } from './board/PostBox';

interface NoticeProps {
    selectedItem: string;
    searchQuery: string;
}

const contentSubtitles: Record<string, string> = {
    전체게시글: '',
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

const Notice: React.FC<NoticeProps> = ({ selectedItem, searchQuery }) => {
    const navigate = useNavigate();
    const content = selectedItem;
    const subtitle = contentSubtitles[content];

    return (
        <Wrapper>
            <TitleContainer>
                <TitleContent>
                    <Title>{content}</Title>
                    <SubTitle>{subtitle}</SubTitle>
                </TitleContent>
                <Button>선택 삭제하기</Button>
            </TitleContainer>

            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <OrderDropDown />
            </div>
            <PostList searchQuery={searchQuery} />
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
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

const TitleContent = styled.div`
    flex-grow: 1;
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
