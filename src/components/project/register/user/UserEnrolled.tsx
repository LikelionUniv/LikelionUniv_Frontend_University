import React, { useEffect } from 'react';
import * as UE from './UserEnrolled.style';
import Part from './Part';
import useEnrolledUser from './userStore/useEnrolledUser';
import request from '../../../../utils/request';
import { User } from './UserFind';
import { Member } from '../ProjectRegister';

interface UserEnrolledProps {
    defaultMembers?: Member[];
}

interface UserInfo {
    id: number;
    profileImage: string;
    name: string;
    role: string;
    phoneNum: string;
    universityName: string;
    major: string;
    ordinal: number;
    part: string;
    followerNum: number;
    followingNum: number;
    introduction: string;
    isMine: boolean;
}

function UserEnrolled({ defaultMembers }: UserEnrolledProps) {
    const {
        userLength,
        planUser,
        designUser,
        frontendUser,
        backendUser,
        noPartUser,
        removePlanUser,
        removeDesignUser,
        removeFrontendUser,
        removeBackendUser,
        removeNoPartUser,
        enrollUser,
    } = useEnrolledUser();

    useEffect(() => {
        if (defaultMembers === undefined) return;

        const initDefaultMember = async (userId: number, part: string) => {
            const response = await request<null, UserInfo, null>({
                uri: `/api/v1/user/${userId}/profile`,
                method: 'get',
            });

            const userinfo: User = {
                userId: response.data.id,
                name: response.data.name,
                universityName: response.data.universityName,
                ordinal: response.data.ordinal,
                part,
            };

            enrollUser(userinfo, part);
        };

        const enrolledDefaultMembers = async () => {
            for (const member of defaultMembers) {
                await initDefaultMember(member.userId, member.part);
            }
        };

        enrolledDefaultMembers();
    }, [defaultMembers, enrollUser]);

    return (
        <UE.Container show={userLength > 0}>
            <Part name="기획" user={planUser} remove={removePlanUser} />
            <Part name="디자인" user={designUser} remove={removeDesignUser} />
            <Part
                name="프론트엔드"
                user={frontendUser}
                remove={removeFrontendUser}
            />
            <Part name="백엔드" user={backendUser} remove={removeBackendUser} />
            <Part name="기타" user={noPartUser} remove={removeNoPartUser} />
        </UE.Container>
    );
}

export default UserEnrolled;
