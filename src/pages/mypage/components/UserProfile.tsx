import React, { useState, useEffect } from 'react';

import useModal from '../../../hooks/useModal';

import { FollowModal } from './FollowModal';
import * as UP from './UserProfile.style';
import { convertPart } from './Common';
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

function UserProfile({ userProfile }: UserProfileProps) {
    const { isModalOpen, openModal, closeModal } = useModal();
    const [modalProps, setModalProps] = useState<ImodalProps>(() => ({
        userid: userProfile.id,
        follow: '',
        isMine: userProfile.isMine,
    }));

    const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
        let follow = e.currentTarget.dataset.type;
        setModalProps(() => ({ ...modalProps, follow }));
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
        <UP.ProfileBox>
            <UP.Row>
                <UP.UserName>{userProfile.name}</UP.UserName>
                <UP.UserRole>{USER_ROLE[userProfile.role]}</UP.UserRole>
            </UP.Row>
            <UP.Row>
                <UP.UserUnivPart>
                    {userProfile.universityName + ' '}
                    {convertPart(userProfile.part)}
                </UP.UserUnivPart>
                <>
                    <UP.UserFollow data-type="팔로워" onClick={handleModal}>
                        팔로워 {userProfile.followerNum}
                    </UP.UserFollow>
                    <UP.UserFollow data-type="팔로잉" onClick={handleModal}>
                        팔로잉 {userProfile.followingNum}
                    </UP.UserFollow>
                </>
            </UP.Row>
            <UP.Row>
                <UP.UserDescription>
                    {userProfile.introduction}
                </UP.UserDescription>
            </UP.Row>
            {isModalOpen && (
                <FollowModal
                    isOpen={isModalOpen}
                    modalProps={modalProps}
                    closeModal={closeModal}
                />
            )}
        </UP.ProfileBox>
    );
}

export default UserProfile;
