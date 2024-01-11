import React from 'react';
import * as P from './Part.style';
import EachEnrolledUser from './EachEnrolledUser';
import { UserAndPart } from '../../../../store/projectUser';

interface IPart {
    name: string;
    user: Set<UserAndPart>;
    remove: (user: UserAndPart) => void;
}

function Part({ name, user, remove }: IPart) {
    return (
        <P.Container>
            <P.Title>{name}</P.Title>
            <P.List>
                {Array.from(user)?.map(eachUser => (
                    <EachEnrolledUser
                        key={eachUser.user.userId}
                        user={eachUser}
                        remove={remove}
                    />
                ))}
            </P.List>
        </P.Container>
    );
}

export default Part;
