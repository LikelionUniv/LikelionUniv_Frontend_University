
import styled from 'styled-components';



export const UserInfo = () => {

  return (
    <Wrapper>
      <Container>
        <UserBox>
          <Avatar/>
        </UserBox>
        <Button>내 정보 수정</Button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  justify-content :center;
  align-items : center;
`;

const Container = styled.div`
  width : 1200px;
  display : flex;
  justify-content : space-between;
  margin-top:100px;
`;

const UserBox = styled.div`
  width : 468px;
  height: 124px;
`;

const Avatar = styled.div`
  width: 124px;
  height: 124px;
  border-radius : 50%;
  border : 1px solid #EAECEE;
`;

const Button = styled.div`
  width : 125px;
  height : 48px;
  border-radius : 8px;
  background-color : #FF7710;

  display :inline-flex;
  align-items : center;
  justify-content : center;

  font-size : 16px;
  color :#fff;
  font-weight : 700;
  cursor :pointer;
`;