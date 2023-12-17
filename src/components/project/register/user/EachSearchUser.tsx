import React from 'react';
import styled from 'styled-components';
import { User } from './UserFind';

const Element = styled.div`
    width: 99%;
    height: 41px;

    margin: 4px;
    padding: 7px 21px;
    box-sizing: border-box;

    color: var(--Grey-900, #212224);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;

    &:hover {
        cursor: pointer;
        border-radius: 4px;
        background: var(--Grey-300, #eaecee);
    }
`;

interface IEachSearchUser {
    user: User;
    selectMember: (user: User) => void;
}

function EachSearchUser({ user, selectMember }: IEachSearchUser) {
    const onSelect = () => {
        selectMember(user);
    };

    const showUserInfo = () => {
        return `${user.name} (${user.universityName}, ${user.ordinal}기, ${user.part})`;
    };

    return (
        <Element key={user.userId} onClick={onSelect}>
            {showUserInfo()}
        </Element>
    );
}

export default EachSearchUser;
