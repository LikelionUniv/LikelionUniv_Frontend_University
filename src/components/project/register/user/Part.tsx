import React from 'react';
import * as P from './Part.style';
import { User } from './UserFind';
import EachEnrolledUser from './EachEnrolledUser';

interface IPart {
    name: string;
    user: Set<User>;
    remove: (user: User) => void;
}

function Part({ name, user, remove }: IPart) {
    return (
        <P.Container>
            <P.Title>{name}</P.Title>
            <P.List>
                {Array.from(user)?.map(eachUser => (
                    <EachEnrolledUser
                        key={eachUser.userId}
                        user={eachUser}
                        remove={remove}
                    />
                ))}
            </P.List>
        </P.Container>
    );
}

export default Part;
