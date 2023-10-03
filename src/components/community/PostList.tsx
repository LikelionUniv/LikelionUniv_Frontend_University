import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import PostBox from './PostBox'
import { TestData} from './DummyData';
import Pagination from '../mypage/Pagination';
import { PostBoxProp } from './PostBox';


const PostList:React.FC = () => {
  const [page, setPage] = useState(1);
  const [testData, setTestData] = useState<Array<PostBoxProp>>([]);
  useEffect(() => {
   setTestData(
      TestData.slice(
        5 * Math.ceil(page) - 5,
        5 * Math.ceil(page),
      ),
    );
}, [page]);

  return (
    <Wrapper>
      <>
      {testData.map(e => {
        return (
          <PostBox 
            img={e.img}
            title={e.title}
            content={e.content}
            like={e.like}
            comment={e.comment}
            date={e.date}
            user={e.user}
            profile={e.profile}
          />
        );
      })}
      </>
      <PageWrapper>
        <Pagination
          totalPageNum={
              Math.ceil(TestData.length / 5)
          }
          pageNum={page}
          setPageNum={setPage}
          
        />
      </PageWrapper>
    </Wrapper>
  )
}

export default PostList

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  margin: 64px 0 100px 0;
`;
