import React from 'react'
import * as U from './UserFind.style';
import useInput from '../../../hooks/useInput';

function UserFind() {
  const [keyword, setKeyword] = useInput<string>('');

  return (
    <U.Container>
      <U.Input type='text' value={keyword} onChange={setKeyword} />
      <U.SearchBtn>검색하기</U.SearchBtn>
    </U.Container>
  )
}

export default UserFind
