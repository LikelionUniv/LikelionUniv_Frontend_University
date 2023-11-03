import React, {useState, useEffect} from 'react'
import styled, {css} from 'styled-components'
import search from '../../img/community/search.svg'


interface SideBarProps {
  onItemSelect: (item: string) => void;
  onSearch: (query: string) => void;
}



const SideBar: React.FC<SideBarProps> = ({ onItemSelect, onSearch}) => {

    const [selectedTab, setSelectedTab] = useState<string>('공지사항');
    const [inputValue, setInputValue] = useState<string>('');
    


    return (
      <Wrapper>
          <Title>커뮤니티</Title>
          <Content>
            <SubTitle>멋대중앙</SubTitle>
            <Tab 
              $isSelected={selectedTab === '공지사항'}
              onClick={() => {onItemSelect('공지사항'); setSelectedTab('공지사항');}}
            >
              공지사항
            </Tab>
            <Tab 
              $isSelected={selectedTab === '질문건의'}
              onClick={() => {onItemSelect('질문건의'); setSelectedTab('질문건의');}}
            >
              질문건의
            </Tab>
            <Tab 
              $isSelected={selectedTab === '정보공유'}
              onClick={() => {onItemSelect('정보공유'); setSelectedTab('정보공유');}}
            >
              정보공유
            </Tab>
          </Content>
          <Divider/>
          <Content>
            <SubTitle>자유게시판</SubTitle>
            <Tab 
              $isSelected={selectedTab === '정보공유2'}
              onClick={() => {onItemSelect('정보공유'); setSelectedTab('정보공유2');}}
            >
              정보공유
            </Tab>
            <Tab 
              $isSelected={selectedTab === '팀원모집'}
              onClick={() => {onItemSelect('팀원모집'); setSelectedTab('팀원모집');}}
            >
              팀원모집
            </Tab>
            <Tab 
              $isSelected={selectedTab === '플젝모집'}
              onClick={() => {onItemSelect('플젝모집'); setSelectedTab('플젝모집');}}
            >
              플젝모집
            </Tab>
            <Tab 
              $isSelected={selectedTab === '플젝자랑'}
              onClick={() => {onItemSelect('플젝자랑'); setSelectedTab('플젝자랑');}}
            >
              플젝자랑
            </Tab>
          </Content>
          <Divider/>
          <Content>
            <SubTitle>멋사 오버플로우</SubTitle>
            <Tab 
              $isSelected={selectedTab === '프론트'}
              onClick={() => {onItemSelect('프론트'); setSelectedTab('프론트');}}
            >
              프론트
            </Tab>
            <Tab 
              $isSelected={selectedTab === '백'}
              onClick={() => {onItemSelect('백'); setSelectedTab('백');}}
            >
              백
            </Tab>
            <Tab 
              $isSelected={selectedTab === '기획'}
              onClick={() => {onItemSelect('기획'); setSelectedTab('기획');}}
            >
              기획
            </Tab>
            <Tab 
              $isSelected={selectedTab === '디자인'}
              onClick={() => {onItemSelect('디자인'); setSelectedTab('디자인');}}
            >
              디자인
            </Tab>
            <Tab 
              $isSelected={selectedTab === '기타'}
              onClick={() => {onItemSelect('기타'); setSelectedTab('기타');}}
            >
              기타
            </Tab>
          </Content>
          <TextInput borderColor={inputValue !== '' ? '#FF7710' : '#D1D4D8'}>
            <input 
              style={{width: '100%', outline: 'none', border: 'none'}}
              type="text"
              placeholder=' 검색'
              value={inputValue}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                  onSearch(inputValue);
                }
              }}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}/>
            <img 
              style={{marginLeft: '8px'}}
              src={search}
              onClick={() => onSearch(inputValue)}
              alt="검색" />
            
          </TextInput>
      </Wrapper>
    );
  };

export default SideBar

const Wrapper = styled.div`
    width: 25.5%;
    padding-right: 24px;
    min-width: 150px; 
    height  : 90vh;
    margin : 0 auto;

`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    margin-bottom: 8px;
`;

const SubTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    margin: 8px 0;
`;

const Tab = styled.div<{ $isSelected: boolean }>`
    font-size: 14px;
    font-weight: 500;
    color: var(--Grey-900, #212224);
    padding: 8px 0;
    cursor: pointer;

    ${props => props.$isSelected && css`
        color: var(--Orange-600, #FF7710);
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
  background-color: var(--Grey-400, #DCDFE3);
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
  margin-top: 16px;
  padding: 0 8px;
`;

