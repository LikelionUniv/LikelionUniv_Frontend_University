import React from 'react';
import styled from 'styled-components';

import useIsPC from '../../hooks/useIsPC';
import { useUserProfile } from '../../api/mypage/useUserProfile';

import { Avatar } from './Common';
import UserProfile from './UserProfile';
import MUserProfile from './MUserProfile';
import { UserDescription } from './UserProfile.style';
import { IuserProfile } from './type';

function ResponsiveUserBox() {
    // 프로필 정보 받기
    const isPC = useIsPC();
    const userProfile: IuserProfile = useUserProfile();

    return (
        <>
            {isPC ? (
                <Box>
                    <Avatar imgurl={`https://${userProfile.profileImage}`} />
                    <UserProfile userProfile={userProfile} />
                </Box>
            ) : (
                <div>
                    <div style={{ display: 'flex' }}>
                        <Avatar
                            imgurl={`https://${userProfile.profileImage}`}
                        />
                        <MUserProfile userProfile={userProfile} />
                    </div>
                    <MUserDescription>
                        {userProfile.introduction}
                    </MUserDescription>
                </div>
            )}
        </>
    );
}

export default ResponsiveUserBox;

const Box = styled.div`
    display: flex;
    height: 124px;
`;

const MUserDescription = styled(UserDescription)`
    margin-top: 14px;
`;
