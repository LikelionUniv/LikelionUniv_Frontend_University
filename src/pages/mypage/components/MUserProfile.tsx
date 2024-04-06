import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as MP from './UserProfile.style';
import { FollowModal } from './FollowModal';
import { convertPart } from './Common';
import useModal from '../../../hooks/useModal';
import { ImodalProps, IuserProfile } from '../../../inteface/myPageType';

interface UserProfileProps {
    userProfile: IuserProfile;
}

const USER_ROLE: { [id: string]: string } = {
    GUEST: '게스트',
    USER: '아기사자',
    MANAGER: '운영진',
    UNIVERSITY_ADMIN: '대표',
    SUPER_ADMIN: '관리자',
};

function MUserProfile({ userProfile }: UserProfileProps) {
    const { isModalOpen, openModal, closeModal } = useModal();
    const [modalProps, setModalProps] = useState<ImodalProps>(() => ({
        userid: userProfile.id,
        follow: '',
        isMine: userProfile.isMine,
    }));
    const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
        let follow = e.currentTarget.dataset.type;
        setModalProps({ ...modalProps, follow });
        openModal();
    };

    // 모달 창 오픈 시 스크롤 막기
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);
    return (
        <MP.ProfileBox>
            <MP.Row>
                <MP.UserName>{userProfile.name}</MP.UserName>
                <MP.UserRole>{USER_ROLE[userProfile.role]}</MP.UserRole>
            </MP.Row>
            <MP.Row>
                <MP.UserUnivPart>
                    {userProfile.universityName + ' '}
                    {convertPart(userProfile.part)}
                </MP.UserUnivPart>
            </MP.Row>
            <MP.Row>
                <>
                    <MUserFollow data-type="팔로워" onClick={handleModal}>
                        팔로워 {userProfile.followerNum}
                    </MUserFollow>
                    <MP.UserFollow data-type="팔로잉" onClick={handleModal}>
                        팔로잉 {userProfile.followingNum}
                    </MP.UserFollow>
                </>
            </MP.Row>
            {isModalOpen && (
                <FollowModal
                    isOpen={isModalOpen}
                    modalProps={modalProps}
                    closeModal={closeModal}
                />
            )}
        </MP.ProfileBox>
    );
}

export default MUserProfile;

const MUserFollow = styled(MP.UserFollow)`
    margin-left: 0px;

    &::before {
        content: none;
    }
`;
