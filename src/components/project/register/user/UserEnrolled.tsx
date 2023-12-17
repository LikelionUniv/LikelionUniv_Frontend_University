import React from 'react';
import * as UE from './UserEnrolled.style';
import Part from './Part';
import useEnrolledUser from './userStore/useEnrolledUser';

function UserEnrolled() {
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
    } = useEnrolledUser();

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
