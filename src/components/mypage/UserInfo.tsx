import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Avatar, Button, UserBox } from './Common';

import { UserFollows } from './UserFollows'; //삭제예정

import { useNavigate } from 'react-router-dom';
import { useRecoilValue , useRecoilState} from 'recoil';
import { userState } from '../../store/user';
import {UserProfileAtom} from '../../store/mypageData'
import useModal from '../../hooks/useModal';
import axios from 'axios';
import {userProfileApi, userFollowerApi,userFollowingApi } from '../../api/mypage/userinfo';
import { FollowModal } from './FollowModal';

export const UserInfo = () => {
    const navigate = useNavigate();
    const goToModify = (): void => {
        navigate('modify');
    };

    const UserLoginState = useRecoilValue(userState);
    const [userProfile , updateUserProfile] = useRecoilState(UserProfileAtom)

    const { isModalOpen, openModal, closeModal } = useModal();
    const [modalProps , setModalProps] = useState<string | undefined>('');
    const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
        openModal();
        //팔로우 , 팔로잉 모달 정보 전달
        setModalProps(e.currentTarget.dataset.type);
    };

    //마운트 시 API(유저 프로필 , 팔로워/팔로잉 목록) 요청
    useEffect(()=>{
        const fetchData = async () => {

            if(UserLoginState.name != ""){
                const userProfile = await userProfileApi(UserLoginState.userId);
                updateUserProfile(userProfile);
            }
        }

        fetchData();
    },[UserLoginState])

   

    return (
        <Wrapper>
            <Container>
                <UserBox>
                    <Avatar imgurl={userProfile.profileImage}/>
                    {/* 유저 정보 넣기 */}
                    <UserProfile>
                        <UserName>
                            <p>{UserLoginState.name}</p> <div>{userProfile.role}</div>{' '}
                        </UserName>
                        <UserPart>
                            <p>{userProfile.universityName} {userProfile.part}</p>
                            <FItem data-type="팔로워" onClick={handleModal}>
                                팔로워 {userProfile.followerNum}
                            </FItem>
                            <FItem data-type="팔로잉" onClick={handleModal}>
                                팔로잉 {userProfile.followingNum}
                            </FItem>
                        </UserPart>
                        <p>
                            {userProfile.introduction}
                        </p>
                    </UserProfile>
                </UserBox>
                <Button onClick={goToModify}>내 정보 수정</Button>
                {isModalOpen && (
                    <FollowModal isOpen={isModalOpen} modalProps={modalProps} closeModal={closeModal} />
                )}
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    height: 100%;
`;

const Container = styled.div`
    /* max-width : 1200px; */
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`;

const UserProfile = styled.div`
    //width : 344px;
    margin-top: 12px;
    margin-left: 24px;

    & > p {
        margin-top: 16px;
        color: var(--Grey-900, #212224);
        font-size: 18px;
        font-weight: 500;
    }
`;

const UserName = styled.div`
    position: relative;

    & > p {
        display: inline-flex;
        font-size: 28px;
        font-weight: 700;
        line-height: 115%;
        vertical-align: bottom;
    }
    & > div {
        display: inline-flex;
        width: 81px;
        height: 33px;
        margin-left: 8px;
        border-radius: 42px;
        background-color: #fff2e8;
        justify-content: center;
        align-items: center;

        font-size: 14px;
        font-weight: 700;
        color: #ff7710;
    }
`;
const UserPart = styled.div`
    display: flex;
    margin-top: 6px;
    & > p {
        font-size: 16px;
        font-weight: 700;
    }

    & > div {
        cursor: pointer;
        margin-left: 6px;
        font-size: 16px;
        font-weight: 500;
        color: #868c94;
    }
`;

const FItem = styled.div`
    cursor: pointer;
    margin-left: 6px;
    font-size: 16px;
    font-weight: 500;
    color: #868c94;

    &::before {
        content: '· ';
    }
`;
