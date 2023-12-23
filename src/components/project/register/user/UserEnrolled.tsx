import React, { useEffect } from 'react';
import * as UE from './UserEnrolled.style';
import Part from './Part';
import useEnrolledUser from './userStore/useEnrolledUser';
import { Member } from '../../ProjectListInner';
import request from '../../../../utils/request';
import { User } from './UserFind';

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

const ENUM_PART = {
    FRONTEND: '프론트엔드',
    PLAN: '기획',
    DESIGN: '디자인',
    BACKEND: '백엔드',
} as const;

interface EnumPart {
    [key: string]: string;
}

function UserEnrolled({ defaultMembers }: UserEnrolledProps) {
    const {
        userLength,
        planUser,
        designUser,
        frontendUser,
        backendUser,
        removePlanUser,
        removeDesignUser,
        removeFrontendUser,
        removeBackendUser,
        enrollUser,
    } = useEnrolledUser();

    useEffect(() => {
        if (defaultMembers === undefined) return;

        const initDefaultMember = async (userId: number) => {
            const response = await request<null, UserInfo, null>({
                uri: `/api/v1/user/${userId}/profile`,
                method: 'get',
            });

            const wholePart: EnumPart = ENUM_PART;

            const userinfo: User = {
                userId: response.data.id,
                name: response.data.name,
                universityName: response.data.universityName,
                ordinal: response.data.ordinal,
                part: wholePart[response.data.part],
            };

            enrollUser(userinfo);
        };

        const enrolledDefaultMembers = async () => {
            for (const member of defaultMembers) {
                await initDefaultMember(member.userId);
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
        </UE.Container>
    );
}

export default UserEnrolled;
