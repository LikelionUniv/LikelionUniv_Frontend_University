import React, { useRef, useState } from 'react';
import * as U from './UserFind.style';
import useInput from '../../../../hooks/useInput';
import useLayerPopup from '../../../../hooks/useLayerPopup';
import EachSearchUser from './EachSearchUser';
import useEnrolledUser from './userStore/useEnrolledUser';
import useGetSearchUser from '../../../../query/get/useGetSearchUser';
import DropDown, { OptionType } from '../DropDown';
import PART from './partEnum';

export interface User {
    userId: number;
    name: string;
    profileImage?: string;
    universityName: string;
    ordinal: number;
    part: string;
}

const PartEnum: Record<number, string> = {
    1: 'PM',
    2: 'DESIGNER',
    3: 'FRONTEND',
    4: 'BACKEND',
    5: 'NO_PART',
};

function UserFind() {
    const [keyword, setKeyword, clearKeyword] = useInput<string>('');
    const [part, setPart] = useState<number | null>(null);
    const { enrollUser } = useEnrolledUser();
    const { data, refetch, clearQuery } = useGetSearchUser({ keyword });

    const layerRef = useRef(null);
    const { popupOpen, openPopup, closePopup } = useLayerPopup(
        layerRef,
        clearQuery,
    );

    const onSearch = async () => {
        openPopup();

        if (keyword.trim() === '' || part === 0) {
            return;
        }

        refetch();
    };

    const selectMember = (user: User) => {
        if (part === null) {
            alert('파트를 입력해주세요.');
            return;
        }

        enrollUser(user, PartEnum[part]);
        clearQuery();
        clearKeyword('');
        closePopup();
        setPart(null);
    };

    const handleSelectChange = (selectedOption: OptionType | null) => {
        if (selectedOption) {
            setPart(selectedOption.value);
            return;
        }
    };

    return (
        <U.Container>
            <U.InputContainer>
                <U.Input
                    type="text"
                    value={keyword}
                    onChange={setKeyword}
                    placeholder="이름을 검색해 팀원을 추가해주세요."
                />
                <DropDown
                    placeholder="파트 선택"
                    options={PART}
                    onChange={handleSelectChange}
                />
            </U.InputContainer>
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
