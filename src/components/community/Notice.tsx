import React, {useState} from 'react'
import styled from 'styled-components'
import OrderDropDown from './OrderDropDown';
import WriteIcon from '../../img/community/write.svg'
import PostList from './PostList';
import { PostBoxProp } from './PostBox';

interface NoticeProps {
    selectedItem: string;
    searchQuery: string;
}


const contentSubtitles: Record<string, string> = {
    '공지사항': '멋대 중앙의 공지사항을 확인할 수 있어요.',
    '질문건의': '미정.',
    '정보공유': '미정.',
    '팀원모짐': '미정.',
    '플젝모집': '미정.',
    '플젝자랑': '미정.',
    '프론트': '미정.',
    '백': '미정.',
    '기획': '미정.',
    '디자인': '미정.',
    '기타': '미정.'
}

const Notice: React.FC<NoticeProps> = ({ selectedItem,searchQuery }) => {
    const content = selectedItem;
    const subtitle = contentSubtitles[content];


    //api 연결할때 PostList에 props 추가해서 카테고리에 맞는 data 받아서 구성하도록 수정할 예정
    return (
      <Wrapper>
          <Title>{content}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <Divider />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <OrderDropDown />
            <Button><img src={WriteIcon} alt='펜'/>글쓰기</Button>
          </div>
          <PostList searchQuery={searchQuery}/>
      </Wrapper>
      
    );
  };
export default Notice

const Wrapper = styled.div`
  width: 74.5%;
  height: 90vh;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: var(--Grey-900, #212224);
`;

const SubTitle = styled.div`
  color: var(--Grey-700, #868C94);
  font-size: 18px;
  font-weight: 500;
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
  border-radius : 6px;
  background-color : #FF7710;
  flex-shrink: 0; 
  display :inline-flex;
  align-items : center;
  justify-content : center;
  gap: 6px;
  margin-top: 12px;

  font-size : 16px;
  color :#fff;
  font-weight : 700;
  cursor :pointer;
`;
