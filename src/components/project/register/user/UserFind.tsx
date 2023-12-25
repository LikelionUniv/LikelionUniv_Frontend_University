import React, { useState, useRef } from 'react';
import * as U from './UserFind.style';
import useInput from '../../../../hooks/useInput';
import useLayerPopup from '../../../../hooks/useLayerPopup';
import EachSearchUser from './EachSearchUser';
import useEnrolledUser from './userStore/useEnrolledUser';
import request from '../../../../utils/request';

export interface User {
    userId: number;
    name: string;
    profileImage?: string;
    universityName: string;
    ordinal: number;
    part: string;
}

interface UserSearch {
    currentPage: number;
    size: number;
    hasNext: boolean;
    data: User[];
}

export interface IUserParams {
    name: string;
    page: number;
    size: number;
}

const partOrder: { [key: string]: number } = {
    plan: 1,
    design: 2,
    frontend: 3,
    backend: 4,
};

function UserFind() {
    const [keyword, setKeyword, clearKeyword] = useInput<string>('');
    const [result, setResult] = useState<User[]>([]);
    const { enrollUser } = useEnrolledUser();

    const clearResult = () => {
        setResult([]);
    };

    const layerRef = useRef(null);
    const { popupOpen, openPopup, closePopup } = useLayerPopup(
        layerRef,
        clearResult,
    );

    const onSearch = async () => {
        openPopup();

        if (keyword.trim() === '') {
            return;
        }

        const response = await request<null, UserSearch, IUserParams>({
            uri: '/api/v1/user/search',
            method: 'get',
            params: {
                name: keyword,
                page: 1,
                size: 10,
            },
        });

        const users = response.data.data.filter(user =>
            user.name.includes(keyword),
        );
        setResult(users);
    };

    const selectMember = (user: User) => {
        enrollUser(user);
        clearResult();
        clearKeyword('');
        closePopup();
    };

    const sortByPartAndName = (a: User, b: User): number => {
        if (partOrder[a.part] < partOrder[b.part]) {
            return -1;
        } else if (partOrder[a.part] > partOrder[b.part]) {
            return 1;
        } else {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    };

    return (
        <U.Container>
            <U.Input
                type="text"
                value={keyword}
                onChange={setKeyword}
                placeholder="이름을 검색해 팀원을 추가해주세요."
            />
            <U.SearchBtn type="button" onClick={onSearch}>
                검색하기
            </U.SearchBtn>
            <U.SearchResultContainer ref={layerRef} show={popupOpen}>
                {result.length <= 0 && (
                    <U.NoResult>검색되는 회원이 없어요.</U.NoResult>
                )}
                {result.length > 0 &&
                    result
                        .sort(sortByPartAndName)
                        .map(user => (
                            <EachSearchUser
                                key={user.userId}
                                user={user}
                                selectMember={selectMember}
                            />
                        ))}
            </U.SearchResultContainer>
        </U.Container>
    );
}

export default UserFind;
