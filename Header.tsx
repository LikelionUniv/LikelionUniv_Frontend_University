import React, { useState } from 'react';
import * as P from './HeaderStyle';

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <P.HeaderContainer>
    <P.TabContainer>
    <P.Tab
        onClick={() => handleClick(0)}
        className={activeTab === 0 ? 'selected' : ''}
    >
        전체
        {activeTab === 0 && <P.Divider>_</P.Divider>} {/* 수정된 부분 */}
    </P.Tab>
    
    <P.Tab
        onClick={() => handleClick(1)}
        className={activeTab === 1 ? 'selected' : ''}
    >
        11기
        {activeTab === 1 && <P.Divider>_</P.Divider>} {/* 수정된 부분 */}
    </P.Tab>
    
    <P.Tab
        onClick={() => handleClick(2)}
        className={activeTab === 2 ? 'selected' : ''}
    >
        10기
        {activeTab === 2 && <P.Divider>_</P.Divider>} {/* 수정된 부분 */}
    </P.Tab>
    
    <P.Tab
        onClick={() => handleClick(3)}
        className={activeTab === 3 ? 'selected' : ''}
    >
        9기
        {activeTab === 3 && <P.Divider>_</P.Divider>} {/* 수정된 부분 */}
    </P.Tab>

    <P.Tab
        onClick={() => handleClick(4)} // 8기 탭
        className={activeTab === 4 ? 'selected' : ''}
    >
        8기
        {activeTab === 4 && <P.Divider>_</P.Divider>}
    </P.Tab>

    <P.Tab
        onClick={() => handleClick(5)} // 7기 탭
        className={activeTab === 5 ? 'selected' : ''}
    >
        7기
        {activeTab === 5 && <P.Divider>_</P.Divider>}
    </P.Tab>

    <P.Tab
        onClick={() => handleClick(6)} // 6기 이전 탭
        className={activeTab === 6 ? 'selected' : ''}
    >
        6기 이전
        {activeTab === 6 && <P.Divider>_</P.Divider>}
    </P.Tab>
    </P.TabContainer>

    </P.HeaderContainer>
  );
};

export default Header;
