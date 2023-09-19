
import styled from 'styled-components';

import tempimg from '../../img/nav/mypage.svg';


export const UserInfo = () => {

  return (
    <Wrapper>
      <Container>
        <UserBox> 
          <Avatar/>
          {/* 유저 정보 넣기 */}
          <UserProfile> 
            <UserName> <p>김이름</p> <div>아기사자</div> </UserName>
            <UserPart> <p>멋사대학교 / 프론트파트</p> <div>· 팔로워 200</div> <div>· 팔로잉 200</div> </UserPart>
            <p>행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요</p>
          </UserProfile>
        </UserBox>
        <Button>내 정보 수정</Button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width : 1200px;
  margin : 0 auto;
  padding : 0 40px;
  height : 100%;
`;

const Container = styled.div`
  /* max-width : 1200px; */
  display : flex;
  justify-content : space-between;
  margin-top:100px;
`;

const UserBox = styled.div`
  //width : 1075px;
  height: 124px;
  display : flex;
`;

const Avatar = styled.div`
  width: 124px;
  height: 124px;
  flex-shrink: 0; 
  border-radius : 50%;
  border : 1px solid #EAECEE;

  background-image : url(${tempimg}) ; 
  background-position: contain;
`;

const UserProfile = styled.div`
    //width : 344px;
    margin-top :12px;
    margin-left :24px;

   & > p {
    margin-top :16px;
    color: var(--Grey-900, #212224);
    font-size: 18px;  
    font-weight: 500;
   }
`;

const UserName = styled.div`
    position : relative;

    & > p {
      display : inline-flex;
      font-size: 28px;
      font-weight: 700;
      line-height: 115%;
      vertical-align : bottom;
    }       
    & > div {
      display : inline-flex;
      width : 81px;
      height : 33px;
      margin-left : 8px;
      border-radius : 42px;
      background-color : #FFF2E8;
      justify-content : center;
      align-items :center;

      font-size: 14px;
      font-weight: 700;
      color: #FF7710;
    }  
    
`;
const UserPart = styled.div`
  display : flex;
  margin-top :6px;
  & > p {
    font-size: 16px;
    font-weight: 700;
  }

  & > div {
    margin-left : 6px; 
    font-size: 16px;
    font-weight: 500;
    color:#868C94;
  }
`;

const Button = styled.div`
  width : 125px;
  height : 48px;
  border-radius : 8px;
  background-color : #FF7710;
  flex-shrink: 0; 
  display :inline-flex;
  align-items : center;
  justify-content : center;

  font-size : 16px;
  color :#fff;
  font-weight : 700;
  cursor :pointer;
`;