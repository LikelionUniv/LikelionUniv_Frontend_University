import React from 'react';
import styled from 'styled-components';

import { useUserProfile } from '../../../query/mypage/useUserProfile';

import { Avatar } from './Common';
import UserProfile from './UserProfile';
import MUserProfile from './MUserProfile';
import { UserDescription } from './UserProfile.style';
import useIsPC from '../../../hooks/useIsPC';
import { useAuth } from '../../../hooks/useAuth';

type ResponsiveUserBoxProps = {
    otherUserId?: number | null;
};

function ResponsiveUserBox({ otherUserId = null }: ResponsiveUserBoxProps) {
    const isPC = useIsPC();
    //prettier-ignore
    const { userinfo: { userId } } = useAuth();

    const requestId = otherUserId || userId;

    // 등록되지 않은 유저인 경우 axios.ts에서 에러 처리하여 이전 페이지로 되돌리고 있음.
    const { userProfile } = useUserProfile(requestId);

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
