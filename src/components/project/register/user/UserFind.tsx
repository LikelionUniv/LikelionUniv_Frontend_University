import React, { useRef } from 'react';
import * as U from './UserFind.style';
import useInput from '../../../../hooks/useInput';
import useLayerPopup from '../../../../hooks/useLayerPopup';
import EachSearchUser from './EachSearchUser';
import useEnrolledUser from './userStore/useEnrolledUser';
import useGetSearchUser from '../../../../query/get/useGetSearchUser';

export interface User {
    userId: number;
    name: string;
    profileImage?: string;
    universityName: string;
    ordinal: number;
    part: string;
}

function UserFind() {
    const [keyword, setKeyword, clearKeyword] = useInput<string>('');
    const { enrollUser } = useEnrolledUser();
    const { data, refetch, clearQuery } = useGetSearchUser({ keyword });

    const layerRef = useRef(null);
    const { popupOpen, openPopup, closePopup } = useLayerPopup(
        layerRef,
        clearQuery,
    );

    const onSearch = async () => {
        openPopup();

        if (keyword.trim() === '') {
            return;
        }

        refetch();
    };

    const selectMember = (user: User) => {
        enrollUser(user);
        clearQuery();
        clearKeyword('');
        closePopup();
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
                {data !== undefined && (
                    <>
                        {data.length <= 0 && (
                            <U.NoResult>검색되는 회원이 없어요.</U.NoResult>
                        )}
                        {data.length > 0 &&
                            data.map(user => (
                                <EachSearchUser
                                    key={user.userId}
                                    user={user}
                                    selectMember={selectMember}
                                />
                            ))}
                    </>
                )}
            </U.SearchResultContainer>
        </U.Container>
    );
}

export default UserFind;
