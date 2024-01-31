import React, { useState } from 'react';
import * as S from './SearchBar.style';
import SearchBtn from '../../../img/admin/search.svg';

interface SearchBarProps {
    setunivName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function SearchBar({ setunivName }: SearchBarProps) {
    const [query, setQuery] = useState<string>('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value);
    };

    const onClick = (): void => {
        if (query.trim() === '') return;

        setunivName(query);
    };

    return (
        <S.Container>
            <S.Input
                type="text"
                placeholder="대학 이름 검색"
                onChange={onChange}
            />
            <S.Search src={SearchBtn} onClick={onClick} />
        </S.Container>
    );
}

export default SearchBar;
