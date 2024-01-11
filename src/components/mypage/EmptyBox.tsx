import React from 'react';
import styled from 'styled-components';
import Eyes from '../../img/mypage/eyes.svg';

const EmptyBox = ({ name }: { name: string }) => {
    return (
        <EmptyBoxWrapper>
            <img src={Eyes} alt="empty" />
            {name === '프로젝트' ? (
                <TextPart>등록된 프로젝트가 없어요.</TextPart>
            ) : name === '게시글' ? (
                <TextPart>등록된 게시글이 없어요.</TextPart>
            ) : name === '댓글' ? (
                <TextPart>댓글 단 게시글이 없어요.</TextPart>
            ) : (
                <TextPart>좋아요 한 게시글이 없어요.</TextPart>
            )}
        </EmptyBoxWrapper>
    );
};

export default EmptyBox;

const EmptyBoxWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
    gap: 16px;
`;

const TextPart = styled.div`
    color: var(--Grey-900, #212224);
    text-align: center;

    /* Subtitle/20_Semibold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
`;
