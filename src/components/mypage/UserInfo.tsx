import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Avatar, Button, UserBox } from './Common';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState } from '../../store/user';
import { UserProfileAtom } from '../../store/mypageData';
import useModal from '../../hooks/useModal';
import { userProfileApi } from '../../api/mypage/userinfo';
import { FollowModal } from './FollowModal';
import { ImodalProps } from './type';

export const UserInfo = () => {
    const navigate = useNavigate();
    const goToModify = (): void => {
        navigate('modify');
    };

    // 유저 프로필
    const UserLoginState = useRecoilValue(userState);
    const [userProfile, updateUserProfile] = useRecoilState(UserProfileAtom);
    const userRole: { [id: string]: string } = {
        GUEST: '게스트',
        USER: '아기사자',
        MANAGER: '운영진',
        UNIVERSITY_ADMIN: '대표',
        SUPER_ADMIN: '관리자',
    };

    // 팔로우, 팔로잉 모달
    const { isModalOpen, openModal, closeModal } = useModal();
    const [modalProps, setModalProps] = useState<ImodalProps>({
        userid: -1,
        follow: '',
    });
    //모달 창 오픈 시 스크롤 막기
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);
    //모달 창 핸들러 : 모달 창 열고 , props set
    const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
        let follow = e.currentTarget.dataset.type;
        let userid = UserLoginState.userId;
        setModalProps({ userid, follow });
        openModal();
    };

    //마운트 시 API(유저 프로필) 요청
    useEffect(() => {
        const fetchData = async () => {
            if (UserLoginState.name != '') {
                const userProfile = await userProfileApi(UserLoginState.userId);
                updateUserProfile(userProfile);
            }
        };
        fetchData();
    }, [UserLoginState]);

    return (
        <Wrapper>
            <Container>
                <UserBox>
                    <Avatar imgurl={userProfile.profileImage} />
                    {/* 유저 정보 넣기 */}
                    <UserProfile>
                        <UserName>
                            <p>{UserLoginState.name}</p>{' '}
                            <div>{userRole[userProfile.role]}</div>{' '}
                        </UserName>
                        <UserPart>
                            <p>
                                {userProfile.universityName} {userProfile.part}
                            </p>
                            <FItem data-type="팔로워" onClick={handleModal}>
                                팔로워 {userProfile.followerNum}
                            </FItem>
                            <FItem data-type="팔로잉" onClick={handleModal}>
                                팔로잉 {userProfile.followingNum}
                            </FItem>
                        </UserPart>
                        <p>{userProfile.introduction}</p>
                    </UserProfile>
                </UserBox>
                <Button onClick={goToModify}>내 정보 수정</Button>
                {isModalOpen && (
                    <FollowModal
                        isOpen={isModalOpen}
                        modalProps={modalProps}
                        closeModal={closeModal}
                    />
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
        line-height : 150%;
        color: var(--Grey-900, #212224);
        font-size: 18px;
        font-weight: 500;
    }
`;

const UserName = styled.div`
    position: relative;
    display : flex;
    align-items : center;
    line-height : 140%;
    & > p {
        font-size: 28px;
        font-weight: 700;
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
    line-height : 150%;
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
