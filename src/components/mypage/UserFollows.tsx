import {useState} from 'react';

import styled,{css} from 'styled-components';
import { Avatar , Button , UserBox } from './Common';
import Cancel from '../../img/mypage/Cancel.svg';

//팔로우 팔로잉 state -> props 전달
interface IbuttonProps {
  delete : boolean,
}
export const UserFollows = ({modal , setter}:any) => {


  //팔로우 , 삭제 핸들러 작성

  const closeModal = (e:React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e.target);
    setter('');
  }

  return (
    <Wrapper >
      <ModalBack onClick={closeModal}/>
      <Modal>
        <FTop>{modal}<div onClick={closeModal}></div></FTop>
        <div style={{width:'100%', height:'100%',padding : '0 4px'}}>
          <FBox>
            {/* FList map */}
            <FListBox>
              <FUserBox>
                <FAvartar/>
                <FUserprofile>
                  <p>이름</p>
                  <FInfo><span>11기</span><span> · 개발</span></FInfo>
                </FUserprofile>
              </FUserBox>
              <FButton delete={false}>{
                //delete?삭제 : 팔로우
                '팔로우'
              }</FButton>
            </FListBox>

            <FListBox>
              <FUserBox>
                <FAvartar/>
                <FUserprofile>
                  <p>이름</p>
                  <FInfo><span>11기</span><span> · 개발</span></FInfo>
                </FUserprofile>
              </FUserBox>
              <FButton delete={true}>{'삭제'}</FButton>
            </FListBox>
            <FListBox></FListBox>
            <FListBox></FListBox>
            <FListBox></FListBox>
            <FListBox></FListBox>
          </FBox>
        </div>
      </Modal>
    </Wrapper> 
  );
}

const Wrapper = styled.div`
    position : absolute;
    top :0 ;
    left : 0;
    width : 100%;
    height : 100%;
    display : flex;
    justify-content :center;
    align-items : center;
`;

const ModalBack = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background: rgba(0, 0, 0, 0.50);
    z-index : 999;
`;

const Modal = styled.div`
  z-index : 1000;
  display: flex;
  width: 464px;
  height: 420px;
  padding-bottom: 0px;
  flex-direction : column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: var(--White, #FFF);
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.07);

  & > div{
    color: var(--Grey-900, #212224);
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  };
`;

const FTop = styled.div`
  width : 100%;
  height : 56px;
  padding : 0 16px;
  display : flex;
  justify-content : center;
  align-items : center;
  border-bottom : 1px solid #DCDFE3;
  position : relative;

  & > div {
    background-image : url(${Cancel});
    width : 24px;
    height : 24px;
    cursor : pointer;
    position : absolute;
    right : 16px;
    justify-self : flex-end;
  }
`;

const FBox = styled.div`
  width : 100%;
  height : 365px;
  border-radius: 0px 0px 20px 20px;
  overflow : auto;
  padding : 0 4px;

  &::-webkit-scrollbar {
    width : 5px;
  }
  &::-webkit-scrollbar-track {
    background : transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--Grey-500, #D1D4D8);
    border-radius: 5px;
  }
`;

const FListBox = styled.div`
  width : 100%;
  height : 62px;
  margin-top : 16px;
  padding : 0  12px 0 8px;
  display : flex;
  align-items : center;
  justify-content : space-between;
`;

const FUserBox = styled(UserBox)`
  height : 62px; 
`;

const FAvartar = styled(Avatar)`
  width : 64px;
  height : 64px;
`;

const FUserprofile = styled.div`
  margin-left : 8px;
  display : flex;
  flex-direction : column;
  justify-content:center;
  align-items :flex-start;
  line-height : 18px;

  & > p {
    color: var(--Grey-900, #212224);
    font-size: 16px;
    font-weight: 700;
  }
`;

// const FName = styled.div`
//   color: var(--Grey-900, #212224);
//   font-size: 16px;
//   font-weight: 700;
// `;

const FInfo = styled.div`
  
  & > span {
    color: var(--Grey-800, #4D5359);
    font-size: 14px;
    font-weight: 500;
    text-align: start;
    }

`;

const FButton = styled(Button)<IbuttonProps>`
  width : 91px;
  height : 32px;
  font-size :14px;
  ${(props) => props.delete&&
  css`
     background-color : #EAECEE;
     color : #4D5359;
  `}
`;


