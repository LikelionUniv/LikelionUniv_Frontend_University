import React, { useState } from 'react'
import styled from 'styled-components'
import SideBar from '../components/community/SideBar'
import Notice from '../components/community/Notice'

const Community: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('공지사항');
    const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <Container>
        <SideBar onItemSelect={setSelectedItem} onSearch={(query: string) => setSearchQuery(query)} />
        <Notice selectedItem={selectedItem} searchQuery={searchQuery} />
      </Container> 
    </>
  )
}

export default Community

const Container = styled.div`
  max-width: 1280px;
  padding: 0 40px;
  min-width: 688px;
  width: 100%;
  margin : 0 auto;
  display : flex;
  justify-content : center;
  align-items : center;
  margin-top : 100px;
`;