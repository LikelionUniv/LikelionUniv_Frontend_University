import React from 'react';
import { User } from './UserFind';
import * as EU from './EachEnrolledUser.style';
import Delete from '../../../../img/project/delete.svg';

interface IEachEnrolledUser {
  user: User
  remove: (user: User) => void
}

function EachEnrolledUser({user, remove}: IEachEnrolledUser) {
  const showUserName = () => {
    return `${user.name} (${user.universityName} ${user.ordinal}기)`;
  }
  return (
    <EU.Container>
      <EU.Name>{showUserName()}</EU.Name>
      <EU.Delete src={Delete} alt='delete' onClick={() => remove(user)} />
    </EU.Container>
  )
}

export default EachEnrolledUser
