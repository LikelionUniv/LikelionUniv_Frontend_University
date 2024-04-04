import React from 'react';
import * as EU from './EachEnrolledUser.style';
import Delete from '../../../../img/project/delete.svg';
import { UserAndPart } from '../../../../atoms/projectUser';

interface IEachEnrolledUser {
    user: UserAndPart;
    remove: (user: UserAndPart) => void;
}

function EachEnrolledUser({ user, remove }: IEachEnrolledUser) {
    const showUserName = () => {
        return `${user.user.name} (${user.user.universityName} ${user.user.ordinal}기)`;
    };
    return (
        <EU.Container>
            <EU.Name>{showUserName()}</EU.Name>
            <EU.Delete src={Delete} alt="delete" onClick={() => remove(user)} />
        </EU.Container>
    );
}

export default EachEnrolledUser;
